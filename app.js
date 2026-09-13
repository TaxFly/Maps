// ─── Set de íconos SVG (reemplaza los emojis nativos en el UI) ───
// Íconos de línea consistentes (24x24, stroke=currentColor) para que la
// navegación, categorías y estados se vean igual en iOS/Android/Windows,
// en vez de depender del set de emoji de cada sistema operativo.
const ICON_PATHS = {
  bag:        '<path d="M6 2 4 8v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-2-6"/><path d="M4 8h16"/><path d="M9 12a3 3 0 0 0 6 0"/>',
  utensils:   '<path d="M7 2v6a2 2 0 0 0 4 0V2"/><path d="M9 8v14"/><path d="M17 2c-1.5 0-3 1.5-3 4v4a2 2 0 0 0 2 2h1v10"/>',
  cart:       '<circle cx="9" cy="20" r="1.4"/><circle cx="18" cy="20" r="1.4"/><path d="M3 3h2l2.6 12.4A2 2 0 0 0 9.55 17H18a2 2 0 0 0 1.96-1.6L21.5 8H6"/>',
  ferris:     '<circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="1.6"/><path d="M12 4v4M12 16v4M4 12h4M16 12h4M6.3 6.3l2.8 2.8M14.9 14.9l2.8 2.8M17.7 6.3l-2.8 2.8M9.1 14.9l-2.8 2.8"/><path d="M12 20v2M8 22h8"/>',
  gear:       '<circle cx="12" cy="12" r="3"/><path d="M19.4 13a1.7 1.7 0 0 0 .3 1.9l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.5V19a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.6 1.7 1.7 0 0 0-1.9.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.9 1.7 1.7 0 0 0-1.5-1H4a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.6-1.1 1.7 1.7 0 0 0-.3-1.9l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.9.3H10a1.7 1.7 0 0 0 1-1.5V4a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.9-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.9V10a1.7 1.7 0 0 0 1.5 1H20a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z"/>',
  pencil:     '<path d="M17 3a2.85 2.85 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/><path d="M15 5l4 4"/>',
  calendar:   '<rect x="3" y="4.5" width="18" height="16.5" rx="2"/><path d="M16 2.5v4M8 2.5v4M3 9.5h18"/>',
  home:       '<path d="M3 11 12 3l9 8"/><path d="M5 10v10a1 1 0 0 0 1 1h4v-6h4v6h4a1 1 0 0 0 1-1V10"/>',
  map:        '<path d="M9 4 3 6v14l6-2 6 2 6-2V4l-6 2-6-2Z"/><path d="M9 4v14M15 6v14"/>',
  castle:     '<path d="M3 21V9l3-2v3l3-2v-2l3 3 3-3v2l3-2v3l3 2v10Z"/><path d="M3 21h18"/><path d="M10 21v-5a2 2 0 0 1 4 0v5"/>',
  clapper:    '<path d="M3 8.5 5 3l3.3 3-2 5.5Z"/><path d="M8.3 6 11.6 9l6.7-3.5-3.3-3Z"/><path d="M3 11h18v9a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1Z"/>',
  shirt:      '<path d="M8 3 3 6l2 3 3-1.2V21h8V7.8L19 9l2-3-5-3-2 2h-4Z"/>',
  pants:      '<path d="M6 2h12l1 8-2 12h-3l-1.5-11L11 22H8L6 10Z"/>',
  dumbbell:   '<path d="M4 9v6M2 10.5v3M22 10.5v3M20 9v6M7 12h10"/><rect x="5.5" y="8" width="3" height="8" rx="1"/><rect x="15.5" y="8" width="3" height="8" rx="1"/>',
  footprints: '<path d="M8 15c1.7 0 3-1 3-3 0-1.2-.7-2-1.4-3-.6-1-1-1.7-1-3a2.6 2.6 0 0 0-5.2 0c0 1 .3 1.6.8 2.5"/><path d="M4 21c0-1.7 1-3 3-3s3 1.3 3 3"/><path d="M16 12c-1.7 0-3-1-3-3 0-1.2.7-2 1.4-3 .6-1 1-1.7 1-3a2.6 2.6 0 0 1 5.2 0c0 1-.3 1.6-.8 2.5"/><path d="M13 18c0-1.7 1-3 3-3s3 1.3 3 3"/>',
  backpack:   '<path d="M7 8V6a5 5 0 0 1 10 0v2"/><path d="M6 8h12a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2Z"/><path d="M9 12h6M9 16h6"/><path d="M9 8v-.5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1V8"/>',
  bread:      '<path d="M4 12a5 5 0 0 1 5-6h6a5 5 0 0 1 5 6v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Z"/><path d="M9 12v6M12 12v6M15 12v6"/>',
  egg:        '<path d="M12 22c4.4 0 7-3.6 7-8 0-6-4-12-7-12S5 8 5 14c0 4.4 2.6 8 7 8Z"/>',
  drumstick:  '<path d="M12.5 11.5c2 2 5 1.5 7-.5 1.6-1.6 1.8-3.7.5-5s-3.4-1-5 .5c-2 2-2.5 5-.5 7Z"/><path d="M13 11 4 20a2 2 0 1 0 2.8 2.8L15 15"/><path d="M6 22c-1 0-1.8-.6-2-1.6"/>',
  can:        '<rect x="6" y="4" width="12" height="17" rx="2"/><path d="M6 9h12"/><path d="M9 4V2h6v2"/>',
  snowflake:  '<path d="M12 2v20M4.9 6l14.2 12M4.9 18 19.1 6"/><path d="M8 3.5 12 6l4-2.5M8 20.5 12 18l4 2.5M3.4 8.7 6 12l-2.6 3.3M20.6 8.7 18 12l2.6 3.3"/>',
  coffee:     '<path d="M4 8h13a3 3 0 0 1 0 6h-1"/><path d="M4 8v7a5 5 0 0 0 5 5h3a5 5 0 0 0 5-5V8"/><path d="M7 3.5c-.7.6-.7 1.4 0 2M11 3.5c-.7.6-.7 1.4 0 2"/>',
  plane:      '<path d="M3.5 19 21 12 3.5 5l1.5 6.2L14 12l-9 .8Z"/>',
  sparkles:   '<path d="M12 3l1.4 4.6L18 9l-4.6 1.4L12 15l-1.4-4.6L6 9l4.6-1.4Z"/><path d="M19 15l.7 2.3L22 18l-2.3.7L19 21l-.7-2.3L16 18l2.3-.7Z"/>',
  dino:       '<path d="M4 20V13a5 5 0 0 1 5-5h1V6a2 2 0 0 1 2-2h3l2 3h1a2 2 0 0 1 2 2v3l2 1-2 1v1a3 3 0 0 1-3 3h-1v3h-3v-3h-3l-1 3H6l1-3a2 2 0 0 1-3-3Z"/><circle cx="15" cy="8" r=".6" fill="currentColor" stroke="none"/>',
  masks:      '<path d="M4 5c3 0 4 2 4 4s-1 3-2 3-3-1.5-3-4a5 5 0 0 1 1-3Z"/><path d="M20 5c-3 0-4 2-4 4s1 3 2 3 3-1.5 3-4a5 5 0 0 0-1-3Z"/><path d="M8 13c1.3 3 3 5 4 5s2.7-2 4-5"/><path d="M7 8.3c.6.6.6 1.4 0 2M17 8.3c-.6.6-.6 1.4 0 2"/>',
  globe:      '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a13.5 13.5 0 0 1 0 18 13.5 13.5 0 0 1 0-18Z"/>',
  check:      '<path d="M20 6 9 17l-5-5"/>',
  x:          '<path d="M18 6 6 18M6 6l12 12"/>',
  search:     '<circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/>',
  droplet:    '<path d="M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11Z"/>',
  file:       '<path d="M7 2h7l5 5v13a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 5.5 20V3.5A1.5 1.5 0 0 1 7 2Z"/><path d="M14 2v5h5"/>',
  plug:       '<path d="M9 3v4M15 3v4M6.5 7h11l-1 6a6 6 0 0 1-9 0Z"/><path d="M12 17v4"/>',
  pin:        '<path d="M12 22s7-6.1 7-12a7 7 0 1 0-14 0c0 5.9 7 12 7 12Z"/><circle cx="12" cy="10" r="2.5"/>',
};
function ic(name, size) {
  const s = size || 16;
  return `<svg class="icon" width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICON_PATHS[name] || ''}</svg>`;
}

// Escapa texto de usuario antes de insertarlo en innerHTML (previene XSS).
// Usar SIEMPRE que un valor escrito por alguien (nombre de producto, nota,
// snack, comida, etc.) se inserte en un template literal destinado a innerHTML.
function escapeHtml(str) {
  return String(str ?? '').replace(/[&<>"']/g, ch => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  }[ch]));
}

// ─── Guardado y carga sincronizados (localStorage + Firebase) ───
// Los 6 módulos (hotel, días, comidas, Walmart, compras, parques) repetían
// el mismo patrón: guardar en localStorage con try/catch, y subir el dato
// a Firebase con su docId. Estos tres helpers concentran ese patrón.
//
// syncedSave: guarda `localValue` en `localKey` y sube `fbValue` (o
// `localValue` si no se pasa uno distinto) al docId de Firebase. Se admite
// una forma distinta para Firebase porque algunos módulos (ej. "días")
// envuelven el dato de otra manera para cada destino.
// Registro de "lo último que yo mandé" por docId, usado por fbListen (en el
// script de Firebase) para avisar si otro dispositivo pisó el mismo dato
// casi al mismo tiempo. Ver comentario junto a CONFLICT_WINDOW_MS.
window._syncedWriteLog = window._syncedWriteLog || {};

function syncedSave(localKey, localValue, docId, fbValue) {
  try { localStorage.setItem(localKey, JSON.stringify(localValue)); } catch(e) {}
  const payload = fbValue !== undefined ? fbValue : localValue;
  if (window._fb && window._fb.stableStringify) {
    window._syncedWriteLog[docId] = { at: Date.now(), value: window._fb.stableStringify(payload) };
  }
  window._fb && window._fb.fbSet(docId, payload);
}

// localLoad: lee y parsea un valor de localStorage. null si no existe o
// está corrupto.
function localLoad(localKey) {
  try {
    const raw = localStorage.getItem(localKey);
    return raw ? JSON.parse(raw) : null;
  } catch(e) { return null; }
}

// syncedLoad: prioriza el dato ya bajado de Firebase (pasado en `fbValue`,
// típicamente `window._xFromFb`) por sobre lo que haya en localStorage,
// igual que hacía cada módulo por separado.
function syncedLoad(localKey, fbValue) {
  return (fbValue !== undefined && fbValue !== null) ? fbValue : localLoad(localKey);
}

const HOTEL_KEY = 'orlando-hotel-v1';
let hotel = { addr: "324 Newcastle Dr, Kissimmee FL 34746", url: "https://www.google.com/maps/search/?api=1&query=28.3223251,-81.4939467" };
function hotelLoad() {
  const d = syncedLoad(HOTEL_KEY, window._hotelFromFb);
  if (d) hotel = d;
}
function hotelSave() {
  syncedSave(HOTEL_KEY, hotel, 'hotel');
}
hotelLoad();

// ─── OUTLETS STATE (declared early to avoid TDZ errors) ───
let outletSubTab = 'cronograma';
let currentOutletDay = 0;
const SHOPPING_KEY = 'outlets-shopping-list';
const shopCats = [
  { id:'remeras',       icon:'shirt', title:'Remeras / T-Shirts' },
  { id:'pantalones',    icon:'pants', title:'Pantalones / Jeans' },
  { id:'ropa-deportiva',icon:'dumbbell', title:'Ropa Deportiva' },
  { id:'calzado',       icon:'footprints', title:'Calzado / Zapatillas' },
  { id:'accesorios',    icon:'backpack', title:'Accesorios / Bolsos' },
  { id:'varios',        icon:'bag', title:'Varios' },
];
let shopItems = [];
let shopChecked = new Set();
let shopEditingItem = null;
let shopOpenSections = new Set(['remeras','calzado']);
let shopListTab = 'need'; // 'need' | 'noneed'

// ─── VALIJA (packing list) — mismo patrón que la lista de compras, pero
// para lo que hay que llevar de casa antes de viajar. ───
const PACKING_KEY = 'outlets-packing-list';
const packingCats = [
  { id:'documentos', icon:'file',   title:'Documentos' },
  { id:'ropa',       icon:'shirt',  title:'Ropa' },
  { id:'higiene',    icon:'droplet',title:'Higiene y Sol' },
  { id:'electronica',icon:'plug',   title:'Electrónica' },
  { id:'varios',     icon:'backpack', title:'Varios' },
];
let packingItems = [];
let packingChecked = new Set();
let packingOpenSections = new Set(['documentos']);

function getDefaultPackingItems() {
  return [
    { id:'pk1', catId:'documentos', name:'Pasaporte', qty:1 },
    { id:'pk2', catId:'documentos', name:'Reservas de hotel y vuelos impresas', qty:1 },
    { id:'pk3', catId:'documentos', name:'Tarjeta de crédito / débito internacional', qty:1 },
    { id:'pk4', catId:'ropa', name:'Ropa liviana (shorts, remeras)', qty:1 },
    { id:'pk5', catId:'ropa', name:'Traje de baño', qty:1 },
    { id:'pk6', catId:'higiene', name:'Protector solar', qty:1 },
    { id:'pk7', catId:'higiene', name:'Repelente de insectos', qty:1 },
    { id:'pk8', catId:'electronica', name:'Cargador de celular', qty:1 },
    { id:'pk9', catId:'electronica', name:'Adaptador de enchufe (EE.UU.)', qty:1 },
    { id:'pk10', catId:'electronica', name:'Power bank', qty:1 },
    { id:'pk11', catId:'varios', name:'Mochila de día', qty:1 },
  ];
}
function packingSave() {
  const payload = { items: packingItems, checked: [...packingChecked] };
  syncedSave(PACKING_KEY, payload, 'packing', payload);
}
function packingLoad() {
  const fbValue = (window._packingFromFb) ? window._packingFromFb : undefined;
  const d = syncedLoad(PACKING_KEY, fbValue);
  packingItems = d?.items || getDefaultPackingItems();
  packingChecked = new Set(d?.checked || []);
}
function packingGetItem(id) { return packingItems.find(i => i.id === id); }

function renderPacking() {
  let html = `<div style="display:flex;justify-content:flex-end;margin-bottom:10px">
    <button class="wm-reset-btn" onclick="packingOpenAddModal()">+ Agregar cosa</button>
  </div>`;
  const total = packingItems.length;
  const done = packingItems.filter(i => packingChecked.has(i.id)).length;
  const pct = total > 0 ? Math.round(done / total * 100) : 0;
  html += `<div class="wm-total-bar">
    <span class="wm-total-label">Empacado</span>
    <span class="wm-total-val">${done} / ${total}</span>
  </div>
  <div class="wm-progress-bar-bg"><div class="wm-progress-bar-fill" style="width:${pct}%"></div></div>`;

  packingCats.forEach(cat => {
    const catItems = packingItems.filter(i => i.catId === cat.id);
    if (catItems.length === 0) return;
    const catDone = catItems.filter(i => packingChecked.has(i.id)).length;
    const isOpen = packingOpenSections.has(cat.id);

    html += `<div class="wm-section${isOpen ? ' open' : ''}" id="packingsec-${cat.id}">
      <div class="wm-section-header" onclick="packingToggleSection('${cat.id}')">
        <span class="wm-section-icon">${ic(cat.icon, 16)}</span>
        <span class="wm-section-title">${cat.title}</span>
        <span class="wm-section-count">${catDone}/${catItems.length}</span>
        <span class="wm-section-chevron">▾</span>
      </div>
      <div class="wm-items">`;

    catItems.forEach(item => {
      const isChecked = packingChecked.has(item.id);
      html += `<div class="wm-item${isChecked ? ' checked' : ''}" onclick="packingToggle('${item.id}')">
        <div class="wm-check">${isChecked ? '✓' : ''}</div>
        <div class="wm-item-body">
          <div class="wm-item-name">${escapeHtml(item.name)}${item.qty > 1 ? ` ×${item.qty}` : ''}</div>
        </div>
        <button class="wm-icon-btn wm-icon-del" onclick="packingDeleteItem('${item.id}',event)" title="Eliminar" aria-label="Eliminar ${escapeHtml(item.name)}">${ic('x', 13)}</button>
      </div>`;
    });

    html += `</div></div>`;
  });

  html += `<div style="display:flex;gap:8px;margin-top:14px;justify-content:center">
    <button class="wm-reset-btn" onclick="packingReset()">↺ Reiniciar checks</button>
  </div>`;
  return html;
}

function packingToggleSection(catId) {
  if (packingOpenSections.has(catId)) packingOpenSections.delete(catId);
  else packingOpenSections.add(catId);
  renderOutlets();
}
function packingToggle(id) {
  if (packingChecked.has(id)) packingChecked.delete(id);
  else packingChecked.add(id);
  packingSave();
  renderOutlets();
}
function packingDeleteItem(id, e) {
  e && e.stopPropagation();
  const idx = packingItems.findIndex(i => i.id === id);
  if (idx === -1) return;
  const [removed] = packingItems.splice(idx, 1);
  const wasChecked = packingChecked.has(id);
  packingChecked.delete(id);
  packingSave();
  renderOutlets();
  showUndoToast(`"${removed.name}" eliminado`, () => {
    packingItems.splice(idx, 0, removed);
    if (wasChecked) packingChecked.add(id);
    packingSave();
    renderOutlets();
  });
}
async function packingReset() {
  const ok = await showConfirm('Se van a desmarcar todas las cosas empacadas.', '¿Reiniciar checks?', 'Reiniciar', true);
  if (!ok) return;
  packingChecked.clear();
  packingSave();
  renderOutlets();
}
function packingOpenAddModal() {
  document.getElementById('packing-add-name').value = '';
  document.getElementById('packing-add-qty').value = '1';
  document.getElementById('packing-add-name-err').classList.remove('show');
  document.getElementById('packing-add-name').classList.remove('error');
  document.getElementById('packingAddModal').classList.add('open');
}
function packingCloseAddModal() {
  document.getElementById('packingAddModal').classList.remove('open');
}
function packingAddItem() {
  const nameEl = document.getElementById('packing-add-name');
  const name = nameEl.value.trim();
  if (!name) {
    nameEl.classList.add('error');
    document.getElementById('packing-add-name-err').classList.add('show');
    return;
  }
  const catId = document.getElementById('packing-add-cat').value;
  const qty = parseFloat(document.getElementById('packing-add-qty').value) || 1;
  const newItem = { id: 'pk' + Date.now(), catId, name, qty };
  packingItems.push(newItem);
  packingOpenSections.add(catId);
  packingSave();
  packingCloseAddModal();
  renderOutlets();
  showMToast('Agregado al checklist');
}

// Incrementar este número cada vez que se corrijan coordenadas o paradas
const DAYS_VERSION = 3;

const days = [
  {
    dayName: "Día 1", date: "Lun 25/01",
    label: "Zona Kissimmee Este — The Loop & Osceola Pkwy.",
    stops: [
      {name:"The Loop Kissimmee", desc:"Centro comercial con varios locales. Dentro de este hay: Five Below · Ross Dress for Less · Burlington · JCPenney. Horario: 10 a.m.–9:30 p.m.", url:"https://www.google.com/maps/search/?api=1&query=28.3442,-81.4244", lat:28.3442, lng:-81.4244},
      {name:"Nike Clearance Store", desc:"Horario: 10 a.m.–9 p.m.", url:"https://www.google.com/maps/search/?api=1&query=28.3441007,-81.4290266", badge:"star", badgeText:"⭐ imperdible", lat:28.3441007, lng:-81.4290266},
      {name:"T.J. Maxx", desc:"Horario: 9:30 a.m.–9:30 p.m.", url:"https://www.google.com/maps/search/?api=1&query=28.3425818,-81.4302695", lat:28.3425818, lng:-81.4302695},
      {name:"Goodwill", desc:"Horario: 9 a.m.–9 p.m.", url:"https://www.google.com/maps/search/?api=1&query=28.3399706,-81.432448", lat:28.3399706, lng:-81.432448},
      {name:"The Crosslands Shopping Center", desc:"Horario: 8 a.m.–10 p.m. Dentro de este hay: Ross Dress for Less · Dollar Tree · Five Below · Sephora · Academy Sports · Marshalls & HomeGoods.", url:"https://www.google.com/maps/search/?api=1&query=28.3405798,-81.4089169", lat:28.3405798, lng:-81.4089169},
      {name:"Burlington", desc:"Horario: 9 a.m.–11 p.m.", url:"https://www.google.com/maps/search/?api=1&query=28.3381838,-81.4097627", lat:28.3381838, lng:-81.4097627},
    ]
  },
  {
    dayName: "Día 2", date: "Mar 26/01",
    label: "Zona Vineland & Regency Village — muy cerca del alojamiento. Ver si no alcanzó algo el día anterior",
    stops: [
      {name:"Marshalls / Target / Dollar General", desc:"Horario: 9:30 a.m.–9:30 p.m. / Horario: 8 a.m.–11 p.m.", url:"https://www.google.com/maps/search/?api=1&query=28.3325731,-81.4738182", lat:28.3325731, lng:-81.4738182},
      {name:"Ross Dress for Less / Burlington", desc:"Horario: 9 a.m.–10 p.m. / Horario: 9 a.m.–12 a.m.", url:"https://www.google.com/maps/search/?api=1&query=28.3478,-81.4840", lat:28.3478, lng:-81.4840},
      {name:"Sunset Plaza", desc:"Horario: 9 a.m.–10 p.m. Dentro de este hay: T.J. Maxx · Ross Dress for Less · Five Below.", url:"https://www.google.com/maps/search/?api=1&query=28.346197,-81.482562", lat:28.346197, lng:-81.482562},
      {name:"Lake Buena Vista Factory Stores - Outlet", desc:"Horario: 10 a.m.–8 p.m.", url:"https://www.google.com/maps/search/?api=1&query=28.350379,-81.4873368", lat:28.350379, lng:-81.4873368},
      {name:"Orlando Vineland Premium Outlets", desc:"Horario: 10 a.m.–9 p.m.", url:"https://www.google.com/maps/search/?api=1&query=28.3873,-81.4924", badge:"star", badgeText:"⭐ imperdible", lat:28.3873, lng:-81.4924},
      {name:"Vineland Pointe", desc:"Horario: 9 a.m.–10 p.m. Dentro de este hay: Ross Dress for Less · Marshalls · Burlington · Five Below · Disney Gift & Toys.", url:"https://www.google.com/maps/search/?api=1&query=28.3930465,-81.4847703", lat:28.3930465, lng:-81.4847703},
    ]
  },
  {
    dayName: "Día 3", date: "Mié 27/01",
    label: "Zona Orlando Norte — Int'l Drive, Turkey Lake, Florida Mall.",
    stops: [
      {name:"Orlando International Premium Outlets", desc:"Horario: 10 a.m.–9 p.m.", url:"https://www.google.com/maps/search/?api=1&query=28.4746714,-81.4515288", badge:"star", badgeText:"⭐ imperdible", lat:28.4746714, lng:-81.4515288},
      {name:"Orlando Outlet Marketplace", desc:"Horario: 10 a.m.–9 p.m.", url:"https://www.google.com/maps/search/?api=1&query=28.4681384,-81.4521101", lat:28.4681384, lng:-81.4521101},
      {name:"International Drive Value Center", desc:"Horario: 9 a.m.–11 p.m. Dentro de este hay: Ross Dress for Less · Five Below · Dollar Tree.", url:"https://www.google.com/maps/search/?api=1&query=28.4661039,-81.4524483", lat:28.4661039, lng:-81.4524483},
      {name:"International Festival", desc:"Horario: 9 a.m.–11 p.m. Dentro de este hay: Five Below · T.J. Maxx · Burlington.", url:"https://www.google.com/maps/search/?api=1&query=28.4612,-81.4600", lat:28.4612, lng:-81.4600},
      {name:"The Florida Mall", desc:"Horario: 10 a.m.–8 p.m.", url:"https://www.google.com/maps/search/?api=1&query=28.445924,-81.3955090", badge:"star", badgeText:"⭐ imperdible", lat:28.445924, lng:-81.3955090},
      {name:"Ross Dress for Less", desc:"Horario: 9:30 a.m.–11 p.m.", url:"https://www.google.com/maps/search/?api=1&query=28.4521711,-81.3988041", lat:28.4521711, lng:-81.3988041},
      {name:"Ross Dress for Less / Marshalls / Burlington", desc:"Horario: 9:30 a.m.–11 p.m.", url:"https://www.google.com/maps/search/?api=1&query=28.4450,-81.4370", lat:28.4450, lng:-81.4370},
      {name:"Ross Dress for Less", desc:"Horario: 9 a.m.–11:30 p.m.", url:"https://www.google.com/maps/search/?api=1&query=28.4680,-81.4630", lat:28.4680, lng:-81.4630},
    ]
  }
];

const STORAGE_KEY = 'outlets-orlando-visited-v2';
const DAYS_KEY = 'outlets-orlando-days-v2';
const visited = [new Set(), new Set(), new Set()];
let stopEditingIdx = null; // { dayIdx, stopIdx } or null
let stopAddingDay = null;  // dayIdx or null

function saveState() {
  const visitedArr = visited.map(s => [...s]);
  syncedSave(STORAGE_KEY, visitedArr, 'visited', { visited: visitedArr });
  syncedSave(DAYS_KEY, days, 'days', { days: days, v: DAYS_VERSION });
}

function loadState() {
  if (window._visitedFromFb) {
    window._visitedFromFb.forEach((arr, i) => { if (visited[i]) arr.forEach(v => visited[i].add(v)); });
  } else {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) { const data = JSON.parse(raw); data.forEach((arr, i) => arr.forEach(v => visited[i].add(v))); }
    } catch(e) {}
  }
  if (window._daysFromFb) {
    const fbVersion = window._daysFromFb._v || 1;
    if (fbVersion < DAYS_VERSION) {
      // Las coords del código son más nuevas: actualizar paradas en Firebase
      // pero preservar labels personalizados si los hay
      window._daysFromFb.forEach((fbDay, i) => {
        if (i < days.length && fbDay.label) days[i].label = fbDay.label;
        // Las stops se toman del código (coords corregidas)
      });
      // Guardar en Firebase con la versión nueva
      window._fb && window._fb.fbSet('days', { days: days, v: DAYS_VERSION });
    } else {
      window._daysFromFb.forEach((d, i) => { if (i < days.length) days[i] = d; else days.push(d); });
      while (visited.length < days.length) visited.push(new Set());
    }
  } else {
    try {
      const rawDays = localStorage.getItem(DAYS_KEY);
      if (rawDays) {
        const savedDays = JSON.parse(rawDays);
        if (savedDays.length >= days.length) {
          savedDays.forEach((d, i) => { if (i < days.length) days[i] = d; else days.push(d); });
          while (visited.length < days.length) visited.push(new Set());
        }
      }
    } catch(e) {}
  }
}

