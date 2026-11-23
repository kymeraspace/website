// Kymera Group — forms (Netlify), quick-enquiry modal, floating WhatsApp
(function () {
  const WA = '393205731618';
  const MAIL = 'info@kymeragroup.it';
  const CC = 'alessandro@kymeragroup.it';
  const SKIP = ['form-name', 'bot-field'];

  const css = `
  .kq-wa{position:fixed;right:20px;bottom:20px;z-index:9000;width:56px;height:56px;border-radius:50%;background:#25D366;display:flex;align-items:center;justify-content:center;box-shadow:0 8px 24px rgba(0,0,0,.35);transition:transform .2s}
  .kq-wa:hover{transform:scale(1.07)}
  .kq-wa svg{width:30px;height:30px;fill:#fff}
  .kq-ov{position:fixed;inset:0;z-index:10000;background:rgba(8,8,8,.82);backdrop-filter:blur(6px);display:none;align-items:center;justify-content:center;padding:24px}
  .kq-ov.open{display:flex}
  .kq-box{background:#181818;border:1px solid rgba(255,255,255,.08);width:100%;max-width:560px;max-height:calc(100vh - 48px);overflow:auto;padding:36px 32px;position:relative;font-family:'Barlow',sans-serif;color:#fff}
  .kq-box:before{content:'';position:absolute;top:0;left:0;width:60px;height:3px;background:#E8721A}
  .kq-x{position:absolute;top:12px;right:12px;width:36px;height:36px;background:rgba(0,0,0,.5);border:1px solid rgba(255,255,255,.12);color:#fff;font-size:18px;cursor:pointer}
  .kq-x:hover{background:#E8721A;border-color:#E8721A}
  .kq-eb{font-size:10px;font-weight:600;letter-spacing:.3em;text-transform:uppercase;color:#E8721A;margin-bottom:10px}
  .kq-t{font-family:'Barlow Condensed',sans-serif;font-weight:800;font-size:26px;line-height:1.1;text-transform:uppercase;margin:0 0 20px;padding-right:40px}
  .kq-g{display:grid;grid-template-columns:1fr 1fr;gap:12px}
  .kq-g .full{grid-column:1/-1}
  .kq-g label{display:block;font-size:10px;letter-spacing:.18em;text-transform:uppercase;color:rgba(255,255,255,.5);margin-bottom:6px}
  .kq-g input,.kq-g textarea{width:100%;box-sizing:border-box;background:#0f0f0f;border:1px solid rgba(255,255,255,.12);color:#fff;padding:11px 12px;font:inherit;font-size:14px}
  .kq-g input:focus,.kq-g textarea:focus{outline:none;border-color:#E8721A}
  .kq-g textarea{min-height:130px;resize:vertical}
  .kq-btn{margin-top:18px;width:100%;background:#E8721A;color:#fff;border:none;padding:15px;font-family:'Barlow Condensed',sans-serif;font-weight:700;font-size:14px;letter-spacing:.15em;text-transform:uppercase;cursor:pointer}
  .kq-btn:disabled{opacity:.6;cursor:default}
  .kq-alt{margin-top:14px;font-size:13px;color:rgba(255,255,255,.5);display:flex;gap:16px;flex-wrap:wrap}
  .kq-alt a{color:#E8721A;text-decoration:none}
  .kq-ok{display:none;margin-top:16px;padding:14px;border:1px solid #2a9a4a;color:#7fdc9a;font-size:14px}
  @media(max-width:560px){.kq-g{grid-template-columns:1fr}.kq-box{padding:30px 20px}}`;
  document.head.insertAdjacentHTML('beforeend', '<style id="kymera-site">' + css + '</style>');

  function toMailto(fd, subject) {
    let body = '';
    for (const [k, v] of fd.entries()) {
      if (SKIP.includes(k) || v instanceof File || !String(v).trim()) continue;
      body += k.replace(/[-_]/g, ' ') + ': ' + v + '\n';
    }
    return 'mailto:' + MAIL + '?cc=' + CC + '&subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
  }

  async function send(form) {
    const fd = new FormData(form);
    if (!fd.get('form-name')) fd.set('form-name', form.getAttribute('name') || 'enquiry');
    fd.set('page', location.href);
    const hasFile = [...form.querySelectorAll('input[type=file]')].some(i => i.files && i.files.length);
    const opts = hasFile ? { method: 'POST', body: fd }
      : { method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, body: new URLSearchParams(fd).toString() };
    const r = await fetch(form.getAttribute('action') || '/', opts);
    if (!r.ok) throw new Error('HTTP ' + r.status);
    document.dispatchEvent(new CustomEvent('kymera:lead', { detail: { form: fd.get('form-name'), machine: fd.get('machine') || fd.get('subject') || '' } }));
    return fd;
  }

  window.kymeraSubmit = async function (e) {
    e.preventDefault();
    const form = e.target;
    if (!form.reportValidity()) return;
    const btn = form.querySelector('[type=submit], .form-submit');
    const label = btn ? btn.textContent : '';
    if (btn) { btn.disabled = true; btn.textContent = 'Sending…'; }
    const ok = form.querySelector('.form-success') || document.getElementById('form-success');
    try {
      await send(form);
      if (ok) { ok.style.display = 'block'; ok.classList.add('show'); }
      if (btn) { btn.textContent = '✓ Sent'; btn.style.background = '#333'; }
      form.reset();
    } catch (err) {
      if (btn) { btn.disabled = false; btn.textContent = label; }
      location.href = toMailto(new FormData(form), 'Website request — ' + document.title);
    }
  };
  window.submitForm = window.kymeraSubmit;

  // Quick-enquiry modal: replaces "mailto:...?subject=" quote links with a real form
  const ov = document.createElement('div');
  ov.className = 'kq-ov';
  ov.innerHTML = `<div class="kq-box" role="dialog" aria-modal="true" aria-labelledby="kq-t">
    <button class="kq-x" type="button" aria-label="Close">✕</button>
    <div class="kq-eb">Quick enquiry</div>
    <h3 class="kq-t" id="kq-t">Request a quote</h3>
    <form name="enquiry" method="POST" data-netlify="true" netlify-honeypot="bot-field">
      <input type="hidden" name="form-name" value="enquiry"><input type="hidden" name="subject"><p hidden><input name="bot-field"></p>
      <div class="kq-g">
        <div><label>Name *</label><input name="name" required></div>
        <div><label>Company *</label><input name="company" required></div>
        <div><label>Email *</label><input name="email" type="email" required></div>
        <div><label>Phone / WhatsApp</label><input name="phone"></div>
        <div class="full"><label>Country</label><input name="country"></div>
        <div class="full"><label>Message *</label><textarea name="message" required></textarea></div>
      </div>
      <button class="kq-btn" type="submit">Send enquiry →</button>
      <div class="kq-ok">✓ Thank you — your enquiry has been sent. We reply within 24 hours.</div>
      <div class="kq-alt"><a class="kq-wa-link" href="https://wa.me/${WA}" target="_blank" rel="noopener">WhatsApp +39 320 573 1618</a><a class="kq-mail" href="mailto:${MAIL}">Or write from your email app</a></div>
    </form></div>`;
  document.body.appendChild(ov);
  const qf = ov.querySelector('form');
  const close = () => { ov.classList.remove('open'); document.body.style.overflow = ''; };
  ov.addEventListener('click', e => { if (e.target === ov) close(); });
  ov.querySelector('.kq-x').addEventListener('click', close);
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && ov.classList.contains('open')) close(); });
  qf.addEventListener('submit', async e => {
    e.preventDefault();
    if (!qf.reportValidity()) return;
    const btn = qf.querySelector('.kq-btn');
    btn.disabled = true; btn.textContent = 'Sending…';
    try {
      await send(qf);
      qf.querySelector('.kq-ok').style.display = 'block';
      btn.textContent = '✓ Sent';
    } catch (err) {
      btn.disabled = false; btn.textContent = 'Send enquiry →';
      location.href = toMailto(new FormData(qf), qf.subject.value || 'Website enquiry');
    }
  });

  function openEnquiry(subject, body, href) {
    document.querySelectorAll('.pm-overlay.open').forEach(o => o.classList.remove('open'));
    qf.reset();
    const b = qf.querySelector('.kq-btn'); b.disabled = false; b.textContent = 'Send enquiry →';
    qf.querySelector('.kq-ok').style.display = 'none';
    qf.subject.value = subject;
    ov.querySelector('#kq-t').textContent = subject.replace(/^(Quote Request|Request|Enquiry)\s*[-—–:]\s*/i, '') || 'Request a quote';
    qf.message.value = (body || '').replace(/\n*Kind regards,?\s*$/i, '').trim();
    ov.querySelector('.kq-mail').href = href;
    ov.querySelector('.kq-wa-link').href = 'https://wa.me/' + WA + '?text=' + encodeURIComponent(subject);
    ov.classList.add('open');
    document.body.style.overflow = 'hidden';
    setTimeout(() => qf.name.focus(), 50);
  }
  window.kymeraEnquiry = openEnquiry;

  document.addEventListener('click', e => {
    const a = e.target.closest && e.target.closest('a[href^="mailto:"]');
    if (!a || a.closest('.kq-ov')) return;
    const href = a.getAttribute('href');
    const q = href.split('?')[1] || '';
    const p = new URLSearchParams(q.replace(/\+/g, '%2B'));
    const subject = p.get('subject');
    if (!subject) return;
    e.preventDefault(); e.stopPropagation();
    openEnquiry(subject, p.get('body') || '', href);
  }, true);

  // Floating WhatsApp
  if (!document.querySelector('.kq-wa')) {
    const w = document.createElement('a');
    w.className = 'kq-wa';
    w.href = 'https://wa.me/' + WA + '?text=' + encodeURIComponent('Hello Kymera, I am writing from ' + document.title);
    w.target = '_blank'; w.rel = 'noopener'; w.setAttribute('aria-label', 'Chat on WhatsApp');
    w.innerHTML = '<svg viewBox="0 0 32 32" aria-hidden="true"><path d="M16 3C9 3 3.3 8.6 3.3 15.6c0 2.4.7 4.7 1.9 6.7L3 29l6.9-2.2c1.9 1 4 1.6 6.1 1.6 7 0 12.7-5.7 12.7-12.7S23 3 16 3zm0 23.2c-2 0-3.9-.6-5.5-1.6l-.4-.2-4.1 1.3 1.3-4-.3-.4c-1.1-1.7-1.7-3.6-1.7-5.6C5.3 9.8 10.1 5.1 16 5.1s10.6 4.7 10.6 10.5S21.9 26.2 16 26.2zm5.8-7.9c-.3-.2-1.9-.9-2.2-1-.3-.1-.5-.2-.7.2-.2.3-.8 1-1 1.2-.2.2-.4.2-.7.1-.3-.2-1.3-.5-2.6-1.6-1-.9-1.6-1.9-1.8-2.2-.2-.3 0-.5.1-.7l.5-.6c.2-.2.2-.3.3-.6.1-.2 0-.4 0-.6l-1-2.4c-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4-.3.3-1.2 1.1-1.2 2.8s1.2 3.2 1.4 3.5c.2.2 2.4 3.6 5.7 5 .8.3 1.4.5 1.9.7.8.3 1.5.2 2.1.1.6-.1 1.9-.8 2.2-1.5.3-.7.3-1.4.2-1.5-.1-.2-.3-.3-.6-.4z"/></svg>';
    document.body.appendChild(w);
  }
})();
