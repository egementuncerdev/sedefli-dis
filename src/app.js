/* ==========================================================================
   Sedefli Diş — etkileşimler
   - Mobil menü
   - "Şu an açık / kapalı" durumu (İstanbul saatine göre)
   - Demo: telefon bağlantıları gerçek arama başlatmaz
   - Adım adım randevu talebi formu (veri hiçbir yere gönderilmez)
   - Kaydırınca beliren içerik
   Bütün metinler sunucuda üretilen HTML'den ve body[data-client]'tan gelir.
   ========================================================================== */

const $ = (s, c = document) => c.querySelector(s);
const $$ = (s, c = document) => [...c.querySelectorAll(s)];
const data = JSON.parse(document.body.dataset.client || '{}');
const ui = data.ui || {};
const fill = (tpl, vars) => tpl.replace(/\{(\w+)\}/g, (_, k) => vars[k] ?? '');
const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ---------- Bildirim (toast) ---------- */
const toastEl = $('.toast');
let toastTimer = 0;
function toast(text) {
  if (!toastEl) return;
  toastEl.textContent = text;
  toastEl.classList.add('is-on');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toastEl.classList.remove('is-on'), 3200);
}

/* ---------- Mobil menü ---------- */
const menuBtn = $('.menu-btn');
const nav = $('#site-nav');
if (menuBtn && nav) {
  const root = document.documentElement;
  let backdrop = null;
  const setOpen = (open) => {
    root.classList.toggle('nav-open', open);
    menuBtn.setAttribute('aria-expanded', String(open));
    document.body.style.overflow = open ? 'hidden' : '';
    if (open) {
      backdrop = document.createElement('div');
      backdrop.className = 'nav-backdrop';
      backdrop.addEventListener('click', () => setOpen(false));
      document.body.append(backdrop);
      nav.querySelector('a')?.focus();
    } else {
      backdrop?.remove();
      backdrop = null;
    }
  };
  menuBtn.addEventListener('click', () => setOpen(menuBtn.getAttribute('aria-expanded') !== 'true'));
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && root.classList.contains('nav-open')) {
      setOpen(false);
      menuBtn.focus();
    }
  });
  // Menü açıkken odak menü ile düğme arasında kalır
  nav.addEventListener('keydown', (e) => {
    if (e.key !== 'Tab' || !root.classList.contains('nav-open')) return;
    const items = $$('a, button', nav).filter((el) => el.offsetParent !== null);
    if (e.shiftKey && document.activeElement === items[0]) { e.preventDefault(); menuBtn.focus(); }
    else if (!e.shiftKey && document.activeElement === items[items.length - 1]) { e.preventDefault(); menuBtn.focus(); }
  });
  matchMedia('(min-width: 901px)').addEventListener('change', (e) => { if (e.matches) setOpen(false); });
}

/* ---------- Başlık: kaydırınca alt çizgi ---------- */
const header = $('.site-header');
if (header) {
  const onScroll = () => header.classList.toggle('is-scrolled', window.scrollY > 8);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
}

/* ---------- Açık / kapalı durumu ---------- */
function clinicNow() {
  const parts = new Intl.DateTimeFormat('en-GB', {
    timeZone: data.tz || 'Europe/Istanbul', weekday: 'short', hour: '2-digit', minute: '2-digit', hourCycle: 'h23'
  }).formatToParts(new Date());
  const get = (type) => parts.find((p) => p.type === type)?.value;
  const day = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].indexOf(get('weekday'));
  return { day, minutes: Number(get('hour')) * 60 + Number(get('minute')) };
}
const toMin = (hhmm) => { const [h, m] = hhmm.split(':').map(Number); return h * 60 + m; };