function totalDone() {
  return visited.reduce((acc, s) => acc + s.size, 0);
}
function totalAll() {
  return days.reduce((acc, d) => acc + d.stops.length, 0);
}

function hardRefresh() {
  const btn = document.getElementById('refresh-btn');
  if (btn) { btn.classList.add('spinning'); setTimeout(() => btn.classList.remove('spinning'), 500); }
  // Force reload bypassing cache
  window.location.reload(true);
}

function updateGlobal() {
  const done = totalDone();
  const all = totalAll();
  document.getElementById('global-counter').textContent = done + ' / ' + all;
}

function launchConfetti() {
  const wrap = document.getElementById('confetti-wrap');
  wrap.innerHTML = '';
  const colors = ['#2563eb','#7c3aed','#10b981','#f0ede8','#e87bba'];
  for (let i = 0; i < 60; i++) {
    const el = document.createElement('div');
    el.className = 'confetti-piece';
    el.style.cssText = `
      left: ${Math.random()*100}%;
      background: ${colors[Math.floor(Math.random()*colors.length)]};
      width: ${4 + Math.random()*8}px;
      height: ${4 + Math.random()*8}px;
      border-radius: ${Math.random() > 0.5 ? '50%' : '2px'};
      animation-duration: ${1.5 + Math.random()*2}s;
      animation-delay: ${Math.random()*0.5}s;
    `;
    wrap.appendChild(el);
    setTimeout(() => el.remove(), 4000);
  }
}

function toggleStop(dayIdx, stopIdx) {
  if (visited[dayIdx].has(stopIdx)) {
    visited[dayIdx].delete(stopIdx);
  } else {
    visited[dayIdx].add(stopIdx);
    const day = days[dayIdx];
    if (visited[dayIdx].size === day.stops.length) {
      setTimeout(launchConfetti, 200);
    }
  }
  saveState();
  renderOutlets();
  updateGlobal();
}

async function resetDay(d) {
  const dayLabel = ['Día 1','Día 2','Día 3'][d] || `Día ${d+1}`;
  const ok = await showConfirm(`Se van a desmarcar todas las paradas de ${dayLabel}.`, '¿Reiniciar día?', 'Reiniciar', true);
  if (!ok) return;
  visited[d].clear();
  saveState();
  renderOutlets();
  updateGlobal();
}




// App init - called after Firebase data is loaded
window._appInit = function() {
  hotelLoad();
  loadState();
  mealLoad();
  wmLoad();
  shopLoad();
  packingLoad();
  customParksLoad();
  extraZonesLoad();
  coordOverridesLoad();
  parquesLoad();
  budgetLoad();
  renderOutlets();
  updateGlobal();
  renderTodayCard();
  loadArsRate();
  loadWeatherForecast();
  // Expose globals for realtime listeners
  window.visited = visited;
  window.days = days;
  window.hotel = hotel;
  window.wmChecked = wmChecked;
  window.renderOutlets = renderOutlets;
  window.renderComidas = renderComidas;
  window.renderWalmart = renderWalmart;
  window.renderParques = renderParques;
  window.updateGlobal = updateGlobal;
  window.renderTodayCard = renderTodayCard;
  window._appInited = true;
  // Patch fbSet to show sync dot feedback
  patchFbSyncDot();

  // Shortcuts del manifest (mantener presionado el ícono de la app):
  // abren directo en la sección pedida (ej. ?section=walmart).
  try {
    const params = new URLSearchParams(location.search);
    const sec = params.get('section');
    if (sec && ['outlets','comidas','walmart','parques'].includes(sec)) switchSection(sec);
  } catch(e) {}
};

// If Firebase already ready (unlikely but safe), init now
if (window._fbReady) {
  window._appInit();
} // else Firebase module will call _appInit after loading

// ─── COMIDAS ───────────────────────────────────────────────
const MEAL_KEY = 'orlando-meals-v1';
function mealSave() {
  syncedSave(MEAL_KEY, mealData, 'meals', { meals: mealData });
}
function mealLoad() {
  const d = syncedLoad(MEAL_KEY, window._mealsFromFb);
  if (d) mealData = d;
}

window._setMealData = function(d) { mealData = d; };
let mealData = [
  { id:1, date:"17 ene", title:"Llegada (5pm)", type:"arrival",
    meals:["—","—","Delivery o aeropuerto"], snacks:[], notes:"Llegás a las 5pm. No cocinar." },
  { id:2, date:"18 ene", title:"Walmart + Hotel", type:"walmart",
    meals:["Lo que traigas del avión","Mac & Cheese Velveeta","Pasta con salsa + parmesano"],
    snacks:["Ritz","Donettes"], notes:"Ir a Walmart a la mañana temprano." },
  { id:3, date:"19 ene", title:"Disney", type:"disney",
    meals:["Waffles EGGO con Nutella + café","Wrap de jamón y queso (Ziploc)","Lasaña Stouffer"],
    snacks:["Pack Oreo/Ritz","Applesauce pouch","Agua x2"], notes:"" },
  { id:4, date:"20 ene", title:"Disney", type:"disney",
    meals:["Corn Flakes con leche + jugo","Sándwich de jamón y queso (Ziploc)","Corn dogs + papas fritas"],
    snacks:["Chippers","Applesauce pouch","Granola bar"], notes:"" },
  { id:5, date:"21 ene", title:"Universal", type:"universal",
    meals:["Sausage Croissant Sandwich + café","Wrap de atún con maíz (Ziploc)","Pizza Rising Crust"],
    snacks:["Pack variado snacks","Applesauce pouch","Agua x2"], notes:"Butterbeer en Hogsmeade 🍺" },
  { id:6, date:"22 ene", title:"Disney", type:"disney",
    meals:["Tostadas con Nutella + jugo","Sándwich de atún con mayo (Ziploc)","Pollo al horno con arroz y maíz"],
    snacks:["Rice Krispies Treats","Applesauce pouch","Granola bar"], notes:"" },
  { id:7, date:"23 ene", title:"Universal", type:"universal",
    meals:["Waffles EGGO + café","Wrap de jamón y queso (Ziploc)","Rice-A-Roni + mozzarella sticks"],
    snacks:["Pack Oreo/Chips Ahoy","Applesauce pouch","Agua x2"], notes:"" },
  { id:8, date:"24 ene", title:"Universal", type:"universal",
    meals:["Corn Flakes + yogurt","Tazón amantes de carne (llevar)","Wraps de pollo con queso y salsa picante"],
    snacks:["Ritz","Applesauce pouch","Granola bar"], notes:"Loaded Tots en Springfield 🌭" },
  { id:9, date:"25 ene", title:"Libre — Outlets", type:"free",
    meals:["Huevos revueltos con bacon + tostadas","Sopa Maggi con cabello de ángel","Hamburguesas caseras con queso y bacon"],
    snacks:["Chippers"], notes:"" },
  { id:10, date:"26 ene", title:"Libre — Paseo", type:"free",
    meals:["Tostadas con Nutella + café","Corned Beef Hash con huevo frito y salsa picante","Pasta con albóndigas y salsa"],
    snacks:["Donettes","Ritz"], notes:"" },
  { id:11, date:"27 ene", title:"Libre / Parque extra", type:"free",
    meals:["Corn Flakes con leche","Sandwichs jamón y queso (paquete)","Chuletas de cerdo con puré y maíz"],
    snacks:["Granola bar","Applesauce pouch"], notes:"Portable por si van a algún parque." },
  { id:12, date:"28 ene", title:"Vuelo", type:"arrival",
    meals:["Tostadas con Nutella + café + Donettes","Wrap rápido con lo que quede","—"],
    snacks:[], notes:"Liquidar restos. No comprar nada extra." },
];
const mealNames = ["Desayuno","Almuerzo","Cena"];
const typeConf = {
  disney:    { label:"Disney",    cls:"mbadge-disney",    icon:"castle" },
  universal: { label:"Universal", cls:"mbadge-universal", icon:"clapper" },
  free:      { label:"Libre",     cls:"mbadge-free",      icon:null },
  arrival:   { label:"Llegada",   cls:"mbadge-arrival",   icon:"plane" },
  walmart:   { label:"Walmart",   cls:"mbadge-walmart",   icon:"cart" },
};

function renderComidas() {
  const panel = document.getElementById('panel-comidas');
  let html = '<div class="comidas-panel">';
  mealData.forEach(day => {
    const tc = typeConf[day.type];
    // Parse date to split number and month
    const dateParts = day.date.split(' ');
    const dateNum = dateParts[0] || day.date;
    const dateMon = dateParts[1] || '';
    // Meal preview dots
    const dots = day.meals.map(m =>
      `<span class="meal-dot${m && m !== '—' ? ' filled' : ''}"></span>`
    ).join('');
    // Meal rows
    const mealsHtml = day.meals.map((m, i) =>
      `<div class="meal-row-item" id="mcell-${day.id}-${i}" onclick="editMealCell(${day.id},${i})">
        <span class="meal-row-label">${mealNames[i]}</span>
        <span class="meal-row-text${(!m || m === '—') ? ' empty' : ''}" id="mtext-${day.id}-${i}">${(!m || m === '—') ? 'Sin planificar' : escapeHtml(m)}</span>
        <span class="meal-row-edit-icon">✎</span>
      </div>`
    ).join('');
    // Snack chips
    const snackChips = day.snacks.map((s,si) =>
      `<span class="snack-chip">${escapeHtml(s)}<button class="snack-chip-rm" onclick="removeSnackM(${day.id},${si})">×</button></span>`
    ).join('');
    html += `
      <div class="day-meal-card" id="mcard-${day.id}">
        <div class="day-meal-header" onclick="toggleMealCard(${day.id})">
          <div class="meal-date-pill">
            <span class="meal-date-num">${dateNum}</span>
            <span class="meal-date-mon">${dateMon}</span>
          </div>
          <div class="meal-header-center">
            <div class="meal-day-title">${day.title}</div>
            <span class="meal-day-badge ${tc.cls}">${tc.icon ? ic(tc.icon, 11) : ''}${tc.label}</span>
          </div>
          <div class="meal-preview">${dots}</div>
          <span class="meal-chevron">▾</span>
        </div>
        <div class="day-meal-body">
          <div class="meals-stack">${mealsHtml}</div>
          <div class="meal-extras">
            <div class="snacks-row" id="msnacks-${day.id}">
              <div class="snacks-row-label">${ic('backpack',11)} Mochila / Snacks</div>
              <div class="snack-chips" id="msnack-list-${day.id}">
                ${snackChips}
                <button class="snack-chip-add" onclick="showSnackInputM(${day.id})">+ agregar</button>
              </div>
              <div class="snack-inline-input" id="msnack-input-${day.id}" style="display:none">
                <input class="snack-field" type="text" id="msnack-field-${day.id}" placeholder="ej: Granola bar"
                  onkeydown="if(event.key==='Enter')addSnackM(${day.id})">
                <button class="mbtn msave" onclick="addSnackM(${day.id})">OK</button>
                <button class="mbtn" onclick="hideSnackInputM(${day.id})">✕</button>
              </div>
            </div>
            ${day.notes || true ? `<textarea class="notes-ta" placeholder="📝 Notas del día..." rows="2"
              onchange="saveMealNotes(${day.id},this.value)">${escapeHtml(day.notes)}</textarea>` : ''}
            <div class="del-day-row">
              <button class="mbtn mdel" onclick="deleteMealDay(${day.id})">Eliminar día</button>
            </div>
          </div>
        </div>
      </div>`;
  });
  html += '</div>';
  panel.innerHTML = html;
  renderTodayCard();
}

function toggleMealCard(id) {
  document.getElementById('mcard-'+id).classList.toggle('open');
}

function editMealCell(dayId, idx) {
  const row = document.getElementById(`mcell-${dayId}-${idx}`);
  if (row.classList.contains('editing')) return;
  // Close any other open editor
  document.querySelectorAll('.meal-row-item.editing').forEach(r => {
    const [,dId,i] = r.id.split('-');
    cancelMealCell(Number(dId), Number(i));
  });
  const current = mealData.find(d=>d.id===dayId).meals[idx];
  row.classList.add('editing');
  row.onclick = null;
  row.innerHTML = `
    <span class="meal-row-label">${mealNames[idx]}</span>
    <div style="flex:1;display:flex;flex-direction:column;gap:6px">
      <textarea class="meal-cell-textarea" id="mta-${dayId}-${idx}" placeholder="¿Qué van a comer?">${current === '—' ? '' : escapeHtml(current)}</textarea>
      <div class="meal-edit-actions">
        <button class="mbtn" onclick="cancelMealCell(${dayId},${idx})">Cancelar</button>
        <button class="mbtn msave" onclick="saveMealCell(${dayId},${idx})">Guardar</button>
      </div>
    </div>`;
  document.getElementById(`mta-${dayId}-${idx}`).focus();
}

function saveMealCell(dayId, idx) {
  const ta = document.getElementById(`mta-${dayId}-${idx}`);
  const val = ta.value.trim() || '—';
  mealData.find(d=>d.id===dayId).meals[idx] = val;
  mealSave();
  showMToast('Guardado ✓');
  // Re-render just this row
  const row = document.getElementById(`mcell-${dayId}-${idx}`);
  row.classList.remove('editing');
  row.onclick = () => editMealCell(dayId, idx);
  row.innerHTML = `
    <span class="meal-row-label">${mealNames[idx]}</span>
    <span class="meal-row-text${val === '—' ? ' empty' : ''}" id="mtext-${dayId}-${idx}">${val === '—' ? 'Sin planificar' : escapeHtml(val)}</span>
    <span class="meal-row-edit-icon">✎</span>`;
}

function cancelMealCell(dayId, idx) {
  const current = mealData.find(d=>d.id===dayId).meals[idx];
  const row = document.getElementById(`mcell-${dayId}-${idx}`);
  if (!row) return;
  row.classList.remove('editing');
  row.onclick = () => editMealCell(dayId, idx);
  row.innerHTML = `
    <span class="meal-row-label">${mealNames[idx]}</span>
    <span class="meal-row-text${(!current || current === '—') ? ' empty' : ''}" id="mtext-${dayId}-${idx}">${(!current || current === '—') ? 'Sin planificar' : escapeHtml(current)}</span>
    <span class="meal-row-edit-icon">✎</span>`;
}

function showSnackInputM(id) {
  document.getElementById(`msnack-input-${id}`).style.display = 'flex';
  document.getElementById(`msnack-field-${id}`).focus();
}
function hideSnackInputM(id) {
  document.getElementById(`msnack-input-${id}`).style.display = 'none';
  document.getElementById(`msnack-field-${id}`).value = '';
}
function addSnackM(id) {
  const f = document.getElementById(`msnack-field-${id}`);
  const val = f.value.trim();
  if (!val) return;
  mealData.find(d=>d.id===id).snacks.push(val);
  rerenderSnacksM(id);
  hideSnackInputM(id);
  mealSave();
  showMToast('Snack agregado ✓');
}
function removeSnackM(id, si) {
  mealData.find(d=>d.id===id).snacks.splice(si,1);
  mealSave();
  rerenderSnacksM(id);
}
function rerenderSnacksM(id) {
  const day = mealData.find(d=>d.id===id);
  const chips = day.snacks.map((s,si) =>
    `<span class="snack-chip">${escapeHtml(s)}<button class="snack-chip-rm" onclick="removeSnackM(${id},${si})">×</button></span>`
  ).join('');
  document.getElementById(`msnack-list-${id}`).innerHTML =
    chips + `<button class="snack-chip-add" onclick="showSnackInputM(${id})">+ agregar</button>`;
}
function saveMealNotes(id, val) {
  mealData.find(d=>d.id===id).notes = val;
  mealSave();
}
async function deleteMealDay(id) {
  const ok = await showConfirm('¿Eliminar este día del plan de comidas?', '¿Eliminar día?', 'Eliminar');
  if (!ok) return;
  mealData = mealData.filter(d=>d.id!==id);
  mealSave();
  renderComidas();
  showMToast('Día eliminado');
}
function openMealModal() { document.getElementById('mealModal').classList.add('open'); }
function closeMealModal() {
  document.getElementById('mealModal').classList.remove('open');
  ['mDate','mTitle'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.classList.remove('error');
    const err = document.getElementById(id + '-err');
    if (err) err.classList.remove('show');
  });
}
function addMealDay() {
  const date = document.getElementById('mDate').value.trim();
  const title = document.getElementById('mTitle').value.trim();
  let hasError = false;
  ['mDate','mTitle'].forEach(id => {
    const el = document.getElementById(id);
    const err = document.getElementById(id + '-err');
    if (!el.value.trim()) {
      el.classList.add('error');
      if (err) err.classList.add('show');
      hasError = true;
    } else {
      el.classList.remove('error');
      if (err) err.classList.remove('show');
    }
  });
  if (hasError) return;
  const newId = Date.now();
  mealData.push({
    id: newId,
    date, title,
    type: document.getElementById('mType').value,
    meals: [
      document.getElementById('mBreakfast').value.trim() || '—',
      document.getElementById('mLunch').value.trim() || '—',
      document.getElementById('mDinner').value.trim() || '—',
    ],
    snacks: [], notes: ''
  });
  mealSave();
  renderComidas();
  closeMealModal();
  ['mDate','mTitle','mBreakfast','mLunch','mDinner'].forEach(id=>document.getElementById(id).value='');
  showMToast('Día agregado ✓');
  setTimeout(()=>{ document.getElementById('mcard-'+newId)?.scrollIntoView({behavior:'smooth',block:'center'}); },100);
}

function openHotelEdit() {
  document.getElementById('hotelEditModal').classList.add('open');
  document.getElementById('hotel-edit-addr').value = hotel.addr;
  document.getElementById('hotel-edit-url').value = hotel.url;
  setTimeout(() => document.getElementById('hotel-edit-addr').focus(), 50);
}
function closeHotelEdit() { document.getElementById('hotelEditModal').classList.remove('open'); }
function saveHotelEdit() {
  const addr = document.getElementById('hotel-edit-addr').value.trim();
  if (!addr) return;
  hotel.addr = addr;
  hotel.url = document.getElementById('hotel-edit-url').value.trim() || hotel.url;
  hotelSave();
  closeHotelEdit();
  renderOutlets();
  showMToast('Dirección guardada ✓');
}

let _toastEl = null;
function showMToast(msg) {
  if (!_toastEl) _toastEl = document.getElementById('mtoast');
  if (!_toastEl) return;
  _toastEl.textContent = msg;
  _toastEl.classList.add('show');
  clearTimeout(_toastEl._timer);
  _toastEl._timer = setTimeout(() => _toastEl.classList.remove('show'), 2000);
}

// ─── DESHACER (en vez de pedir confirmación antes de borrar) ───────
// Los borrados de un solo ítem (parada, producto, prenda, cosa de la
// valija) se ejecutan al toque y ofrecen 4s para deshacer, en vez de
// interrumpir con un modal de confirmación antes de borrar.
let _undoTimer = null;
let _undoAction = null;
function showUndoToast(message, undoFn) {
  if (_undoTimer) { clearTimeout(_undoTimer); _undoTimer = null; }
  _undoAction = undoFn;
  const el = document.getElementById('undoToast');
  if (!el) return;
  el.querySelector('.undo-toast-msg').textContent = message;
  el.classList.add('show');
  _undoTimer = setTimeout(() => { el.classList.remove('show'); _undoAction = null; }, 4000);
}
function undoLastAction() {
  if (_undoTimer) { clearTimeout(_undoTimer); _undoTimer = null; }
  const el = document.getElementById('undoToast');
  if (el) el.classList.remove('show');
  const action = _undoAction;
  _undoAction = null;
  if (action) action();
}

// ─── SYNC DOT ────────────────────────────────────────────────
let _syncTimer = null;
function syncDotState(state) {
  const dot = document.getElementById('sync-dot');
  if (!dot) return;
  dot.className = 'sync-dot' + (state ? ' ' + state : '');
  if (state === 'saved') {
    clearTimeout(_syncTimer);
    _syncTimer = setTimeout(() => { dot.className = 'sync-dot'; }, 2500);
  }
}

// Wrap fbSet to show sync feedback — called after _appInit when window._fb is guaranteed to exist
function patchFbSyncDot() {
  if (!window._fb) return;
  const orig = window._fb.fbSet;
  window._fb.fbSet = async function(docId, data) {
    syncDotState('saving');
    try {
      await orig(docId, data);
      syncDotState('saved');
    } catch(e) {
      syncDotState('error');
      devError('fbSet error', e);
    }
  };
}

// ─── CUSTOM CONFIRM / ALERT ──────────────────────────────────
let _confirmResolve = null;
function showConfirm(msg, title = '¿Confirmar?', okLabel = 'Eliminar', safe = false) {
  return new Promise(resolve => {
    _confirmResolve = resolve;
    document.getElementById('confirmTitle').textContent = title;
    document.getElementById('confirmMsg').textContent = msg;
    const okBtn = document.getElementById('confirmOk');
    okBtn.textContent = okLabel;
    okBtn.className = 'confirm-btn-ok' + (safe ? ' safe' : '');
    document.getElementById('confirmOverlay').classList.add('open');
    okBtn.onclick = () => { document.getElementById('confirmOverlay').classList.remove('open'); resolve(true); };
    document.getElementById('confirmCancel').onclick = () => { document.getElementById('confirmOverlay').classList.remove('open'); resolve(false); };
  });
}
function showAlert(msg, title = 'Atención') {
  return new Promise(resolve => {
    document.getElementById('alertTitle').textContent = title;
    document.getElementById('alertMsg').textContent = msg;
    document.getElementById('alertOverlay').classList.add('open');
    document.getElementById('alertOk').onclick = () => { closeAlert(); resolve(); };
  });
}
function closeAlert() {
  document.getElementById('alertOverlay').classList.remove('open');
}

// ─── CACHE COMPARTIDO CON TAXFLY (mismo dominio → mismo localStorage) ──
// Taxfly y Maps le pegan a las mismas APIs (Open-Meteo, dolarapi.com) por
// separado. Como comparten origen, guardamos la respuesta CRUDA de cada
// API bajo una key común: quien la pida primero "calienta" el cache para
// la otra app, y cada una sigue procesando esos datos crudos a su manera
// (Taxfly muestra sensación térmica/humedad/viento que acá no usamos, y
// viceversa con el pronóstico extendido). No se comparte el resultado ya
// procesado, para no romper campos que una app necesita y la otra no pide.
function sharedCacheGet(key, ttlMs) {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return null;
    const c = JSON.parse(raw);
    if (!c || (Date.now() - c.ts) > ttlMs) return null;
    return c.data;
  } catch(e) { return null; }
}
function sharedCacheSet(key, data) {
  try { localStorage.setItem(key, JSON.stringify({ data, ts: Date.now() })); } catch(e) {}
}

// ─── CLIMA (Open-Meteo) ───────────────────────────────────────
// Portado de Taxfly (tax.html) — misma fuente, gratis y sin API key.
// Se cachea 30 min en localStorage para no golpear la API de más.
const WEATHER_CITY = 'Orlando, FL';
const WEATHER_KEY = 'orlando-weather-cache-v1';
const WMO = {
  0:'Despejado',1:'Mayormente despejado',2:'Parcialmente nublado',3:'Nublado',
  45:'Niebla',48:'Niebla con escarcha',
  51:'Llovizna leve',53:'Llovizna',55:'Llovizna intensa',
  61:'Lluvia leve',63:'Lluvia',65:'Lluvia intensa',
  71:'Nieve leve',73:'Nieve',75:'Nieve intensa',
  80:'Chubascos leves',81:'Chubascos',82:'Chubascos fuertes',
  95:'Tormenta',96:'Tormenta con granizo',99:'Tormenta fuerte'
};
const WI = {
  0:'☀️',1:'🌤️',2:'⛅',3:'☁️',45:'🌫️',48:'🌫️',
  51:'🌦️',53:'🌦️',55:'🌧️',61:'🌧️',63:'🌧️',65:'🌧️',
  71:'🌨️',73:'❄️',75:'❄️',80:'🌦️',81:'🌧️',82:'⛈️',
  95:'⛈️',96:'⛈️',99:'🌪️'
};
let weatherCache = localLoad(WEATHER_KEY) || { data: null, ts: 0 };
let _cityGeo = null;
async function geocodeWeatherCity() {
  if (_cityGeo) return _cityGeo;
  const cacheKey = 'shared-geo-cache::' + WEATHER_CITY.trim().toLowerCase();
  const cached = sharedCacheGet(cacheKey, 90 * 24 * 3600000); // 90 días: la ubicación de una ciudad no cambia
  if (cached) { _cityGeo = cached; return _cityGeo; }
  try {
    const geoRes = await fetch('https://geocoding-api.open-meteo.com/v1/search?name=' + encodeURIComponent(WEATHER_CITY) + '&count=1&language=es&format=json');
    const geoData = await geoRes.json();
    if (!geoData.results || !geoData.results.length) return null;
    _cityGeo = { latitude: geoData.results[0].latitude, longitude: geoData.results[0].longitude };
    sharedCacheSet(cacheKey, _cityGeo);
    return _cityGeo;
  } catch(e) { devError('geocode error', e); return null; }
}

