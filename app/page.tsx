import type { Metadata } from "next";
import Image from "next/image";
import { Footer } from "../src/components/Footer";
import { GalleryCarousel } from "../src/components/GalleryCarousel";
import { Header } from "../src/components/Header";
import { HeroNeonFigures, NeonBackdrop } from "../src/components/NeonBackdrop";
import { PricingSelector } from "../src/components/PricingSelector";
import { siteContent } from "../src/data/site-content";
import { getRequestSiteUrl } from "../src/lib/site-url";

export const metadata: Metadata = {
  title: "Gimnasio en Celaya",
  description: siteContent.seo.description,
  alternates: {
    canonical: "/",
  },
};

const factLabels = ["Disciplinas", "Horario", "Acceso"];

export default async function Home() {
  const siteUrl = await getRequestSiteUrl();
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "SportsActivityLocation",
    name: siteContent.name,
    description: siteContent.description,
    url: siteUrl,
    image: siteContent.gallery
        .slice(0, 5)
        .map((image) => new URL(image.src, siteUrl).toString()),
    priceRange: "$45 - $390 MXN",
    address: {
      "@type": "PostalAddress",
      streetAddress: siteContent.location.street,
      addressLocality: siteContent.location.city,
      addressRegion: siteContent.location.state,
      postalCode: siteContent.location.postalCode,
      addressCountry: "MX",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Precios de acceso",
      itemListElement: siteContent.pricing.map((plan) => ({
        "@type": "Offer",
        name: plan.name,
        price: plan.price.replace("$", ""),
        priceCurrency: "MXN",
      })),
    },
    amenityFeature: siteContent.services.map((service) => ({
      "@type": "LocationFeatureSpecification",
      name: service,
      value: true,
    })),
    sameAs: [siteContent.social.facebook, siteContent.social.instagram],
  };

  return (
      <>
        <a className="skip-link" href="#contenido">
          Saltar al contenido
        </a>
        <Header />

        <main id="contenido">
          <NeonBackdrop />
          <section className="hero" id="inicio" aria-labelledby="hero-title">
            <HeroNeonFigures />
            <div className="hero-grid shell">
              <div className="hero-copy">
                <p className="eyebrow">4U WELLNESS GYM</p>
                <h1 id="hero-title">
                  <span>Tu mejor versión</span> comienza aquí
                </h1>
                <p className="hero-lead">
                  Fuerza, cardio y clases de combate en un espacio hecho para
                  entrenar sin excusas.
                </p>
                <div className="hero-actions" aria-label="Acciones principales">
                  <a className="button button-primary" href="#precios">
                    Ver precios <span aria-hidden="true">→</span>
                  </a>
                  <a className="button button-ghost" href="#clases">
                    Conocer clases
                  </a>
                </div>
                <p className="microcopy">
                  TU FUERZA. TU DISCIPLINA. TU MEJOR VERSIÓN.
                </p>
              </div>

              <figure className="hero-photo">
                <Image
                    src={siteContent.assets.heroImage}
                    alt="Integrantes de la comunidad 4U Wellness Gym"
                    fill
                    sizes="(max-width: 820px) 100vw, 42vw"
                    priority
                />
                <figcaption>
                  <span>4U</span>
                  <strong>Voluntad inquebrantable</strong>
                </figcaption>
              </figure>
            </div>
          </section>

          <section className="facts" aria-label="Información rápida">
            <div className="shell facts-grid">
              {siteContent.quickFacts.map((fact, index) => (
                  <article className="fact" key={fact.value}>
                    <p>{factLabels[index]}</p>
                    <strong>{fact.value}</strong>
                    {fact.note ? <span>{fact.note}</span> : null}
                  </article>
              ))}
            </div>
          </section>

          <section className="section intro" id="nosotros" aria-labelledby="intro-title">
            <div className="shell split-copy">
              <div>
                <p className="section-kicker">ENTRENA EN SERIO</p>
                <h2 id="intro-title">Todo lo que necesitas para superarte</h2>
              </div>
              <div className="body-copy">
                <p>
                  Entrena fuerza, peso libre y cardio con una amplia variedad de
                  máquinas, áreas distribuidas en distintos niveles y un ambiente
                  con la energía que distingue a 4U.
                </p>
                <p>
                  Complementa tu rutina con clases de box, Muay Thai, MMA y kick
                  boxing durante el fin de semana.
                </p>
              </div>
            </div>
          </section>

          <section className="section services-section" id="servicios" aria-labelledby="services-title">
            <div className="shell">
              <div className="section-heading services-heading">
                <div>
                  <p className="section-kicker">TODO EN UN MISMO LUGAR</p>
                  <h2 id="services-title">Lo que encuentras en 4U</h2>
                </div>
                <p>
                  Instalaciones, acompañamiento profesional y servicios para que
                  tu entrenamiento sea completo.
                </p>
              </div>

              <ul className="services-grid">
                {siteContent.services.map((service, index) => (
                    <li key={service}>
                      <span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                      <strong>{service}</strong>
                    </li>
                ))}
              </ul>

              <div className="atmosphere-banner">
                <span aria-hidden="true">4U</span>
                <p>{siteContent.atmosphere}</p>
              </div>
            </div>
          </section>

          <section className="section pricing-section" id="precios" aria-labelledby="pricing-title">
            <div className="shell">
              <div className="section-heading pricing-heading">
                <div>
                  <p className="section-kicker section-kicker-dark">ELIGE TU ACCESO</p>
                  <h2 id="pricing-title">Precios</h2>
                </div>
                <p>
                  Opciones para entrenar de forma individual, con tarifa de
                  estudiante, en grupo o por visita.
                </p>
              </div>

              <PricingSelector plans={siteContent.pricing} />
              <p className="pricing-note">
                Precios en MXN proporcionados por 4U Wellness Gym. Consulta
                condiciones y vigencia en recepción.
              </p>
            </div>
          </section>

          <section className="section combat-section" id="clases" aria-labelledby="combat-title">
            <div className="shell combat-grid">
              <div className="combat-copy">
                <p className="section-kicker section-kicker-dark">CLASES DE COMBATE</p>
                <h2 id="combat-title">Atrévete a tomar tu primera clase</h2>
                <div className="class-tags" aria-label="Disciplinas disponibles">
                  {siteContent.combatClasses.names.map((name) => (
                      <span key={name}>{name}</span>
                  ))}
                </div>
                <ol className="requirements-list">
                  {siteContent.combatClasses.requirements.map((requirement) => (
                      <li key={requirement}>{requirement}</li>
                  ))}
                </ol>
              </div>

              <div className="combat-schedule-card">
                <div className="limited-badge">{siteContent.combatClasses.note}</div>
                <h3>Horario de clases</h3>
                {siteContent.combatClasses.schedule.map((schedule) => (
                    <article key={schedule.day}>
                      <h4>{schedule.day}</h4>
                      <ul>
                        {schedule.sessions.map((session) => (
                            <li key={session}>{session}</li>
                        ))}
                      </ul>
                    </article>
                ))}
                <p>Regístrate directamente en recepción.</p>
              </div>
            </div>
          </section>

          <section className="section gallery-section" id="instalaciones" aria-labelledby="gallery-title">
            <div className="shell">
              <div className="section-heading">
                <div>
                  <p className="section-kicker">CONOCE EL ESPACIO</p>
                  <h2 id="gallery-title">Instalaciones</h2>
                </div>
                <p>
                  Recorre las áreas de fuerza, cardio, servicios y comunidad de
                  4U Wellness Gym.
                </p>
              </div>
              <GalleryCarousel images={siteContent.gallery} />
            </div>
          </section>

          <section className="section visit-section" id="horarios" aria-labelledby="visit-title">
            <div className="shell visit-grid">
              <div className="visit-copy">
                <p className="section-kicker section-kicker-dark">PLANEA TU VISITA</p>
                <h2 id="visit-title">Horario del gimnasio</h2>
                <p>
                  Entrena desde temprano, por la noche o durante el fin de semana.
                </p>
                <a
                    className="text-link text-link-light"
                    href={siteContent.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                  Revisar avisos en Instagram <span aria-hidden="true">→</span>
                </a>
              </div>
              <div className="schedule-card">
                <dl>
                  {siteContent.businessHours.map((schedule) => (
                      <div key={schedule.days}>
                        <dt>{schedule.days}</dt>
                        <dd>{schedule.hours}</dd>
                      </div>
                  ))}
                </dl>
                <p className="schedule-note">
                  En días festivos el horario puede cambiar. Confirma cualquier
                  ajuste en los canales oficiales.
                </p>
              </div>
            </div>
          </section>

          <section className="section location-section" id="ubicacion" aria-labelledby="location-title">
            <div className="shell location-grid">
              <figure className="location-photo">
                <Image
                    src={siteContent.assets.locationImage}
                    alt="Fachada de 4U Wellness Gym iluminada por la noche"
                    fill
                    sizes="(max-width: 820px) 100vw, 50vw"
                />
              </figure>
              <div className="location-copy">
                <p className="section-kicker">UBICACIÓN</p>
                <h2 id="location-title">Llegar es sencillo</h2>
                <address>{siteContent.location.fullAddress}</address>
                <p className="location-reference">
                  Referencia: {siteContent.location.reference}
                </p>
                <a
                    className="button button-primary"
                    href={siteContent.location.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                  Abrir en Google Maps <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </section>

          <section className="section faq-section" id="preguntas" aria-labelledby="faq-title">
            <div className="shell faq-grid">
              <div>
                <p className="section-kicker">ANTES DE IR</p>
                <h2 id="faq-title">Preguntas frecuentes</h2>
                <p className="faq-intro">
                  Precios, clases y horarios para preparar tu primera visita.
                </p>
              </div>
              <div className="faq-list">
                {siteContent.faqs.map((faq) => (
                    <details key={faq.question}>
                      <summary>{faq.question}</summary>
                      <p>{faq.answer}</p>
                    </details>
                ))}
              </div>
            </div>
          </section>

          <section className="final-cta" id="contacto" aria-labelledby="contact-title">
            <div className="shell final-cta-inner">
              <div>
                <p className="section-kicker section-kicker-dark">4U WELLNESS GYM</p>
                <h2 id="contact-title">Tu mejor versión comienza aquí</h2>
                <p>
                  Conoce los precios, elige tu horario y da el primer paso.
                </p>
              </div>
              <div className="final-actions">
                <a className="button button-light" href="#precios">
                  Ver precios <span aria-hidden="true">↑</span>
                </a>
                <a
                    className="button button-outline-light"
                    href={siteContent.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                  Facebook
                </a>
                <a
                    className="button button-outline-light"
                    href={siteContent.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                  Instagram
                </a>
              </div>
            </div>
          </section>
        </main>

        <Footer />

        <nav className="floating-socials" aria-label="Perfiles oficiales">
          <a
              className="floating-contact"
              href={siteContent.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Abrir el Facebook oficial de 4U Wellness Gym"
          >
            <span aria-hidden="true">f</span> Facebook
          </a>
          <a
              className="floating-contact"
              href={siteContent.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Abrir el Instagram oficial de 4U Wellness Gym"
          >
            <span aria-hidden="true">@</span> Instagram
          </a>
        </nav>

        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </>
  );
}
