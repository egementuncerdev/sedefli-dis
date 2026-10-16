/* ==========================================================================
   Sayfa şablonları — build.mjs her dil ve sayfa için çağırır.
   ========================================================================== */

import { clinic, doctors, treatments, langs } from './content.mjs';

export const esc = (s) => String(s)
  .replace(/&/g, '&amp;')
  .replace(/</g, '&lt;')
  .replace(/>/g, '&gt;')
  .replace(/"/g, '&quot;');

const abs = (path) => clinic.url + path;
const pad = (n) => String(n).padStart(2, '0');
const byId = (id) => doctors.find((d) => d.id === id);
export const treatmentPath = (t, tr) => `${t.paths.treatments}${tr.slug[t.lang]}/`;

/* --------------------------------------------------------------------------
   İkonlar (24×24, çizgi)
   -------------------------------------------------------------------------- */
const TOOTH = 'M7.5 3C5 3 3.5 5 3.5 7.3c0 2.1.8 3.5 1.4 5 .7 1.6.9 3.5 1.3 5.6.3 1.6.8 3.1 2 3.1 1.3 0 1.6-1.7 1.9-3.4.3-1.6.6-3.1 1.9-3.1s1.6 1.5 1.9 3.1c.3 1.7.6 3.4 1.9 3.4 1.2 0 1.7-1.5 2-3.1.4-2.1.6-4 1.3-5.6.6-1.5 1.4-2.9 1.4-5C20.5 5 19 3 16.5 3c-1.9 0-2.6.9-4.5.9S9.4 3 7.5 3z';
const ICONS = {
  tooth: `<path d="${TOOTH}"/>`,
  implant: '<path d="M7.5 3C5.4 3 4 4.6 4 6.7c0 1.5.5 2.6 1.1 3.8h13.8c.6-1.2 1.1-2.3 1.1-3.8C20 4.6 18.6 3 16.5 3c-1.8 0-2.6.8-4.5.8S9.3 3 7.5 3z"/><path d="M9.2 10.5h5.6l-.7 10.5H9.9z"/><path d="M8.9 13.5h6.2M9.1 16.5h5.8M9.4 19.3h5.2"/>',
  aligner: '<path d="M4 8.5c0 6.4 3.6 10.5 8 10.5s8-4.1 8-10.5"/><path d="M6.6 8.5c0 4.6 2.4 7.6 5.4 7.6s5.4-3 5.4-7.6"/><path d="M4 8.5h2.6M17.4 8.5H20"/><path d="M9 4.5l1 2M15 4.5l-1 2M12 4v2.3"/>',
  canal: `<path d="${TOOTH}"/><path d="M10 9.5c.3 2.4.4 4.4.2 6.6M14 9.5c-.3 2.4-.4 4.4-.2 6.6"/>`,
  whitening: `<path d="${TOOTH}" transform="translate(-1.5 1.5) scale(.92)"/><path d="M19 1.5v4M17 3.5h4"/><path d="M21.5 8.2v2M20.5 9.2h2"/>`,
  crown: '<path d="M4 8l3.6 3.2L12 5l4.4 6.2L20 8l-1.6 9.5H5.6z"/><path d="M5.6 20.5h12.8"/>',
  kids: `<path d="${TOOTH}"/><path d="M9.3 10.6c.8.9 1.7 1.3 2.7 1.3s1.9-.4 2.7-1.3"/><path d="M9.5 7.6h.01M14.5 7.6h.01" stroke-width="2.2"/>`,
  exam: '<circle cx="10.5" cy="10.5" r="6"/><path d="M15 15l5.5 5.5"/><path d="M8 10.5h5M10.5 8v5"/>',
  shield: '<path d="M12 3l7.5 3v5.5c0 4.6-3.2 8.3-7.5 9.5-4.3-1.2-7.5-4.9-7.5-9.5V6z"/><path d="M8.8 12.2l2.2 2.2 4.2-4.4"/>',
  scan: '<path d="M4 8V5.5A1.5 1.5 0 0 1 5.5 4H8M16 4h2.5A1.5 1.5 0 0 1 20 5.5V8M20 16v2.5a1.5 1.5 0 0 1-1.5 1.5H16M8 20H5.5A1.5 1.5 0 0 1 4 18.5V16"/><path d="M4 12h16"/>',
  access: '<circle cx="12" cy="4.5" r="1.6"/><path d="M5.5 8.5l6.5 1.2 6.5-1.2M12 9.7v4.3l-3 6.5M12 14l3 6.5"/>',
  phone: '<path d="M5 4.5h3.2l1.6 4-2 1.3a10.5 10.5 0 0 0 6.4 6.4l1.3-2 4 1.6V19a1.5 1.5 0 0 1-1.6 1.5A15.5 15.5 0 0 1 3.5 6.1 1.5 1.5 0 0 1 5 4.5z"/>',
  calendar: '<rect x="3.5" y="5" width="17" height="15.5" rx="2.5"/><path d="M3.5 10h17M8 3v4M16 3v4"/>',
  pin: '<path d="M12 21s-6.5-5.6-6.5-11a6.5 6.5 0 0 1 13 0c0 5.4-6.5 11-6.5 11z"/><circle cx="12" cy="10" r="2.4"/>',
  mail: '<rect x="3.5" y="5.5" width="17" height="13" rx="2"/><path d="M4 7l8 6 8-6"/>',
  clock: '<circle cx="12" cy="12" r="8.5"/><path d="M12 7.5V12l3 2"/>',
  arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
  back: '<path d="M19 12H5M11 6l-6 6 6 6"/>',
  check: '<path d="M5 12.5l4.2 4.2L19 7"/>',
  menu: '<path d="M4 7h16M4 12h16M4 17h16"/>',
  close: '<path d="M6 6l12 12M18 6L6 18"/>',
  train: '<rect x="6" y="3.5" width="12" height="13" rx="3"/><path d="M6 11h12M9 20l1.5-3.5M15 20l-1.5-3.5"/><path d="M9.5 14h.01M14.5 14h.01" stroke-width="2.2"/>',
  bus: '<rect x="5" y="3.5" width="14" height="14" rx="2.5"/><path d="M5 11h14M8 20.5v-3M16 20.5v-3"/><path d="M8.5 14.5h.01M15.5 14.5h.01" stroke-width="2.2"/>',
  car: '<path d="M5 16.5V12l2-5h10l2 5v4.5"/><path d="M4 12h16v4.5H4z"/><path d="M7.5 19v-2.5M16.5 19v-2.5"/>'
};
export const icon = (name, cls = 'icon') => `<svg class="${cls}" viewBox="0 0 24 24" aria-hidden="true" focusable="false">${ICONS[name]}</svg>`;

const LOGO = `<svg class="logo__mark" viewBox="0 0 40 40" aria-hidden="true" focusable="false">
        <defs><radialGradient id="pearl" cx="35%" cy="30%" r="75%"><stop offset="0" stop-color="#ffffff"/><stop offset=".45" stop-color="#e7f3ef"/><stop offset=".75" stop-color="#e9e4f4"/><stop offset="1" stop-color="#f6e7dc"/></radialGradient></defs>
        <circle cx="20" cy="20" r="19" fill="url(#pearl)" stroke="currentColor" stroke-opacity=".18"/>
        <path d="${TOOTH}" transform="translate(8.6 8.4) scale(.95)" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/>
      </svg>`;

/* Hekim avatarı: baş harfler, sedef tonunda daire (kurgusal kişiler, fotoğraf yok) */
const avatar = (d, size = 'md') => `<span class="avatar avatar--${size} avatar--t${d.tone}" aria-hidden="true">${esc(d.initials)}</span>`;

/* --------------------------------------------------------------------------
   Saatler
   -------------------------------------------------------------------------- */
// Pazartesi'den başlayan sıra
const WEEK = [1, 2, 3, 4, 5, 6, 0];
const hoursRows = (t) => WEEK.map((d) => {
  const h = clinic.hours[d];
  return `<tr data-day="${d}"><th scope="row">${esc(t.ui.days[d])}</th><td>${h ? `${h[0]}–${h[1]}` : esc(t.ui.closed)}</td></tr>`;
}).join('');
const hoursTable = (t, cls = '') => `<table class="hours ${cls}"><caption class="sr-only">${esc(t.contactPage.hours)}</caption><tbody>${hoursRows(t)}</tbody></table>`;

const openingSpec = () => {
  const names = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  return clinic.hours.map((h, d) => (h ? {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: `https://schema.org/${names[d]}`,
    opens: h[0],
    closes: h[1]
  } : null)).filter(Boolean);
};

/* --------------------------------------------------------------------------
   Ortak parçalar
   -------------------------------------------------------------------------- */
function head(t, page, assets) {
  const canonical = abs(page.path);
  const alternates = langs
    .map((l) => `  <link rel="alternate" hreflang="${l.lang}" href="${abs(page.alt[l.lang])}">`)
    .concat(`  <link rel="alternate" hreflang="x-default" href="${abs(page.alt.tr)}">`).join('\n');

  const dentist = {
    '@type': 'Dentist',
    '@id': `${clinic.url}/#clinic`,
    name: clinic.name,
    legalName: clinic.legal[t.lang],
    url: abs(t.paths.home),
    image: abs('/og.png'),
    telephone: clinic.phone,
    email: clinic.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: clinic.address.street[t.lang],
      addressLocality: clinic.address.city,
      addressCountry: clinic.address.country
    },
    openingHoursSpecification: openingSpec(),
    availableLanguage: ['tr', 'en', 'de'],
    isAccessibleForFree: false
  };
  const graph = [dentist, ...(page.graph || [])];
  if (page.crumbs) {
    graph.push({
      '@type': 'BreadcrumbList',
      itemListElement: page.crumbs.map(([name, path], i) => ({ '@type': 'ListItem', position: i + 1, name, item: abs(path) }))
    });
  }

  return `<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${esc(page.title)}</title>
  <meta name="description" content="${esc(page.desc)}">${clinic.demo ? '\n  <meta name="robots" content="noindex, nofollow">' : ''}
  <meta name="theme-color" content="#f7f5ef">
  <meta name="color-scheme" content="light">
  <link rel="canonical" href="${canonical}">
${alternates}

  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap">
  <link rel="stylesheet" href="${assets.css}">
  <link rel="icon" href="/favicon.svg" type="image/svg+xml">
  <link rel="apple-touch-icon" href="/apple-touch-icon.png">

  <meta property="og:type" content="website">
  <meta property="og:site_name" content="${esc(clinic.name)}">
  <meta property="og:title" content="${esc(page.title)}">
  <meta property="og:description" content="${esc(page.desc)}">
  <meta property="og:url" content="${canonical}">
  <meta property="og:image" content="${abs('/og.png')}">
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="630">
  <meta property="og:locale" content="${t.locale}">
  <meta name="twitter:card" content="summary_large_image">

  <script type="application/ld+json">${JSON.stringify({ '@context': 'https://schema.org', '@graph': graph })}</script>
  <script>document.documentElement.classList.add('js')</script>
  <script type="module" src="${assets.js}"></script>
</head>`;
}