async function fetchWeatherForToday(force) {
  const now = Date.now();
  if (!force && weatherCache.data && (now - weatherCache.ts) < 1800000) return weatherCache.data;
  try {
    const geo = await geocodeWeatherCity();
    if (!geo) return weatherCache.data || null;
    // Mismo set de parámetros "current" que pide Taxfly, para que la
    // respuesta cruda sirva para las dos apps (acá solo usamos temp+code,
    // Taxfly además muestra sensación térmica, humedad y viento).
    const sharedKey = 'shared-weather-current::' + geo.latitude.toFixed(2) + ',' + geo.longitude.toFixed(2);
    let c = sharedCacheGet(sharedKey, 1800000);
    if (!c) {
      const wRes = await fetch('https://api.open-meteo.com/v1/forecast?latitude=' + geo.latitude + '&longitude=' + geo.longitude +
        '&current=temperature_2m,apparent_temperature,relative_humidity_2m,precipitation,weather_code,wind_speed_10m,wind_direction_10m' +
        '&temperature_unit=fahrenheit&wind_speed_unit=mph&timezone=auto');
      const wData = await wRes.json();
      c = wData.current;
      sharedCacheSet(sharedKey, c);
    }
    const result = { tempF: Math.round(c.temperature_2m), tempC: Math.round((c.temperature_2m - 32) * 5/9), code: c.weather_code };
    weatherCache = { data: result, ts: now };
    try { localStorage.setItem(WEATHER_KEY, JSON.stringify(weatherCache)); } catch(e) {}
    return result;
  } catch(e) { devError('weather fetch error', e); return weatherCache.data || null; }
}

// Pronóstico extendido (hasta 16 días, límite gratis de Open-Meteo): para
// que cada pestaña de día del cronograma de Outlets muestre qué clima
// espera, y ayude a decidir qué día conviene para exteriores. Taxfly no
// tiene esta funcionalidad, así que no hay nada que compartir acá.
const FORECAST_KEY = 'orlando-forecast-cache-v1';
let weatherForecast = localLoad(FORECAST_KEY) || { data: null, ts: 0 };
async function fetchWeatherForecast(force) {
  const now = Date.now();
  if (!force && weatherForecast.data && (now - weatherForecast.ts) < 3 * 3600000) return weatherForecast.data;
  try {
    const geo = await geocodeWeatherCity();
    if (!geo) return weatherForecast.data || null;
    const res = await fetch('https://api.open-meteo.com/v1/forecast?latitude=' + geo.latitude + '&longitude=' + geo.longitude +
      '&daily=weather_code,temperature_2m_max,temperature_2m_min&temperature_unit=fahrenheit&timezone=auto&forecast_days=16');
    const data = await res.json();
    const daily = data.daily || {};
    const days = (daily.time || []).map((date, i) => ({
      date,
      code: daily.weather_code[i],
      tmaxF: Math.round(daily.temperature_2m_max[i]),
      tminF: Math.round(daily.temperature_2m_min[i]),
    }));
    weatherForecast = { data: days, ts: now };
    try { localStorage.setItem(FORECAST_KEY, JSON.stringify(weatherForecast)); } catch(e) {}
    return days;
  } catch(e) { devError('forecast fetch error', e); return weatherForecast.data || null; }
}
// Busca, dentro del pronóstico ya bajado, el día cuyo mes/día calendario
// coincide con una fecha del cronograma (ej. "Lun 25/01" o "25 ene").
function forecastForTripDate(dateStr) {
  const p = parseTripDayDate(dateStr);
  if (!p || !weatherForecast.data) return null;
  return weatherForecast.data.find(f => {
    const d = new Date(f.date + 'T00:00:00');
    return d.getDate() === p.d && (d.getMonth() + 1) === p.mo;
  }) || null;
}
async function loadWeatherForecast(force) {
  await fetchWeatherForecast(force);
  if (document.getElementById('panel-outlets')?.classList.contains('active')) renderOutlets();
}

// ─── COTIZACIÓN USD → ARS (dolarapi.com) ──────────────────────
// Portado de Taxfly (compras.html). Usa el dólar OFICIAL (no el
// "tarjeta"), que es la referencia habitual para presupuestar un viaje;
// si por algo no viene en la respuesta, cae al tarjeta como backup.
const FX_KEY = 'orlando-fx-cache-v1';
const SHARED_FX_KEY = 'shared-dolarapi-raw-v1';
let fxCache = localLoad(FX_KEY) || { rate: null, label: '', ts: 0 };
let currentArsRate = fxCache.rate || null;
let currentArsLabel = fxCache.label || '';

async function fetchArsRate(force) {
  const now = Date.now();
  if (!force && fxCache.rate && (now - fxCache.ts) < 3600000) return fxCache;
  try {
    // Payload crudo de dolarapi.com compartido con Taxfly: si Taxfly ya
    // lo pidió hace menos de 1h, lo reusamos en vez de pegarle de nuevo.
    let d = sharedCacheGet(SHARED_FX_KEY, 3600000);
    if (!d) {
      const r = await fetch('https://dolarapi.com/v1/dolares');
      d = await r.json();
      sharedCacheSet(SHARED_FX_KEY, d);
    }
    const oficial = d.find(x => x.casa === 'oficial');
    const tarjeta = d.find(x => x.casa === 'tarjeta');
    const pick = oficial || tarjeta;
    if (pick && pick.venta) {
      fxCache = { rate: pick.venta, label: pick===oficial ? 'oficial' : 'tarjeta', ts: now };
      try { localStorage.setItem(FX_KEY, JSON.stringify(fxCache)); } catch(e) {}
    }
    return fxCache;
  } catch(e) { devError('fx fetch error', e); return fxCache; }
}
function fmtArs(n) { return Math.round(n).toLocaleString('es-AR'); }
async function loadArsRate(force) {
  const fx = await fetchArsRate(force);
  currentArsRate = fx.rate || null;
  currentArsLabel = fx.label || '';
  if (document.getElementById('panel-walmart')?.classList.contains('active')) renderWalmart();
}
function wmRefreshFx(e) { e && e.stopPropagation(); loadArsRate(true); }

// ─── HOY: mini card con el día del itinerario + clima ─────────
// Reutiliza mealData (el cronograma maestro: fecha + tipo + comidas) para
// mostrar de un vistazo qué toca hoy, sin tener que buscarlo entre tabs.
// Aparece en el header de las 4 secciones (Outlets, Comidas, Market,
// Parques) — no solo en Outlets.
const MONTHS_ES = { ene:1, feb:2, mar:3, abr:4, may:5, jun:6, jul:7, ago:8, sep:9, oct:10, nov:11, dic:12 };
function parseTripDayDate(str) {
  if (!str) return null;
  let m = String(str).match(/(\d{1,2})\/(\d{1,2})/);
  if (m) return { d: +m[1], mo: +m[2] };
  m = String(str).toLowerCase().match(/(\d{1,2})\s*([a-záéíóúñ]{3,})/i);
  if (m) {
    const mon = MONTHS_ES[m[2].slice(0,3)];
    if (mon) return { d: +m[1], mo: mon };
  }
  return null;
}
function findTodayMealDay() {
  if (typeof mealData === 'undefined' || !mealData) return null;
  const now = new Date();
  const td = now.getDate(), tm = now.getMonth() + 1;
  return mealData.find(d => { const p = parseTripDayDate(d.date); return p && p.d === td && p.mo === tm; }) || null;
}
// Si hoy no es ninguno de los días del viaje (lo más común: todavía falta
// para viajar), calculamos la próxima fecha en la que cae el primer día
// del cronograma, tomando el año actual o el que viene si ya pasó.
function nextOccurrence(mo, d) {
  const now = new Date();
  const today0 = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  let candidate = new Date(now.getFullYear(), mo - 1, d);
  if (candidate < today0) candidate = new Date(now.getFullYear() + 1, mo - 1, d);
  return candidate;
}
function daysUntilTrip() {
  if (typeof mealData === 'undefined' || !mealData || !mealData.length) return null;
  const first = mealData[0];
  const p = parseTripDayDate(first.date);
  if (!p) return null;
  const target = nextOccurrence(p.mo, p.d);
  const today0 = new Date();
  today0.setHours(0, 0, 0, 0);
  const days = Math.round((target - today0) / 86400000);
  return { days, title: first.title, dateLabel: first.date };
}
function renderTodayCard() {
  const slot = document.getElementById('today-card-slot');
  if (!slot) return;
  const day = findTodayMealDay();
  if (!day) {
    const countdown = daysUntilTrip();
    if (!countdown || countdown.days <= 0) { slot.style.display = 'none'; slot.innerHTML = ''; return; }
    slot.style.display = 'flex';
    slot.innerHTML = `
      <div class="today-card">
        <span class="today-card-icon">${ic('plane', 15)}</span>
        <div class="today-card-body">
          <div class="today-card-title">Faltan ${countdown.days} día${countdown.days === 1 ? '' : 's'} para el viaje</div>
          <div class="today-card-sub">${escapeHtml(countdown.title)} · ${escapeHtml(countdown.dateLabel)}</div>
        </div>
      </div>`;
    return;
  }
  const meta = (typeof typeConf !== 'undefined' && typeConf[day.type]) || { icon: 'calendar' };
  const mealsLine = (day.meals || []).filter(m => m && m !== '—').slice(0, 2).join(' · ');
  slot.style.display = 'flex';
  slot.innerHTML = `
    <div class="today-card">
      <span class="today-card-badge">HOY</span>
      <span class="today-card-icon">${ic(meta.icon || 'calendar', 15)}</span>
      <div class="today-card-body">
        <div class="today-card-title">${escapeHtml(day.title)}</div>
        ${mealsLine ? `<div class="today-card-sub">${escapeHtml(mealsLine)}</div>` : ''}
      </div>
      <span class="today-card-weather" id="today-card-weather">···</span>
    </div>`;
  fetchWeatherForToday().then(w => {
    const wEl = document.getElementById('today-card-weather');
    if (!wEl) return;
    if (!w) { wEl.textContent = ''; return; }
    wEl.innerHTML = `${WI[w.code] || '🌡️'} ${w.tempF}°F`;
    wEl.title = (WMO[w.code] || '') + ' · ' + w.tempC + '°C';
  });
}

// ─── PRESUPUESTO DEL VIAJE ─────────────────────────────────────
// Portado del sistema de presupuesto de Taxfly (compras.html): un total
// base + una lista de gastos. Walmart se suma solo (ya tiene precio por
// ítem); Outlets/Comidas/Parques se cargan a mano porque ahí no hay
// precios cargados ítem por ítem. Vive en Ajustes porque es un total
// que cruza las 4 secciones, no algo propio de una sola.
const BUDGET_KEY = 'orlando-budget-v1';
let budgetData = Object.assign({ total: 0, gastos: [] }, localLoad(BUDGET_KEY) || {});
let budgetEditingTotal = false;
let budgetAddingCat = null;
function budgetLoad() {
  const d = syncedLoad(BUDGET_KEY, window._budgetFromFb);
  if (d) budgetData = Object.assign({ total: 0, gastos: [] }, d);
}
function budgetSave() { syncedSave(BUDGET_KEY, budgetData, 'budget', budgetData); }
window._setBudgetData = function(d) { budgetData = Object.assign({ total: 0, gastos: [] }, d); };

const budgetCatMeta = {
  outlets: { label: 'Outlets', icon: 'bag' },
  comidas: { label: 'Comidas', icon: 'utensils' },
  parques: { label: 'Parques', icon: 'ferris' },
  otros:   { label: 'Otros',   icon: 'backpack' },
};
function budgetManualTotal() { return budgetData.gastos.reduce((s, g) => s + (g.monto || 0), 0); }
function budgetSpentTotal() { return wmTotalChecked() + budgetManualTotal(); }

function budgetEditTotal() {
  budgetEditingTotal = true;
  renderBudgetBox();
  setTimeout(() => document.getElementById('budget-total-input')?.focus(), 30);
}
function budgetSetTotal() {
  const input = document.getElementById('budget-total-input');
  const v = parseFloat(input?.value);
  if (isNaN(v) || v < 0) { input?.classList.add('error'); return; }
  budgetData.total = v;
  budgetEditingTotal = false;
  budgetSave();
  renderBudgetBox();
}
function budgetOpenAdd(cat) {
  budgetAddingCat = cat;
  renderBudgetBox();
  setTimeout(() => document.getElementById('budget-add-amount')?.focus(), 30);
}
function budgetCancelAdd() { budgetAddingCat = null; renderBudgetBox(); }
function budgetConfirmAdd() {
  const amountEl = document.getElementById('budget-add-amount');
  const noteEl = document.getElementById('budget-add-note');
  const amount = parseFloat(amountEl?.value);
  if (isNaN(amount) || amount <= 0) { amountEl?.classList.add('error'); return; }
  budgetData.gastos.push({ id: 'g' + Date.now(), cat: budgetAddingCat, monto: amount, nota: (noteEl?.value || '').trim() });
  budgetAddingCat = null;
  budgetSave();
  renderBudgetBox();
}
function budgetDeleteGasto(id) {
  budgetData.gastos = budgetData.gastos.filter(g => g.id !== id);
  budgetSave();
  renderBudgetBox();
}
function renderBudgetBox() {
  const box = document.getElementById('budget-box');
  if (!box) return;
  const hasTotal = budgetData.total > 0 && !budgetEditingTotal;

  if (!hasTotal) {
    box.innerHTML = `
      <div class="budget-set-row">
        <input type="number" min="0" step="1" id="budget-total-input" class="wm-edit-input" placeholder="Presupuesto total (USD)" value="${budgetData.total || ''}" oninput="this.classList.remove('error')">
        <button class="mbtn msave" onclick="budgetSetTotal()">Guardar</button>
      </div>`;
    return;
  }

  const spent = budgetSpentTotal();
  const remaining = budgetData.total - spent;
  const pct = budgetData.total > 0 ? Math.min(100, Math.round(spent / budgetData.total * 100)) : 0;
  const wmSpent = wmTotalChecked();

  let gastosHtml = '';
  if (wmSpent > 0) {
    gastosHtml += `
      <div class="budget-gasto-row budget-gasto-auto">
        <span class="budget-gasto-cat">${ic('cart',13)} Walmart <span class="budget-gasto-auto-tag">auto</span></span>
        <span class="budget-gasto-monto">$${wmSpent.toFixed(2)}</span>
      </div>`;
  }
  budgetData.gastos.forEach(g => {
    const meta = budgetCatMeta[g.cat] || budgetCatMeta.otros;
    gastosHtml += `
      <div class="budget-gasto-row">
        <span class="budget-gasto-cat">${ic(meta.icon,13)} ${meta.label}${g.nota ? ' · ' + escapeHtml(g.nota) : ''}</span>
        <span class="budget-gasto-monto">$${g.monto.toFixed(2)}
          <button class="wm-icon-btn wm-icon-del" onclick="budgetDeleteGasto('${g.id}')" title="Eliminar" aria-label="Eliminar gasto">✕</button>
        </span>
      </div>`;
  });

  let addForm;
  if (budgetAddingCat) {
    const meta = budgetCatMeta[budgetAddingCat];
    addForm = `
      <div class="wm-edit-form" style="margin-top:8px" onclick="event.stopPropagation()">
        <div style="font-size:12px;font-weight:700;margin-bottom:6px;color:var(--accent);display:flex;align-items:center;gap:6px">${ic(meta.icon,13)} Nuevo gasto — ${meta.label}</div>
        <div class="budget-edit-row">
          <input type="number" min="0" step="0.01" id="budget-add-amount" class="wm-edit-input" placeholder="$ monto" oninput="this.classList.remove('error')">
          <input type="text" id="budget-add-note" class="wm-edit-input" placeholder="Nota (opcional)">
        </div>
        <div class="wm-edit-actions">
          <button class="mbtn" onclick="budgetCancelAdd()">Cancelar</button>
          <button class="mbtn msave" onclick="budgetConfirmAdd()">Agregar</button>
        </div>
      </div>`;
  } else {
    addForm = `
      <div class="budget-add-cats">
        ${Object.keys(budgetCatMeta).map(cat => `<button class="budget-add-cat-btn" onclick="budgetOpenAdd('${cat}')">${ic(budgetCatMeta[cat].icon,13)} ${budgetCatMeta[cat].label}</button>`).join('')}
      </div>`;
  }

  box.innerHTML = `
    <div class="budget-summary">
      <div class="budget-summary-row">
        <span>Presupuesto</span>
        <span class="budget-summary-val">$${budgetData.total.toFixed(2)} <button class="wm-icon-btn" onclick="budgetEditTotal()" title="Editar">${ic('pencil',12)}</button></span>
      </div>
      <div class="budget-summary-row">
        <span>Gastado</span>
        <span class="budget-summary-val">$${spent.toFixed(2)}</span>
      </div>
      <div class="budget-summary-row budget-summary-remaining${remaining<0?' negative':''}">
        <span>${remaining>=0?'Restante':'Excedido'}</span>
        <span class="budget-summary-val">$${Math.abs(remaining).toFixed(2)}</span>
      </div>
      <div class="wm-progress-bar-bg"><div class="wm-progress-bar-fill" style="width:${pct}%;${pct>=100?'background:#ef4444':''}"></div></div>
    </div>
    <div class="budget-gastos-list">${gastosHtml || '<div class="budget-empty">Sin gastos cargados todavía.</div>'}</div>
    ${addForm}`;
}
window.renderBudgetBox = renderBudgetBox;

// ─── Unificación con TaxUSA/Taxfly ─────────────────────────────
// TaxUSA lee este mismo doc 'budget' (sin auth, solo lectura de su lado)
// para sumar lo gastado en Maps a su propio total de "Total gastado" /
// "Presupuesto restante". Para que ese número esté siempre al día, cada
// vez que cambia el carrito de Walmart mandamos el total actual como un
// campo aparte (merge:true no pisa el presupuesto ni los gastos
// manuales que ya viven en este mismo doc). Con debounce para no
// escribir en cada tecla si el usuario edita rápido.
let _wmSpentSyncTimer = null;
function syncWalmartSpentForTaxfly() {
  clearTimeout(_wmSpentSyncTimer);
  _wmSpentSyncTimer = setTimeout(() => {
    const spent = wmTotalChecked();
    window._fb && window._fb.fbSet('budget', { walmartSpent: spent });
  }, 800);
}



// listener se registra al final del script, después de que el DOM esté listo
window.addEventListener('DOMContentLoaded', function(){
  document.getElementById('mealModal').addEventListener('click', function(e){
    if(e.target===this) closeMealModal();
  });
  document.getElementById('wmAddModal').addEventListener('click', function(e){
    if(e.target===this) wmCloseAddModal();
  });
  document.getElementById('hotelEditModal').addEventListener('click', function(e){
    if(e.target===this) closeHotelEdit();
  });
  document.getElementById('sizeGuideModal').addEventListener('click', function(e){
    if(e.target===this) closeSizeGuide();
  });
  // Pintar Outlets con los datos locales de entrada, sin esperar a Firebase
  // (antes solo se renderizaba cuando llegaba la respuesta de Firebase).
  renderOutlets();
});

// ─── WALMART ───────────────────────────────────────────────
const WM_DATA_KEY = 'walmart-orlando-data-v2';
const WM_CHECKED_KEY = 'walmart-orlando-checked-v2';
const WM_OPEN_KEY = 'walmart-orlando-open-v2';

const wmCatMeta = {
  pan:       { icon:'bread', title:'Panadería y Snacks' },
  lacteos:   { icon:'egg', title:'Lácteos y Huevos' },
  carnes:    { icon:'drumstick', title:'Carnes y Fiambres' },
  secos:     { icon:'can', title:'Secos y Enlatados' },
  congelados:{ icon:'snowflake', title:'Congelados' },
  desayuno:  { icon:'coffee', title:'Desayuno y Bebidas' },
  extras:    { icon:'backpack', title:'Extras' },
};

window._setWmData = function(d) { wmData = d; };
window._setShopData = function(d) {
  if (d.items !== undefined) shopItems = d.items;
  if (d.checked !== undefined) shopChecked = new Set(d.checked);
};
window._setPackingData = function(d) {
  if (d.items !== undefined) packingItems = d.items;
  if (d.checked !== undefined) packingChecked = new Set(d.checked);
};
window._setCustomParksData = function(items) {
  customParks = items || [];
  customParks.forEach(p => { if (p.color) PARK_COLORS[p.id] = p.color; });
};
window._setExtraZonesData = function(zones) {
  extraZones = zones || {};
  Object.keys(extraZones).forEach(parkId => {
    const park = PARKS_DATA.find(p => p.id === parkId);
    const zone = extraZones[parkId];
    if (park && zone && zone.attractions && !park.zones.includes(zone)) park.zones.push(zone);
  });
};
window._setCoordOverridesData = function(overrides) { coordOverrides = overrides || {}; };
let wmData = [
  { id:'pan', items:[
    { id:'p1', name:'Pan lactal', qty:2, unit:'bolsas', price:2 },
    { id:'p2', name:'Pan para hamburguesas', qty:1, unit:'paquete', price:2 },
    { id:'p3', name:'Pan para salchichas', qty:1, unit:'paquete', price:2 },
    { id:'p4', name:'Tortillas de harina', qty:1, unit:'paquete', price:3 },
    { id:'p5', name:'Ritz o similares', qty:1, unit:'paquete 330g', price:4 },
    { id:'p6', name:'Chippers', qty:1, unit:'bolsa 18oz', price:4 },
    { id:'p7', name:'Pack variado snacks', qty:1, unit:'pack', price:10 },
    { id:'p8', name:'Donettes Hostess', qty:1, unit:'bolsa 10oz', price:3 },
    { id:'p9', name:'Rice Krispies Treats', qty:1, unit:'caja 32oz', price:12 },
    { id:'p10', name:'Granola bars Nature Valley', qty:1, unit:'caja x12', price:4 },
    { id:'p11', name:'Applesauce pouches GoGo Squeez', qty:1, unit:'pack x12', price:5 },
    { id:'p12', name:'Nutella', qty:1, unit:'frasco 350g', price:5 },
  ]},
  { id:'lacteos', items:[
    { id:'l1', name:'Huevos grandes', qty:1, unit:'cartón 18 uds', price:3 },
    { id:'l2', name:'Leche', qty:1, unit:'galón (3.78 lts)', price:4 },
    { id:'l3', name:'Manteca', qty:1, unit:'paquete 16oz', price:3 },
    { id:'l4', name:'Yogurt', qty:1, unit:'pote 32oz', price:3 },
    { id:'l5', name:'Queso feteado', qty:1, unit:'paquete 24oz', price:4 },
    { id:'l6', name:'Parmesano', qty:1, unit:'paquete 8oz', price:3 },
  ]},
  { id:'carnes', items:[
    { id:'c1', name:'Pechuga de pollo', qty:1, unit:'bandeja 5lb', price:12 },
    { id:'c2', name:'Chuletas de cerdo', qty:1, unit:'bandeja 1lb', price:6 },
    { id:'c3', name:'Jamón Great Value', qty:1, unit:'paquete 32oz', price:9 },
    { id:'c4', name:'Bacon', qty:1, unit:'paquete 1lb', price:5 },
    { id:'c5', name:'Salchichas Bar S', qty:1, unit:'paquete 12oz', price:1 },
    { id:'c6', name:'Albóndigas Great Value', qty:1, unit:'bolsa 32oz', price:8 },
  ]},
  { id:'secos', items:[
    { id:'s1', name:'Pasta Rotini', qty:2, unit:'bolsas 16oz', price:2 },
    { id:'s2', name:'Arroz Great Value', qty:1, unit:'bolsa 32oz', price:2 },
    { id:'s3', name:'Puré instantáneo', qty:1, unit:'caja 13oz', price:2 },
    { id:'s4', name:'Salsa de pasta', qty:2, unit:'frascos', price:2 },
    { id:'s5', name:'Maíz en lata', qty:3, unit:'latas 15oz', price:1 },
    { id:'s6', name:'Ravioli Chef Boyardee', qty:2, unit:'latas 15oz', price:2 },
    { id:'s7', name:'Corned Beef Hash', qty:1, unit:'lata 14oz', price:3 },
    { id:'s8', name:'Rice-A-Roni', qty:1, unit:'caja 6.4oz', price:2 },
    { id:'s9', name:'Sopa Maggi + Cabello de ángel', qty:1, unit:'combo', price:4 },
    { id:'s10', name:'Velveeta Shells & Cheese', qty:3, unit:'cajas 12oz', price:3 },
    { id:'s11', name:'Atún en lata', qty:1, unit:'pack x3', price:3 },
    { id:'s12', name:'Sal', qty:1, unit:'paquete 26oz', price:1 },
    { id:'s13', name:'Aceite', qty:1, unit:'botella 48fl', price:4 },
    { id:'s14', name:'Salsa picante Tapatio', qty:1, unit:'botella chica', price:2 },
  ]},
  { id:'congelados', items:[
    { id:'cn1', name:'Lasaña Stouffer familiar', qty:1, unit:'unidad 2lb', price:10 },
    { id:'cn2', name:'Pizza Rising Crust', qty:1, unit:'unidad 29oz', price:5 },
    { id:'cn3', name:'Corn dogs', qty:1, unit:'bolsa 27oz', price:7 },
    { id:'cn4', name:'Mozzarella sticks', qty:1, unit:'bolsa 18oz', price:5 },
    { id:'cn5', name:'Waffles EGGO', qty:1, unit:'caja 13oz', price:3 },
    { id:'cn6', name:'Sausage Croissant Sandwich', qty:1, unit:'caja 5oz', price:6 },
    { id:'cn7', name:'Tazón amantes de carne', qty:2, unit:'unidades 7oz', price:2 },
    { id:'cn8', name:'Papas fritas', qty:1, unit:'bolsa 32oz', price:3 },
    { id:'cn9', name:'Sandwichs jamón y queso', qty:2, unit:'paquetes 9oz', price:2 },
  ]},
  { id:'desayuno', items:[
    { id:'d1', name:'Corn Flakes', qty:1, unit:'caja 18oz', price:3 },
    { id:'d2', name:'Café instantáneo Great Value', qty:1, unit:'frasco 8oz', price:6 },
    { id:'d3', name:'Té Great Value', qty:1, unit:'caja 8oz', price:3 },
    { id:'d4', name:'Jugo Tropicana', qty:1, unit:'botella 89oz', price:9 },
    { id:'d5', name:'Agua Great Value', qty:1, unit:'pack 20 lts', price:6 },
  ]},
  { id:'extras', items:[
    { id:'e1', name:'Bolsas Ziploc Gallon', qty:1, unit:'caja x15', price:4 },
    { id:'e2', name:'Maní salado o mix de frutos secos', qty:1, unit:'bolsa', price:4 },
  ]},
];