function openState() {
  const hours = data.hours || [];
  const { day, minutes } = clinicNow();
  const today = hours[day];
  if (today && minutes >= toMin(today[0]) && minutes < toMin(today[1])) {
    return { open: true, today: day, text: `${ui.openNow} · ${fill(ui.closesAt, { time: today[1] })}` };
  }
  if (today && minutes < toMin(today[0])) {
    return { open: false, today: day, text: `${ui.closedNow} · ${fill(ui.opensAt, { day: ui.today, time: today[0] })}` };
  }
  for (let i = 1; i <= 7; i++) {
    const d = (day + i) % 7;
    if (hours[d]) {
      const label = i === 1 ? ui.tomorrow : ui.days[d];
      return { open: false, today: day, text: `${ui.closedNow} · ${fill(ui.opensAt, { day: label, time: hours[d][0] })}` };
    }
  }
  return { open: false, today: day, text: ui.closedNow };
}

function renderStatus() {
  if (!data.hours) return;
  const s = openState();
  $$('[data-open-status]').forEach((el) => {
    el.dataset.state = s.open ? 'open' : 'closed';
    el.textContent = s.text;
  });
  $$('[data-open-status-text]').forEach((el) => {
    el.textContent = s.text;
    el.closest('.chip')?.classList.toggle('is-closed', !s.open);
  });
  $$('.hours tr').forEach((tr) => tr.classList.toggle('is-today', Number(tr.dataset.day) === s.today));
}
renderStatus();
setInterval(renderStatus, 60 * 1000);

/* ---------- Demo: telefon bağlantıları ---------- */
if (data.demo) {
  document.addEventListener('click', (e) => {
    const a = e.target.closest('a[href^="tel:"]');
    if (!a) return;
    e.preventDefault();
    toast(ui.demoPhone);
  });
}

/* ---------- Kaydırınca belirme ---------- */
const revealEls = $$('[data-reveal]');
if (revealEls.length) {
  if (reduceMotion || !('IntersectionObserver' in window)) {
    revealEls.forEach((el) => el.classList.add('is-in'));
  } else {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        // Aynı satırdaki kartlar sırayla gelsin
        const siblings = $$('[data-reveal]', e.target.parentElement);
        e.target.style.transitionDelay = `${Math.min(siblings.indexOf(e.target), 5) * 70}ms`;
        e.target.classList.add('is-in');
        io.unobserve(e.target);
      });
    }, { rootMargin: '0px 0px -8% 0px' });
    revealEls.forEach((el) => io.observe(el));
  }
}

/* ==========================================================================
   Randevu talebi
   ========================================================================== */
const form = $('#appt');
if (form) initAppointment(form);