/* Tarayıcıdaki JS'in ihtiyaç duyduğu metinler */
const clientData = (t) => JSON.stringify({
  lang: t.lang,
  demo: clinic.demo,
  hours: clinic.hours,
  tz: clinic.timezone,
  ui: {
    openNow: t.ui.openNow,
    closedNow: t.ui.closedNow,
    days: t.ui.days,
    daysShort: t.ui.daysShort,
    months: t.ui.months,
    today: t.ui.today,
    tomorrow: t.ui.tomorrow,
    demoPhone: t.ui.demoPhone,
    // Fonksiyonlar JSON'a girmez: yer tutuculu kalıplar
    opensAt: t.ui.opensAt('{day}', '{time}'),
    closesAt: t.ui.closesAt('{time}')
  }
}).replace(/</g, '\\u003c');

function header(t, page) {
  const navKeys = ['treatments', 'doctors', 'clinic', 'guide', 'contact'];
  const current = (k) => (page.section === k ? ' aria-current="page"' : '');
  const langSwitch = langs.map((l) => `<a href="${page.alt[l.lang]}" hreflang="${l.lang}" lang="${l.lang}"${l.lang === t.lang ? ' aria-current="true"' : ''}>${l.lang.toUpperCase()}</a>`).join('');
  return `
  ${clinic.demo ? `<aside class="demo-bar" aria-label="Demo"><p>${esc(t.ui.demoBar)} <a href="${clinic.author.url}">${esc(t.ui.demoBy)} →</a></p></aside>` : ''}
  <header class="site-header">
    <div class="wrap site-header__inner">
      <a class="logo" href="${t.paths.home}" aria-label="${esc(clinic.name)} · ${esc(t.ui.home)}">
        ${LOGO}
        <span class="logo__text"><span class="logo__name">Sedefli</span> <span class="logo__sub" lang="tr">Diş</span></span>
      </a>
      <nav class="nav" id="site-nav" aria-label="${esc(t.ui.navLabel)}">
        <ul class="nav__list">${navKeys.map((k) => `
          <li><a href="${t.paths[k]}"${current(k)}>${esc(t.nav[k])}</a></li>`).join('')}
        </ul>
        <div class="nav__extra">
          <a class="btn btn--primary nav__book" href="${t.paths.appointment}">${icon('calendar')}${esc(t.ui.book)}</a>
          <p class="nav__status"><span class="status" data-open-status>${icon('clock')}<span>${esc(t.contactPage.hours)}</span></span></p>
        </div>
      </nav>
      <div class="site-header__end">
        <nav class="lang" aria-label="${esc(t.ui.langLabel)}">${langSwitch}</nav>
        <a class="btn btn--primary btn--sm header-book" href="${t.paths.appointment}">${esc(t.ui.book)}</a>
        <button class="menu-btn" type="button" aria-expanded="false" aria-controls="site-nav">
          <span class="menu-btn__open">${icon('menu')}<span class="sr-only">${esc(t.ui.menu)}</span></span>
          <span class="menu-btn__close">${icon('close')}<span class="sr-only">${esc(t.ui.close)}</span></span>
        </button>
      </div>
    </div>
  </header>`;
}

