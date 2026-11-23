// Kymera Group — Shared Nav & Footer
(function() {
  const page = window.location.pathname.split('/').pop() || 'index.html';

  const MOBILE_CSS = `<style id="kymera-responsive">
  .nav-burger{display:none;flex-direction:column;justify-content:center;gap:5px;width:34px;height:34px;background:none;border:none;cursor:pointer;padding:0;z-index:1200;}
  .nav-burger span{display:block;width:100%;height:2px;background:#fff;transition:transform .25s,opacity .25s;}
  .nav-burger.open span:nth-child(1){transform:translateY(7px) rotate(45deg);}
  .nav-burger.open span:nth-child(2){opacity:0;}
  .nav-burger.open span:nth-child(3){transform:translateY(-7px) rotate(-45deg);}
  @media (max-width:960px){
    nav{padding:0 20px;height:76px;}
    .nav-logo img{height:56px !important;}
    .nav-burger{display:flex;}
    .nav-cta{display:none;}
    .nav-links{position:fixed;top:76px;left:0;right:0;bottom:0;background:var(--black);flex-direction:column;gap:0;overflow-y:auto;padding:12px 0 40px;transform:translateX(100%);transition:transform .3s ease;z-index:1100;}
    .nav-links.open{transform:translateX(0);}
    .nav-links>li{width:100%;border-bottom:1px solid rgba(255,255,255,0.07);}
    .nav-links>li>a{padding:20px 24px;font-size:15px;}
    .nav-dropdown{position:static;opacity:1;pointer-events:none;transform:none;max-height:0;overflow:hidden;transition:max-height .3s ease;background:rgba(255,255,255,0.03);border:none;min-width:0;}
    .nav-links>li.open .nav-dropdown{pointer-events:all;max-height:600px;}
    .nav-dropdown a{padding:14px 40px;font-size:13px;}
    .nav-cta-mobile{display:block !important;margin:20px 24px 0;text-align:center;}
  }
  @media (max-width:768px){
    .page-hero-inner,.hero,.pillars,.quality-banner,.form-section,.contact-strip,.footer-top,.ps,.benefits-grid,.why-inner,.why-right,.innovation-inner,.hero-categories-preview,.cta-strip{grid-template-columns:1fr !important;}
    [class$="-grid"]{grid-template-columns:1fr !important;gap:16px !important;}
    .hero,.page-hero-inner{min-height:auto !important;}
    .hero-left,.page-hero-left{padding:56px 24px !important;}
    .contact-strip{padding:40px 24px !important;}
    .contact-item{border-right:none !important;border-bottom:1px solid rgba(255,255,255,0.05);padding:20px 0 !important;}
    footer{padding:56px 24px 32px !important;}
    .footer-top{gap:36px !important;margin-bottom:36px !important;}
    .footer-bottom{flex-direction:column;gap:16px;align-items:flex-start !important;}
    .footer-legal{flex-wrap:wrap;}
    .form-grid{grid-template-columns:1fr !important;}
    .form-field.full{grid-column:span 1 !important;}
    .video-card.featured{grid-column:span 1 !important;}
    h2.section-title{font-size:clamp(30px,8vw,58px) !important;}
    section,.pillars .pillar,.products-section,.parts,.rollers,.process,.range-grid,.bevel,.services,.why,.numbers,.innovation,.stories,.video-section,.videos,.benefits,.how,.optional,.form-section,.quality-banner,.ps,.cta-strip,.products-grid,.parts-grid{padding-left:24px !important;padding-right:24px !important;}
    .sell-band,.cta-band,.newsletter{flex-direction:column !important;align-items:flex-start !important;padding:40px 24px !important;}
    .newsletter-form{min-width:0 !important;width:100%;}
    .why-right{height:auto !important;}
    .hero h1,.page-hero h1,.page-hero-left h1{font-size:clamp(38px,10.5vw,62px) !important;line-height:1.03 !important;}
    .hero-sub,.page-hero-sub{font-size:15px !important;}
    .hero-stats,.page-hero-stats{flex-wrap:wrap !important;gap:24px !important;}
    .hero-badges,.hero-actions,.cta-actions,.page-hero-actions{flex-wrap:wrap !important;}
    .btn-primary,.btn-ghost,.btn-white,.btn-ghost-w,.art-cta-btn{min-height:46px;display:inline-flex;align-items:center;justify-content:center;}
    .ctable,table{display:block;width:100%;overflow-x:auto;-webkit-overflow-scrolling:touch;}
    .marquee-bar{padding-left:0 !important;padding-right:0 !important;}
    img,video,iframe{max-width:100%;}
  }
  @media (max-width:1100px){
    .blog-hero-inner{padding:64px 40px 48px !important;gap:36px !important;}
    .featured,.posts-section{padding:56px 40px !important;}
    .blog-filters{padding:0 40px !important;}
    .posts-grid{grid-template-columns:repeat(2,minmax(0,1fr)) !important;}
    .fp-body{padding:40px 36px !important;}
  }
  @media (max-width:768px){
    html,body{overflow-x:hidden;}
    .blog-hero{padding-top:76px !important;}
    .blog-hero-inner{grid-template-columns:1fr !important;padding:40px 24px 36px !important;gap:24px !important;}
    .blog-hero h1{font-size:clamp(48px,14vw,72px) !important;}
    .blog-hero-right p{font-size:15px !important;}
    .blog-hero-meta{gap:24px !important;flex-wrap:wrap;}
    .blog-meta-num{font-size:28px !important;}
    .featured{padding:24px !important;}
    .featured-post{grid-template-columns:1fr !important;}
    .fp-img-wrap,.fp-img{min-height:0 !important;}
    .fp-img{aspect-ratio:16/10;height:auto !important;}
    .fp-body{padding:28px 22px 30px !important;}
    .fp-title{font-size:26px !important;}
    .blog-filters{padding:0 12px !important;}
    .blog-filter-btn{padding:16px 14px !important;}
    .posts-section{padding:32px 24px 48px !important;}
    .posts-grid{grid-template-columns:1fr !important;gap:12px !important;}
    .pc-img-wrap{height:auto !important;aspect-ratio:16/9;}
    .pc-img-wrap .pc-img{height:100% !important;min-height:0 !important;}
    .pc-body{padding:20px 20px 24px !important;}
    .pc-read{opacity:1 !important;transform:none !important;}
    .newsletter h3{font-size:32px !important;}
    .newsletter-form{flex-direction:column;gap:8px;}
    .art-hero{padding:104px 0 36px !important;}
    .art-hero-inner{padding:0 22px !important;}
    .art-breadcrumb{flex-wrap:wrap;gap:6px 8px !important;margin-bottom:24px !important;font-size:11px !important;}
    .art-title{font-size:clamp(30px,8.6vw,42px) !important;line-height:1.05 !important;}
    .art-feature-img{padding:0 !important;margin-top:0 !important;}
    .art-feature-cap{padding:0 22px !important;}
    .art-body{padding:36px 22px 56px !important;}
    .art-body>.art-lede{font-size:18px !important;margin-bottom:28px !important;}
    .art-body p,.art-body ul li{font-size:16px !important;line-height:1.75 !important;}
    .art-body h2{font-size:25px !important;margin:40px 0 16px !important;}
    .art-body h3{font-size:19px !important;}
    .art-body blockquote{font-size:21px !important;padding-left:20px !important;margin:32px 0 !important;}
    .art-body img{height:auto;}
    .art-signoff{padding:22px 20px !important;}
    .art-cta{padding:56px 22px !important;}
    .art-back{padding:0 22px 48px !important;}
    .rating-table td.r-name{font-size:18px !important;}
    .rating-table td,.rating-table th{padding-right:12px !important;}
    .contact-hero-inner,.sell-cta{grid-template-columns:minmax(0,1fr) !important;padding-left:24px !important;padding-right:24px !important;gap:24px !important;}
    .contact-hero-left h1{font-size:clamp(44px,13vw,72px) !important;}
    .hcd-item{min-width:0;}.hcd-value{overflow-wrap:anywhere;}
    .sell-cta h3{font-size:34px !important;}
    .sub-nav{padding:0 12px !important;overflow-x:auto;scrollbar-width:none;}
    .sub-nav a{white-space:nowrap;flex:none;}
    .td-table-wrap{padding:20px 16px 24px !important;}
    .models{padding-left:24px !important;padding-right:24px !important;}
    .kq-wa{right:14px !important;bottom:14px !important;width:52px !important;height:52px !important;}
  }
  </style>`;

  const NAV = `
  <nav>
    <a href="index.html" class="nav-logo">
      <img src="logo-kymera.webp" alt="Kymera Group" style="height:100px;width:auto;display:block;filter:brightness(0) invert(1);">
    </a>
    <button class="nav-burger" aria-label="Menu"><span></span><span></span><span></span></button>
    <ul class="nav-links">
      <li><a href="index.html" data-page="index.html">Home</a></li>
      <li>
        <a href="machinery.html" data-page="machinery">Machinery</a>
        <div class="nav-dropdown">
          <a href="machines-available.html">Machines Available</a>
          <a href="labequipment.html">Lab Machine</a>
          <a href="filters.html">Filters</a>
          <a href="the-balloon.html">The Balloon</a>
          <a href="lab-drums.html">Lab Drums</a>
          <a href="sell.html">Sell Your Machine</a>
        </div>
      </li>
      <li>
        <a href="innovative.html" data-page="innovative">Innovative Solutions</a>
        <div class="nav-dropdown">
          <a href="pneumatic-hand-shears.html">Pneumatic Hand Shears</a>
          <a href="calati-thickness-gauges.html">Calati Thickness Gauges</a>
          <a href="softness-tester-st300.html">Softness Tester ST300</a>
          <a href="moisture-meter.html">Moisture Meter</a>
        </div>
      </li>
      <li>
        <a href="consumables.html" data-page="consumables">Consumables</a>
        <div class="nav-dropdown">
          <a href="consumables.html">Spare Parts & Consumables</a>
          <a href="leather-decoration.html">Leather Surface Decoration</a>
          <a href="tannery-toggle-clips.html">Toggling</a>
          <a href="measuring.html">Measuring Equipment</a>
          <a href="band-knives-leather-splitting.html">Band Knives</a>
          <a href="felts.html">Felts</a>
          <a href="buffing-paper-itas-abrasivi.html">Buffing Paper</a>
        </div>
      </li>
      <li><a href="contact.html" data-page="contact.html">Contact us</a></li>
      <li><a href="blog.html" data-page="blog.html">Blog</a></li>
      <li><a href="contact.html" class="nav-cta-mobile" style="display:none;background:var(--orange);color:#fff;padding:14px;text-decoration:none;font-family:'Barlow Condensed',sans-serif;font-weight:700;font-size:13px;letter-spacing:0.15em;text-transform:uppercase;">Get in touch</a></li>
    </ul>
    <a href="contact.html" class="nav-cta">Get in touch</a>
  </nav>`;

  const FOOTER = `
  <footer>
    <div class="footer-top">
      <div class="footer-brand">
        <a href="index.html"><img src="logo-kymera-footer.webp" alt="Kymera Group" style="height:100px;width:auto;display:block;margin-bottom:14px;"></a>
        <div class="tagline">Tannery Industry Specialists</div>
        <p>Supplying high-quality machinery, spare parts, and innovative solutions to the global tannery industry for over 20 years.</p>
      </div>
      <div class="footer-col">
        <h4>Machinery</h4>
        <ul>
          <li><a href="machines-available.html">Machines Available</a></li>
          <li><a href="labequipment.html">Lab Machine</a></li>
          <li><a href="filters.html">Filters</a></li>
          <li><a href="the-balloon.html">The Balloon</a></li>
          <li><a href="lab-drums.html">Lab Drums</a></li>
          <li><a href="sell.html">Sell Your Machine</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Innovative Solutions</h4>
        <ul>
          <li><a href="pneumatic-hand-shears.html">Pneumatic Hand Shears</a></li>
          <li><a href="calati-thickness-gauges.html">Calati Thickness Gauges</a></li>
          <li><a href="softness-tester-st300.html">Softness Tester ST300</a></li>
          <li><a href="moisture-meter.html">Moisture Meter</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Company</h4>
        <ul>
          <li><a href="index.html">Home</a></li>
          <li><a href="blog.html">Blog</a></li>
          <li><a href="contact.html">Contact us</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <p>© 2026 Kymera Group — P.IVA 03973550241 — Via G. Leopardi 51/52 Zanè 36010, Italy</p>
      <div class="footer-legal">
        <a href="https://www.iubenda.com/privacy-policy/88731423" target="_blank" rel="noopener">Privacy Policy</a>
        <a href="https://www.iubenda.com/privacy-policy/88731423/cookie-policy" target="_blank" rel="noopener">Cookie Policy</a>
      </div>
      <div class="footer-socials">
        <a href="https://www.facebook.com/tannery.industry" class="social-btn">f</a>
        <a href="https://www.linkedin.com/company/kymera-group" class="social-btn">in</a>
        <a href="https://www.instagram.com/kymeragroup/" class="social-btn">ig</a>
        <a href="https://www.youtube.com/user/alexburlando" class="social-btn">yt</a>
      </div>
    </div>
  </footer>`;

  // Inject responsive CSS (must land after page's own <style> to win the cascade)
  document.head.insertAdjacentHTML('beforeend', MOBILE_CSS);
  // Inject nav at top of body
  document.body.insertAdjacentHTML('afterbegin', NAV);
  // Inject footer at bottom of body
  document.body.insertAdjacentHTML('beforeend', FOOTER);

  // Mobile menu toggle
  const burger = document.querySelector('.nav-burger');
  const navLinks = document.querySelector('.nav-links');
  if (burger && navLinks) {
    burger.addEventListener('click', () => {
      burger.classList.toggle('open');
      navLinks.classList.toggle('open');
    });
    // On mobile, tapping a top-level link with a dropdown opens the accordion instead of navigating away immediately
    document.querySelectorAll('.nav-links > li').forEach(li => {
      const dd = li.querySelector(':scope > .nav-dropdown');
      const link = li.querySelector(':scope > a');
      if (!dd || !link) return;
      link.addEventListener('click', (e) => {
        if (window.innerWidth <= 960) {
          e.preventDefault();
          li.classList.toggle('open');
        }
      });
    });
  }

  // Highlight active nav link
  document.querySelectorAll('.nav-links a[data-page]').forEach(a => {
    const dp = a.getAttribute('data-page');
    if (page === dp || (dp !== 'index.html' && page.toLowerCase().includes(dp.toLowerCase().replace('.html','')))) {
      a.classList.add('active');
    }
  });

  // Robust dropdown open/close via hover-intent.
  // Pure CSS :hover can get "stuck closed" after navigation or if the pointer
  // crosses a sub-pixel gap; a small JS grace delay makes the dropdown reliably
  // appear on every hover and stay open while the pointer travels to it.
  document.querySelectorAll('.nav-links > li').forEach(li => {
    const dd = li.querySelector(':scope > .nav-dropdown');
    if (!dd) return;
    let closeTimer;
    const openMenu = () => { clearTimeout(closeTimer); li.classList.add('open'); };
    const closeMenu = () => { clearTimeout(closeTimer); closeTimer = setTimeout(() => li.classList.remove('open'), 140); };
    li.addEventListener('mouseenter', openMenu);
    li.addEventListener('mouseleave', closeMenu);
    li.addEventListener('focusin', openMenu);
    li.addEventListener('focusout', closeMenu);
  });

  // Clear any stale open state when the page is restored from the back/forward cache.
  window.addEventListener('pageshow', () => {
    document.querySelectorAll('.nav-links > li.open').forEach(li => li.classList.remove('open'));
  });

  // Scroll reveal
  setTimeout(() => {
    const reveals = document.querySelectorAll('.reveal');
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
    }, { threshold: 0.08 });
    reveals.forEach(el => obs.observe(el));
  }, 100);

})();