let wmChecked = new Set();
let wmOpenSections = new Set(Object.keys(wmCatMeta));
let wmEditingItem = null; // { catId, itemId } or null

function wmSave() {
  syncedSave(WM_DATA_KEY, wmData, 'walmart', { data: wmData });
  syncedSave(WM_CHECKED_KEY, [...wmChecked], 'wmChecked', { checked: [...wmChecked] });
  // wmOpenSections es solo de UI local, no se sincroniza con Firebase.
  try { localStorage.setItem(WM_OPEN_KEY, JSON.stringify([...wmOpenSections])); } catch(e){}
}

function wmLoad() {
  const d = syncedLoad(WM_DATA_KEY, window._wmDataFromFb);
  if (d) wmData = d;

  const c = syncedLoad(WM_CHECKED_KEY, window._wmCheckedFromFb);
  if (c) c.forEach(k => wmChecked.add(k));

  const o = localLoad(WM_OPEN_KEY);
  if (o) { wmOpenSections.clear(); o.forEach(k => wmOpenSections.add(k)); }
}

function wmGetCat(catId) { return wmData.find(c => c.id === catId); }
function wmGetItem(catId, itemId) { return wmGetCat(catId)?.items.find(i => i.id === itemId); }

function wmItemPrice(item) { return (item.qty || 1) * (item.price || 0); }

function wmTotalAll() { return wmData.reduce((a,c) => a + c.items.reduce((b,i) => b + wmItemPrice(i), 0), 0); }
function wmTotalChecked() {
  let t = 0;
  wmData.forEach(cat => cat.items.forEach(item => {
    if (wmChecked.has(item.id)) t += wmItemPrice(item);
  }));
  return t;
}
function wmCountAll() { return wmData.reduce((a,c) => a + c.items.length, 0); }

function wmToggle(itemId, e) {
  e.stopPropagation();
  if (wmChecked.has(itemId)) wmChecked.delete(itemId);
  else wmChecked.add(itemId);
  wmSave();
  renderWalmart();
}

function wmToggleSection(catId) {
  if (wmOpenSections.has(catId)) wmOpenSections.delete(catId);
  else wmOpenSections.add(catId);
  wmSave();
  renderWalmart();
}

function wmDeleteItem(catId, itemId, e) {
  e.stopPropagation();
  const cat = wmGetCat(catId);
  const idx = cat.items.findIndex(i => i.id === itemId);
  if (idx === -1) return;
  const [removed] = cat.items.splice(idx, 1);
  const wasChecked = wmChecked.has(itemId);
  wmChecked.delete(itemId);
  wmSave();
  renderWalmart();
  showUndoToast(`"${removed.name}" eliminado`, () => {
    cat.items.splice(idx, 0, removed);
    if (wasChecked) wmChecked.add(itemId);
    wmSave();
    renderWalmart();
  });
}

function wmStartEdit(catId, itemId, e) {
  e.stopPropagation();
  wmEditingItem = { catId, itemId };
  renderWalmart();
  setTimeout(() => document.getElementById('wm-edit-name')?.focus(), 50);
}

function wmCancelEdit() {
  wmEditingItem = null;
  renderWalmart();
}

function wmSaveEdit() {
  const { catId, itemId } = wmEditingItem;
  const item = wmGetItem(catId, itemId);
  const name = document.getElementById('wm-edit-name').value.trim();
  const qty  = parseFloat(document.getElementById('wm-edit-qty').value) || 1;
  const unit = document.getElementById('wm-edit-unit').value.trim();
  const price= parseFloat(document.getElementById('wm-edit-price').value) || 0;
  if (!name) return;
  item.name  = name;
  item.qty   = qty;
  item.unit  = unit;
  item.price = price;
  wmEditingItem = null;
  wmSave();
  renderWalmart();
  showMToast('Guardado ✓');
}

function wmOpenAddModal() {
  document.getElementById('wmAddModal').classList.add('open');
  document.getElementById('wm-add-name').focus();
}
function wmCloseAddModal() {
  document.getElementById('wmAddModal').classList.remove('open');
  ['wm-add-name','wm-add-qty','wm-add-unit','wm-add-price'].forEach(id => {
    document.getElementById(id).value = '';
  });
}
function wmAddItem() {
  const name  = document.getElementById('wm-add-name').value.trim();
  const catId = document.getElementById('wm-add-cat').value;
  const qty   = parseFloat(document.getElementById('wm-add-qty').value) || 1;
  const unit  = document.getElementById('wm-add-unit').value.trim() || '';
  const price = parseFloat(document.getElementById('wm-add-price').value) || 0;
  if (!name) {
    const el = document.getElementById('wm-add-name');
    el.classList.add('error');
    document.getElementById('wm-add-name-err').classList.add('show');
    el.focus();
    return;
  }
  const cat = wmGetCat(catId);
  const newId = 'custom-' + Date.now();
  cat.items.push({ id: newId, name, qty, unit, price });
  wmOpenSections.add(catId);
  wmSave();
  renderWalmart();
  wmCloseAddModal();
  showMToast('Producto agregado ✓');
}

async function wmReset() {
  const ok = await showConfirm('Se van a desmarcar todos los productos del carrito.', '¿Reiniciar checks?', 'Reiniciar', true);
  if (!ok) return;
  wmChecked.clear();
  wmSave();
  renderWalmart();
}

function renderWalmart() {
  const panel = document.getElementById('panel-walmart');
  const total = wmCountAll();
  const checked = wmChecked.size;
  const pct = total > 0 ? Math.round(checked / total * 100) : 0;
  const totalAll = wmTotalAll().toFixed(2);
  const totalChk = wmTotalChecked().toFixed(2);

  let html = '<div class="wm-panel">';

  html += `
    <div class="wm-summary-bar">
      <div class="wm-stat"><div class="wm-stat-val">${checked}</div><div class="wm-stat-lbl">en carrito</div></div>
      <div class="wm-stat"><div class="wm-stat-val">${total - checked}</div><div class="wm-stat-lbl">pendientes</div></div>
      <div class="wm-stat"><div class="wm-stat-val">${pct}%</div><div class="wm-stat-lbl">listo</div></div>
    </div>
    <div class="wm-total-bar">
      <span class="wm-total-label">Total del carrito</span>
      <span class="wm-total-val">$${totalChk} <span style="font-size:12px;color:var(--muted);font-weight:400;">/ $${totalAll}</span></span>
    </div>
    ${currentArsRate ? `
    <div class="wm-total-bar wm-total-bar-ars" onclick="wmRefreshFx(event)" title="Tocar para actualizar cotización">
      <span class="wm-total-label">≈ pesos <span class="wm-fx-badge">$${fmtArs(currentArsRate)} ${currentArsLabel === 'oficial' ? 'oficial' : currentArsLabel}</span></span>
      <span class="wm-total-val wm-total-val-ars">$${fmtArs(wmTotalChecked()*currentArsRate)} <span style="font-size:12px;color:var(--muted);font-weight:400;">/ $${fmtArs(wmTotalAll()*currentArsRate)}</span></span>
    </div>` : `<div class="wm-fx-loading">Cotización USD→ARS: buscando…</div>`}
    <div class="wm-progress-bar-bg">
      <div class="wm-progress-bar-fill" style="width:${pct}%"></div>
    </div>`;

  wmData.forEach(cat => {
    const meta = wmCatMeta[cat.id] || { icon:'📦', title: cat.id };
    const catDone = cat.items.filter(i => wmChecked.has(i.id)).length;
    const isOpen = wmOpenSections.has(cat.id);
    const isEditing = wmEditingItem?.catId === cat.id;

    html += `
      <div class="wm-section ${isOpen?'open':''}" id="wmsec-${cat.id}">
        <div class="wm-section-header" onclick="wmToggleSection('${cat.id}')">
          <span class="wm-section-icon">${ic(meta.icon,16)}</span>
          <span class="wm-section-title">${meta.title}</span>
          <span class="wm-section-count">${catDone}/${cat.items.length}</span>
          <span class="wm-section-chevron">▾</span>
        </div>
        <div class="wm-items">`;

    cat.items.forEach(item => {
      const isChecked = wmChecked.has(item.id);
      const isEditingThis = wmEditingItem?.catId === cat.id && wmEditingItem?.itemId === item.id;
      const lineTotal = (wmItemPrice(item)).toFixed(2);

      if (isEditingThis) {
        html += `
          <div class="wm-item wm-item-editing" onclick="event.stopPropagation()">
            <div class="wm-edit-form">
              <input class="wm-edit-input wm-edit-name" id="wm-edit-name" placeholder="Nombre del producto" value="${escapeHtml(item.name)}">
              <div class="wm-edit-row">
                <input class="wm-edit-input wm-edit-small" id="wm-edit-qty" type="number" min="0.1" step="0.1" placeholder="Cant." value="${item.qty}">
                <input class="wm-edit-input wm-edit-unit" id="wm-edit-unit" placeholder="Unidad (oz, lb, caja…)" value="${escapeHtml(item.unit)}">
                <input class="wm-edit-input wm-edit-small" id="wm-edit-price" type="number" min="0" step="0.01" placeholder="$ c/u" value="${item.price}">
              </div>
              <div class="wm-edit-hint">Precio unitario. Total = cantidad × precio.</div>
              <div class="wm-edit-actions">
                <button class="mbtn" onclick="wmCancelEdit()">Cancelar</button>
                <button class="mbtn msave" onclick="wmSaveEdit()">Guardar</button>
              </div>
            </div>
          </div>`;
      } else {
        html += `
          <div class="wm-item ${isChecked?'checked':''}" onclick="wmToggle('${item.id}', event)">
            <div class="wm-check">${isChecked?'✓':''}</div>
            <div class="wm-item-body">
              <div class="wm-item-name">${escapeHtml(item.name)}</div>
              <div class="wm-item-detail">${item.qty} ${escapeHtml(item.unit)}</div>
            </div>
            <div style="display:flex;align-items:center;gap:6px;flex-shrink:0">
              <div class="wm-item-price">$${lineTotal}</div>
              <button class="wm-icon-btn" onclick="wmStartEdit('${cat.id}','${item.id}',event)" title="Editar" aria-label="Editar ${escapeHtml(item.name)}">${ic('pencil',13)}</button>
              <button class="wm-icon-btn wm-icon-del" onclick="wmDeleteItem('${cat.id}','${item.id}',event)" title="Eliminar" aria-label="Eliminar ${escapeHtml(item.name)}">✕</button>
            </div>
          </div>`;
      }
    });

    html += `</div></div>`;
  });

  html += `
    <div style="display:flex;gap:8px;margin-top:14px;justify-content:center">
      <button class="wm-reset-btn" onclick="wmOpenAddModal()">+ Agregar producto</button>
      <button class="wm-reset-btn" onclick="wmReset()">↺ Reiniciar checks</button>
    </div>`;
  html += '</div>';
  panel.innerHTML = html;
  syncWalmartSpentForTaxfly();
}

// Update switchSection to handle 3 main sections
const sectionMeta = {
  outlets: {
    title: 'Outlets',
    accent: 'Orlando',
    subtitle: 'Cronograma de compras',
    theme: 'theme-outlets'
  },
  comidas: {
    title: 'Orlando',
    accent: 'Meal Planning',
    subtitle: 'Planificación de comidas',
    theme: 'theme-comidas'
  },
  walmart: {
    title: 'Orlando',
    accent: 'Market',
    subtitle: 'Lista de compras',
    theme: 'theme-walmart'
  },
  parques: {
    title: 'Orlando',
    accent: 'Theme Parks',
    subtitle: 'Tracker de atracciones',
    theme: 'theme-parques'
  }
};

function switchSection(section) {
  document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.panel').forEach(p => p.classList.remove('active'));

  document.getElementById('panel-' + section).classList.add('active');
  document.getElementById('nav-' + section).classList.add('active');

  // Update header title & theme
  const meta = sectionMeta[section];
  document.getElementById('main-title').innerHTML = meta.title + ' <span class="ht-accent">' + meta.accent + '</span>';
  document.getElementById('main-subtitle').textContent = meta.subtitle;
  document.body.className = meta.theme;

  document.getElementById('addDayFab').style.display = section === 'comidas' ? 'block' : 'none';

  if (section === 'comidas') renderComidas();
  if (section === 'walmart') renderWalmart();
  if (section === 'outlets') renderOutlets();
  if (section === 'parques') renderParques();

  // Update global counter label for parques
  if (section === 'parques') {
    updateParquesCounter();
  } else {
    updateGlobal();
  }

  window.scrollTo({top:0,behavior:'smooth'});
}

// ─── OUTLETS ───────────────────────────────────────────────

function shopSave() {
  const payload = { items: shopItems, checked: [...shopChecked] };
  syncedSave(SHOPPING_KEY, payload, 'shopping', payload);
}
function shopLoad() {
  const fbValue = (window._shopFromFb && window._shopFromFb.items) ? window._shopFromFb : undefined;
  const d = syncedLoad(SHOPPING_KEY, fbValue);
  shopItems = d?.items || getDefaultShopItems();
  shopChecked = new Set(d?.checked || []);
}
function getDefaultShopItems() {
  return [
    { id:'si1', catId:'remeras', name:'Remeras básicas (pack)', size:'M', store:'Ross / Burlington', priority:'alta', needIt:true },
    { id:'si2', catId:'remeras', name:'Remera Nike Dri-FIT', size:'M', store:'Nike Clearance', priority:'alta', needIt:true },
    { id:'si3', catId:'pantalones', name:'Jean Levi\'s slim', size:'32x30', store:'Vineland Outlets', priority:'media', needIt:true },
    { id:'si4', catId:'ropa-deportiva', name:'Short deportivo', size:'M', store:'Nike / Ross', priority:'media', needIt:true },
    { id:'si5', catId:'calzado', name:'Zapatillas running Nike', size:'42', store:'Nike Clearance', priority:'alta', needIt:true },
    { id:'si6', catId:'accesorios', name:'Mochila / Backpack', size:'—', store:'Ross / Burlington', priority:'media', needIt:true },
    { id:'si7', catId:'varios', name:'Medias (pack)', size:'único', store:'Five Below', priority:'baja', needIt:true },
  ];
}

function shopGetItem(id) { return shopItems.find(i => i.id === id); }

let _outletsFirstRender = true;

function renderOutlets() {
  // shopLoad() removido de acá — solo se carga al init para no pisar cambios en memoria
  const panel = document.getElementById('panel-outlets');

  let html = `<div class="outlets-panel">
    <div class="outlets-subtabs">
      <button class="outlets-stab${outletSubTab==='cronograma'?' active':''}" onclick="switchOutletTab('cronograma')">${ic('calendar',13)} Cronograma</button>
      <button class="outlets-stab${outletSubTab==='lista'?' active':''}" onclick="switchOutletTab('lista')">${ic('shirt',13)} Compras</button>
      <button class="outlets-stab${outletSubTab==='Checklist'?' active':''}" onclick="switchOutletTab('Checklist')">${ic('backpack',13)} Checklist</button>
    </div>`;

  if (outletSubTab === 'cronograma') {
    const currentDay = typeof currentOutletDay !== 'undefined' ? currentOutletDay : 0;
    if (days.length === 0) {
      html += `<div class="all-done" style="display:block">
        <div class="all-done-emoji">${ic('calendar',44)}</div>
        <div class="all-done-title">Sin días cargados</div>
        <div class="all-done-sub">Agregá el primer día del cronograma para empezar.</div>
      </div>
      <div style="display:flex;justify-content:center;margin-top:14px">
        <button class="wm-reset-btn" onclick="openOutletDayModal()">+ Agregar día</button>
      </div>`;
    } else {
      html += `<div class="outlets-day-tabs">
        ${days.map((d,i) => {
          const fc = forecastForTripDate(d.date);
          const wBadge = fc ? `<span class="odt-weather" title="${escapeHtml(WMO[fc.code]||'')} · mín ${fc.tminF}°F">${WI[fc.code]||'🌡️'} ${fc.tmaxF}°</span>` : '';
          return `<button class="outlets-day-tab${i===currentDay?' active':''}" onclick="switchOutletDay(${i})">${escapeHtml(d.dayName || ('Día ' + (i+1)))}<span class="odt-date">${escapeHtml(d.date || '')}${wBadge}</span></button>`;
        }).join('')}
        <button class="btn-nav-set" style="margin-left:2px" onclick="openOutletDayModal()" title="Agregar día">+</button>
      </div>`;
      html += `<div class="outlets-day-content">`;
      html += renderDayContent(currentDay);
      html += `</div>`;
    }
  } else if (outletSubTab === 'Checklist') {
    html += renderPacking();
  } else {
    // Shopping list
    html += renderShopList();
  }

  html += `</div>`;
  panel.innerHTML = html;

  // Init map after DOM is ready
  if (outletSubTab === 'cronograma' && days.length > 0) {
    const currentDay = typeof currentOutletDay !== 'undefined' ? currentOutletDay : 0;
    setTimeout(() => initDayMap(currentDay), 100);
  }

  // Apply slideIn animation only on the first render
  if (_outletsFirstRender) {
    _outletsFirstRender = false;
    panel.querySelectorAll('.stop-card').forEach((card, i) => {
      card.style.animation = `slideIn .3s ease both`;
      card.style.animationDelay = `${i * 0.04}s`;
    });
  }
}


function switchOutletTab(tab) {
  outletSubTab = tab;
  renderOutlets();
}

function switchOutletDay(d) {
  currentOutletDay = d;
  renderOutlets();
}

function openOutletDayModal() {
  ['outlet-day-date','outlet-day-name','outlet-day-label'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.value = '';
    el.classList.remove('error');
    const err = document.getElementById(id + '-err');
    if (err) err.classList.remove('show');
  });
  document.getElementById('outlet-day-name').value = 'Día ' + (days.length + 1);
  document.getElementById('outletDayModal').classList.add('open');
}
function closeOutletDayModal() {
  document.getElementById('outletDayModal').classList.remove('open');
}
function addOutletDay() {
  const dateEl = document.getElementById('outlet-day-date');
  const date = dateEl.value.trim();
  if (!date) {
    dateEl.classList.add('error');
    document.getElementById('outlet-day-date-err').classList.add('show');
    return;
  }
  const dayName = document.getElementById('outlet-day-name').value.trim() || ('Día ' + (days.length + 1));
  const label = document.getElementById('outlet-day-label').value.trim() || 'Sin descripción todavía';
  days.push({ dayName, date, label, stops: [] });
  visited.push(new Set());
  currentOutletDay = days.length - 1;
  saveState();
  closeOutletDayModal();
  renderOutlets();
  updateGlobal();
  showMToast('Día agregado');
}
function outletDeleteDay(idx) {
  if (days.length <= 1) return;
  const [removedDay] = days.splice(idx, 1);
  const [removedVisited] = visited.splice(idx, 1);
  if (currentOutletDay >= days.length) currentOutletDay = days.length - 1;
  saveState();
  renderOutlets();
  updateGlobal();
  showUndoToast(`Día "${removedDay.dayName || removedDay.date}" eliminado`, () => {
    days.splice(idx, 0, removedDay);
    visited.splice(idx, 0, removedVisited);
    currentOutletDay = idx;
    saveState();
    renderOutlets();
    updateGlobal();
  });
}

function renderDayContent(d) {
  const day = days[d];
  const total = day.stops.length;
  const done = visited[d].size;
  const pct = total > 0 ? Math.round(done / total * 100) : 0;
  const allDone = done === total && total > 0;

  let html = `
    <div class="hotel-bar" id="hotel-bar-${d}">
      <a href="${hotel.url}" style="display:flex;align-items:center;gap:10px;flex:1;text-decoration:none;min-width:0" onclick="event.stopPropagation()">
        <div class="hotel-icon">${ic('home',16)}</div>
        <div class="hotel-info">
          <div class="hotel-label">Punto de partida</div>
          <div class="hotel-addr">${hotel.addr}</div>
        </div>
        <div class="hotel-arrow">↗</div>
      </a>
      <button class="wm-icon-btn" onclick="openHotelEdit()" title="Editar dirección" aria-label="Editar punto de partida" style="flex-shrink:0;opacity:0.5">${ic('pencil',13)}</button>
    </div>`;

  // Editable day label
  if (stopEditingIdx?.dayIdx === d && stopEditingIdx?.stopIdx === 'label') {
    html += `<div style="margin-bottom:14px">
      <input id="stop-edit-label" class="wm-edit-input" style="width:100%;margin-bottom:6px" value="${escapeHtml(day.label)}">
      <div style="display:flex;gap:6px;justify-content:flex-end">
        <button class="mbtn" onclick="stopCancelEdit()">Cancelar</button>
        <button class="mbtn msave" onclick="stopSaveDayLabel(${d})">Guardar</button>
      </div>
    </div>`;
  } else {
    html += `<div class="day-label" style="display:flex;align-items:center;gap:8px;margin-bottom:14px">
      <span style="flex:1">${escapeHtml(day.label)}</span>
      <button class="wm-icon-btn" onclick="stopStartEditLabel(${d});event.stopPropagation()" title="Editar descripción del día" style="flex-shrink:0">${ic('pencil',13)}</button>
    </div>`;
  }

  html += `<div class="progress-wrap">
      <div class="progress-meta">
        <div class="progress-stats">
          <div class="stat"><div class="stat-val ${done>0?'accent':''}">${done}</div><div class="stat-lbl">visitadas</div></div>
          <div class="stat"><div class="stat-val">${total}</div><div class="stat-lbl">paradas</div></div>
          <div class="stat"><div class="stat-val ${pct===100?'accent':''}">${pct}%</div><div class="stat-lbl">completado</div></div>
        </div>
        <button class="reset-btn" onclick="resetDay(${d})">↺ reiniciar</button>
      </div>
      <div class="progress-bar-bg"><div class="progress-bar-fill" style="width:${pct}%"></div></div>
    </div>`;

  if (allDone) {
    html += `<div class="all-done" style="display:block">
      <div class="all-done-emoji">${ic('sparkles',44)}</div>
      <div class="all-done-title">¡Día completado!</div>
      <div class="all-done-sub">Visitaste las ${total} paradas del día.</div>
    </div>`;
  }

  day.stops.forEach((s, i) => {
    const isV = visited[d].has(i);
    const isEditingThis = stopEditingIdx?.dayIdx === d && stopEditingIdx?.stopIdx === i;

    if (isEditingThis) {
      const badgeVal = s.badge || '';
      const badgeText = escapeHtml(s.badgeText || '');
      html += `
        <div class="stop-card" onclick="event.stopPropagation()" style="cursor:default;flex-direction:column;align-items:stretch">
          <div style="font-family:'DM Sans',sans-serif;font-size:12px;font-weight:700;margin-bottom:10px;color:var(--accent);display:flex;align-items:center;gap:6px">${ic('pencil',13)} Editar parada</div>
          <div class="wm-edit-form" style="width:100%">
            <input class="wm-edit-input" id="stop-edit-name" placeholder="Nombre del lugar" value="${escapeHtml(s.name)}" style="margin-bottom:6px;width:100%">
            <textarea class="wm-edit-input" id="stop-edit-desc" placeholder="Descripción (horarios, tips…)" style="margin-bottom:6px;width:100%;min-height:56px;resize:vertical;font-family:'DM Sans',sans-serif;font-size:12px;line-height:1.4">${s.desc}</textarea>
            <input class="wm-edit-input" id="stop-edit-url" placeholder="URL de Google Maps" value="${escapeHtml(s.url||'')}" style="margin-bottom:6px;width:100%">
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;margin-bottom:6px">
              <select class="wm-edit-input" id="stop-edit-badge">
                <option value=""${badgeVal===''?' selected':''}>Sin badge</option>
                <option value="star"${badgeVal==='star'?' selected':''}>⭐ Imperdible</option>
                <option value="rec"${badgeVal==='rec'?' selected':''}>✅ Recomendado</option>
              </select>
              <input class="wm-edit-input" id="stop-edit-badgetext" placeholder="Texto badge (ej: N°1)" value="${badgeText}">
            </div>
            <div class="wm-edit-actions">
              <button class="mbtn" onclick="stopCancelEdit()">Cancelar</button>
              <button class="mbtn msave" onclick="stopSaveEdit(${d},${i})">Guardar</button>
            </div>
          </div>
        </div>`;
    } else {
      let badge = '';
      if (s.badge === 'star') badge = `<span class="badge badge-star">${escapeHtml(s.badgeText)}</span>`;
      if (s.badge === 'rec')  badge = `<span class="badge badge-rec">${escapeHtml(s.badgeText)}</span>`;
      html += `
        <div class="stop-card${isV?' visited':''}" draggable="true"
          ondragstart="stopDragStart(${d},${i},event)"
          ondragover="stopDragOver(${d},${i},event)"
          ondragend="stopDragEnd(event)"
          ondrop="stopDrop(${d},${i},event)"
          onclick="toggleStop(${d},${i})">
          <div class="stop-drag-handle" onclick="event.stopPropagation()" ondragstart="event.stopPropagation()" title="Arrastrar para reordenar" aria-label="Arrastrar para reordenar" role="button">⠿</div>
          <div class="stop-num">${isV ? '✓' : i+1}</div>
          <div class="stop-body">
            <div class="stop-name">${escapeHtml(s.name)}</div>
            <div class="stop-desc">${escapeHtml(s.desc)}</div>
            <div class="stop-footer">
              <div class="badges">${badge}</div>
              <div class="stop-footer-actions">
                <button class="wm-icon-btn stop-action-btn" onclick="stopMoveUp(${d},${i},event)" title="Subir" aria-label="Mover parada arriba" ${i===0?'style="opacity:0.25;pointer-events:none"':''}>↑</button>
                <button class="wm-icon-btn stop-action-btn" onclick="stopMoveDown(${d},${i},event)" title="Bajar" aria-label="Mover parada abajo" ${i===day.stops.length-1?'style="opacity:0.25;pointer-events:none"':''}>↓</button>
                ${s.url && /^https?:\/\//i.test(s.url) ? `<a class="maps-btn" href="${escapeHtml(s.url)}" onclick="event.stopPropagation()">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/><circle cx="12" cy="9" r="2.5"/></svg>
                  Maps
                </a>` : ''}
                <button class="wm-icon-btn stop-action-btn" onclick="stopStartEdit(${d},${i});event.stopPropagation()" title="Editar parada" aria-label="Editar ${escapeHtml(s.name)}">${ic('pencil',14)}</button>
                <button class="wm-icon-btn wm-icon-del stop-action-btn" onclick="stopDelete(${d},${i},event)" title="Eliminar parada" aria-label="Eliminar ${escapeHtml(s.name)}">✕</button>
              </div>
            </div>
          </div>
        </div>`;
    }
  });

  // Add stop form or button
  if (stopAddingDay === d) {
    html += `
      <div class="stop-card" onclick="event.stopPropagation()" style="cursor:default;flex-direction:column;align-items:stretch">
        <div style="font-family:'DM Sans',sans-serif;font-size:12px;font-weight:700;margin-bottom:10px;color:var(--green)">+ Nueva parada</div>
        <div class="wm-edit-form" style="width:100%">
          <input class="wm-edit-input" id="stop-add-name" placeholder="Nombre del lugar" style="margin-bottom:6px;width:100%">
          <textarea class="wm-edit-input" id="stop-add-desc" placeholder="Descripción (horarios, tips…)" style="margin-bottom:6px;width:100%;min-height:56px;resize:vertical;font-family:'DM Sans',sans-serif;font-size:12px;line-height:1.4"></textarea>
          <input class="wm-edit-input" id="stop-add-url" placeholder="URL de Google Maps (opcional)" style="margin-bottom:6px;width:100%">
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;margin-bottom:6px">
            <select class="wm-edit-input" id="stop-add-badge">
              <option value="">Sin badge</option>
              <option value="star">⭐ Imperdible</option>
              <option value="rec">✅ Recomendado</option>
            </select>
            <input class="wm-edit-input" id="stop-add-badgetext" placeholder="Texto badge (ej: N°1)">
          </div>
          <div class="wm-edit-actions">
            <button class="mbtn" onclick="stopCancelAdd()">Cancelar</button>
            <button class="mbtn msave" onclick="stopAddConfirm(${d})">Agregar</button>
          </div>
        </div>
      </div>`;
  } else {
    html += `<button onclick="stopStartAdd(${d})" style="width:100%;padding:12px;border:1px dashed var(--border2);border-radius:var(--radius);background:transparent;color:var(--muted);font-family:'DM Sans',sans-serif;font-size:13px;font-weight:600;cursor:pointer;transition:all .2s;margin-top:2px" onmouseover="this.style.borderColor='var(--accent)';this.style.color='var(--accent)'" onmouseout="this.style.borderColor='var(--border2)';this.style.color='var(--muted)'">+ Agregar parada</button>`;
  }

  // ─── MAP ───────────────────────────────────────────────────
  const stopsWithCoords = day.stops.filter(s => s.lat && s.lng);
  if (stopsWithCoords.length > 0) {
    const canOptimize = stopsWithCoords.length === day.stops.length && stopsWithCoords.length >= 3;
    html += `
      <div class="day-map-wrap" style="margin-top:14px;border-radius:var(--radius);overflow:hidden;border:1px solid var(--border);">
        <div class="day-map-header" style="display:flex;align-items:center;justify-content:space-between;gap:8px;padding:10px 14px;background:var(--surface);border-bottom:1px solid var(--border);">
          <div class="day-map-title">${ic('map',13)} Mapa del día · ${stopsWithCoords.length} paradas</div>
          ${canOptimize ? `<button class="mbtn" id="optimize-btn-${d}" onclick="optimizeDayOrder(${d})" title="Reordena las paradas para viajar menos entre ellas">↻ Optimizar orden</button>` : ''}
        </div>
        ${stopsWithCoords.length > 1 ? `<div class="day-route-info" id="day-route-info-${d}">Calculando ruta…</div>` : ''}
        <div id="day-map-container-${d}" class="day-map-container"></div>
      </div>`;
  }

  if (days.length > 1) {
    html += `<div class="del-day-row"><button class="mbtn mdel" onclick="outletDeleteDay(${d})">Eliminar este día</button></div>`;
  }

  return html;
}