function footer(t) {
  return `
  <footer class="site-footer">
    <div class="wrap site-footer__grid">
      <div>
        <a class="logo logo--footer" href="${t.paths.home}">${LOGO}<span class="logo__text"><span class="logo__name">Sedefli</span> <span class="logo__sub" lang="tr">Diş</span></span></a>
        <p class="muted">${esc(t.footer.about)}</p>
      </div>
      <div>
        <h2 class="footer-title">${esc(t.footer.treatments)}</h2>
        <ul class="footer-links">${treatments.map((tr) => `<li><a href="${treatmentPath(t, tr)}">${esc(tr.name[t.lang])}</a></li>`).join('')}</ul>
      </div>
      <div>
        <h2 class="footer-title">${esc(t.footer.pages)}</h2>
        <ul class="footer-links">${['doctors', 'clinic', 'guide', 'appointment', 'contact'].map((k) => `<li><a href="${t.paths[k]}">${esc(k === 'appointment' ? t.appt.title : t.nav[k])}</a></li>`).join('')}</ul>
      </div>
      <div>
        <h2 class="footer-title">${esc(t.footer.contact)}</h2>
        <address class="footer-contact">
          <p>${esc(clinic.address.street[t.lang])}<br>${esc(clinic.address.city)}</p>
          <p><a href="tel:${clinic.phone}">${esc(clinic.phoneDisplay)}</a></p>
        </address>
        ${hoursTable(t, 'hours--compact')}
      </div>
    </div>
    <div class="wrap site-footer__bottom">
      <p>${esc(t.footer.legal)}</p>
      <p><a href="${t.paths.privacy}">${esc(t.footer.privacy)}</a> · ${esc(t.footer.made)}: <a href="${clinic.author.url}">${esc(clinic.author.name)}</a></p>
    </div>
  </footer>

  <nav class="action-bar" aria-label="${esc(t.contactPage.title)}">
    <a class="action-bar__call" href="tel:${clinic.phone}">${icon('phone')}${esc(t.ui.call)}</a>
    <a class="action-bar__book" href="${t.paths.appointment}">${icon('calendar')}${esc(t.ui.book)}</a>
  </nav>
  <div class="toast" role="status" aria-live="polite"></div>`;
}

function crumbs(t, list) {
  return `<nav class="crumbs" aria-label="${esc(t.ui.breadcrumb)}"><ol>${list.map(([name, path], i) => (i === list.length - 1
    ? `<li><span aria-current="page">${esc(name)}</span></li>`
    : `<li><a href="${path}">${esc(name)}</a></li>`)).join('')}</ol></nav>`;
}

function layout(t, page, assets, body) {
  return `<!DOCTYPE html>
<html lang="${t.lang}">
${head(t, page, assets)}
<body class="${page.bodyClass || ''}" data-client="${esc(clientData(t))}">
  <a class="skip-link" href="#main">${esc(t.ui.skip)}</a>
${header(t, page)}

  <main id="main" tabindex="-1">${body}
  </main>
${footer(t)}
</body>
</html>
`;
}

const pageHero = (t, title, lead, crumbList) => `
    <section class="page-hero">
      <div class="wrap">
        ${crumbs(t, crumbList)}
        <h1 class="page-title">${esc(title)}</h1>
        ${lead ? `<p class="lead">${esc(lead)}</p>` : ''}
      </div>
    </section>`;

const ctaBand = (t, title, text, href = t.paths.appointment, label = t.ui.book) => `
    <section class="cta-band" data-reveal>
      <div class="wrap cta-band__inner">
        <div>
          <h2 class="h2">${esc(title)}</h2>
          <p>${esc(text)}</p>
        </div>
        <div class="cta-band__actions">
          <a class="btn btn--light" href="${href}">${icon('calendar')}${esc(label)}</a>
          <a class="btn btn--ghost-light" href="tel:${clinic.phone}">${icon('phone')}${esc(clinic.phoneDisplay)}</a>
        </div>
      </div>
    </section>`;

const treatmentCard = (t, tr, i, h = 'h3') => `
          <li class="t-card" data-reveal>
            <a href="${treatmentPath(t, tr)}">
              <span class="t-card__icon">${icon(tr.icon)}</span>
              <span class="t-card__num" aria-hidden="true">${pad(i + 1)}</span>
              <${h} class="t-card__title">${esc(tr.name[t.lang])}</${h}>
              <p>${esc(tr.short[t.lang])}</p>
              <span class="t-card__more">${esc(t.ui.learnMore)} ${icon('arrow')}</span>
            </a>
          </li>`;

