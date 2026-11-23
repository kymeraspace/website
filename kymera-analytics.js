// Kymera Group — GA4 + Consent Mode v2 (basic: gtag.js loads only after consent) + lead/contact events
(function () {
  var GA_ID = 'G-73VCMPFYJC', KEY = 'kymera_consent', MAX_AGE = 1000 * 60 * 60 * 24 * 180;
  window.dataLayer = window.dataLayer || [];
  function gtag() { dataLayer.push(arguments); }
  window.gtag = gtag;
  gtag('consent', 'default', { analytics_storage: 'denied', ad_storage: 'denied', ad_user_data: 'denied', ad_personalization: 'denied', wait_for_update: 500 });

  var loaded = false;
  function load() {
    if (loaded) return; loaded = true;
    gtag('consent', 'update', { analytics_storage: 'granted' });
    var s = document.createElement('script'); s.async = true;
    s.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_ID;
    document.head.appendChild(s);
    gtag('js', new Date());
    gtag('config', GA_ID);
  }
  function read() {
    try { var c = JSON.parse(localStorage.getItem(KEY)); if (c && Date.now() - c.t < MAX_AGE) return c.v; } catch (e) {}
    return null;
  }
  function save(v) { try { localStorage.setItem(KEY, JSON.stringify({ v: v, t: Date.now() })); } catch (e) {} }

  function track(name, params) { if (loaded) gtag('event', name, params || {}); }
  window.kymeraTrack = track;

  var state = read();
  if (state === 'granted') load();

  function ready(fn) { document.readyState === 'loading' ? document.addEventListener('DOMContentLoaded', fn) : fn(); }

  // Clean internal links: "felts.html" -> "felts", "index.html" -> "/" (canonical URLs are extensionless)
  var RENAME = { vaccumdryer: 'vacuum-dryer' };
  function cleanLinks() {
    if (!/(^|\.)kymeragroup\.it$/.test(location.hostname)) return; // only on the live domain (keeps local/preview navigation working)
    var as = document.querySelectorAll('a[href]');
    for (var i = 0; i < as.length; i++) {
      var h = as[i].getAttribute('href');
      if (!h || /^(https?:|mailto:|tel:|#|\/\/|javascript:)/i.test(h)) continue;
      var m = h.match(/^(\.?\/)?([^?#]*?)\.html([?#].*)?$/i);
      if (!m) continue;
      var page = m[2], rest = m[3] || '';
      if (/(^|\/)index$/i.test(page)) page = page.replace(/index$/i, '');
      if (RENAME[page]) page = RENAME[page];
      as[i].setAttribute('href', '/' + page + rest);
    }
  }

  // Banner language: Italian / Spanish / English
  var LNG = (navigator.language || 'en').slice(0, 2).toLowerCase();
  var TXT = {
    en: { t: 'Cookies', p: 'We use technical cookies to run this site and, with your consent, Google Analytics cookies to understand how visitors use it. You can change your choice at any time from “Cookie settings” in the footer.', a: 'Accept', r: 'Reject', s: 'Cookie settings' },
    it: { t: 'Cookie', p: 'Usiamo cookie tecnici per far funzionare il sito e, con il tuo consenso, cookie di Google Analytics per capire come viene usato. Puoi cambiare scelta in qualsiasi momento da “Impostazioni cookie” nel footer.', a: 'Accetta', r: 'Rifiuta', s: 'Impostazioni cookie' },
    es: { t: 'Cookies', p: 'Usamos cookies técnicas para que el sitio funcione y, con tu consentimiento, cookies de Google Analytics para entender cómo se usa. Puedes cambiar tu elección cuando quieras desde “Ajustes de cookies” en el pie de página.', a: 'Aceptar', r: 'Rechazar', s: 'Ajustes de cookies' }
  };
  var L = TXT[LNG] || TXT.en;

  ready(function () {
    var css = '.kc-bar{position:fixed;left:20px;bottom:20px;z-index:10050;max-width:460px;background:#141414;color:#eee;font-family:Barlow,system-ui,sans-serif;font-size:14px;line-height:1.5;padding:22px 22px 18px;border-top:3px solid #E8721A;box-shadow:0 12px 40px rgba(0,0,0,.35);display:none}'
      + '.kc-bar.open{display:block}.kc-t{font-family:"Barlow Condensed",sans-serif;font-weight:700;font-size:19px;letter-spacing:.04em;text-transform:uppercase;color:#fff;margin:0 0 6px}'
      + '.kc-bar p{margin:0 0 16px;color:#ccc}.kc-bar a{color:#E8721A;text-decoration:underline}.kc-bar a:hover{color:#fff}'
      + '.kc-btns{display:flex;gap:10px}.kc-btns button{flex:1;min-height:44px;font-family:"Barlow Condensed",sans-serif;font-weight:700;font-size:15px;letter-spacing:.06em;text-transform:uppercase;cursor:pointer;border:1px solid #E8721A;padding:10px 14px}'
      + '.kc-acc{background:#E8721A;color:#fff}.kc-acc:hover{background:#cf6213}.kc-rej{background:transparent;color:#fff}.kc-rej:hover{background:#222}'
      + '.kc-x{position:absolute;top:8px;right:10px;background:none;border:0;color:#999;font-size:18px;cursor:pointer;width:32px;height:32px}.kc-x:hover{color:#fff}'
      + '.kc-legal{display:flex;flex-wrap:wrap;gap:8px 20px;justify-content:center;padding:18px 20px 90px;background:#141414;color:#999;font-family:Barlow,system-ui,sans-serif;font-size:13px}.kc-legal a{color:#ccc;text-decoration:none}.kc-legal a:hover{color:#E8721A}'
      + '@media(max-width:600px){.kc-bar{left:10px;right:10px;bottom:10px;max-width:none}}';
    document.head.insertAdjacentHTML('beforeend', '<style id="kymera-consent">' + css + '</style>');
    var bar = document.createElement('div');
    bar.className = 'kc-bar'; bar.setAttribute('role', 'dialog'); bar.setAttribute('aria-label', 'Cookie consent');
    bar.innerHTML = '<button class="kc-x" type="button" aria-label="Close and reject">✕</button>'
      + '<div class="kc-t">' + L.t + '</div>'
      + '<p>' + L.p + ' <a href="https://www.iubenda.com/privacy-policy/88731423/cookie-policy" target="_blank" rel="noopener">Cookie Policy</a></p>'
      + '<div class="kc-btns"><button class="kc-rej" type="button">' + L.r + '</button><button class="kc-acc" type="button">' + L.a + '</button></div>';
    document.body.appendChild(bar);
    function decide(v) {
      save(v); bar.classList.remove('open');
      if (v === 'granted') load();
      else if (loaded) { gtag('consent', 'update', { analytics_storage: 'denied' }); }
    }
    bar.querySelector('.kc-acc').onclick = function () { decide('granted'); };
    bar.querySelector('.kc-rej').onclick = function () { decide('denied'); };
    bar.querySelector('.kc-x').onclick = function () { decide('denied'); };
    if (!state) bar.classList.add('open');
    window.kymeraCookieSettings = function () { bar.classList.add('open'); };

    function addFooterLink() {
      if (!document.querySelector('.footer-legal') && !document.querySelector('.kc-legal')) {
        var l = document.createElement('div'); l.className = 'kc-legal footer-legal';
        l.innerHTML = '<span>© Kymera Srl — P.IVA 03973550241</span><a href="https://www.iubenda.com/privacy-policy/88731423" target="_blank" rel="noopener">Privacy Policy</a><a href="https://www.iubenda.com/privacy-policy/88731423/cookie-policy" target="_blank" rel="noopener">Cookie Policy</a>';
        document.body.appendChild(l);
      }
      document.querySelectorAll('.footer-legal').forEach(function (f) {
        if (f.querySelector('.kc-link')) return;
        var a = document.createElement('a'); a.href = '#'; a.className = 'kc-link'; a.textContent = L.s;
        a.onclick = function (e) { e.preventDefault(); window.kymeraCookieSettings(); };
        f.appendChild(a);
      });
    }
    addFooterLink(); setTimeout(addFooterLink, 800);
    cleanLinks(); setTimeout(cleanLinks, 800); window.addEventListener('load', cleanLinks);

    // Machine page view
    if (/\/machine-[^/]+$/.test(location.pathname.replace(/\.html$/, ''))) {
      var h = document.querySelector('.mp-info h1, h1');
      track('view_machine', { machine_name: h ? h.textContent.trim() : document.title, page_path: location.pathname });
    }
  });

  // Click tracking: WhatsApp / phone / email
  document.addEventListener('click', function (e) {
    var a = e.target.closest && e.target.closest('a[href]'); if (!a) return;
    var href = a.getAttribute('href') || '', p = { page_path: location.pathname, link_text: (a.textContent || '').trim().slice(0, 80) };
    if (/wa\.me|whatsapp/i.test(href)) track('whatsapp_click', p);
    else if (/^tel:/i.test(href)) track('phone_click', Object.assign(p, { phone: href.slice(4) }));
    else if (/^mailto:/i.test(href)) track('email_click', Object.assign(p, { email: href.slice(7).split('?')[0] }));
  }, true);

  // Form submissions (fired by kymera-site.js after successful Netlify POST)
  document.addEventListener('kymera:lead', function (e) {
    var d = e.detail || {}, p = { form_name: d.form, page_path: location.pathname };
    if (d.machine) p.machine_name = d.machine;
    if (d.form === 'sell-machine') track('sell_machine_submit', p);
    else track('generate_lead', p);
  });
})();
