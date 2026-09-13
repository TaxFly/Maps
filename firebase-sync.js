import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getFirestore, doc, setDoc, onSnapshot, getDoc } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";
import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

// Proyecto de Firebase de TaxUSA/Taxfly — unificado (antes Maps tenía su
// propio proyecto, orlando-planning-5c1e1).
const firebaseConfig = {
  apiKey: "AIzaSyA-eeKl8guVDmTa_NpYvkB0O7-RMbPrkP0",
  authDomain: "viajes-db538.firebaseapp.com",
  projectId: "viajes-db538",
  storageBucket: "viajes-db538.firebasestorage.app",
  messagingSenderId: "237311739178",
  appId: "1:237311739178:web:333e468b184c0402a98a53"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

// ── Login + perfil compartido con Taxfly ────────────────────────────
// Mismo proyecto de Firebase, mismo origen (taxfly.github.io): la sesión
// de Auth ya es compartida entre las dos apps automáticamente. Cada
// perfil de Taxfly tiene SU PROPIO Maps — los datos viven bajo
// usuarios/{uid}/perfiles/{perfilId}/orlando/{docId}, igual que Gastos o
// Actividades. Si venís del botón de Taxfly ya logueado con un perfil
// elegido, esto ni se nota. Si falta login o perfil, te manda a
// resolverlo a Taxfly y te trae de vuelta acá al terminar.
const TAXFLY_LOGIN_URL = 'https://taxfly.github.io/taxfly/login.html';
const TAXFLY_PROFILES_URL = 'https://taxfly.github.io/taxfly/profiles.html';
const PENDING_REDIRECT_KEY = 'taxusa_pending_redirect';

let currentUid = null;
let currentPerfilId = null;
function orlandoDocRef(docId) {
  return doc(db, 'usuarios', currentUid, 'perfiles', currentPerfilId, 'orlando', docId);
}

async function fbSet(docId, data) {
  try { await setDoc(orlandoDocRef(docId), data, { merge: true }); }
  catch(e) { devError("fbSet error", e); }
}

async function fbGet(docId) {
  try {
    const snap = await getDoc(orlandoDocRef(docId));
    return snap.exists() ? snap.data() : null;
  } catch(e) { devError("fbGet error", e); return null; }
}

// Serialización estable (claves ordenadas) para comparar "lo que mandé"
// contra "lo que volvió" sin falsos positivos por orden de propiedades.
function stableStringify(v) {
  if (v === null || typeof v !== 'object') return JSON.stringify(v);
  if (Array.isArray(v)) return '[' + v.map(stableStringify).join(',') + ']';
  return '{' + Object.keys(v).sort().map(k => JSON.stringify(k) + ':' + stableStringify(v[k])).join(',') + '}';
}

// ─── Aviso de posible conflicto entre dispositivos ───
// No hay merge real de listas (ver nota en syncedSave): esto es un heurístico
// para detectar el caso de riesgo, no una solución de fondo. Si llega un
// cambio remoto para un docId dentro de los pocos segundos posteriores a que
// YO escribí ese mismo docId, y el valor que llegó es distinto al que yo
// mandé, es señal de que otro dispositivo editó casi al mismo tiempo y uno
// de los dos cambios probablemente se perdió.
const CONFLICT_WINDOW_MS = 6000;
function fbListen(docId, callback) {
  return onSnapshot(orlandoDocRef(docId), snap => {
    if (!snap.exists()) return;
    const data = snap.data();
    const log = window._syncedWriteLog && window._syncedWriteLog[docId];
    if (window._appInited && log && (Date.now() - log.at) < CONFLICT_WINDOW_MS) {
      if (stableStringify(data) !== log.value) {
        window.showMToast && window.showMToast('⚠️ Otro dispositivo editó esto casi al mismo tiempo — revisá que no se haya perdido nada');
      }
    }
    callback(data);
  });
}

window._fb = { fbSet, fbGet, fbListen, stableStringify };
window._fbSignOut = async function() {
  try { await signOut(auth); } catch(e) {}
  window.location.replace(TAXFLY_LOGIN_URL);
};

async function startApp() {
  // El splash lindo de index.html ya está en pantalla desde el arranque;
  // acá solo esperamos los datos de Firebase, sin tapar nada con una
  // pantalla extra.
  const results = await Promise.allSettled([
    fbGet('hotel'),
    fbGet('days'),
    fbGet('visited'),
    fbGet('meals'),
    fbGet('walmart'),
    fbGet('wmChecked'),
    fbGet('shopping'),
    fbGet('packing'),
    fbGet('customParks'),
    fbGet('parquesExtra'),
    fbGet('coordOverrides'),
    fbGet('parques'),
    fbGet('budget'),
  ]);

  const val = (r) => r.status === 'fulfilled' ? r.value : null;
  const [hotelData, daysData, visitedData, mealDataFb, wmDataFb, wmCheckedFb, shopDataFb, packingDataFb, customParksDataFb, parquesExtraDataFb, coordOverridesDataFb, parquesDataFb, budgetDataFb] = results.map(val);

  if (hotelData) window._hotelFromFb = hotelData;
  if (daysData && daysData.days) window._daysFromFb = daysData.days;
  if (visitedData && visitedData.visited) window._visitedFromFb = visitedData.visited;
  if (mealDataFb && mealDataFb.meals) window._mealsFromFb = mealDataFb.meals;
  if (wmDataFb && wmDataFb.data) window._wmDataFromFb = wmDataFb.data;
  if (wmCheckedFb && wmCheckedFb.checked) window._wmCheckedFromFb = wmCheckedFb.checked;
  if (shopDataFb) window._shopFromFb = shopDataFb;
  if (packingDataFb) window._packingFromFb = packingDataFb;
  if (customParksDataFb && customParksDataFb.items) window._customParksFromFb = customParksDataFb.items;
  if (parquesExtraDataFb) window._parquesExtraFromFb = parquesExtraDataFb;
  if (coordOverridesDataFb) window._coordOverridesFromFb = coordOverridesDataFb;
  if (parquesDataFb && parquesDataFb.state) window._parquesFromFb = parquesDataFb.state;
  if (budgetDataFb) window._budgetFromFb = budgetDataFb;

  window._fbReady = true;
  window._splashFbReady && window._splashFbReady();
  if (window._appInit) window._appInit();

  // Realtime listeners
  fbListen('hotel', data => {
    if (window.hotel) { Object.assign(window.hotel, data); window.renderOutlets && window.renderOutlets(); }
  });
  fbListen('visited', data => {
    if (data && data.visited && window.visited) {
      data.visited.forEach((arr, i) => {
        if (window.visited[i]) { window.visited[i].clear(); arr.forEach(v => window.visited[i].add(v)); }
      });
      window.renderOutlets && window.renderOutlets();
      window.updateGlobal && window.updateGlobal();
    }
  });
  fbListen('days', data => {
    if (data && data.days && window.days) {
      const fbVersion = data.v || 1;
      if (fbVersion >= DAYS_VERSION) {
        data.days.forEach((d, i) => { if (i < window.days.length) window.days[i] = d; else window.days.push(d); });
        while (window.visited.length < window.days.length) window.visited.push(new Set());
        window.renderOutlets && window.renderOutlets();
        window.updateGlobal && window.updateGlobal();
      }
    }
  });
  fbListen('meals', data => {
    if (data && data.meals && window._appInited) {
      window._setMealData && window._setMealData(data.meals);
      window.renderComidas && window.renderComidas();
    }
  });
  fbListen('walmart', data => {
    if (data && data.data && window._appInited) {
      window._setWmData && window._setWmData(data.data);
      window.renderWalmart && window.renderWalmart();
    }
  });
  fbListen('wmChecked', data => {
    if (data && data.checked && window.wmChecked) {
      window.wmChecked.clear();
      data.checked.forEach(k => window.wmChecked.add(k));
      window.renderWalmart && window.renderWalmart();
    }
  });
  fbListen('shopping', data => {
    if (data && data.items !== undefined && window._appInited) {
      window._shopFromFb = data;
      window._setShopData && window._setShopData(data);
      window.renderOutlets && window.renderOutlets();
    }
  });
  fbListen('packing', data => {
    if (data && data.items !== undefined && window._appInited) {
      window._packingFromFb = data;
      window._setPackingData && window._setPackingData(data);
      window.renderOutlets && window.renderOutlets();
    }
  });
  fbListen('customParks', data => {
    if (data && data.items !== undefined && window._appInited) {
      window._setCustomParksData && window._setCustomParksData(data.items);
      window.renderParques && window.renderParques();
    }
  });
  fbListen('parquesExtra', data => {
    if (data && window._appInited) {
      window._setExtraZonesData && window._setExtraZonesData(data);
      window.renderParques && window.renderParques();
    }
  });
  fbListen('coordOverrides', data => {
    if (data && window._appInited) {
      window._setCoordOverridesData && window._setCoordOverridesData(data);
      window.renderParques && window.renderParques();
    }
  });
  fbListen('parques', data => {
    if (data && data.state && window._appInited) {
      parquesState = data.state;
      window.renderParques && window.renderParques();
      updateParquesCounter();
    }
  });
  fbListen('budget', data => {
    if (data && window._appInited) {
      window._setBudgetData && window._setBudgetData(data);
      window.renderBudgetBox && window.renderBudgetBox();
    }
  });
}

onAuthStateChanged(auth, (user) => {
  if (!user) {
    try { localStorage.setItem(PENDING_REDIRECT_KEY, location.href); } catch(e) {}
    window.location.replace(TAXFLY_LOGIN_URL);
    return;
  }
  // Mismo storage que Taxfly (mismo origen): así sabemos qué perfil está
  // activo sin pedirle nada al usuario.
  let perfilId = null;
  try { perfilId = localStorage.getItem('perfilActivoId'); } catch(e) {}
  if (!perfilId) {
    try { localStorage.setItem(PENDING_REDIRECT_KEY, location.href); } catch(e) {}
    window.location.replace(TAXFLY_PROFILES_URL);
    return;
  }
  currentUid = user.uid;
  currentPerfilId = perfilId;
  startApp();
});