const doctorCard = (t, d, { full = false } = {}) => `
          <li class="doc-card" data-reveal${full ? ` id="hekim-${d.id}"` : ''}>
            ${avatar(d, full ? 'lg' : 'md')}
            <div class="doc-card__body">
              <${full ? 'h2' : 'h3'} class="doc-card__name">${esc(d.name)}</${full ? 'h2' : 'h3'}>
              <p class="doc-card__title">${esc(d.title[t.lang])}</p>${full ? `
              <p class="doc-card__bio">${esc(d.bio[t.lang])}</p>
              <dl class="doc-card__meta">
                <div><dt>${esc(t.doctorsPage.focus)}</dt><dd>${d.focus[t.lang].map(esc).join(' · ')}</dd></div>
                <div><dt>${esc(t.doctorsPage.langs)}</dt><dd>${esc(d.langs[t.lang])}</dd></div>
              </dl>
              <a class="link-arrow" href="${t.paths.appointment}?d=${d.id}">${esc(t.doctorsPage.book)} ${icon('arrow')}</a>` : `
              <ul class="tags">${d.focus[t.lang].slice(0, 2).map((f) => `<li>${esc(f)}</li>`).join('')}</ul>`}
            </div>
          </li>`;

const faqList = (items) => `<div class="faq">${items.map((it) => `
          <details class="faq__item">
            <summary>${esc(it.q)}<span class="faq__icon" aria-hidden="true"></span></summary>
            <p>${esc(it.a)}</p>
          </details>`).join('')}
        </div>`;

const faqGraph = (items, t) => ({
  '@type': 'FAQPage',
  inLanguage: t.lang,
  mainEntity: items.map((it) => ({ '@type': 'Question', name: it.q, acceptedAnswer: { '@type': 'Answer', text: it.a } }))
});

/* Sayfa nesnesi için ortak alanlar */
const altFor = (key) => Object.fromEntries(langs.map((l) => [l.lang, l.paths[key]]));

/* --------------------------------------------------------------------------
   Ana sayfa
   -------------------------------------------------------------------------- */
export function home(t, assets) {
  const h = t.home;
  const page = { path: t.paths.home, alt: altFor('home'), title: h.title, desc: t.meta.siteDesc, bodyClass: 'page-home' };
  const body = `
    <section class="hero">
      <div class="wrap hero__grid">
        <div class="hero__text">
          <p class="eyebrow">${esc(h.eyebrow)}</p>
          <h1 class="display">${h.h1.map((l, i) => `<span${i ? ' class="display__em"' : ''}>${esc(l)}</span>`).join(' ')}</h1>
          <p class="lead">${esc(h.lead)}</p>
          <div class="hero__actions">
            <a class="btn btn--primary btn--lg" href="${t.paths.appointment}">${icon('calendar')}${esc(t.ui.book)}</a>
            <a class="btn btn--ghost btn--lg" href="${t.paths.treatments}">${esc(h.secondary)}</a>
          </div>
          <ul class="facts">${h.facts.map((f) => `<li><strong>${esc(f.k)}</strong><span>${esc(f.v)}</span></li>`).join('')}</ul>
        </div>
        <div class="hero__visual" aria-hidden="true">
          <div class="pearl">
            <div class="pearl__glow"></div>
            <svg class="pearl__tooth" viewBox="0 0 24 24"><path d="${TOOTH}"/></svg>
          </div>
          <div class="chip chip--a"><span class="chip__dot"></span><span data-open-status-text>${esc(t.contactPage.hours)}</span></div>
          <div class="chip chip--b">${icon('scan')}<span>${esc(t.clinicPage.sections[1].t)}</span></div>
          <div class="chip chip--c">${icon('shield')}<span>${esc(t.clinicPage.sections[0].t)}</span></div>
        </div>
      </div>
    </section>

    <section class="section" aria-labelledby="t-title">
      <div class="wrap">
        <div class="section-head">
          <h2 class="h2" id="t-title">${esc(h.treatmentsTitle)}</h2>
          <p class="muted">${esc(h.treatmentsSub)}</p>
        </div>
        <ul class="t-grid">${treatments.map((tr, i) => treatmentCard(t, tr, i)).join('')}
        </ul>
      </div>
    </section>

    <section class="section section--tint" aria-labelledby="a-title">
      <div class="wrap">
        <div class="section-head">
          <h2 class="h2" id="a-title">${esc(h.approachTitle)}</h2>
        </div>
        <ol class="steps steps--4">${h.approach.map((s, i) => `
          <li class="step" data-reveal>
            <span class="step__num">${i + 1}</span>
            <h3>${esc(s.t)}</h3>
            <p>${esc(s.d)}</p>
          </li>`).join('')}
        </ol>
      </div>
    </section>

    <section class="section" aria-labelledby="d-title">
      <div class="wrap">
        <div class="section-head section-head--row">
          <div>
            <h2 class="h2" id="d-title">${esc(h.doctorsTitle)}</h2>
            <p class="muted">${esc(h.doctorsSub)}</p>
          </div>
          <a class="link-arrow" href="${t.paths.doctors}">${esc(t.ui.doctorPage)} ${icon('arrow')}</a>
        </div>
        <ul class="doc-grid">${doctors.map((d) => doctorCard(t, d)).join('')}
        </ul>
      </div>
    </section>

    <section class="section section--tint" aria-labelledby="c-title">
      <div class="wrap split">
        <div data-reveal>
          <h2 class="h2" id="c-title">${esc(h.clinicTitle)}</h2>
          <p class="lead lead--sm">${esc(h.clinicText)}</p>
          <a class="link-arrow" href="${t.paths.clinic}">${esc(h.clinicLink)} ${icon('arrow')}</a>
        </div>
        <div class="hours-card" data-reveal>
          <h3 class="hours-card__title">${icon('clock')}${esc(t.contactPage.hours)}</h3>
          <p class="status status--lg" data-open-status></p>
          ${hoursTable(t)}
          <p class="hours-card__addr">${icon('pin')}<span>${esc(clinic.address.street[t.lang])}, ${esc(clinic.address.city)}</span></p>
        </div>
      </div>
    </section>
${ctaBand(t, h.ctaTitle, h.ctaText)}`;
  return layout(t, page, assets, body);
}