// ─── RUTEO ENTRE PARADAS (OSRM, servidor demo público y gratis) ─
// Le da valor real al cronograma de outlets: cuánto se tarda de una
// parada a la siguiente, no solo dónde están. Se cachea en memoria por
// combinación de coordenadas para no repetir el pedido en cada render.
let _routeCache = {};
function fmtDist(m) { return m < 1000 ? Math.round(m) + ' m' : (m / 1000).toFixed(1) + ' km'; }
function fmtDur(s) {
  const min = Math.round(s / 60);
  return min < 60 ? min + ' min' : Math.floor(min / 60) + 'h ' + (min % 60) + 'min';
}
function applyRouteInfo(d, route) {
  const infoEl = document.getElementById('day-route-info-' + d);
  if (infoEl) {
    const legsHtml = (route.legs || []).map((leg, i) =>
      `<span class="route-leg-chip">${i+1}→${i+2} · ${fmtDur(leg.duration)} · ${fmtDist(leg.distance)}</span>`
    ).join('');
    infoEl.innerHTML = `
      <div class="route-total">${ic('pin',12)} ${fmtDur(route.duration)} · ${fmtDist(route.distance)} en auto (total)</div>
      <div class="route-legs">${legsHtml}</div>`;
  }
  if (_leafletMap && route.geometry) {
    L.geoJSON(route.geometry, { style: { color: '#2563eb', weight: 3, opacity: 0.55, dashArray: '2,7' } }).addTo(_leafletMap);
  }
}
async function fetchRouteInfo(d, stopsWithCoords) {
  const infoEl = document.getElementById('day-route-info-' + d);
  const key = stopsWithCoords.map(s => s.lat.toFixed(5) + ',' + s.lng.toFixed(5)).join(';');
  if (_routeCache[key]) { applyRouteInfo(d, _routeCache[key]); return; }
  try {
    const coordsStr = stopsWithCoords.map(s => s.lng + ',' + s.lat).join(';');
    const res = await fetch(`https://router.project-osrm.org/route/v1/driving/${coordsStr}?overview=full&geometries=geojson`);
    const data = await res.json();
    if (!data.routes || !data.routes.length) { if (infoEl) infoEl.textContent = ''; return; }
    _routeCache[key] = data.routes[0];
    applyRouteInfo(d, data.routes[0]);
  } catch(e) { devError('route fetch error', e); if (infoEl) infoEl.textContent = ''; }
}

// Reordena las paradas del día para minimizar el tiempo de viaje total,
// usando el endpoint /trip de OSRM (el mismo servidor demo que ya usa el
// ruteo). Se fija la primera parada como punto de partida (source=first)
// y se deja libre el resto del orden. Solo disponible si TODAS las
// paradas del día tienen coordenadas cargadas.
async function optimizeDayOrder(d) {
  const day = days[d];
  const stopsWithCoords = day.stops.filter(s => s.lat && s.lng);
  if (stopsWithCoords.length !== day.stops.length || stopsWithCoords.length < 3) return;
  const btn = document.getElementById('optimize-btn-' + d);
  if (btn) { btn.disabled = true; btn.textContent = '↻ Optimizando…'; }
  try {
    const coordsStr = day.stops.map(s => s.lng + ',' + s.lat).join(';');
    const res = await fetch(`https://router.project-osrm.org/trip/v1/driving/${coordsStr}?source=first&roundtrip=false`);
    const data = await res.json();
    if (!data.waypoints || !data.trips || !data.trips.length) { showMToast('No se pudo optimizar la ruta'); return; }
    const order = data.waypoints
      .map((wp, originalIdx) => ({ originalIdx, seq: wp.waypoint_index }))
      .sort((a, b) => a.seq - b.seq)
      .map(x => x.originalIdx);
    // Remapear qué paradas estaban visitadas al nuevo orden, para no
    // "desmarcar" nada solo por haber reordenado la lista.
    const oldVisited = visited[d];
    const newVisited = new Set();
    order.forEach((oldIdx, newIdx) => { if (oldVisited.has(oldIdx)) newVisited.add(newIdx); });
    day.stops = order.map(i => day.stops[i]);
    visited[d] = newVisited;
    _routeCache = {}; // el orden cambió: invalidar la ruta cacheada
    saveState();
    showMToast('Orden optimizado ✓ — se acomodaron las paradas para viajar menos');
    renderOutlets();
  } catch(e) {
    devError('trip optimize error', e);
    showMToast('No se pudo optimizar la ruta (sin conexión a OSRM)');
  } finally {
    if (btn) { btn.disabled = false; btn.textContent = '↻ Optimizar orden'; }
  }
}

// ─── MAP LOGIC ──────────────────────────────────────────────
let _leafletMap = null;

function initDayMap(d) {
  const container = document.getElementById(`day-map-container-${d}`);
  if (!container) return;

  // Destroy previous map instance
  if (_leafletMap) {
    _leafletMap.remove();
    _leafletMap = null;
  }
  container.innerHTML = '';

  const day = days[d];
  const stopsWithCoords = day.stops.filter(s => s.lat && s.lng);
  if (!stopsWithCoords.length) return;

  _leafletMap = L.map(container, { zoomControl: true, attributionControl: false });
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
  }).addTo(_leafletMap);

  const bounds = [];

  stopsWithCoords.forEach((s) => {
    const originalIdx = day.stops.indexOf(s);
    const isVisited = visited[d].has(originalIdx);
    const isStar = s.badge === 'star';
    const isRec = s.badge === 'rec';

    const color = isVisited ? '#555' : isStar ? '#2563eb' : isRec ? '#10b981' : '#7c3aed';
    const icon = L.divIcon({
      className: '',
      html: `<div style="
        width:28px;height:28px;border-radius:50%;
        background:${color};
        color:${isVisited?'#888':'#fff'};
        display:flex;align-items:center;justify-content:center;
        font-family:'DM Sans',sans-serif;font-weight:800;font-size:11px;
        border:2px solid ${isVisited?'#333':'rgba(255,255,255,0.25)'};
        box-shadow:0 2px 8px rgba(0,0,0,0.5);
        opacity:${isVisited?'0.5':'1'};
      ">${originalIdx + 1}</div>`,
      iconSize: [28, 28],
      iconAnchor: [14, 14],
      popupAnchor: [0, -16]
    });

    const badgeHtml = isStar ? `<span style="font-size:10px;color:#2563eb">⭐ Imperdible</span>` :
                      isRec  ? `<span style="font-size:10px;color:#10b981">✅ ${escapeHtml(s.badgeText)}</span>` : '';
    const visitedHtml = isVisited ? `<span style="font-size:10px;color:#10b981">✓ Visitado</span>` : '';

    L.marker([s.lat, s.lng], { icon })
      .bindPopup(`
        <div class="map-popup-name">${originalIdx + 1}. ${escapeHtml(s.name)}</div>
        <div class="map-popup-desc">${escapeHtml(s.desc)}</div>
        ${badgeHtml || visitedHtml ? `<div style="margin-top:5px;display:flex;gap:6px">${badgeHtml}${visitedHtml}</div>` : ''}
        ${s.url && /^https?:\/\//i.test(s.url) ? `<a href="${escapeHtml(s.url)}" target="_blank" style="display:inline-block;margin-top:7px;font-size:11px;color:#2563eb;text-decoration:none;font-family:'DM Sans',sans-serif;font-weight:600">↗ Abrir en Maps</a>` : ''}
      `, { maxWidth: 220 })
      .addTo(_leafletMap);

    bounds.push([s.lat, s.lng]);
  });

  _leafletMap.fitBounds(bounds, { padding: [28, 28] });
  setTimeout(() => _leafletMap && _leafletMap.invalidateSize(), 150);

  if (stopsWithCoords.length > 1) fetchRouteInfo(d, stopsWithCoords);
}
function stopStartEdit(dayIdx, stopIdx) {
  stopEditingIdx = { dayIdx, stopIdx };
  stopAddingDay = null;
  renderOutlets();
  setTimeout(() => document.getElementById('stop-edit-name')?.focus(), 50);
}
function stopStartEditLabel(dayIdx) {
  stopEditingIdx = { dayIdx, stopIdx: 'label' };
  stopAddingDay = null;
  renderOutlets();
  setTimeout(() => document.getElementById('stop-edit-label')?.focus(), 50);
}
function stopCancelEdit() {
  stopEditingIdx = null;
  renderOutlets();
}
function stopSaveEdit(dayIdx, stopIdx) {
  const nameEl = document.getElementById('stop-edit-name');
  const name = nameEl.value.trim();
  if (!name) {
    nameEl.style.borderColor = '#ef4444';
    nameEl.focus();
    nameEl.setAttribute('placeholder', '⚠ El nombre no puede estar vacío');
    setTimeout(() => { nameEl.style.borderColor = ''; nameEl.placeholder = 'Nombre del lugar'; }, 2000);
    return;
  }
  days[dayIdx].stops[stopIdx] = {
    name,
    desc: document.getElementById('stop-edit-desc').value.trim(),
    url: document.getElementById('stop-edit-url').value.trim(),
    badge: document.getElementById('stop-edit-badge').value || undefined,
    badgeText: document.getElementById('stop-edit-badgetext').value.trim() || undefined,
  };
  stopEditingIdx = null;
  saveState();
  renderOutlets();
  showMToast('Parada guardada ✓');
}
function stopSaveDayLabel(dayIdx) {
  const label = document.getElementById('stop-edit-label').value.trim();
  if (!label) return;
  days[dayIdx].label = label;
  stopEditingIdx = null;
  saveState();
  renderOutlets();
  showMToast('Descripción guardada ✓');
}
function stopDelete(dayIdx, stopIdx, e) {
  e && e.stopPropagation();
  const [removed] = days[dayIdx].stops.splice(stopIdx, 1);
  // Rebuild visited set for this day to avoid index gaps
  const oldVisited = visited[dayIdx];
  const wasVisited = oldVisited.has(stopIdx);
  const newVisited = new Set();
  [...oldVisited].forEach(idx => { if (idx < stopIdx) newVisited.add(idx); else if (idx > stopIdx) newVisited.add(idx - 1); });
  visited[dayIdx] = newVisited;
  saveState();
  renderOutlets();
  updateGlobal();
  showUndoToast(`"${removed.name}" eliminada`, () => {
    days[dayIdx].stops.splice(stopIdx, 0, removed);
    const restored = new Set();
    [...visited[dayIdx]].forEach(idx => restored.add(idx >= stopIdx ? idx + 1 : idx));
    if (wasVisited) restored.add(stopIdx);
    visited[dayIdx] = restored;
    saveState();
    renderOutlets();
    updateGlobal();
  });
}
function stopStartAdd(dayIdx) {
  stopAddingDay = dayIdx;
  stopEditingIdx = null;
  renderOutlets();
  setTimeout(() => document.getElementById('stop-add-name')?.focus(), 50);
}
function stopCancelAdd() {
  stopAddingDay = null;
  renderOutlets();
}
function stopAddConfirm(dayIdx) {
  const nameEl = document.getElementById('stop-add-name');
  const name = nameEl.value.trim();
  if (!name) {
    nameEl.style.borderColor = '#ef4444';
    nameEl.focus();
    nameEl.setAttribute('placeholder', '⚠ Escribí el nombre del lugar');
    setTimeout(() => { nameEl.style.borderColor = ''; nameEl.placeholder = 'Nombre del lugar'; }, 2000);
    return;
  }
  days[dayIdx].stops.push({
    name,
    desc: document.getElementById('stop-add-desc').value.trim(),
    url: document.getElementById('stop-add-url').value.trim(),
    badge: document.getElementById('stop-add-badge').value || undefined,
    badgeText: document.getElementById('stop-add-badgetext').value.trim() || undefined,
  });
  stopAddingDay = null;
  saveState();
  renderOutlets();
  updateGlobal();
  showMToast('Parada agregada ✓');
}

// ─── MOVE UP / DOWN ─────────────────────────────────────────
function stopMoveUp(dayIdx, stopIdx, e) {
  e && e.stopPropagation();
  if (stopIdx === 0) return;
  const stops = days[dayIdx].stops;
  [stops[stopIdx - 1], stops[stopIdx]] = [stops[stopIdx], stops[stopIdx - 1]];
  // Fix visited indices
  const vis = visited[dayIdx];
  const hadPrev = vis.has(stopIdx - 1);
  const hadCurr = vis.has(stopIdx);
  if (hadPrev) vis.add(stopIdx); else vis.delete(stopIdx);
  if (hadCurr) vis.add(stopIdx - 1); else vis.delete(stopIdx - 1);
  saveState();
  renderOutlets();
}
function stopMoveDown(dayIdx, stopIdx, e) {
  e && e.stopPropagation();
  if (stopIdx >= days[dayIdx].stops.length - 1) return;
  const stops = days[dayIdx].stops;
  [stops[stopIdx], stops[stopIdx + 1]] = [stops[stopIdx + 1], stops[stopIdx]];
  const vis = visited[dayIdx];
  const hadCurr = vis.has(stopIdx);
  const hadNext = vis.has(stopIdx + 1);
  if (hadNext) vis.add(stopIdx); else vis.delete(stopIdx);
  if (hadCurr) vis.add(stopIdx + 1); else vis.delete(stopIdx + 1);
  saveState();
  renderOutlets();
}

// ─── DRAG & DROP ────────────────────────────────────────────
let dragSrc = null; // { dayIdx, stopIdx }
function stopDragStart(dayIdx, stopIdx, e) {
  dragSrc = { dayIdx, stopIdx };
  e.currentTarget.classList.add('dragging');
  e.dataTransfer.effectAllowed = 'move';
}
function stopDragOver(dayIdx, stopIdx, e) {
  e.preventDefault();
  e.dataTransfer.dropEffect = 'move';
  if (!dragSrc || (dragSrc.dayIdx === dayIdx && dragSrc.stopIdx === stopIdx)) return;
  document.querySelectorAll('.stop-card.drag-over').forEach(el => el.classList.remove('drag-over'));
  e.currentTarget.classList.add('drag-over');
}
function stopDragEnd(e) {
  e.currentTarget.classList.remove('dragging');
  document.querySelectorAll('.stop-card.drag-over').forEach(el => el.classList.remove('drag-over'));
  dragSrc = null;
}
function stopDrop(dayIdx, stopIdx, e) {
  e.preventDefault();
  e.currentTarget.classList.remove('drag-over');
  if (!dragSrc) return;
  const { dayIdx: srcDay, stopIdx: srcStop } = dragSrc;
  if (srcDay !== dayIdx || srcStop === stopIdx) { dragSrc = null; return; }
  // Reorder stops
  const stops = days[dayIdx].stops;
  const moved = stops.splice(srcStop, 1)[0];
  const targetIdx = srcStop < stopIdx ? stopIdx - 1 : stopIdx;
  stops.splice(targetIdx, 0, moved);
  // Rebuild visited for this day
  const vis = visited[dayIdx];
  const visitedArr = [...vis];
  const newVis = new Set();
  // map old indices to new
  visitedArr.forEach(oldIdx => {
    let newIdx = oldIdx;
    if (oldIdx === srcStop) {
      newIdx = targetIdx;
    } else if (srcStop < stopIdx) {
      if (oldIdx > srcStop && oldIdx <= targetIdx) newIdx = oldIdx - 1;
    } else {
      if (oldIdx >= targetIdx && oldIdx < srcStop) newIdx = oldIdx + 1;
    }
    newVis.add(newIdx);
  });
  visited[dayIdx] = newVis;
  dragSrc = null;
  saveState();
  renderOutlets();
  showMToast('Parada reordenada ✓');
}

// ─── GUÍA DE TALLES US ↔ ARG (Outlets · Compras) ───────────────
// Tabla estática de referencia — aproximada, puede variar por marca.
const SIZE_GUIDE = [
  { title: 'Remeras / Buzos', cols: ['US', 'ARG'], rows: [
    ['XS','38-40'], ['S','40-42'], ['M','42-44'], ['L','44-46'], ['XL','46-48'], ['XXL','48-50'],
  ]},
  { title: 'Pantalones (jean, hombre — cintura)', cols: ['US', 'ARG'], rows: [
    ['28','38'], ['30','40'], ['32','42'], ['34','44'], ['36','46'], ['38','48'],
  ]},
  { title: 'Calzado (unisex, aprox.)', cols: ['US', 'ARG / EU'], rows: [
    ['6','37'], ['6.5','37.5'], ['7','38'], ['7.5','39'], ['8','39.5'], ['8.5','40'],
    ['9','41'], ['9.5','41.5'], ['10','42'], ['10.5','43'], ['11','43.5'], ['11.5','44'], ['12','45'],
  ]},
];
function renderSizeGuide() {
  return `<div class="size-guide-grid">${SIZE_GUIDE.map(g => `
    <div class="size-guide-block">
      <div class="size-guide-title">${g.title}</div>
      <div class="size-guide-table-wrap">
        <table class="size-guide-table">
          <thead><tr>${g.cols.map(c => `<th>${c}</th>`).join('')}</tr></thead>
          <tbody>${g.rows.map(r => `<tr>${r.map(v => `<td>${v}</td>`).join('')}</tr>`).join('')}</tbody>
        </table>
      </div>
    </div>`).join('')}</div>`;
}
function openSizeGuide() {
  document.getElementById('size-guide-content').innerHTML = renderSizeGuide();
  document.getElementById('sizeGuideModal').classList.add('open');
}
function closeSizeGuide() {
  document.getElementById('sizeGuideModal').classList.remove('open');
}

function renderShopList() {
  const prioColor = { alta:'#ef4444', media:'var(--accent)', baja:'var(--green)' };
  const isNeed = shopListTab === 'need';
  const filtered = shopItems.filter(i => isNeed ? i.needIt !== false : i.needIt === false);

  let html = `
  <div style="display:flex;justify-content:flex-end;margin-bottom:8px">
    <button class="mbtn" onclick="openSizeGuide()">${ic('shirt',12)} Guía de talles US↔ARG</button>
  </div>
  <div style="display:flex;gap:6px;margin-bottom:14px">
    <button onclick="shopListTab='need';renderOutlets()" style="flex:1;display:flex;align-items:center;justify-content:center;gap:6px;padding:10px 8px;border-radius:var(--radius-sm);border:1px solid ${isNeed?'var(--accent)':'var(--border2)'};background:${isNeed?'var(--accent)':'transparent'};color:${isNeed?'#fff':'var(--muted)'};font-family:'DM Sans',sans-serif;font-size:var(--fs-xs);font-weight:600;cursor:pointer;">${ic('check',13)} A comprar</button>
    <button onclick="shopListTab='noneed';renderOutlets()" style="flex:1;display:flex;align-items:center;justify-content:center;gap:6px;padding:10px 8px;border-radius:var(--radius-sm);border:1px solid ${!isNeed?'#ef4444':'var(--border2)'};background:${!isNeed?'rgba(239,68,68,0.12)':'transparent'};color:${!isNeed?'#ef4444':'var(--muted)'};font-family:'DM Sans',sans-serif;font-size:var(--fs-xs);font-weight:600;cursor:pointer;">${ic('x',13)} No necesito</button>
  </div>`;

  shopCats.forEach(cat => {
    const catItems = filtered.filter(i => i.catId === cat.id);
    if (catItems.length === 0) return;
    const catDone = catItems.filter(i => shopChecked.has(i.id)).length;
    const isOpen = shopOpenSections.has(cat.id);

    html += `<div class="wm-section${isOpen?' open':''}" id="shopsec-${cat.id}">
      <div class="wm-section-header" onclick="shopToggleSection('${cat.id}')">
        <span class="wm-section-icon">${ic(cat.icon,16)}</span>
        <span class="wm-section-title">${cat.title}</span>
        <span class="wm-section-count">${catDone}/${catItems.length}</span>
        <span class="wm-section-chevron">▾</span>
      </div>
      <div class="wm-items">`;

    catItems.forEach(item => {
      const isChecked = shopChecked.has(item.id);
      const isEditingThis = shopEditingItem === item.id;
      const pColor = prioColor[item.priority] || 'var(--muted)';
      const moveLabel = ic(isNeed ? 'x' : 'check', 13);
      const moveTitle = isNeed ? 'Mover a No necesito' : 'Mover a A comprar';

      if (isEditingThis) {
        html += `<div class="wm-item wm-item-editing" onclick="event.stopPropagation()">
          <div class="wm-edit-form">
            <input class="wm-edit-input" id="shop-edit-name" placeholder="Qué querés comprar" value="${escapeHtml(item.name)}">
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;margin-bottom:6px">
              <input class="wm-edit-input" id="shop-edit-size" placeholder="Talle (M, 42, 32x30…)" value="${escapeHtml(item.size||'')}">
              <input class="wm-edit-input" id="shop-edit-store" placeholder="Tienda sugerida" value="${escapeHtml(item.store||'')}">
            </div>
            <select class="wm-edit-input" id="shop-edit-prio" style="margin-bottom:6px">
              <option value="alta"${item.priority==='alta'?' selected':''}>🔴 Alta prioridad</option>
              <option value="media"${item.priority==='media'?' selected':''}>🟡 Media prioridad</option>
              <option value="baja"${item.priority==='baja'?' selected':''}>🟢 Baja prioridad</option>
            </select>
            <div class="wm-edit-actions">
              <button class="mbtn" onclick="shopCancelEdit()">Cancelar</button>
              <button class="mbtn msave" onclick="shopSaveEdit('${item.id}')">Guardar</button>
            </div>
          </div>
        </div>`;
      } else {
        html += `<div class="wm-item${isChecked?' checked':''}" onclick="shopToggle('${item.id}',event)">
          <div class="wm-check">${isChecked?'✓':''}</div>
          <div class="wm-item-body">
            <div class="wm-item-name">${escapeHtml(item.name)}</div>
            <div class="wm-item-detail">${item.size ? 'Talle: '+escapeHtml(item.size) : ''} ${item.store ? '· '+escapeHtml(item.store) : ''}</div>
          </div>
          <div style="display:flex;align-items:center;gap:6px;flex-shrink:0">
            <span style="width:8px;height:8px;border-radius:50%;background:${pColor};display:inline-block;flex-shrink:0" title="Prioridad ${item.priority}"></span>
            <button class="wm-icon-btn" onclick="shopMoveItem('${item.id}',event)" title="${moveTitle}" aria-label="${moveTitle}">${moveLabel}</button>
            <button class="wm-icon-btn" onclick="shopStartEdit('${item.id}',event)" title="Editar" aria-label="Editar ${escapeHtml(item.name)}">${ic('pencil',13)}</button>
            <button class="wm-icon-btn wm-icon-del" onclick="shopDeleteItem('${item.id}',event)" title="Eliminar" aria-label="Eliminar ${escapeHtml(item.name)}">✕</button>
          </div>
        </div>`;
      }
    });

    html += `</div></div>`;
  });

  if (filtered.length === 0) {
    html += `<div style="text-align:center;padding:40px 20px;color:var(--muted);font-size:13px;">
      ${isNeed ? 'No hay prendas en la lista. Agregá una con el botón de abajo.' : 'Nada descartado todavía. Usá el 🚫 para mover ítems acá, o agregá uno directamente.'}
    </div>`;
  }

  html += `<div style="display:flex;gap:8px;margin-top:14px;justify-content:center">
    <button class="wm-reset-btn" onclick="shopOpenAddModal('${isNeed ? 'need' : 'noneed'}')">+ Agregar prenda</button>
    <button class="wm-reset-btn" onclick="shopReset()">↺ Reiniciar checks</button>
  </div>`;

  return html;
}

