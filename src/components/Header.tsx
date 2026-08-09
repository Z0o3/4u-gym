import { siteContent } from "../data/site-content";

const navigation = [
  { href: "#precios", label: "Precios" },
  { href: "#clases", label: "Clases" },
  { href: "#servicios", label: "Servicios" },
  { href: "#instalaciones", label: "Instalaciones" },
  { href: "#horarios", label: "Horario" },
  { href: "#ubicacion", label: "Ubicación" },
];

export function Header() {
  return (
    <header className="site-header">
      <div className="shell header-inner">
        <a className="brand" href="#inicio" aria-label="4U Wellness Gym, ir al inicio">
          <span className="brand-mark" aria-hidden="true">4U</span>
          <span className="brand-name"><small>Wellness</small><b>Gym</b></span>
        </a>

        <nav className="desktop-nav" aria-label="Navegación principal">
          {navigation.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <a
          className="header-cta"
          href={siteContent.location.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          Cómo llegar
        </a>

        <details className="mobile-menu">
          <summary aria-label="Abrir menú de navegación">
            <span />
            <span />
            <span />
          </summary>
          <nav aria-label="Navegación móvil">
            {navigation.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
            <a
              className="mobile-menu-cta"
              href={siteContent.location.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Cómo llegar
            </a>
          </nav>
        </details>
      </div>
    </header>
  );
}