/* --------------------------------------------------------------------------
   Tedaviler listesi
   -------------------------------------------------------------------------- */
export function treatmentsIndex(t, assets) {
  const p = t.treatmentsPage;
  const crumbList = [[t.ui.home, t.paths.home], [p.title, t.paths.treatments]];
  const page = {
    path: t.paths.treatments, alt: altFor('treatments'), section: 'treatments',
    title: `${p.title} · ${clinic.name}`, desc: p.lead, crumbs: crumbList
  };
  const body = `${pageHero(t, p.title, p.lead, crumbList)}
    <section class="section section--flush">
      <div class="wrap">
        <ul class="t-grid">${treatments.map((tr, i) => treatmentCard(t, tr, i, 'h2')).join('')}
        </ul>
        <div class="note-card" data-reveal>
          ${icon('exam', 'icon icon--lg')}
          <div>
            <h2 class="h3">${esc(p.unsure)}</h2>
            <p>${esc(p.unsureText)}</p>
          </div>
          <a class="btn btn--primary" href="${t.paths.appointment}?t=exam">${esc(t.ui.book)}</a>
        </div>
      </div>
    </section>`;
  return layout(t, page, assets, body);
}

/* --------------------------------------------------------------------------
   Tedavi detay
   -------------------------------------------------------------------------- */
export function treatmentPage(t, tr, assets) {
  const L = t.treatment;
  const name = tr.name[t.lang];
  const path = treatmentPath(t, tr);
  const doc = byId(tr.doctor);
  const crumbList = [[t.ui.home, t.paths.home], [t.treatmentsPage.title, t.paths.treatments], [name, path]];
  const page = {
    path,
    alt: Object.fromEntries(langs.map((l) => [l.lang, treatmentPath(l, tr)])),
    section: 'treatments',
    title: `${name} · ${clinic.name}`,
    desc: tr.short[t.lang],
    crumbs: crumbList,
    graph: [
      {
        '@type': 'MedicalWebPage',
        url: abs(path),
        name,
        inLanguage: t.lang,
        about: { '@type': 'MedicalProcedure', name },
        lastReviewed: '2026-10-16',
        reviewedBy: { '@type': 'Person', name: doc.name }
      },
      faqGraph(tr.faq[t.lang], t)
    ]
  };
  const others = treatments.filter((x) => x !== tr);

  const body = `
    <section class="page-hero page-hero--treatment">
      <div class="wrap">
        ${crumbs(t, crumbList)}
        <div class="treat-head">
          <span class="treat-head__icon">${icon(tr.icon)}</span>
          <div>
            <h1 class="page-title">${esc(name)}</h1>
            <p class="lead">${esc(tr.short[t.lang])}</p>
          </div>
        </div>
        <dl class="treat-facts">
          <div>${icon('clock')}<dt>${esc(L.duration)}</dt><dd>${esc(tr.duration[t.lang])}</dd></div>
          <div>${icon('calendar')}<dt>${esc(L.visits)}</dt><dd>${esc(tr.visits[t.lang])}</dd></div>
        </dl>
      </div>
    </section>

    <div class="wrap treat-layout">
      <article class="prose">
        <section aria-labelledby="what">
          <h2 class="h3" id="what">${esc(L.what)}</h2>
          <p>${esc(tr.intro[t.lang])}</p>
        </section>

        <section aria-labelledby="who">
          <h2 class="h3" id="who">${esc(L.forWhom)}</h2>
          <ul class="checks">${tr.forWhom[t.lang].map((x) => `<li>${icon('check')}<span>${esc(x)}</span></li>`).join('')}</ul>
        </section>

        <section aria-labelledby="steps">
          <h2 class="h3" id="steps">${esc(L.steps)}</h2>
          <ol class="timeline">${tr.steps[t.lang].map((s, i) => `
            <li data-reveal><span class="timeline__num">${i + 1}</span><div><h3>${esc(s.t)}</h3><p>${esc(s.d)}</p></div></li>`).join('')}
          </ol>
        </section>

        <section aria-labelledby="care">
          <h2 class="h3" id="care">${esc(L.care)}</h2>
          <ul class="bullets">${tr.care[t.lang].map((x) => `<li>${esc(x)}</li>`).join('')}</ul>
        </section>

        <section aria-labelledby="faq">
          <h2 class="h3" id="faq">${esc(L.faq)}</h2>
          ${faqList(tr.faq[t.lang])}
        </section>

        <p class="disclaimer">${esc(L.note)}</p>
      </article>

      <aside class="treat-aside">
        <div class="aside-card">
          <p class="aside-card__label">${esc(L.doctor)}</p>
          <div class="aside-doc">
            ${avatar(doc, 'md')}
            <div>
              <p class="aside-doc__name"><a href="${t.paths.doctors}#hekim-${doc.id}">${esc(doc.name)}</a></p>
              <p class="aside-doc__title">${esc(doc.title[t.lang])}</p>
            </div>
          </div>
          <a class="btn btn--primary btn--block" href="${t.paths.appointment}?t=${tr.id}">${icon('calendar')}${esc(t.ui.book)}</a>
          <a class="btn btn--ghost btn--block" href="tel:${clinic.phone}">${icon('phone')}${esc(clinic.phoneDisplay)}</a>
        </div>
        <nav class="aside-card aside-others" aria-label="${esc(L.others)}">
          <p class="aside-card__label">${esc(L.others)}</p>
          <ul>${others.map((o) => `<li><a href="${treatmentPath(t, o)}">${icon(o.icon)}<span>${esc(o.name[t.lang])}</span></a></li>`).join('')}</ul>
        </nav>
      </aside>
    </div>
${ctaBand(t, L.cta, t.home.ctaText, `${t.paths.appointment}?t=${tr.id}`)}`;
  return layout(t, page, assets, body);
}

/* --------------------------------------------------------------------------
   Hekimler
   -------------------------------------------------------------------------- */