function shopToggleSection(catId) {
  if (shopOpenSections.has(catId)) shopOpenSections.delete(catId);
  else shopOpenSections.add(catId);
  renderOutlets();
}
function shopMoveItem(id, e) {
  e && e.stopPropagation();
  const item = shopGetItem(id);
  if (!item) return;
  item.needIt = item.needIt === false ? true : false;
  shopSave();
  showMToast(item.needIt ? 'Movido a A comprar ✓' : 'Movido a No necesito ✓');
  renderOutlets();
}
function shopToggle(id, e) {
  e && e.stopPropagation();
  if (shopChecked.has(id)) shopChecked.delete(id);
  else shopChecked.add(id);
  shopSave();
  renderOutlets();
}
function shopStartEdit(id, e) {
  e && e.stopPropagation();
  shopEditingItem = id;
  const item = shopGetItem(id);
  if (item) shopOpenSections.add(item.catId);
  renderOutlets();
}
function shopCancelEdit() { shopEditingItem = null; renderOutlets(); }
function shopSaveEdit(id) {
  const item = shopGetItem(id);
  if (!item) return;
  const name = document.getElementById('shop-edit-name').value.trim();
  if (!name) return;
  item.name = name;
  item.size = document.getElementById('shop-edit-size').value.trim();
  item.store = document.getElementById('shop-edit-store').value.trim();
  item.priority = document.getElementById('shop-edit-prio').value;
  shopEditingItem = null;
  shopSave();
  renderOutlets();
  showMToast('Guardado ✓');
}
function shopDeleteItem(id, e) {
  e && e.stopPropagation();
  const idx = shopItems.findIndex(i => i.id === id);
  if (idx === -1) return;
  const [removed] = shopItems.splice(idx, 1);
  const wasChecked = shopChecked.has(id);
  shopChecked.delete(id);
  shopSave();
  renderOutlets();
  showUndoToast(`"${removed.name}" eliminado`, () => {
    shopItems.splice(idx, 0, removed);
    if (wasChecked) shopChecked.add(id);
    shopSave();
    renderOutlets();
  });
}
async function shopReset() {
  const ok = await showConfirm('Se van a desmarcar todas las prendas compradas.', '¿Reiniciar checks?', 'Reiniciar', true);
  if (!ok) return;
  shopChecked.clear();
  shopSave();
  renderOutlets();
}
function shopOpenAddModal(tab) {
  window._shopAddTab = tab || 'need';
  document.getElementById('shopAddModal').classList.add('open');
  setTimeout(() => document.getElementById('shop-add-name')?.focus(), 50);
}
function shopCloseAddModal() {
  document.getElementById('shopAddModal').classList.remove('open');
  ['shop-add-name','shop-add-size','shop-add-store'].forEach(id => {
    const el = document.getElementById(id); if(el) { el.value=''; el.classList.remove('error'); }
  });
  const err = document.getElementById('shop-add-name-err');
  if (err) err.classList.remove('show');
}
function shopAddItem() {
  const nameEl = document.getElementById('shop-add-name');
  const name = nameEl.value.trim();
  const catId = document.getElementById('shop-add-cat').value;
  const size = document.getElementById('shop-add-size').value.trim();
  const store = document.getElementById('shop-add-store').value.trim();
  const priority = document.getElementById('shop-add-prio').value;
  if (!name) {
    nameEl.classList.add('error');
    const err = document.getElementById('shop-add-name-err');
    if (err) err.classList.add('show');
    nameEl.focus();
    return;
  }
  const needIt = (window._shopAddTab || 'need') === 'need';
  const newItem = { id:'shop-'+Date.now(), catId, name, size, store, priority, needIt };
  shopItems.push(newItem);
  shopOpenSections.add(catId);
  shopSave();
  renderOutlets();
  shopCloseAddModal();
  showMToast('Prenda agregada ✓');
}

// ─── PARQUES ───────────────────────────────────────────────
const PARQUES_KEY = 'parkTracker_v2';
let parquesState = {};

function parquesLoad() {
  const d = syncedLoad(PARQUES_KEY, window._parquesFromFb);
  if (d) parquesState = d;
}

function parquesSave() {
  syncedSave(PARQUES_KEY, parquesState, 'parques', { state: parquesState });
}

function pkKey(parkId, zoneIdx, attrIdx) { return `${parkId}_${zoneIdx}_${attrIdx}`; }
function pkDone(parkId, zoneIdx, attrIdx) { return !!parquesState[pkKey(parkId, zoneIdx, attrIdx)]; }

function toggleAttraction(parkId, zoneIdx, attrIdx) {
  const k = pkKey(parkId, zoneIdx, attrIdx);
  parquesState[k] = !parquesState[k];
  parquesSave();
  // Actualizar pin en mapa sin re-renderizar todo
  const mapInst = _parkMaps[parkId];
  if (mapInst) {
    const park = allParksList().find(p => p.id === parkId);
    const attr = park?.zones[zoneIdx]?.attractions[attrIdx];
    const globalIdx = park ? (() => { let idx=0; for(let zi=0;zi<zoneIdx;zi++) idx+=park.zones[zi].attractions.length; return idx+attrIdx; })() : -1;
    const markerObj = mapInst._markers && mapInst._markers[globalIdx];
    if (markerObj && attr) {
      const isDone = !!parquesState[k];
      const color = PARK_COLORS[parkId] || '#8b5cf6';
      markerObj.setIcon(makeParkPin(color, isDone, attr.name));
    }
  }
  renderParques();
}

function pkCountPark(park) {
  let done = 0, total = 0;
  park.zones.forEach((z, zi) => z.attractions.forEach((_, ai) => { total++; if (pkDone(park.id, zi, ai)) done++; }));
  return { done, total };
}

function pkCountAll() {
  let done = 0, total = 0;
  allParksList().forEach(p => { const c = pkCountPark(p); done += c.done; total += c.total; });
  return { done, total };
}

function updateParquesCounter() {
  const { done, total } = pkCountAll();
  document.getElementById('global-counter').textContent = done + ' / ' + total;
}

const PARK_ICONS = { mk: 'castle', epcot: 'globe', hs: 'clapper', ioa: 'dino', usf: 'masks', epic: 'sparkles' };
let pkFilter = 'all';
let pkSearchQuery = '';
function pkNorm(s) { return (s || '').toString().normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase(); }
let pkOpenCards = new Set(['mk','epcot','hs','ioa','usf','epic']);

// ─── PARQUES PERSONALIZADOS Y ATRACCIONES AGREGADAS A MANO ───────
// Dos capas de datos de usuario, separadas de PARKS_DATA (que es código,
// no algo persistido, así que se re-arma igual en cada carga):
// - customParks: parques enteros que el usuario creó desde cero.
// - extraZones: una zona extra por parque PREDEFINIDO (mk, epcot, etc.)
//   con las atracciones que el usuario sumó porque notó que faltaban.
// Ambas se guardan en localStorage + Firebase igual que el resto de los
// módulos, y en el init se "reinyectan" dentro de park.zones para que el
// resto del código (contador, mapa, buscador, toggle) las trate exactamente
// igual que a las atracciones curadas, sin casos especiales.
const CUSTOM_PARKS_KEY = 'parques-custom';
const EXTRA_ZONES_KEY = 'parques-extra-zonas';
const PARK_COLOR_OPTIONS = ['#2563eb','#7c3aed','#10b981','#f59e0b','#ef4444','#0ea5e9','#ec4899','#14b8a6'];
let customParks = [];
let extraZones = {};

function customParksSave() { syncedSave(CUSTOM_PARKS_KEY, customParks, 'customParks', { items: customParks }); }
function customParksLoad() {
  const d = syncedLoad(CUSTOM_PARKS_KEY, window._customParksFromFb);
  customParks = d || [];
  customParks.forEach(p => { if (p.color) PARK_COLORS[p.id] = p.color; });
}
function extraZonesSave() { syncedSave(EXTRA_ZONES_KEY, extraZones, 'parquesExtra', extraZones); }
function extraZonesLoad() {
  const d = syncedLoad(EXTRA_ZONES_KEY, window._parquesExtraFromFb);
  extraZones = d || {};
  Object.keys(extraZones).forEach(parkId => {
    const park = PARKS_DATA.find(p => p.id === parkId);
    const zone = extraZones[parkId];
    if (park && zone && zone.attractions && zone.attractions.length > 0 && !park.zones.includes(zone)) {
      park.zones.push(zone);
    }
  });
}
function allParksList() { return [...PARKS_DATA, ...customParks]; }
function pkIsCustomPark(parkId) { return customParks.some(p => p.id === parkId); }

// ─── COORDENADAS: overrides + geocodificación real ────────────────
// Los pines "de fábrica" de PARKS_DATA fueron estimados a mano y pueden
// estar corridos. En vez de tratar de arreglar ~190 a ciegas desde acá,
// esta capa deja que la propia app (corriendo en el navegador del usuario,
// con internet real) los verifique contra Wikipedia y permite corregir
// cualquier atracción a mano — con dirección o lat/lng directos. La
// corrección se guarda acá, nunca se pisa PARKS_DATA (que es código).
const COORD_OVERRIDES_KEY = 'parques-coord-overrides';
let coordOverrides = {}; // { "parkId_zoneIdx_attrIdx": {lat, lng} }
function coordOverridesSave() { syncedSave(COORD_OVERRIDES_KEY, coordOverrides, 'coordOverrides', coordOverrides); }
function coordOverridesLoad() {
  const d = syncedLoad(COORD_OVERRIDES_KEY, window._coordOverridesFromFb);
  coordOverrides = d || {};
}
// Coordenadas "efectivas" de una atracción: la corrección si existe,
// si no la que trae PARKS_DATA/customParks.
function pkCoord(parkId, zoneIdx, attrIdx, attr) {
  const ov = coordOverrides[`${parkId}_${zoneIdx}_${attrIdx}`];
  if (ov) return { lat: ov.lat, lng: ov.lng };
  if (attr.lat && attr.lng) return { lat: attr.lat, lng: attr.lng };
  return null;
}
function pkSetCoordOverride(parkId, zoneIdx, attrIdx, lat, lng) {
  coordOverrides[`${parkId}_${zoneIdx}_${attrIdx}`] = { lat, lng };
  coordOverridesSave();
}

// Wikipedia: busca el artículo de la atracción (con el nombre del parque
// como pista para desambiguar, ej. "Space Mountain Magic Kingdom") y lee
// sus coordenadas del propio Wikidata/infobox vía prop=coordinates — mucho
// más preciso que adivinar texto, porque es un campo estructurado.
async function geoWikipediaCoords(name, parkHint) {
  try {
    const query = parkHint ? `${name} ${parkHint}` : name;
    const searchUrl = `https://en.wikipedia.org/w/api.php?action=opensearch&search=${encodeURIComponent(query)}&limit=1&namespace=0&format=json&origin=*`;
    const searchRes = await fetch(searchUrl);
    const searchData = await searchRes.json();
    const title = searchData && searchData[1] && searchData[1][0];
    if (!title) return null;

    const coordUrl = `https://en.wikipedia.org/w/api.php?action=query&titles=${encodeURIComponent(title)}&prop=coordinates&format=json&origin=*`;
    const coordRes = await fetch(coordUrl);
    const coordData = await coordRes.json();
    const pages = coordData.query && coordData.query.pages;
    const page = pages && Object.values(pages)[0];
    const coord = page && page.coordinates && page.coordinates[0];
    if (!coord) return null;
    return { lat: coord.lat, lng: coord.lon, title };
  } catch (e) {
    devError('geoWikipediaCoords error', e);
    return null;
  }
}

// Nominatim (OpenStreetMap): geocodifica una dirección escrita a mano.
// Gratis, sin API key, pero pide no golpearlo muy seguido (1 req/seg).
async function geoNominatimAddress(address) {
  try {
    const url = `https://nominatim.openstreetmap.org/search?format=json&limit=1&q=${encodeURIComponent(address)}`;
    const res = await fetch(url);
    const data = await res.json();
    if (!data || !data[0]) return null;
    return { lat: parseFloat(data[0].lat), lng: parseFloat(data[0].lon) };
  } catch (e) {
    devError('geoNominatimAddress error', e);
    return null;
  }
}
function geoSleep(ms) { return new Promise(r => setTimeout(r, ms)); }

// Búsqueda automática combinada: Wikipedia primero (más precisa cuando la
// atracción tiene artículo propio), y si no encuentra nada, Nominatim como
// respaldo buscando "nombre + parque" como si fuera una dirección. Así el
// usuario no tiene que elegir método — un solo botón prueba las dos.
async function geoAutoSearch(name, parkHint) {
  const wiki = await geoWikipediaCoords(name, parkHint);
  if (wiki) return { lat: wiki.lat, lng: wiki.lng, source: 'wikipedia', title: wiki.title };
  await geoSleep(250);
  const query = parkHint ? `${name}, ${parkHint}` : name;
  const nomi = await geoNominatimAddress(query);
  if (nomi) return { lat: nomi.lat, lng: nomi.lng, source: 'nominatim' };
  return null;
}