function initAppointment(form) {
  const msg = JSON.parse(form.dataset.msg);
  const steps = $$('.appt-step', form);
  const dots = $$('[data-step-dot]', form);
  const stepText = $('.stepper__text', form);
  const navBar = $('.appt-nav', form);
  const done = $('#appt-done');
  let current = 0;

  /* --- Gün seçici: önümüzdeki açık günler --- */
  const dayBox = $('[data-days]', form);
  const dayInput = document.createElement('input');
  dayInput.type = 'hidden';
  dayInput.name = 'day';
  form.append(dayInput);

  const hours = data.hours;
  const { day: todayIdx, minutes: nowMin } = clinicNow();
  const start = new Date();
  const days = [];
  for (let i = 0; days.length < 12 && i < 30; i++) {
    const d = new Date(start);
    d.setDate(start.getDate() + i);
    const wd = (todayIdx + i) % 7;
    const h = hours[wd];
    if (!h) continue;
    // Bugün kapanışa 2 saatten az kaldıysa bugünü gösterme
    if (i === 0 && nowMin > toMin(h[1]) - 120) continue;
    days.push({ date: d, wd, i });
  }
  const iso = (d) => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
  dayBox.innerHTML = days.map(({ date, wd, i }) => {
    const top = i === 0 ? ui.today : i === 1 ? ui.tomorrow : ui.daysShort[wd];
    return `<button type="button" class="day" role="radio" aria-checked="false" tabindex="-1" data-value="${iso(date)}" data-wd="${wd}"
      aria-label="${date.getDate()} ${ui.months[date.getMonth()]}, ${ui.days[wd]}"><small>${top}</small><strong>${date.getDate()}</strong><small>${ui.months[date.getMonth()].slice(0, 3)}</small></button>`;
  }).join('');
  const dayBtns = $$('.day', dayBox);
  if (dayBtns[0]) dayBtns[0].tabIndex = 0;

  const slotInputs = $$('input[name="slot"]', form);
  const satNote = $('[data-sat-note]', form);
  const baseRanges = Object.fromEntries(slotInputs.map((s) => [s.value, $(`[data-slot-range="${s.value}"]`, form).textContent]));

  // Seçilen günün çalışma saatine göre aralıkları kısalt / kapat
  function updateSlots(wd) {
    const h = hours[wd];
    satNote.hidden = !(h && (h[0] !== hours[1][0] || h[1] !== hours[1][1]));
    slotInputs.forEach((input) => {
      const [a, b] = baseRanges[input.value].split('–');
      const from = Math.max(toMin(a), toMin(h[0]));
      const to = Math.min(toMin(b), toMin(h[1]));
      const label = $(`[data-slot-range="${input.value}"]`, form);
      const fmt = (m) => `${String(Math.floor(m / 60)).padStart(2, '0')}:${String(m % 60).padStart(2, '0')}`;
      const ok = to - from >= 60;
      input.disabled = !ok;
      if (!ok && input.checked) input.checked = false;
      label.textContent = ok ? `${fmt(from)}–${fmt(to)}` : '—';
    });
  }

  function selectDay(btn, focus = false) {
    dayBtns.forEach((b) => { b.setAttribute('aria-checked', String(b === btn)); b.tabIndex = b === btn ? 0 : -1; });
    dayInput.value = btn.dataset.value;
    dayInput.dataset.label = btn.getAttribute('aria-label');
    updateSlots(Number(btn.dataset.wd));
    clearError('day');
    if (focus) btn.focus();
  }
  dayBox.addEventListener('click', (e) => { const b = e.target.closest('.day'); if (b) selectDay(b); });
  dayBox.addEventListener('keydown', (e) => {
    const i = dayBtns.indexOf(document.activeElement);
    if (i < 0) return;
    const move = { ArrowRight: 1, ArrowDown: 1, ArrowLeft: -1, ArrowUp: -1 }[e.key];
    if (move) { e.preventDefault(); selectDay(dayBtns[(i + move + dayBtns.length) % dayBtns.length], true); }
    if (e.key === ' ' || e.key === 'Enter') { e.preventDefault(); selectDay(dayBtns[i]); }
  });

  /* --- Konuya göre ilgili hekimi işaretle --- */
  const badge = (text) => `<span class="choice__badge">${text}</span>`;
  const relevantLabel = { tr: 'Bu alanda çalışıyor', en: 'Works in this field' }[data.lang] || '';
  function markRelevant() {
    const topic = form.elements.topic.value;
    const docId = msg.relevant[topic];
    $$('input[name="doctor"]', form).forEach((input) => {
      const box = input.nextElementSibling;
      box.querySelector('.choice__badge')?.remove();
      if (input.value === docId) box.querySelector('span:last-child').insertAdjacentHTML('beforeend', badge(relevantLabel));
    });
  }
  form.addEventListener('change', (e) => {
    if (e.target.name === 'topic') { markRelevant(); clearError('topic'); }
    if (e.target.name === 'slot') clearError('slot');
    if (e.target.name === 'kvkk') clearError('kvkk');
  });

  /* --- Bağlantıdan gelen ön seçimler (?t=implant&d=selin) --- */
  const params = new URLSearchParams(location.search);
  const pre = (name, value) => {
    const input = $$(`input[name="${name}"]`, form).find((i) => i.value === value);
    if (input) input.checked = true;
    return !!input;
  };
  if (params.get('t')) pre('topic', params.get('t'));
  if (params.get('d')) pre('doctor', params.get('d'));
  markRelevant();

  /* --- Doğrulama --- */
  function setError(id, on) {
    const el = $(`#err-${id}`);
    if (el) el.hidden = !on;
    const field = { name: form.elements.name, phone: form.elements.phone, kvkk: form.elements.kvkk }[id];
    if (field) field.setAttribute('aria-invalid', String(on));
  }
  function clearError(id) { setError(id, false); }

  function validate(i) {
    const bad = [];
    if (i === 0 && !form.elements.topic.value) bad.push('topic');
    if (i === 2) {
      if (!dayInput.value) bad.push('day');
      if (!form.elements.slot.value) bad.push('slot');
    }
    if (i === 3) {
      if (form.elements.name.value.trim().length < 3) bad.push('name');
      if (form.elements.phone.value.replace(/\D/g, '').length < 10) bad.push('phone');
      if (!form.elements.kvkk.checked) bad.push('kvkk');
    }
    ['topic', 'day', 'slot', 'name', 'phone', 'kvkk'].forEach((id) => setError(id, bad.includes(id)));
    if (bad.length) {
      const first = bad[0];
      const target = first === 'day' ? (dayBtns.find((b) => b.tabIndex === 0) || dayBtns[0])
        : first === 'topic' || first === 'slot' ? $(`input[name="${first}"]:not(:disabled)`, form)
          : form.elements[first];
      target?.focus();
    }
    return !bad.length;
  }
  ['name', 'phone'].forEach((n) => form.elements[n].addEventListener('input', () => {
    if (form.elements[n].getAttribute('aria-invalid') === 'true') validate(3) || null;
  }));

  /* --- Özet --- */
  function fillSummary() {
    const sum = (k, v) => { $(`[data-sum="${k}"]`, form).textContent = v; };
    sum('topic', msg.topics[form.elements.topic.value] || '');
    sum('doctor', msg.doctors[form.elements.doctor.value] || '');
    const slot = form.elements.slot.value;
    const range = slot ? $(`[data-slot-range="${slot}"]`, form).textContent : '';
    sum('time', `${dayInput.dataset.label || ''} · ${(msg.slots[slot] || '').replace(/\(.*\)/, `(${range})`)}`);
    sum('contact', `${form.elements.name.value.trim()} · ${form.elements.phone.value.trim()}`);
  }

  /* --- Adımlar --- */
  function show(i, { focus = true } = {}) {
    current = i;
    steps.forEach((s, k) => s.classList.toggle('is-active', k === i));
    dots.forEach((d, k) => { d.classList.toggle('is-current', k === i); d.classList.toggle('is-done', k < i); });
    stepText.textContent = `${fill(msg.stepOf, { i: i + 1, n: steps.length })} · ${steps[i].querySelector('legend').textContent}`;
    navBar.classList.toggle('has-prev', i > 0);
    navBar.classList.toggle('is-last', i === steps.length - 1);
    if (i === steps.length - 1) fillSummary();
    if (focus) {
      steps[i].querySelector('legend').focus({ preventScroll: true });
      const top = form.getBoundingClientRect().top;
      if (top < 0) form.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' });
    }
  }

  $('[data-next]', form).addEventListener('click', () => { if (validate(current)) show(current + 1); });
  $('[data-prev]', form).addEventListener('click', () => show(Math.max(0, current - 1)));
  $$('[data-goto]', form).forEach((b) => b.addEventListener('click', () => show(Number(b.dataset.goto))));
  // Enter tuşu son adım dışında formu göndermesin, bir sonraki adıma geçsin
  form.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && e.target.tagName === 'INPUT' && current < steps.length - 1) {
      e.preventDefault();
      if (validate(current)) show(current + 1);
    }
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    for (let i = 0; i < steps.length - 1; i++) {
      if (!validate(i)) { show(i); return; }
    }
    // Demo: veri gönderilmez. Talep numarası yalnızca ekranda gösterilir.
    const ref = `SD-${Date.now().toString(36).slice(-5).toUpperCase()}`;
    $('[data-done-text]', done).textContent = fill(msg.done, { ref });
    form.hidden = true;
    done.hidden = false;
    done.focus();
    done.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'center' });
  });

  $('[data-restart]', done).addEventListener('click', () => {
    form.reset();
    dayInput.value = '';
    dayBtns.forEach((b, k) => { b.setAttribute('aria-checked', 'false'); b.tabIndex = k === 0 ? 0 : -1; });
    markRelevant();
    done.hidden = true;
    form.hidden = false;
    show(0);
  });

  show(0, { focus: false });
}