export function doctorsPage(t, assets) {
  const p = t.doctorsPage;
  const crumbList = [[t.ui.home, t.paths.home], [p.title, t.paths.doctors]];
  const page = {
    path: t.paths.doctors, alt: altFor('doctors'), section: 'doctors',
    title: `${p.title} · ${clinic.name}`, desc: p.lead, crumbs: crumbList,
    graph: doctors.map((d) => ({ '@type': 'Person', name: d.name, jobTitle: d.title[t.lang], worksFor: { '@id': `${clinic.url}/#clinic` } }))
  };
  const body = `${pageHero(t, p.title, p.lead, crumbList)}
    <section class="section section--flush">
      <div class="wrap">
        <ul class="doc-list">${doctors.map((d) => doctorCard(t, d, { full: true })).join('')}
        </ul>
        <p class="disclaimer">${esc(p.note)}</p>
      </div>
    </section>
${ctaBand(t, t.home.ctaTitle, t.home.ctaText)}`;
  return layout(t, page, assets, body);
}

/* --------------------------------------------------------------------------
   Kliniğimiz
   -------------------------------------------------------------------------- */
export function clinicPage(t, assets) {
  const p = t.clinicPage;
  const crumbList = [[t.ui.home, t.paths.home], [p.title, t.paths.clinic]];
  const page = { path: t.paths.clinic, alt: altFor('clinic'), section: 'clinic', title: `${p.title} · ${clinic.name}`, desc: p.lead, crumbs: crumbList };
  const body = `${pageHero(t, p.title, p.lead, crumbList)}
    <section class="section section--flush">
      <div class="wrap">
        <ul class="feature-grid">${p.sections.map((s) => `
          <li class="feature" data-reveal>
            <span class="feature__icon">${icon(s.icon)}</span>
            <h2 class="h3">${esc(s.t)}</h2>
            <p>${esc(s.d)}</p>
          </li>`).join('')}
        </ul>
        <div class="split split--top">
          <div class="hours-card" data-reveal>
            <h2 class="hours-card__title">${icon('clock')}${esc(t.contactPage.hours)}</h2>
            <p class="status status--lg" data-open-status></p>
            ${hoursTable(t)}
          </div>
          <div class="team-strip" data-reveal>
            <h2 class="h3">${esc(t.home.doctorsTitle)}</h2>
            <ul>${doctors.map((d) => `<li><a href="${t.paths.doctors}#hekim-${d.id}">${avatar(d, 'sm')}<span><strong>${esc(d.name)}</strong><small>${esc(d.title[t.lang])}</small></span></a></li>`).join('')}</ul>
          </div>
        </div>
      </div>
    </section>
${ctaBand(t, t.home.ctaTitle, t.home.ctaText)}`;
  return layout(t, page, assets, body);
}

/* --------------------------------------------------------------------------
   Hasta rehberi
   -------------------------------------------------------------------------- */
export function guidePage(t, assets) {
  const p = t.guidePage;
  const crumbList = [[t.ui.home, t.paths.home], [p.title, t.paths.guide]];
  const page = { path: t.paths.guide, alt: altFor('guide'), section: 'guide', title: `${p.title} · ${clinic.name}`, desc: p.lead, crumbs: crumbList, graph: [faqGraph(p.faq, t)] };
  const body = `${pageHero(t, p.title, p.lead, crumbList)}
    <section class="section section--flush">
      <div class="wrap">
        <div class="guide-grid">${p.sections.map((s, i) => `
          <section class="guide-card" data-reveal aria-labelledby="g${i}">
            <span class="guide-card__num" aria-hidden="true">${pad(i + 1)}</span>
            <h2 class="h3" id="g${i}">${esc(s.t)}</h2>
            <ul class="bullets">${s.items.map((x) => `<li>${esc(x)}</li>`).join('')}</ul>
          </section>`).join('')}
        </div>
        <div class="faq-block">
          <h2 class="h2">${esc(p.faqTitle)}</h2>
          ${faqList(p.faq)}
        </div>
      </div>
    </section>
${ctaBand(t, t.home.ctaTitle, t.home.ctaText)}`;
  return layout(t, page, assets, body);
}

/* --------------------------------------------------------------------------
   İletişim
   -------------------------------------------------------------------------- */
const MAP = (t) => `<svg class="map" viewBox="0 0 600 420" role="img" aria-label="${esc(t.contactPage.mapLabel)}">
  <rect width="600" height="420" fill="#eef1ec"/>
  <path d="M-20 300 C120 260 220 330 360 280 S560 220 640 250" fill="none" stroke="#cfe3ea" stroke-width="46"/>
  <rect x="70" y="40" width="150" height="110" rx="18" fill="#dcebd9"/>
  <circle cx="120" cy="80" r="10" fill="#c6dfc2"/><circle cx="160" cy="105" r="13" fill="#c6dfc2"/><circle cx="190" cy="70" r="9" fill="#c6dfc2"/>
  <g fill="none" stroke="#ffffff" stroke-linecap="round">
    <path d="M0 190 H600" stroke-width="26"/>
    <path d="M300 0 V420" stroke-width="22"/>
    <path d="M0 60 L250 200" stroke-width="14"/>
    <path d="M430 0 V420" stroke-width="12"/>
    <path d="M300 120 H600" stroke-width="12"/>
  </g>
  <g font-family="Plus Jakarta Sans, sans-serif" font-size="13" fill="#6b7a77">
    <text x="20" y="182">Sedef Sk.</text>
    <text x="310" y="20" transform="rotate(90 310 20)">Örnek Cd.</text>
    <text x="96" y="140">Park</text>
  </g>
  <g transform="translate(470 228)">
    <circle r="16" fill="#1f6f68"/>
    <path d="M-6 -6h12v10h-12z M-4 6l-2 4 M4 6l2 4" fill="none" stroke="#fff" stroke-width="2"/>
    <text x="24" y="5" font-family="Plus Jakarta Sans, sans-serif" font-size="13" fill="#3d5553">Metro</text>
  </g>
  <g transform="translate(330 150)">
    <circle r="34" fill="#1f6f68" opacity=".14"/>
    <path d="M0 18 C-14 4 -18 -4 -18 -10 a18 18 0 0 1 36 0 c0 6 -4 14 -18 28z" fill="#1f6f68"/>
    <circle cy="-10" r="6.5" fill="#fff"/>
  </g>
  <g transform="translate(360 120)">
    <rect x="0" y="-16" width="118" height="32" rx="16" fill="#ffffff"/>
    <text x="16" y="5" font-family="Plus Jakarta Sans, sans-serif" font-size="14" font-weight="600" fill="#13302f">Sedefli Diş</text>
  </g>
</svg>`;

