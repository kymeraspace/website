// Kymera Group — Shared product popup (modal with pre-filled email request)
// Usage:
//   <script src="kymera-popup.js"></script>
//   <script>
//     KymeraPopup.bind('.part-card', {
//       eyebrow: 'Spare Part',
//       getName: card => card.querySelector('.part-title').textContent.trim(),
//       getDesc: card => card.querySelector('.part-desc')?.textContent.trim() || '',
//       getImg:  card => card.querySelector('.part-img img')?.currentSrc || '',
//       getHref: card => card.getAttribute('href') || '',
//       subjectPrefix: 'Quote Request',
//       bodyExtra: '• Machine brand and model:\n• Quantity:\n'
//     });
//   </script>
(function(global) {
  const STYLE = `
  .pm-overlay {
    position: fixed; inset: 0; z-index: 200;
    background: rgba(8,8,8,0.82); backdrop-filter: blur(6px);
    display: none; align-items: center; justify-content: center;
    padding: 40px 20px;
    opacity: 0; transition: opacity 0.25s ease;
  }
  .pm-overlay.open { display: flex; opacity: 1; }
  .pm-dialog {
    background: var(--dark, #181818); width: 100%; max-width: 880px;
    max-height: calc(100vh - 80px); overflow: auto;
    border: 1px solid rgba(255,255,255,0.08);
    display: grid; grid-template-columns: 1fr 1fr;
    position: relative;
    transform: translateY(12px); transition: transform 0.3s ease;
  }
  .pm-overlay.open .pm-dialog { transform: none; }
  .pm-close {
    position: absolute; top: 14px; right: 14px; z-index: 3;
    width: 36px; height: 36px;
    background: rgba(0,0,0,0.5); border: 1px solid rgba(255,255,255,0.12);
    color: white; font-size: 18px; cursor: pointer;
    display: flex; align-items: center; justify-content: center;
    transition: background 0.2s, border-color 0.2s, color 0.2s;
  }
  .pm-close:hover { background: var(--orange, #E8721A); border-color: var(--orange, #E8721A); color: white; }
  .pm-img-wrap {
    background: #1a1a1a;
    display: flex; align-items: center; justify-content: center;
    min-height: 360px; position: relative; overflow: hidden;
  }
  .pm-img-wrap::before {
    content: ''; position: absolute; top: 0; left: 0; width: 60px; height: 3px; background: var(--orange, #E8721A); z-index: 2;
  }
  .pm-img-wrap img { width: 100%; height: 100%; object-fit: cover; display: block; }
  .pm-body { padding: 40px 36px; display: flex; flex-direction: column; }
  .pm-eyebrow { display: flex; align-items: center; gap: 10px; margin-bottom: 14px; }
  .pm-eyebrow-line { width: 24px; height: 2px; background: var(--orange, #E8721A); }
  .pm-eyebrow span {
    font-size: 10px; font-weight: 600; letter-spacing: 0.3em;
    text-transform: uppercase; color: var(--orange, #E8721A);
    font-family: 'Barlow', sans-serif;
  }
  .pm-title {
    font-family: 'Barlow Condensed', sans-serif; font-weight: 800;
    font-size: 28px; line-height: 1.1; color: white;
    text-transform: uppercase; letter-spacing: -0.005em;
    margin-bottom: 12px; word-break: break-word;
  }
  .pm-text {
    font-size: 14px; font-weight: 300; line-height: 1.65;
    color: rgba(255,255,255,0.55); margin-bottom: 22px;
    font-family: 'Barlow', sans-serif;
  }
  .pm-specs {
    list-style: none; padding: 0; margin: 0 0 22px;
    display: flex; flex-direction: column;
    border-top: 1px solid rgba(255,255,255,0.06);
  }
  .pm-specs li {
    display: flex; justify-content: space-between; align-items: center;
    padding: 9px 0; border-bottom: 1px solid rgba(255,255,255,0.06);
    font-family: 'Barlow', sans-serif; font-size: 12px;
  }
  .pm-specs li span:first-child { color: rgba(255,255,255,0.4); font-weight: 400; letter-spacing: 0.05em; text-transform: uppercase; font-size: 11px; }
  .pm-specs li span:last-child  { color: white; font-weight: 600; }
  .pm-meta {
    display: flex; flex-direction: column; gap: 9px; margin-bottom: 22px;
    padding: 16px 0; border-top: 1px solid rgba(255,255,255,0.06); border-bottom: 1px solid rgba(255,255,255,0.06);
  }
  .pm-meta-row {
    display: flex; align-items: center; gap: 10px;
    font-size: 12px; color: rgba(255,255,255,0.5);
    font-family: 'Barlow', sans-serif;
  }
  .pm-meta-row .dot { width: 6px; height: 6px; background: var(--orange, #E8721A); flex-shrink: 0; }
  .pm-actions { display: flex; flex-direction: column; gap: 12px; margin-top: auto; }
  .pm-btn-primary {
    background: var(--orange, #E8721A); color: white; text-decoration: none;
    padding: 16px 28px; text-align: center;
    font-family: 'Barlow Condensed', sans-serif; font-weight: 700;
    font-size: 14px; letter-spacing: 0.15em; text-transform: uppercase;
    transition: background 0.2s;
    display: flex; align-items: center; justify-content: center; gap: 10px;
  }
  .pm-btn-primary:hover { background: var(--orange-light, #F08030); }
  @media (max-width: 720px) {
    .pm-dialog { grid-template-columns: 1fr; }
    .pm-img-wrap { min-height: 240px; }
    .pm-body { padding: 28px 24px; }
    .pm-title { font-size: 22px; }
  }`;

  const HTML = `
  <div class="pm-overlay" id="km-pm-overlay" role="dialog" aria-modal="true" aria-labelledby="km-pm-title">
    <div class="pm-dialog">
      <button class="pm-close" data-km-pm-close aria-label="Close">✕</button>
      <div class="pm-img-wrap">
        <img id="km-pm-img" src="" alt="">
      </div>
      <div class="pm-body">
        <div class="pm-eyebrow"><div class="pm-eyebrow-line"></div><span id="km-pm-eyebrow">Product</span></div>
        <h3 class="pm-title" id="km-pm-title">Product</h3>
        <p class="pm-text" id="km-pm-desc"></p>
        <ul class="pm-specs" id="km-pm-specs" style="display:none;"></ul>
        <div class="pm-meta">
          <div class="pm-meta-row"><div class="dot"></div><span>Direct supply from Kymera Group</span></div>
          <div class="pm-meta-row"><div class="dot"></div><span>Response within 24 hours</span></div>
          <div class="pm-meta-row"><div class="dot"></div><span>Worldwide shipping available</span></div>
        </div>
        <div class="pm-actions">
          <a id="km-pm-mail" href="mailto:info@kymeragroup.it" class="pm-btn-primary">✉ Request a Quote by Email</a>
        </div>
      </div>
    </div>
  </div>`;

  // Inject style + modal HTML once
  let injected = false;
  function inject() {
    if (injected) return;
    injected = true;
    const style = document.createElement('style');
    style.id = 'km-pm-style';
    style.textContent = STYLE;
    document.head.appendChild(style);

    const host = document.createElement('div');
    host.innerHTML = HTML;
    document.body.appendChild(host.firstElementChild);

    const overlay = document.getElementById('km-pm-overlay');
    overlay.addEventListener('click', (e) => { if (e.target === overlay) close(); });
    document.querySelectorAll('[data-km-pm-close]').forEach(el => el.addEventListener('click', close));
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') close(); });
  }
  function close() {
    const overlay = document.getElementById('km-pm-overlay');
    if (overlay) overlay.classList.remove('open');
    document.body.style.overflow = '';
  }

  function buildMailto(name, originalHref, subjectPrefix, bodyExtra, eyebrow) {
    let url;
    try { url = new URL(originalHref); } catch (e) { url = null; }
    if (url && url.protocol === 'mailto:') {
      const params = url.searchParams;
      const subject = params.get('subject') || ((subjectPrefix || 'Quote Request') + ' — ' + name);
      const body    = params.get('body')    || defaultBody(name, eyebrow, bodyExtra);
      return 'mailto:info@kymeragroup.it?cc=alessandro@kymeragroup.it'
           + '&subject=' + encodeURIComponent(subject)
           + '&body='    + encodeURIComponent(body);
    }
    const subject = (subjectPrefix || 'Quote Request') + ' — ' + name;
    return 'mailto:info@kymeragroup.it?cc=alessandro@kymeragroup.it'
         + '&subject=' + encodeURIComponent(subject)
         + '&body='    + encodeURIComponent(defaultBody(name, eyebrow, bodyExtra));
  }
  function defaultBody(name, eyebrow, bodyExtra) {
    return 'Hello Kymera Group team,\n\n' +
      'I would like to request a quote for the following ' + (eyebrow ? eyebrow.toLowerCase() : 'product') + ':\n\n' +
      '• ' + (eyebrow || 'Product') + ': ' + name + '\n' +
      (bodyExtra ? bodyExtra + '\n' : '') +
      'My details:\n' +
      '• Name:\n' +
      '• Company:\n' +
      '• Country:\n\n' +
      'Thank you in advance.\n\nKind regards,';
  }

  function open(data, cfg) {
    inject();
    document.getElementById('km-pm-img').src = data.img || '';
    document.getElementById('km-pm-img').alt = data.name || '';
    document.getElementById('km-pm-title').textContent = data.name || 'Product';
    document.getElementById('km-pm-desc').textContent  = data.desc || '';
    document.getElementById('km-pm-desc').style.display = data.desc ? '' : 'none';
    document.getElementById('km-pm-eyebrow').textContent = cfg.eyebrow || 'Product';

    const specsEl = document.getElementById('km-pm-specs');
    if (data.specs && data.specs.length) {
      specsEl.innerHTML = data.specs
        .map(s => '<li><span>' + s.label + '</span><span>' + s.value + '</span></li>')
        .join('');
      specsEl.style.display = '';
    } else {
      specsEl.innerHTML = '';
      specsEl.style.display = 'none';
    }

    document.getElementById('km-pm-mail').href =
      buildMailto(data.name || 'Product', data.originalHref || '', cfg.subjectPrefix, cfg.bodyExtra, cfg.eyebrow);

    document.getElementById('km-pm-overlay').classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function bind(selector, cfg) {
    cfg = cfg || {};
    document.addEventListener('DOMContentLoaded', () => {
      document.querySelectorAll(selector).forEach(card => {
        card.style.cursor = 'pointer';
        card.addEventListener('click', (e) => {
          // Allow inline mailto/CTAs inside the card to keep their behaviour if explicitly tagged
          if (e.target.closest('[data-km-pm-skip]')) return;
          e.preventDefault();
          const data = {
            name:         cfg.getName ? cfg.getName(card) : (card.getAttribute('aria-label') || 'Product'),
            desc:         cfg.getDesc ? cfg.getDesc(card) : '',
            img:          cfg.getImg  ? cfg.getImg(card)  : '',
            specs:        cfg.getSpecs ? cfg.getSpecs(card) : null,
            originalHref: cfg.getHref ? cfg.getHref(card) : (card.getAttribute('href') || '')
          };
          open(data, cfg);
        });
      });
    });
  }

  global.KymeraPopup = { bind: bind, open: (data, cfg) => open(data, cfg || {}), close: close };
})(window);