const PARKS_DATA = [
  {
    id: 'mk', name: 'Magic Kingdom', emoji: '🏰', label: 'Walt Disney World', cls: 'pk-mk',
    zones: [
      { name: 'Main Street, U.S.A.', attractions: [
        { name: 'Walt Disney World Railroad', lat: 28.4193, lng: -81.5808 },
        { name: 'Town Square Theater (Meet Mickey)', lat: 28.4183, lng: -81.5808 },
      ]},
      { name: 'Adventureland', attractions: [
        { name: 'Swiss Family Treehouse', lat: 28.4192, lng: -81.5829 },
        { name: 'The Magic Carpets of Aladdin', lat: 28.4195, lng: -81.5832 },
        { name: 'Jungle Cruise', lat: 28.4198, lng: -81.5838 },
        { name: "Walt Disney's Enchanted Tiki Room", lat: 28.4193, lng: -81.5842 },
        { name: 'Pirates of the Caribbean', lat: 28.4199, lng: -81.5844 },
      ]},
      { name: 'Frontierland', attractions: [
        { name: "Tiana's Bayou Adventure", height: '40"/ 102 cm', lat: 28.4206, lng: -81.5848 },
        { name: 'Big Thunder Mountain Railroad (temp. cerrada)', height: '40"/ 102 cm', lat: 28.4212, lng: -81.5852 },
        { name: 'Country Bear Musical Jamboree', lat: 28.4202, lng: -81.5845 },
      ]},
      { name: 'Liberty Square', attractions: [
        { name: 'The Hall of Presidents', lat: 28.4215, lng: -81.5832 },
        { name: 'Haunted Mansion', lat: 28.4220, lng: -81.5827 },
      ]},
      { name: 'Fantasyland', attractions: [
        { name: '"it\'s a small world"', lat: 28.4228, lng: -81.5820 },
        { name: "Peter Pan's Flight", lat: 28.4224, lng: -81.5815 },
        { name: 'Prince Charming Regal Carrousel', lat: 28.4220, lng: -81.5812 },
        { name: "Mickey's PhilharMagic", lat: 28.4218, lng: -81.5808 },
        { name: 'Princess Fairytale Hall', lat: 28.4222, lng: -81.5806 },
        { name: 'The Many Adventures of Winnie the Pooh', lat: 28.4225, lng: -81.5803 },
        { name: 'Seven Dwarfs Mine Train', height: '38"/ 97 cm', lat: 28.4228, lng: -81.5800 },
        { name: 'Enchanted Tales with Belle', lat: 28.4231, lng: -81.5797 },
        { name: 'Under the Sea – Journey of The Little Mermaid', lat: 28.4234, lng: -81.5794 },
        { name: 'Meet Ariel at Her Grotto', lat: 28.4235, lng: -81.5792 },
        { name: 'The Barnstormer', height: '35"/ 89 cm', lat: 28.4237, lng: -81.5798 },
        { name: 'Dumbo the Flying Elephant', lat: 28.4239, lng: -81.5803 },
        { name: 'Mad Tea Party', lat: 28.4236, lng: -81.5808 },
        { name: 'Meet Mirabel at Fairytale Garden', lat: 28.4233, lng: -81.5812 },
      ]},
      { name: 'Tomorrowland', attractions: [
        { name: 'TRON Lightcycle / Run', height: '48"/ 122 cm', lat: 28.4232, lng: -81.5778 },
        { name: 'Tomorrowland Speedway', height: '32"/ 81 cm (solo) / 54"/ 137 cm (conducir)', lat: 28.4236, lng: -81.5782 },
        { name: 'Space Mountain', height: '44"/ 112 cm', lat: 28.4230, lng: -81.5790 },
        { name: 'Astro Orbiter', lat: 28.4218, lng: -81.5798 },
        { name: 'Tomorrowland Transit Authority PeopleMover', lat: 28.4222, lng: -81.5795 },
        { name: "Walt Disney's Carousel of Progress", lat: 28.4225, lng: -81.5785 },
        { name: "Buzz Lightyear's Space Ranger Spin", lat: 28.4215, lng: -81.5793 },
        { name: 'Monsters, Inc. Laugh Floor', lat: 28.4213, lng: -81.5789 },
        { name: "Pete's Silly Sideshow", lat: 28.4240, lng: -81.5795 },
      ]},
    ]
  },
  {
    id: 'epcot', name: 'EPCOT', emoji: '🌍', label: 'Walt Disney World', cls: 'pk-epcot',
    zones: [
      { name: 'World Celebration', attractions: [
        { name: 'Spaceship Earth', lat: 28.3747, lng: -81.5494 },
        { name: 'Meet Mickey & Friends', lat: 28.3742, lng: -81.5490 },
        { name: 'Disney & Pixar Short Film Festival', lat: 28.3738, lng: -81.5498 },
        { name: 'Journey Into Imagination With Figment', lat: 28.3730, lng: -81.5510 },
      ]},
      { name: 'World Discovery', attractions: [
        { name: 'Guardians of the Galaxy: Cosmic Rewind', height: '42"/ 107 cm', lat: 28.3752, lng: -81.5480 },
        { name: 'Mission: SPACE – Green Mission', height: '40"/ 102 cm', lat: 28.3748, lng: -81.5476 },
        { name: 'Mission: SPACE – Orange Mission', height: '44"/ 112 cm', lat: 28.3748, lng: -81.5474 },
        { name: 'REIMAGINED! Test Track', height: '40"/ 102 cm', lat: 28.3753, lng: -81.5472 },
      ]},
      { name: 'World Nature', attractions: [
        { name: 'Journey of Water, Inspired by Moana', lat: 28.3740, lng: -81.5470 },
        { name: 'Awesome Planet', lat: 28.3736, lng: -81.5508 },
        { name: "Soarin'", height: '40"/ 102 cm', lat: 28.3730, lng: -81.5519 },
        { name: 'Living with the Land', lat: 28.3726, lng: -81.5518 },
        { name: 'The Seas with Nemo & Friends', lat: 28.3722, lng: -81.5512 },
        { name: 'Turtle Talk with Crush', lat: 28.3720, lng: -81.5510 },
        { name: 'SeaBase Aquarium', lat: 28.3719, lng: -81.5508 },
      ]},
      { name: 'World Showcase', attractions: [
        { name: 'Gran Fiesta Tour Starring The Three Caballeros (México)', lat: 28.3695, lng: -81.5520 },
        { name: 'Meet Anna and Elsa at Royal Sommerhus (Noruega)', lat: 28.3692, lng: -81.5510 },
        { name: 'Frozen Ever After (Noruega)', lat: 28.3690, lng: -81.5508 },
        { name: 'Reflections of China', lat: 28.3686, lng: -81.5490 },
        { name: 'The American Adventure', lat: 28.3682, lng: -81.5493 },
        { name: 'Palais du Cinéma (Francia)', lat: 28.3676, lng: -81.5478 },
        { name: 'Beauty and the Beast Sing-Along (Francia)', lat: 28.3675, lng: -81.5476 },
        { name: 'Impressions de France (Francia)', lat: 28.3674, lng: -81.5474 },
        { name: "Remy's Ratatouille Adventure (Francia)", lat: 28.3673, lng: -81.5472 },
        { name: 'Canada Far and Wide in Circle-Vision 360', lat: 28.3698, lng: -81.5530 },
      ]},
    ]
  },
  {
    id: 'hs', name: 'Hollywood Studios', emoji: '🎬', label: 'Walt Disney World', cls: 'pk-hs',
    zones: [
      { name: 'Hollywood Boulevard', attractions: [
        { name: "Mickey & Minnie's Runaway Railway", lat: 28.3579, lng: -81.5601 },
      ]},
      { name: 'Echo Lake', attractions: [
        { name: "Indiana Jones™ Epic Stunt Spectacular!", lat: 28.3571, lng: -81.5612 },
        { name: 'Star Tours – The Adventures Continue', height: '40"/ 102 cm', lat: 28.3568, lng: -81.5617 },
        { name: 'Vacation Fun (Animated Short)', lat: 28.3565, lng: -81.5610 },
        { name: 'For the First Time in Forever: A "Frozen" Sing-Along Celebration', lat: 28.3563, lng: -81.5608 },
      ]},
      { name: 'Commissary Lane', attractions: [
        { name: 'Meet Mickey and Minnie at Red Carpet Dreams', lat: 28.3572, lng: -81.5598 },
      ]},
      { name: "Star Wars: Galaxy's Edge", attractions: [
        { name: 'Star Wars: Rise of the Resistance', height: '40"/ 102 cm', lat: 28.3556, lng: -81.5635 },
        { name: "Millennium Falcon: Smugglers Run", height: '38"/ 97 cm', lat: 28.3561, lng: -81.5630 },
      ]},
      { name: 'Toy Story Land', attractions: [
        { name: 'Alien Swirling Saucers', height: '32"/ 81 cm', lat: 28.3551, lng: -81.5605 },
        { name: 'Slinky Dog Dash', height: '38"/ 97 cm', lat: 28.3548, lng: -81.5610 },
        { name: 'Toy Story Mania!', lat: 28.3554, lng: -81.5598 },
      ]},
      { name: 'Animation Courtyard', attractions: [
        { name: 'Walt Disney Presents', lat: 28.3576, lng: -81.5624 },
        { name: 'The Little Mermaid – A Musical Adventure', lat: 28.3578, lng: -81.5627 },
      ]},
      { name: 'Sunset Boulevard', attractions: [
        { name: 'Disney Villains: Unfairly Ever After', lat: 28.3560, lng: -81.5589 },
        { name: "Rock 'n' Roller Coaster® Starring Aerosmith", height: '48"/ 122 cm', lat: 28.3557, lng: -81.5585 },
        { name: 'The Twilight Zone Tower of Terror™', height: '40"/ 102 cm', lat: 28.3554, lng: -81.5581 },
        { name: 'Fantasmic!', lat: 28.3548, lng: -81.5576 },
        { name: 'Beauty and the Beast – Live on Stage', lat: 28.3562, lng: -81.5593 },
      ]},
      { name: 'Pixar Plaza', attractions: [
        { name: 'Meet Edna Mode at the Edna Mode Experience', lat: 28.3567, lng: -81.5595 },
      ]},
    ]
  },
  {
    id: 'ioa', name: 'Islands of Adventure', emoji: '🦖', label: 'Universal Orlando', cls: 'pk-ioa',
    zones: [
      { name: 'Marvel Super Hero Island', attractions: [
        { name: 'The Incredible Hulk Coaster®', height: '54"/ 138 cm', lat: 28.4720, lng: -81.4690 },
        { name: 'Storm Force Accelatron®', lat: 28.4718, lng: -81.4688 },
        { name: "Doctor Doom's Fearfall®", height: '52"/ 133 cm', lat: 28.4715, lng: -81.4692 },
        { name: 'The Amazing Adventures of Spider-Man®', height: '40"/ 102 cm', lat: 28.4713, lng: -81.4695 },
        { name: 'Meet the Marvel Super Heroes', lat: 28.4712, lng: -81.4698 },
      ]},
      { name: 'Toon Lagoon', attractions: [
        { name: 'Classic Comic Strip Characters', lat: 28.4710, lng: -81.4710 },
        { name: 'Me Ship, The Olive®', lat: 28.4707, lng: -81.4715 },
        { name: "Popeye & Bluto's Bilge-Rat Barges®", height: '42"/ 107 cm', lat: 28.4705, lng: -81.4718 },
        { name: "Dudley Do-Right's Ripsaw Falls®", height: '44"/ 112 cm', lat: 28.4703, lng: -81.4720 },
      ]},
      { name: 'Skull Island: Reign of Kong', attractions: [
        { name: 'Skull Island: Reign of Kong', height: '36"/ 92 cm', lat: 28.4700, lng: -81.4728 },
      ]},
      { name: 'Jurassic Park', attractions: [
        { name: 'Camp Jurassic', lat: 28.4698, lng: -81.4738 },
        { name: 'Pteranodon Flyers', height: '36"–56"/ 92–143 cm', lat: 28.4695, lng: -81.4742 },
        { name: 'Jurassic Park River Adventure', height: '42"/ 107 cm', lat: 28.4692, lng: -81.4745 },
        { name: 'Raptor Encounter', lat: 28.4690, lng: -81.4748 },
        { name: 'Jurassic Park Discovery Center', lat: 28.4688, lng: -81.4751 },
        { name: 'Jurassic World VelociCoaster', height: '51"/ 130 cm', lat: 28.4685, lng: -81.4755 },
      ]},
      { name: 'The Wizarding World of Harry Potter – Hogsmeade', attractions: [
        { name: 'Harry Potter and the Forbidden Journey™', height: '48"/ 122 cm', lat: 28.4682, lng: -81.4762 },
        { name: 'Flight of the Hippogriff™', height: '36"/ 92 cm', lat: 28.4680, lng: -81.4765 },
        { name: 'Frog Choir / Triwizard Spirit Rally', lat: 28.4678, lng: -81.4768 },
        { name: 'Ollivanders™', lat: 28.4676, lng: -81.4770 },
        { name: "Hagrid's Magical Creatures Motorbike Adventure™", height: '48"/ 122 cm', lat: 28.4674, lng: -81.4773 },
        { name: 'Hogwarts™ Express – Hogsmeade™ Station', lat: 28.4672, lng: -81.4776 },
      ]},
      { name: 'The Lost Continent', attractions: [
        { name: 'The Mystic Fountain', lat: 28.4670, lng: -81.4782 },
      ]},
      { name: 'Seuss Landing', attractions: [
        { name: 'The High in the Sky Seuss Trolley Train Ride!™', height: '36"/ 92 cm', lat: 28.4668, lng: -81.4790 },
        { name: 'Caro-Seuss-el™', lat: 28.4666, lng: -81.4792 },
        { name: "Oh! The Stories You'll Hear!™", lat: 28.4664, lng: -81.4795 },
        { name: 'Dr. Seuss Character Zone', lat: 28.4662, lng: -81.4798 },
        { name: 'One Fish, Two Fish, Red Fish, Blue Fish™', lat: 28.4660, lng: -81.4800 },
        { name: 'The Cat in the Hat™', height: '36"/ 92 cm', lat: 28.4658, lng: -81.4802 },
        { name: "If I Ran The Zoo™", lat: 28.4656, lng: -81.4805 },
      ]},
    ]
  },
  {
    id: 'usf', name: 'Universal Studios Florida', emoji: '🎭', label: 'Universal Orlando', cls: 'pk-usf',
    zones: [
      { name: 'Minion Land', attractions: [
        { name: "Illumination's Villain-Con Minion Blast", lat: 28.4754, lng: -81.4668 },
        { name: 'Despicable Me Minion Mayhem', height: '40"/ 102 cm', lat: 28.4758, lng: -81.4665 },
        { name: 'Illumination Theater™', lat: 28.4756, lng: -81.4662 },
      ]},
      { name: 'New York', attractions: [
        { name: 'Hollywood Rip Ride Rockit', height: '51"–79"/ 130–201 cm', lat: 28.4762, lng: -81.4655 },
        { name: 'Meet The TRANSFORMERS™', lat: 28.4765, lng: -81.4652 },
        { name: 'TRANSFORMERS™: The Ride-3D', height: '40"/ 102 cm', lat: 28.4768, lng: -81.4650 },
        { name: 'Race Through New York Starring Jimmy Fallon', height: '40"/ 102 cm', lat: 28.4770, lng: -81.4648 },
        { name: 'Marilyn & the Diamond Bellas', lat: 28.4772, lng: -81.4646 },
        { name: 'Revenge of the Mummy', height: '48"/ 122 cm', lat: 28.4774, lng: -81.4644 },
        { name: 'The Blues Brothers® Show', lat: 28.4776, lng: -81.4642 },
        { name: 'Sing it!', lat: 28.4778, lng: -81.4640 },
        { name: '¡Vamos! – Báilalo', lat: 28.4780, lng: -81.4638 },
      ]},
      { name: 'San Francisco', attractions: [
        { name: 'Beat Builders', lat: 28.4784, lng: -81.4635 },
        { name: 'Fast & Furious – Supercharged', height: '40"/ 102 cm', lat: 28.4786, lng: -81.4632 },
      ]},
      { name: 'The Wizarding World of Harry Potter – Diagon Alley', attractions: [
        { name: "Hogwarts™ Express – King's Cross Station", lat: 28.4792, lng: -81.4625 },
        { name: 'Knight Bus™', lat: 28.4794, lng: -81.4622 },
        { name: 'Harry Potter and the Escape from Gringotts™', height: '42"/ 107 cm', lat: 28.4796, lng: -81.4618 },
        { name: 'Ollivanders™', lat: 28.4798, lng: -81.4615 },
        { name: 'Gringotts™ Money Exchange', lat: 28.4800, lng: -81.4612 },
        { name: 'The Tales of Beedle the Bard™ / Celestina Warbeck and the Banshees', lat: 28.4802, lng: -81.4609 },
      ]},
      { name: 'World Expo', attractions: [
        { name: 'MEN IN BLACK™ Alien Attack™', height: '42"/ 107 cm', lat: 28.4806, lng: -81.4605 },
      ]},
      { name: 'Springfield, U.S.A.: Home of the Simpsons', attractions: [
        { name: 'The Simpsons Ride™', height: '40"/ 102 cm', lat: 28.4810, lng: -81.4600 },
        { name: "Kang & Kodos' Twirl 'n' Hurl", lat: 28.4812, lng: -81.4598 },
      ]},
      { name: "Woody Woodpecker's KidZone", attractions: [
        { name: 'Animal Actors on Location!', lat: 28.4816, lng: -81.4594 },
        { name: 'E.T. Adventure', height: '34"/ 87 cm', lat: 28.4818, lng: -81.4592 },
        { name: 'Meet SpongeBob SquarePants and Friends', lat: 28.4820, lng: -81.4590 },
      ]},
      { name: 'Hollywood', attractions: [
        { name: 'NBC Media Center', lat: 28.4824, lng: -81.4586 },
        { name: 'Drive In and Dance', lat: 28.4826, lng: -81.4584 },
        { name: 'Character Party Zone', lat: 28.4828, lng: -81.4582 },
        { name: "Universal Orlando's Horror Make-Up Show", lat: 28.4830, lng: -81.4580 },
        { name: 'Hollywood Character Zone', lat: 28.4832, lng: -81.4578 },
        { name: 'The Bourne Stuntacular', lat: 28.4834, lng: -81.4576 },
      ]},
    ]
  },
  {
    id: 'epic', name: 'Epic Universe', emoji: '✨', label: 'Universal Orlando', cls: 'pk-epic',
    zones: [
      { name: 'Celestial Park', attractions: [
        { name: 'Stardust Racers', height: '48"/ 122 cm', lat: 28.4610, lng: -81.4625 },
        { name: 'Constellation Carousel', lat: 28.4608, lng: -81.4622 },
        { name: 'Astronomica', lat: 28.4606, lng: -81.4620 },
      ]},
      { name: 'Super Nintendo World™', attractions: [
        { name: "Mario Kart™: Bowser's Challenge", height: '40"/ 102 cm', lat: 28.4598, lng: -81.4635 },
        { name: 'Mine-Cart Madness™', height: '40"/ 102 cm', lat: 28.4596, lng: -81.4638 },
        { name: "Yoshi's Adventure™", height: '34"/ 87 cm', lat: 28.4594, lng: -81.4641 },
        { name: 'Mario & Luigi Meet & Greet', lat: 28.4592, lng: -81.4644 },
        { name: 'Princess Peach Meet & Greet', lat: 28.4590, lng: -81.4647 },
        { name: 'Toad Meet & Greet', lat: 28.4588, lng: -81.4650 },
        { name: 'Donkey Kong Meet & Greet', lat: 28.4586, lng: -81.4653 },
      ]},
      { name: 'Dark Universe', attractions: [
        { name: 'Monsters Unchained: The Frankenstein Experiment', height: '48"/ 122 cm', lat: 28.4580, lng: -81.4615 },
        { name: 'Curse of the Werewolf', height: '40"/ 102 cm', lat: 28.4578, lng: -81.4612 },
        { name: 'Dark Universe Character Meet & Greet', lat: 28.4576, lng: -81.4609 },
        { name: 'Darkmoor Monster Makeup Experience', lat: 28.4574, lng: -81.4606 },
      ]},
      { name: 'The Wizarding World of Harry Potter – Ministry of Magic', attractions: [
        { name: 'Harry Potter and the Battle at the Ministry™', height: '40"/ 102 cm', lat: 28.4568, lng: -81.4620 },
        { name: 'Le Cirque Arcanus™', lat: 28.4566, lng: -81.4623 },
        { name: 'Cosme Acajor Baguettes Magique™', lat: 28.4564, lng: -81.4626 },
      ]},
      { name: 'How to Train Your Dragon – Isle of Berk', attractions: [
        { name: "Hiccup's Wing Gliders", height: '40"/ 102 cm', lat: 28.4558, lng: -81.4635 },
        { name: "Dragon Racer's Rally", height: '48"/ 122 cm', lat: 28.4556, lng: -81.4638 },
        { name: 'Fyre Drill', lat: 28.4554, lng: -81.4641 },
        { name: 'The Untrainable Dragon', lat: 28.4552, lng: -81.4644 },
        { name: 'Viking Training Camp', lat: 28.4550, lng: -81.4647 },
        { name: 'Meet Toothless and Friends', lat: 28.4548, lng: -81.4650 },
      ]},
    ]
  },
];

function pkToggleCard(id) {
  const wasOpen = pkOpenCards.has(id);
  if (wasOpen) {
    pkOpenCards.delete(id);
    // Destruir mapa al colapsar para evitar grises
    if (_parkMaps[id]) {
      _parkMaps[id].remove();
      delete _parkMaps[id];
    }
  } else {
    pkOpenCards.add(id);
  }
  renderParques();
  // Si se abre, inicializar mapa después del render
  if (!wasOpen) {
    setTimeout(() => initParkMap(id), 80);
  }
}

function pkSetFilter(id) {
  pkFilter = id;
  renderParques();
}

// Filtra en vivo sobre el DOM ya renderizado (sin volver a llamar a
// renderParques) para no perder el foco del input en cada letra que se
// escribe. Al limpiar la búsqueda, todo vuelve al estado de apertura que
// tenían las cards antes de buscar (pkOpenCards).
function pkApplySearch(value) {
  pkSearchQuery = value;
  const q = pkNorm(value);
  document.querySelectorAll('.park-card').forEach(card => {
    const parkId = card.id.replace('pkcard-', '');
    const passesFilter = pkFilter === 'all' || pkFilter === parkId;
    let anyMatch = false;
    card.querySelectorAll('.park-attr-item').forEach(item => {
      const match = !q || (item.dataset.name || '').includes(q);
      item.style.display = match ? '' : 'none';
      if (match) anyMatch = true;
    });
    card.querySelectorAll('.park-zone-title').forEach(title => {
      let el = title.nextElementSibling;
      let zoneHasMatch = false;
      while (el && el.classList.contains('park-attr-item')) {
        if (el.style.display !== 'none') zoneHasMatch = true;
        el = el.nextElementSibling;
      }
      title.style.display = (!q || zoneHasMatch) ? '' : 'none';
    });
    card.classList.toggle('pk-hidden', !passesFilter || (!!q && !anyMatch));
    if (q) {
      if (anyMatch) card.classList.add('open');
    } else {
      card.classList.toggle('open', pkOpenCards.has(parkId));
    }
  });
  const clearBtn = document.querySelector('.parques-search-clear');
  const wrap = document.querySelector('.parques-search-wrap');
  if (wrap) wrap.classList.toggle('has-value', !!value);
  if (!clearBtn && value) {
    // Se agrega el botón de borrar sin re-renderizar todo el panel.
    const btn = document.createElement('button');
    btn.className = 'parques-search-clear';
    btn.setAttribute('aria-label', 'Borrar búsqueda');
    btn.innerHTML = ic('x', 13);
    btn.onclick = () => { document.getElementById('pkSearchInput').value = ''; pkApplySearch(''); };
    wrap && wrap.appendChild(btn);
  } else if (clearBtn && !value) {
    clearBtn.remove();
  }
}

async function pkResetAll() {
  const ok = await showConfirm('Se va a borrar todo el progreso de atracciones. ¿Confirmás?', '¿Reiniciar Parques?', 'Reiniciar', true);
  if (!ok) return;
  parquesState = {};
  parquesSave();
  renderParques();
  updateParquesCounter();
}

const pkFilterMetaBase = [
  { id: 'all',  label: 'Todos' },
  { id: 'mk',   label: 'Magic Kingdom' },
  { id: 'epcot',label: 'EPCOT' },
  { id: 'hs',   label: 'Hollywood Studios' },
  { id: 'ioa',  label: 'Islands of Adventure' },
  { id: 'usf',  label: 'Universal Studios' },
  { id: 'epic', label: 'Epic Universe' },
];
function pkFilterMetaList() {
  return [...pkFilterMetaBase, ...customParks.map(p => ({ id: p.id, label: p.name }))];
}

// ─── PARK MAPS ─────────────────────────────────────────────
const PARK_COLORS = {
  mk:   '#c084fc',
  epcot:'#4dd0c4',
  hs:   '#ff7675',
  ioa:  '#69f0ae',
  usf:  '#64b5f6',
  epic: '#ce93d8',
};

let _parkMaps = {};
let _pkMapOpen = {};

function makeParkPin(color, isDone, label) {
  const bg   = isDone ? 'transparent' : color;
  const border = isDone ? color : 'rgba(255,255,255,0.25)';
  const textColor = isDone ? color : '#fff';
  const check = isDone ? '✓' : '';
  return L.divIcon({
    className: '',
    html: `<div style="
      width:26px;height:26px;border-radius:50%;
      background:${bg};
      color:${textColor};
      display:flex;align-items:center;justify-content:center;
      font-family:'DM Sans',sans-serif;font-weight:800;font-size:13px;
      border:2px solid ${border};
      box-shadow:0 2px 8px rgba(0,0,0,0.5);
      opacity:${isDone ? '0.7' : '1'};
      transition:all .2s;
    ">${check}</div>`,
    iconSize: [26, 26],
    iconAnchor: [13, 13],
    popupAnchor: [0, -16]
  });
}

function pkToggleParkMap(parkId) {
  const container = document.getElementById(`pkmap-container-${parkId}`);
  const chev = document.getElementById(`pkmap-chev-${parkId}`);
  const wrap = document.getElementById(`pkmap-wrap-${parkId}`);
  if (!container) return;

  const isOpen = container.style.display !== 'none';
  if (isOpen) {
    container.style.display = 'none';
    if (chev) chev.style.transform = '';
    if (wrap) wrap.classList.remove('open');
    if (_parkMaps[parkId]) {
      _parkMaps[parkId].remove();
      delete _parkMaps[parkId];
    }
  } else {
    container.style.display = 'block';
    if (chev) chev.style.transform = 'rotate(180deg)';
    if (wrap) wrap.classList.add('open');
    setTimeout(() => initParkMap(parkId), 80);
  }
}

function initParkMap(parkId) {
  const container = document.getElementById(`pkmap-container-${parkId}`);
  if (!container || container.style.display === 'none') return;

  // Destruir instancia previa si existe
  if (_parkMaps[parkId]) {
    _parkMaps[parkId].remove();
    delete _parkMaps[parkId];
  }
  container.innerHTML = '';

  const park = allParksList().find(p => p.id === parkId);
  if (!park) return;

  const color = PARK_COLORS[parkId] || '#8b5cf6';
  const map = L.map(container, { zoomControl: true, attributionControl: false });
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
  }).addTo(map);

  const bounds = [];
  const markers = [];
  let globalIdx = 0;

  park.zones.forEach((zone, zi) => {
    zone.attractions.forEach((attr, ai) => {
      const coord = pkCoord(parkId, zi, ai, attr);
      if (!coord) { globalIdx++; return; }
      const isDone = pkDone(parkId, zi, ai);
      const icon = makeParkPin(color, isDone, attr.name);

      const heightHtml = attr.height
        ? `<div style="font-size:10px;color:#8b5cf6;font-weight:600;margin-top:2px">↑ ${attr.height}</div>`
        : '';
      const doneHtml = isDone
        ? `<div style="margin-top:5px;font-size:11px;color:#10b981">✓ Completada</div>`
        : '';

      const marker = L.marker([coord.lat, coord.lng], { icon })
        .bindPopup(`
          <div class="map-popup-name">${attr.name}</div>
          <div class="map-popup-desc">${zone.name}</div>
          ${heightHtml}
          ${doneHtml}
        `, { maxWidth: 200 })
        .addTo(map);

      markers[globalIdx] = marker;
      bounds.push([coord.lat, coord.lng]);
      globalIdx++;
    });
  });

  if (bounds.length > 0) {
    map.fitBounds(bounds, { padding: [28, 28] });
  }

  map._markers = markers;
  _parkMaps[parkId] = map;
  setTimeout(() => map && map.invalidateSize(), 150);
}

// Inicializar mapas de parques que están abiertos al renderizar
function initOpenParkMaps() {
  pkOpenCards.forEach(parkId => {
    setTimeout(() => initParkMap(parkId), 120);
  });
}

function renderParques() {
  const panel = document.getElementById('panel-parques');
  const { done: gDone, total: gTotal } = pkCountAll();
  const gPct = gTotal > 0 ? Math.round(gDone / gTotal * 100) : 0;

  let html = `<div class="parques-panel">
    <div class="parques-global-bar">
      <div class="parques-global-nums">
        <div class="parques-global-count">${gDone}</div>
        <div class="parques-global-lbl">de ${gTotal}</div>
      </div>
      <div class="parques-global-right">
        <div class="parques-global-title">Atracciones completadas</div>
        <div class="parques-prog-bg"><div class="parques-prog-fill" style="width:${gPct}%"></div></div>
      </div>
    </div>
    <div class="parques-search-wrap">
      ${ic('search', 15)}
      <input type="text" class="parques-search-input" id="pkSearchInput" placeholder="Buscar una atracción…" value="${escapeHtml(pkSearchQuery)}" oninput="pkApplySearch(this.value)">
      ${pkSearchQuery ? `<button class="parques-search-clear" onclick="document.getElementById('pkSearchInput').value='';pkApplySearch('')" aria-label="Borrar búsqueda">${ic('x', 13)}</button>` : ''}
    </div>
    <div class="parques-filter-bar">`;

  pkFilterMetaList().forEach(f => {
    html += `<button class="parques-filter-btn${pkFilter===f.id?' active':''}" onclick="pkSetFilter('${f.id}')">${f.label}</button>`;
  });
  html += `</div>
    <div style="display:flex;justify-content:flex-end;margin-bottom:10px">
      <button class="wm-reset-btn" onclick="pkOpenAddParkModal()">+ Agregar parque</button>
    </div>`;

  allParksList().forEach(park => {
    const visible = pkFilter === 'all' || pkFilter === park.id;
    const { done, total } = pkCountPark(park);
    const pct = total > 0 ? Math.round(done / total * 100) : 0;
    const q = pkNorm(pkSearchQuery);
    const parkMatches = !q || park.zones.some(z => z.attractions.some(a => pkNorm(a.name).includes(q)));
    const isOpen = pkOpenCards.has(park.id) || (!!q && parkMatches);
    const isCustom = pkIsCustomPark(park.id);
    const colorStyle = isCustom ? ` style="--pk-color:${park.color}"` : '';

    html += `<div class="park-card ${park.cls}${isCustom ? ' pk-custom' : ''}${(!visible || (q && !parkMatches)) ? ' pk-hidden' : ''}${isOpen ? ' open' : ''}" id="pkcard-${park.id}"${colorStyle}>
      <div class="park-card-header" onclick="pkToggleCard('${park.id}')">
        <span class="park-card-emoji">${ic(PARK_ICONS[park.id] || 'ferris', 20)}</span>
        <div class="park-card-info">
          <div class="park-card-name">${escapeHtml(park.name)}</div>
          <div class="park-card-label">${escapeHtml(park.label)}</div>
        </div>
        <div class="park-card-right">
          <span class="park-card-count">${done}/${total}</span>
          <div class="park-mini-bar-bg"><div class="park-mini-bar-fill" style="width:${pct}%"></div></div>
          ${isCustom ? `<button class="wm-icon-btn wm-icon-del" onclick="pkDeleteCustomPark('${park.id}');event.stopPropagation()" title="Eliminar parque" aria-label="Eliminar parque ${escapeHtml(park.name)}">${ic('x', 13)}</button>` : ''}
          <span class="park-card-chevron">▾</span>
        </div>
      </div>
      <div class="park-card-body">`;

    park.zones.forEach((zone, zi) => {
      const zoneMatches = !q || zone.attractions.some(a => pkNorm(a.name).includes(q));
      html += `<div class="park-zone-title"${zoneMatches ? '' : ' style="display:none"'}>${escapeHtml(zone.name)}</div>`;
      zone.attractions.forEach((attr, ai) => {
        const done = pkDone(park.id, zi, ai);
        const itemMatches = !q || pkNorm(attr.name).includes(q);
        const hasCoord = !!pkCoord(park.id, zi, ai, attr);
        html += `<div class="park-attr-item${done ? ' pk-done' : ''}" data-name="${escapeHtml(pkNorm(attr.name))}"${itemMatches ? '' : ' style="display:none"'} onclick="toggleAttraction('${park.id}',${zi},${ai})">
          <div class="park-attr-check">${done ? '✓' : ''}</div>
          <div class="park-attr-body">
            <div class="park-attr-name">${escapeHtml(attr.name)}</div>
            ${attr.height ? `<div class="park-attr-height">↑ ${escapeHtml(attr.height)}</div>` : ''}
          </div>
          <button class="wm-icon-btn pk-loc-btn${hasCoord ? '' : ' pk-loc-missing'}" onclick="pkOpenLocationModal('${park.id}',${zi},${ai});event.stopPropagation()" title="${hasCoord ? 'Corregir ubicación' : 'Sin coordenadas — agregar'}" aria-label="Ubicación de ${escapeHtml(attr.name)}">${ic('pin', 13)}</button>
          ${attr._custom ? `<button class="wm-icon-btn wm-icon-del" onclick="pkDeleteAttraction('${park.id}',${zi},${ai},event)" title="Eliminar" aria-label="Eliminar ${escapeHtml(attr.name)}">${ic('x', 13)}</button>` : ''}
        </div>`;
      });
    });

    html += `<div class="park-add-attr-row" style="gap:8px;flex-wrap:wrap">
      <button class="wm-reset-btn" onclick="pkOpenAddAttrModal('${park.id}')">+ Agregar atracción</button>
      <button class="wm-reset-btn" onclick="pkVerifyParkCoords('${park.id}')" id="pk-verify-btn-${park.id}">${ic('pin',12)} Verificar coordenadas</button>
    </div>`;

    // Mapa colapsable por parque
    let parkAttrsWithCoordsCount = 0;
    park.zones.forEach((z, zi) => z.attractions.forEach((a, ai) => { if (pkCoord(park.id, zi, ai, a)) parkAttrsWithCoordsCount++; }));
    if (parkAttrsWithCoordsCount > 0) {
      html += `
        <div class="day-map-wrap" id="pkmap-wrap-${park.id}" style="margin:0;border-radius:0 0 var(--radius) var(--radius);border-top:1px solid var(--border);border-left:none;border-right:none;border-bottom:none;">
          <div class="day-map-header" onclick="pkToggleParkMap('${park.id}')">
            <div class="day-map-title">${ic('map',13)} Mapa · ${parkAttrsWithCoordsCount} atracciones</div>
            <span class="day-map-chevron" id="pkmap-chev-${park.id}">▾</span>
          </div>
          <div id="pkmap-container-${park.id}" class="day-map-container" style="display:none;height:280px;"></div>
        </div>`;
    }

    html += `</div></div>`;
  });

  html += `<div class="parques-reset-row"><button class="wm-reset-btn" onclick="pkResetAll()">↺ Reiniciar todo</button></div>`;
  html += `</div>`;
  panel.innerHTML = html;
  updateParquesCounter();
  // Inicializar mapas para cards ya abiertas
  setTimeout(() => {
    pkOpenCards.forEach(parkId => {
      // Solo si el container existe y está visible (card open)
      const container = document.getElementById(`pkmap-container-${parkId}`);
      if (container && container.style.display !== 'none' && !_parkMaps[parkId]) {
        initParkMap(parkId);
      }
    });
  }, 80);
}