export function contactPage(t, assets) {
  const p = t.contactPage;
  const crumbList = [[t.ui.home, t.paths.home], [p.title, t.paths.contact]];
  const page = { path: t.paths.contact, alt: altFor('contact'), section: 'contact', title: `${p.title} · ${clinic.name}`, desc: `${p.lead} ${clinic.address.street[t.lang]}, ${clinic.address.city}.`, crumbs: crumbList };
  const transportIcons = ['train', 'bus', 'car'];
  const body = `${pageHero(t, p.title, p.lead, crumbList)}
    <section class="section section--flush">
      <div class="wrap contact-grid">
        <div class="contact-cards">
          <div class="info-card" data-reveal>
            ${icon('pin')}
            <div><h2 class="info-card__label">${esc(p.address)}</h2><p>${esc(clinic.address.street[t.lang])}<br>${esc(clinic.address.city)}</p></div>
          </div>
          <div class="info-card" data-reveal>
            ${icon('phone')}
            <div><h2 class="info-card__label">${esc(p.phone)}</h2><p><a href="tel:${clinic.phone}">${esc(clinic.phoneDisplay)}</a></p></div>
          </div>
          <div class="info-card" data-reveal>
            ${icon('mail')}
            <div><h2 class="info-card__label">${esc(p.email)}</h2><p>${esc(clinic.email)}</p></div>
          </div>
          <div class="info-card info-card--hours" data-reveal>
            ${icon('clock')}
            <div>
              <h2 class="info-card__label">${esc(p.hours)}</h2>
              <p class="status" data-open-status></p>
              ${hoursTable(t)}
            </div>
          </div>
        </div>
        <div class="map-wrap" data-reveal>
          <figure>
            ${MAP(t)}
            <figcaption>${esc(p.mapNote)}</figcaption>
          </figure>
          <h2 class="h3">${esc(p.transport)}</h2>
          <ul class="transport">${p.transportItems.map((x, i) => `<li>${icon(transportIcons[i])}<span>${esc(x)}</span></li>`).join('')}</ul>
        </div>
      </div>
    </section>
${ctaBand(t, t.home.ctaTitle, t.home.ctaText)}`;
  return layout(t, page, assets, body);
}

/* --------------------------------------------------------------------------
   Randevu talebi (adım adım form; JS yoksa tek sayfa)
   -------------------------------------------------------------------------- */
