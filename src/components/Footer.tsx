import { siteContent } from "../data/site-content";

export function Footer() {
  return (
    <footer className="footer">
      <div className="shell footer-grid">
        <div>
          <a className="brand brand-footer" href="#inicio" aria-label="4U Wellness Gym, ir al inicio">
            <span className="brand-mark" aria-hidden="true">4U</span>
            <span className="brand-name"><small>Wellness</small><b>Gym</b></span>
          </a>
          <p>Gimnasio en La Capilla, Celaya, Guanajuato.</p>
        </div>
        <div>
          <strong>Visitanos</strong>
          <address>{siteContent.location.fullAddress}</address>
        </div>
        <div>
          <strong>Perfiles oficiales</strong>
          <a href={siteContent.social.instagram} target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
          <a href={siteContent.social.facebook} target="_blank" rel="noopener noreferrer">
            Facebook
          </a>
        </div>
      </div>
      <div className="shell footer-bottom">
        <span>© {new Date().getFullYear()} 4U Wellness Gym</span>
        <span>Información pública consultada en agosto de 2026.</span>
      </div>
    </footer>
  );
}