// ─── MODAL: agregar parque personalizado ──────────────────────────
let pkAddParkColor = PARK_COLOR_OPTIONS[0];
let pkWikiCandidates = []; // [{name, checked}] — resultado de la búsqueda automática, editable antes de guardar

function pkOpenAddParkModal() {
  const nameEl = document.getElementById('pk-add-name');
  nameEl.value = '';
  nameEl.classList.remove('error');
  document.getElementById('pk-add-name-err').classList.remove('show');
  pkAddParkColor = PARK_COLOR_OPTIONS[Math.floor(Math.random() * PARK_COLOR_OPTIONS.length)];
  pkRenderColorSwatches();
  pkWikiCandidates = [];
  document.getElementById('pk-wiki-status').textContent = '';
  document.getElementById('pk-wiki-results').style.display = 'none';
  document.getElementById('pk-wiki-results').innerHTML = '';
  document.getElementById('addParkModal').classList.add('open');
}
function pkCloseAddParkModal() {
  document.getElementById('addParkModal').classList.remove('open');
}
function pkRenderColorSwatches() {
  const wrap = document.getElementById('pk-color-swatches');
  if (!wrap) return;
  wrap.innerHTML = PARK_COLOR_OPTIONS.map(c =>
    `<button type="button" class="pk-color-swatch${c === pkAddParkColor ? ' active' : ''}" style="background:${c}" onclick="pkPickColor('${c}')" aria-label="Elegir color"></button>`
  ).join('');
}
function pkPickColor(c) { pkAddParkColor = c; pkRenderColorSwatches(); }

// Búsqueda automática en Wikipedia: es un intento "best effort" — Wikipedia
// no tiene una API pensada para esto, así que se busca el artículo del
// parque, se ubica una sección tipo "Attractions"/"Rides" y se extraen los
// nombres de su lista. La calidad depende de cómo esté armado ese artículo
// puntual; por eso el resultado siempre se muestra para revisar y destildar
// antes de guardarlo, nunca se importa directo.
async function pkWikiSearchAttractions(parkName) {
  try {
    const searchUrl = `https://en.wikipedia.org/w/api.php?action=opensearch&search=${encodeURIComponent(parkName)}&limit=1&namespace=0&format=json&origin=*`;
    const searchRes = await fetch(searchUrl);
    const searchData = await searchRes.json();
    const title = searchData && searchData[1] && searchData[1][0];
    if (!title) return { ok: false, reason: 'not_found' };

    const sectionsUrl = `https://en.wikipedia.org/w/api.php?action=parse&page=${encodeURIComponent(title)}&prop=sections&format=json&origin=*`;
    const sectionsRes = await fetch(sectionsUrl);
    const sectionsData = await sectionsRes.json();
    const sections = (sectionsData.parse && sectionsData.parse.sections) || [];
    const target = sections.find(s => /attraction|ride|roller.?coaster/i.test(s.line));
    if (!target) return { ok: false, reason: 'no_section', title };

    const wikitextUrl = `https://en.wikipedia.org/w/api.php?action=parse&page=${encodeURIComponent(title)}&prop=wikitext&section=${target.index}&format=json&origin=*`;
    const wikitextRes = await fetch(wikitextUrl);
    const wikitextData = await wikitextRes.json();
    const wikitext = wikitextData.parse && wikitextData.parse.wikitext && wikitextData.parse.wikitext['*'];
    if (!wikitext) return { ok: false, reason: 'no_wikitext', title };

    const names = pkParseAttractionNames(wikitext);
    if (names.length === 0) return { ok: false, reason: 'empty', title };
    return { ok: true, title, names };
  } catch (e) {
    devError('pkWikiSearchAttractions error', e);
    return { ok: false, reason: 'error' };
  }
}

function pkParseAttractionNames(wikitext) {
  const names = [];
  wikitext.split('\n').forEach(raw => {
    let line = raw.trim();
    if (!line.startsWith('*') && !line.startsWith('|')) return;
    line = line.replace(/^\*+\s*/, '').replace(/^\|\s*/, '');
    line = line.replace(/<ref[^>]*>.*?<\/ref>/gi, '').replace(/<ref[^>]*\/>/gi, '');
    line = line.replace(/\{\{[^}]*\}\}/g, '');
    const wikilink = line.match(/\[\[([^\]|]+)(?:\|([^\]]+))?\]\]/);
    let name;
    if (wikilink) {
      name = (wikilink[2] || wikilink[1]).trim();
    } else {
      name = line.replace(/'''/g, '').replace(/''/g, '').trim();
      name = name.split(/\s+[–—-]\s+/)[0];
      name = name.split('(')[0].trim();
    }
    name = name.replace(/\[\[|\]\]/g, '').trim();
    if (name && name.length > 1 && name.length < 60 && !/^\d+$/.test(name)) names.push(name);
  });
  return [...new Set(names)].slice(0, 40);
}

async function pkWikiSearchClick() {
  const nameEl = document.getElementById('pk-add-name');
  const name = nameEl.value.trim();
  if (!name) {
    nameEl.classList.add('error');
    document.getElementById('pk-add-name-err').classList.add('show');
    return;
  }
  const statusEl = document.getElementById('pk-wiki-status');
  statusEl.textContent = 'Buscando en Wikipedia…';
  document.getElementById('pk-wiki-results').style.display = 'none';
  const result = await pkWikiSearchAttractions(name);
  if (!result.ok) {
    statusEl.textContent = 'No pude encontrar una lista automática para ese parque — creá el parque y agregá las atracciones a mano con "+ Agregar atracción".';
    pkWikiCandidates = [];
    return;
  }
  pkWikiCandidates = result.names.map(n => ({ name: n, checked: true }));
  statusEl.textContent = `Encontradas ${pkWikiCandidates.length} en el artículo "${result.title}" — revisá y destildá las que no correspondan antes de crear el parque:`;
  pkRenderWikiResults();
}
function pkRenderWikiResults() {
  const wrap = document.getElementById('pk-wiki-results');
  if (!wrap) return;
  if (pkWikiCandidates.length === 0) { wrap.style.display = 'none'; wrap.innerHTML = ''; return; }
  wrap.style.display = 'block';
  wrap.innerHTML = pkWikiCandidates.map((c, i) =>
    `<label class="pk-wiki-item">
      <input type="checkbox" ${c.checked ? 'checked' : ''} onchange="pkWikiCandidates[${i}].checked=this.checked">
      <span>${escapeHtml(c.name)}</span>
    </label>`
  ).join('');
}

function pkCreateCustomPark() {
  const nameEl = document.getElementById('pk-add-name');
  const name = nameEl.value.trim();
  if (!name) {
    nameEl.classList.add('error');
    document.getElementById('pk-add-name-err').classList.add('show');
    return;
  }
  const id = 'custom_' + Date.now();
  const selected = pkWikiCandidates.filter(c => c.checked).map(c => ({ name: c.name, _custom: true }));
  const park = {
    id, name, label: 'Parque personalizado', cls: 'pk-custom', color: pkAddParkColor,
    zones: [{ name: 'Atracciones', attractions: selected }]
  };
  customParks.push(park);
  PARK_COLORS[id] = pkAddParkColor;
  customParksSave();
  pkOpenCards.add(id);
  pkCloseAddParkModal();
  renderParques();
  showMToast('Parque agregado');
}

async function pkDeleteCustomPark(parkId) {
  const park = customParks.find(p => p.id === parkId);
  if (!park) return;
  const ok = await showConfirm(`Se va a borrar "${park.name}" y todas sus atracciones.`, '¿Eliminar parque?', 'Eliminar');
  if (!ok) return;
  customParks = customParks.filter(p => p.id !== parkId);
  customParksSave();
  // Limpiar el progreso guardado de ese parque
  Object.keys(parquesState).filter(k => k.startsWith(parkId + '_')).forEach(k => delete parquesState[k]);
  parquesSave();
  renderParques();
  showMToast('Parque eliminado');
}

// ─── MODAL: agregar atracción a cualquier parque ──────────────────
let pkAddAttrParkId = null;
function pkOpenAddAttrModal(parkId) {
  pkAddAttrParkId = parkId;
  const nameEl = document.getElementById('pk-attr-add-name');
  nameEl.value = '';
  nameEl.classList.remove('error');
  document.getElementById('pk-attr-add-name-err').classList.remove('show');
  document.getElementById('pk-attr-add-height').value = '';
  document.getElementById('pk-attr-add-address').value = '';
  document.getElementById('pk-attr-add-lat').value = '';
  document.getElementById('pk-attr-add-lng').value = '';
  document.getElementById('pk-attr-loc-status').textContent = '';
  document.getElementById('addAttrModal').classList.add('open');
}
function pkCloseAddAttrModal() {
  document.getElementById('addAttrModal').classList.remove('open');
}
async function pkAttrLocSearchAuto() {
  const name = document.getElementById('pk-attr-add-name').value.trim();
  const statusEl = document.getElementById('pk-attr-loc-status');
  if (!name) { statusEl.textContent = 'Escribí primero el nombre de la atracción.'; return; }
  const park = allParksList().find(p => p.id === pkAddAttrParkId);
  statusEl.textContent = 'Buscando en Wikipedia…';
  const result = await geoAutoSearch(name, park && park.name);
  if (!result) { statusEl.textContent = 'No encontré esta atracción ni en Wikipedia ni por dirección — probá con una dirección manual o cargá las coordenadas a mano.'; return; }
  document.getElementById('pk-attr-add-lat').value = result.lat.toFixed(6);
  document.getElementById('pk-attr-add-lng').value = result.lng.toFixed(6);
  statusEl.textContent = result.source === 'wikipedia' ? `Encontrado en "${result.title}".` : 'Encontrado por dirección aproximada — revisalo bien.';
}
async function pkAttrLocSearchAddress() {
  const address = document.getElementById('pk-attr-add-address').value.trim();
  const statusEl = document.getElementById('pk-attr-loc-status');
  if (!address) { statusEl.textContent = 'Escribí una dirección primero.'; return; }
  statusEl.textContent = 'Buscando dirección…';
  const result = await geoNominatimAddress(address);
  if (!result) { statusEl.textContent = 'No encontré esa dirección.'; return; }
  document.getElementById('pk-attr-add-lat').value = result.lat.toFixed(6);
  document.getElementById('pk-attr-add-lng').value = result.lng.toFixed(6);
  statusEl.textContent = 'Dirección encontrada.';
}
function pkAddAttraction() {
  const nameEl = document.getElementById('pk-attr-add-name');
  const name = nameEl.value.trim();
  if (!name) {
    nameEl.classList.add('error');
    document.getElementById('pk-attr-add-name-err').classList.add('show');
    return;
  }
  const height = document.getElementById('pk-attr-add-height').value.trim();
  const lat = parseFloat(document.getElementById('pk-attr-add-lat').value);
  const lng = parseFloat(document.getElementById('pk-attr-add-lng').value);
  const attr = { name, _custom: true };
  if (height) attr.height = height;
  if (!isNaN(lat) && !isNaN(lng)) { attr.lat = lat; attr.lng = lng; }

  const park = allParksList().find(p => p.id === pkAddAttrParkId);
  if (!park) return;

  if (pkIsCustomPark(park.id)) {
    let zone = park.zones[0];
    if (!zone) { zone = { name: 'Atracciones', attractions: [] }; park.zones.push(zone); }
    zone.attractions.push(attr);
    customParksSave();
  } else {
    let zone = park.zones.find(z => z._extra);
    if (!zone) { zone = { name: 'Agregado por vos', attractions: [], _extra: true }; park.zones.push(zone); }
    zone.attractions.push(attr);
    extraZones[park.id] = zone;
    extraZonesSave();
  }
  pkOpenCards.add(park.id);
  pkCloseAddAttrModal();
  renderParques();
  showMToast('Atracción agregada');
}

// Solo se puede borrar una atracción que el usuario agregó a mano
// (attr._custom) — las curadas del parque quedan protegidas.
function pkDeleteAttraction(parkId, zoneIdx, attrIdx, e) {
  e && e.stopPropagation();
  const park = allParksList().find(p => p.id === parkId);
  if (!park) return;
  const zone = park.zones[zoneIdx];
  if (!zone) return;
  const [removed] = zone.attractions.splice(attrIdx, 1);
  const prefix = `${parkId}_${zoneIdx}_`;
  const wasDone = !!parquesState[prefix + attrIdx];

  const reindex = (shiftUp) => {
    const rebuilt = {};
    Object.keys(parquesState).forEach(k => {
      if (k.startsWith(prefix)) {
        const idx = parseInt(k.slice(prefix.length), 10);
        if (!shiftUp && idx === attrIdx) return;
        const newIdx = shiftUp ? (idx >= attrIdx ? idx + 1 : idx) : (idx > attrIdx ? idx - 1 : idx);
        rebuilt[prefix + newIdx] = parquesState[k];
      } else {
        rebuilt[k] = parquesState[k];
      }
    });
    parquesState = rebuilt;
  };
  reindex(false);
  parquesSave();
  const isCustom = pkIsCustomPark(parkId);
  if (isCustom) customParksSave(); else extraZonesSave();
  renderParques();

  showUndoToast(`"${removed.name}" eliminada`, () => {
    zone.attractions.splice(attrIdx, 0, removed);
    reindex(true);
    if (wasDone) parquesState[prefix + attrIdx] = true;
    parquesSave();
    if (isCustom) customParksSave(); else extraZonesSave();
    renderParques();
  });
}

// ─── EXPORTAR / IMPORTAR TODO (backup en JSON) ────────────────────
function exportAllData() {
  const payload = {
    _app: 'orlando-planning',
    _exportedAt: new Date().toISOString(),
    hotel,
    days,
    visited: visited.map(s => [...s]),
    mealData,
    wmData,
    wmChecked: [...wmChecked],
    shopItems,
    shopChecked: [...shopChecked],
    packingItems,
    packingChecked: [...packingChecked],
    customParks,
    extraZones,
    coordOverrides,
    parquesState,
  };
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `orlando-planning-backup-${new Date().toISOString().slice(0, 10)}.json`;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
  showMToast('Backup descargado');
}

async function importAllData(event) {
  const file = event.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = async () => {
    let data;
    try { data = JSON.parse(reader.result); }
    catch (e) {
      await showAlert('El archivo no es un JSON válido.');
      event.target.value = '';
      return;
    }
    const ok = await showConfirm(
      data._app === 'orlando-planning'
        ? 'Se van a reemplazar TODOS los datos actuales (outlets, comidas, market, parques) por los del archivo.'
        : 'Este archivo no parece un backup de esta app, pero se puede intentar igual. Se van a reemplazar TODOS los datos actuales.',
      '¿Importar backup?', 'Importar', true
    );
    if (!ok) { event.target.value = ''; return; }

    if (data.hotel) Object.assign(hotel, data.hotel);
    if (data.days) { days.length = 0; data.days.forEach(d => days.push(d)); }
    if (data.visited) { visited.length = 0; data.visited.forEach(arr => visited.push(new Set(arr))); }
    if (data.mealData) mealData = data.mealData;
    if (data.wmData) wmData = data.wmData;
    if (data.wmChecked) { wmChecked.clear(); data.wmChecked.forEach(k => wmChecked.add(k)); }
    if (data.shopItems) shopItems = data.shopItems;
    if (data.shopChecked) { shopChecked.clear(); data.shopChecked.forEach(k => shopChecked.add(k)); }
    if (data.packingItems) packingItems = data.packingItems;
    if (data.packingChecked) { packingChecked.clear(); data.packingChecked.forEach(k => packingChecked.add(k)); }
    // Limpiar zonas "agregadas a mano" viejas antes de reaplicar, para no duplicarlas
    PARKS_DATA.forEach(p => { p.zones = p.zones.filter(z => !z._extra); });
    if (data.customParks) {
      customParks = data.customParks;
      customParks.forEach(p => { if (p.color) PARK_COLORS[p.id] = p.color; });
    }
    if (data.extraZones) {
      extraZones = data.extraZones;
      Object.keys(extraZones).forEach(parkId => {
        const park = PARKS_DATA.find(p => p.id === parkId);
        const zone = extraZones[parkId];
        if (park && zone && zone.attractions) park.zones.push(zone);
      });
    }
    if (data.coordOverrides) coordOverrides = data.coordOverrides;
    if (data.parquesState) parquesState = data.parquesState;

    hotelSave(); saveState(); mealSave(); wmSave(); shopSave(); packingSave();
    customParksSave(); extraZonesSave(); coordOverridesSave(); parquesSave();

    currentOutletDay = 0;
    closeSettingsDrawer();
    switchSection('outlets');
    showMToast('Datos importados');
    event.target.value = '';
  };
  reader.readAsText(file);
}

// ─── VACIAR TODO POR SECCIÓN (para arrancar un viaje distinto) ────
async function wipeSection(section) {
  if (section === 'outlets') return wipeOutlets();
  if (section === 'comidas') return wipeComidas();
  if (section === 'walmart') return wipeWalmart();
  if (section === 'parques') return wipeParques();
}
async function wipeOutlets() {
  const ok = await showConfirm('Se van a borrar TODOS los días y paradas del cronograma de Outlets (la lista de compras y el checklist no se tocan).', '¿Vaciar cronograma?', 'Vaciar', true);
  if (!ok) return;
  days.length = 0;
  visited.length = 0;
  currentOutletDay = 0;
  saveState();
  closeSettingsDrawer();
  switchSection('outlets');
  showMToast('Cronograma vaciado');
}
async function wipeComidas() {
  const ok = await showConfirm('Se van a borrar TODOS los días del plan de comidas.', '¿Vaciar Comidas?', 'Vaciar', true);
  if (!ok) return;
  mealData = [];
  mealSave();
  closeSettingsDrawer();
  switchSection('comidas');
  showMToast('Comidas vaciado');
}
async function wipeWalmart() {
  const ok = await showConfirm('Se van a borrar TODOS los productos de la lista de Market (las categorías quedan, para agregar productos nuevos).', '¿Vaciar Market?', 'Vaciar', true);
  if (!ok) return;
  wmData.forEach(cat => { cat.items = []; });
  wmChecked.clear();
  wmSave();
  closeSettingsDrawer();
  switchSection('walmart');
  showMToast('Market vaciado');
}
async function wipeParques() {
  const ok = await showConfirm('Se van a borrar todos los parques personalizados, las atracciones agregadas a mano en cualquier parque, y todo el progreso marcado.', '¿Vaciar Parques?', 'Vaciar', true);
  if (!ok) return;
  customParks = [];
  extraZones = {};
  coordOverrides = {};
  PARKS_DATA.forEach(p => { p.zones = p.zones.filter(z => !z._extra); });
  parquesState = {};
  pkFilter = 'all';
  customParksSave();
  extraZonesSave();
  coordOverridesSave();
  parquesSave();
  closeSettingsDrawer();
  switchSection('parques');
  showMToast('Parques vaciado');
}

// ─── MODAL: ubicación de una atracción (una por una) ──────────────
let pkLocTarget = null; // { parkId, zoneIdx, attrIdx }
function pkOpenLocationModal(parkId, zoneIdx, attrIdx) {
  const park = allParksList().find(p => p.id === parkId);
  const zone = park && park.zones[zoneIdx];
  const attr = zone && zone.attractions[attrIdx];
  if (!attr) return;
  pkLocTarget = { parkId, zoneIdx, attrIdx };
  document.getElementById('pk-loc-title').textContent = attr.name;
  document.getElementById('pk-loc-subtitle').textContent = park.name;
  document.getElementById('pk-loc-address').value = '';
  document.getElementById('pk-loc-status').textContent = '';
  document.getElementById('pk-loc-lat').value = attr.lat != null ? attr.lat : (coordOverrides[`${parkId}_${zoneIdx}_${attrIdx}`]?.lat ?? '');
  document.getElementById('pk-loc-lng').value = attr.lng != null ? attr.lng : (coordOverrides[`${parkId}_${zoneIdx}_${attrIdx}`]?.lng ?? '');
  document.getElementById('locationModal').classList.add('open');
}
function pkCloseLocationModal() {
  document.getElementById('locationModal').classList.remove('open');
  pkLocTarget = null;
}
async function pkLocSearchAuto() {
  if (!pkLocTarget) return;
  const park = allParksList().find(p => p.id === pkLocTarget.parkId);
  const attr = park.zones[pkLocTarget.zoneIdx].attractions[pkLocTarget.attrIdx];
  const statusEl = document.getElementById('pk-loc-status');
  statusEl.textContent = 'Buscando en Wikipedia…';
  const result = await geoAutoSearch(attr.name, park.name);
  if (!result) {
    statusEl.textContent = 'No encontré esta atracción ni en Wikipedia ni por dirección — probá escribiendo una dirección más específica o cargá las coordenadas a mano.';
    return;
  }
  document.getElementById('pk-loc-lat').value = result.lat.toFixed(6);
  document.getElementById('pk-loc-lng').value = result.lng.toFixed(6);
  statusEl.textContent = result.source === 'wikipedia'
    ? `Encontrado en el artículo "${result.title}" — revisá el pin y guardá si está bien.`
    : 'Encontrado por dirección aproximada (Wikipedia no tenía esta atracción) — revisá bien el pin antes de guardar.';
}
async function pkLocSearchAddress() {
  const address = document.getElementById('pk-loc-address').value.trim();
  const statusEl = document.getElementById('pk-loc-status');
  if (!address) { statusEl.textContent = 'Escribí una dirección primero.'; return; }
  statusEl.textContent = 'Buscando dirección…';
  const result = await geoNominatimAddress(address);
  if (!result) {
    statusEl.textContent = 'No encontré esa dirección — probá con más detalle (ej. agregá la ciudad).';
    return;
  }
  document.getElementById('pk-loc-lat').value = result.lat.toFixed(6);
  document.getElementById('pk-loc-lng').value = result.lng.toFixed(6);
  statusEl.textContent = 'Dirección encontrada — revisá el pin y guardá si está bien.';
}
function pkSaveLocation() {
  if (!pkLocTarget) return;
  const lat = parseFloat(document.getElementById('pk-loc-lat').value);
  const lng = parseFloat(document.getElementById('pk-loc-lng').value);
  if (isNaN(lat) || isNaN(lng) || lat < -90 || lat > 90 || lng < -180 || lng > 180) {
    document.getElementById('pk-loc-status').textContent = 'Coordenadas inválidas.';
    return;
  }
  pkSaveCoord(pkLocTarget.parkId, pkLocTarget.zoneIdx, pkLocTarget.attrIdx, lat, lng);
  pkCloseLocationModal();
  renderParques();
  showMToast('Ubicación guardada');
}
// Guarda coordenadas en el lugar correcto: directo en el objeto si la
// atracción es de un parque/zona propios del usuario (se persisten
// completos), o en coordOverrides si es una atracción curada de PARKS_DATA
// (que es código y no se puede editar de forma permanente).
function pkSaveCoord(parkId, zoneIdx, attrIdx, lat, lng) {
  const park = allParksList().find(p => p.id === parkId);
  if (!park) return;
  const zone = park.zones[zoneIdx];
  const attr = zone && zone.attractions[attrIdx];
  if (!attr) return;
  if (pkIsCustomPark(parkId)) {
    attr.lat = lat; attr.lng = lng;
    customParksSave();
  } else if (zone._extra) {
    attr.lat = lat; attr.lng = lng;
    extraZonesSave();
  } else {
    pkSetCoordOverride(parkId, zoneIdx, attrIdx, lat, lng);
  }
}

// ─── Verificación automática en lote, parque por parque ───────────
// Recorre las atracciones del parque y busca cada una en Wikipedia, con
// una pausa entre pedidos para no saturar la API. Nunca pisa una
// corrección que el usuario ya haya guardado a mano; sólo completa lo
// que falta o lo que sigue con la coordenada original sin revisar.
async function pkVerifyParkCoords(parkId) {
  const park = allParksList().find(p => p.id === parkId);
  if (!park) return;
  const btn = document.getElementById(`pk-verify-btn-${parkId}`);
  const targets = [];
  park.zones.forEach((zone, zi) => zone.attractions.forEach((attr, ai) => targets.push({ zi, ai, attr })));
  if (targets.length === 0) return;

  const ok = await showConfirm(
    `Se va a buscar la ubicación de las ${targets.length} atracciones de "${park.name}" (primero en Wikipedia, y si no aparece, por dirección aproximada). Puede tardar uno o dos minutos. Las que ya corregiste a mano no se tocan.`,
    '¿Verificar coordenadas?', 'Verificar'
  );
  if (!ok) return;

  let found = 0, checked = 0;
  if (btn) { btn.disabled = true; btn.textContent = 'Verificando 0/' + targets.length + '…'; }

  for (const t of targets) {
    const key = `${parkId}_${t.zi}_${t.ai}`;
    if (coordOverrides[key]) { checked++; continue; } // ya corregida a mano, no se toca
    const result = await geoAutoSearch(t.attr.name, park.name);
    if (result) {
      pkSaveCoord(parkId, t.zi, t.ai, result.lat, result.lng);
      found++;
    }
    checked++;
    if (btn) btn.textContent = `Verificando ${checked}/${targets.length}…`;
    await geoSleep(500); // ser prudente con las APIs públicas (Wikipedia + Nominatim)
  }

  if (btn) { btn.disabled = false; btn.innerHTML = ic('pin', 12) + ' Verificar coordenadas'; }
  renderParques();
  showMToast(`Corregidas ${found} de ${targets.length}`);
}