export function appointmentPage(t, assets) {
  const a = t.appt;
  const crumbList = [[t.ui.home, t.paths.home], [a.title, t.paths.appointment]];
  const page = { path: t.paths.appointment, alt: altFor('appointment'), section: 'appointment', title: `${a.title} · ${clinic.name}`, desc: a.lead, crumbs: crumbList, bodyClass: 'page-appt' };

  const topicOpts = [
    { id: 'exam', icon: 'exam', name: a.exam, sub: a.examSub },
    ...treatments.map((tr) => ({ id: tr.id, icon: tr.icon, name: tr.name[t.lang], sub: byId(tr.doctor).name, doctor: tr.doctor }))
  ];
  const docOpts = [{ id: 'any', name: a.anyDoctor, sub: a.anyDoctorSub }, ...doctors.map((d) => ({ id: d.id, name: d.name, sub: d.title[t.lang], d }))];
  const err = (id) => `<p class="field-error" id="err-${id}" hidden>${esc(a.errors[id])}</p>`;

  const body = `${pageHero(t, a.title, a.lead, crumbList)}
    <section class="section section--flush">
      <div class="wrap appt-wrap">
        <noscript><p class="note-inline">${esc(a.noscript)}</p></noscript>
        <form class="appt" id="appt" novalidate data-msg="${esc(JSON.stringify({
          stepOf: a.stepOf('{i}', '{n}'), done: a.doneText('{ref}'),
          slots: Object.fromEntries(a.slots.map(([k, l, r]) => [k, `${l} (${r})`])),
          topics: Object.fromEntries(topicOpts.map((o) => [o.id, o.name])),
          doctors: Object.fromEntries(docOpts.map((o) => [o.id, o.name])),
          relevant: Object.fromEntries(treatments.map((tr) => [tr.id, tr.doctor]))
        }))}">
          <ol class="stepper" aria-hidden="true">${a.steps.map((s, i) => `<li data-step-dot="${i}"><span>${i + 1}</span>${esc(s)}</li>`).join('')}</ol>
          <p class="stepper__text" aria-live="polite"></p>

          <fieldset class="appt-step" data-step="0" aria-describedby="err-topic">
            <legend tabindex="-1">${esc(a.q1)}</legend>
            <div class="choice-grid">${topicOpts.map((o) => `
              <label class="choice">
                <input type="radio" name="topic" value="${o.id}"${o.doctor ? ` data-doctor="${o.doctor}"` : ''}>
                <span class="choice__box">${icon(o.icon)}<span><strong>${esc(o.name)}</strong><small>${esc(o.sub)}</small></span></span>
              </label>`).join('')}
            </div>
            ${err('topic')}
          </fieldset>

          <fieldset class="appt-step" data-step="1">
            <legend tabindex="-1">${esc(a.q2)}</legend>
            <div class="choice-grid choice-grid--doc">${docOpts.map((o) => `
              <label class="choice">
                <input type="radio" name="doctor" value="${o.id}"${o.id === 'any' ? ' checked' : ''}>
                <span class="choice__box">${o.d ? avatar(o.d, 'sm') : `<span class="avatar avatar--sm avatar--any">${icon('check')}</span>`}<span><strong>${esc(o.name)}</strong><small>${esc(o.sub)}</small></span></span>
              </label>`).join('')}
            </div>
          </fieldset>

          <fieldset class="appt-step" data-step="2" aria-describedby="err-day err-slot">
            <legend tabindex="-1">${esc(a.q3)}</legend>
            <p class="field-label" id="day-label">${esc(a.dayLabel)}</p>
            <div class="day-picker" role="radiogroup" aria-labelledby="day-label" data-days></div>
            <noscript><input class="input" type="date" name="day"></noscript>
            ${err('day')}
            <p class="field-label" id="slot-label">${esc(a.slotLabel)}</p>
            <div class="slot-picker" role="radiogroup" aria-labelledby="slot-label">${a.slots.map(([k, l, r]) => `
              <label class="choice choice--slot">
                <input type="radio" name="slot" value="${k}">
                <span class="choice__box"><span><strong>${esc(l)}</strong><small data-slot-range="${k}">${esc(r)}</small></span></span>
              </label>`).join('')}
            </div>
            <p class="hint" data-sat-note hidden>${esc(a.satNote)}</p>
            ${err('slot')}
          </fieldset>

          <fieldset class="appt-step" data-step="3">
            <legend tabindex="-1">${esc(a.q4)}</legend>
            <div class="field">
              <label for="f-name">${esc(a.name)}</label>
              <input class="input" id="f-name" name="name" type="text" autocomplete="name" maxlength="80" required aria-describedby="err-name">
              ${err('name')}
            </div>
            <div class="field">
              <label for="f-phone">${esc(a.phone)}</label>
              <input class="input" id="f-phone" name="phone" type="tel" inputmode="tel" autocomplete="tel" maxlength="20" required aria-describedby="hint-phone err-phone">
              <small class="hint" id="hint-phone">${esc(a.phoneHint)}</small>
              ${err('phone')}
            </div>
            <div class="field">
              <label for="f-note">${esc(a.note)}</label>
              <textarea class="input" id="f-note" name="note" rows="3" maxlength="500" aria-describedby="hint-note"></textarea>
              <small class="hint" id="hint-note">${esc(a.noteHint)}</small>
            </div>
            <div class="field field--check">
              <input type="checkbox" id="f-kvkk" name="kvkk" required aria-describedby="err-kvkk">
              <label for="f-kvkk">${a.kvkk.replace('href="/kvkk/"', `href="${t.paths.privacy}"`).replace('href="/en/privacy/"', `href="${t.paths.privacy}"`)}</label>
            </div>
            ${err('kvkk')}
          </fieldset>

          <fieldset class="appt-step" data-step="4">
            <legend tabindex="-1">${esc(a.q5)}</legend>
            <dl class="summary">
              <div><dt>${esc(a.sum.topic)}</dt><dd data-sum="topic"></dd><button type="button" class="link-btn" data-goto="0">${esc(a.edit)}</button></div>
              <div><dt>${esc(a.sum.doctor)}</dt><dd data-sum="doctor"></dd><button type="button" class="link-btn" data-goto="1">${esc(a.edit)}</button></div>
              <div><dt>${esc(a.sum.time)}</dt><dd data-sum="time"></dd><button type="button" class="link-btn" data-goto="2">${esc(a.edit)}</button></div>
              <div><dt>${esc(a.sum.contact)}</dt><dd data-sum="contact"></dd><button type="button" class="link-btn" data-goto="3">${esc(a.edit)}</button></div>
            </dl>
            <p class="note-inline">${esc(a.demoNote)}</p>
          </fieldset>

          <div class="appt-nav">
            <button class="btn btn--ghost" type="button" data-prev>${icon('back')}${esc(a.back)}</button>
            <button class="btn btn--primary" type="button" data-next>${esc(a.next)}${icon('arrow')}</button>
            <button class="btn btn--primary" type="submit" data-submit>${icon('check')}${esc(a.submit)}</button>
          </div>
        </form>

        <div class="appt-done" id="appt-done" hidden tabindex="-1">
          <span class="appt-done__icon">${icon('check')}</span>
          <h2 class="h2">${esc(a.doneTitle)}</h2>
          <p class="lead lead--sm" data-done-text></p>
          <p class="note-inline">${esc(a.demoNote)}</p>
          <button class="btn btn--ghost" type="button" data-restart>${esc(a.again)}</button>
        </div>

        <aside class="appt-aside">
          <div class="hours-card">
            <h2 class="hours-card__title">${icon('clock')}${esc(t.contactPage.hours)}</h2>
            <p class="status status--lg" data-open-status></p>
            ${hoursTable(t)}
          </div>
          <p class="appt-aside__call">${icon('phone')}<a href="tel:${clinic.phone}">${esc(clinic.phoneDisplay)}</a></p>
        </aside>
      </div>
    </section>`;
  return layout(t, page, assets, body);
}

/* --------------------------------------------------------------------------
   KVKK
   -------------------------------------------------------------------------- */
export function privacyPage(t, assets) {
  const p = t.privacyPage;
  const crumbList = [[t.ui.home, t.paths.home], [p.title, t.paths.privacy]];
  const page = { path: t.paths.privacy, alt: altFor('privacy'), title: `${p.title} · ${clinic.name}`, desc: p.body[0][1], crumbs: crumbList };
  const body = `${pageHero(t, p.title, p.lead, crumbList)}
    <section class="section section--flush">
      <div class="wrap prose prose--narrow">${p.body.map(([h, d]) => `
        <h2 class="h3">${esc(h)}</h2>
        <p>${esc(d)}</p>`).join('')}
      </div>
    </section>`;
  return layout(t, page, assets, body);
}

/* --------------------------------------------------------------------------
   404 (iki dilli)
   -------------------------------------------------------------------------- */
export function notFound(assets) {
  const [tr, en] = langs;
  const page = { path: '/404', alt: { tr: '/', en: '/en/' }, title: `404 · ${clinic.name}`, desc: tr.notFound.text };
  const body = `
    <section class="nf">
      <div class="wrap">
        <p class="nf__code" aria-hidden="true">404</p>
        <h1 class="page-title">${esc(tr.notFound.title)}</h1>
        <p class="lead">${esc(tr.notFound.text)}</p>
        <p class="lead lead--sm muted" lang="en">${esc(en.notFound.title)}. ${esc(en.notFound.text)}</p>
        <div class="hero__actions">
          <a class="btn btn--primary" href="/">${esc(tr.notFound.back)}</a>
          <a class="btn btn--ghost" href="/en/" lang="en">${esc(en.notFound.back)}</a>
        </div>
      </div>
    </section>`;
  return layout(tr, page, assets, body).replace('<link rel="canonical" href="https://klinik.egementuncer.dev/404">', '<meta name="robots" content="noindex">');
}
