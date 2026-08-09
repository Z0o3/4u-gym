"use client";

import Image from "next/image";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  useSyncExternalStore,
} from "react";

type GalleryImage = {
  src: string;
  alt: string;
  caption: string;
};

type GalleryCarouselProps = {
  images: readonly GalleryImage[];
};

const subscribeToReducedMotion = (callback: () => void) => {
  const media = window.matchMedia("(prefers-reduced-motion: reduce)");
  media.addEventListener("change", callback);
  return () => media.removeEventListener("change", callback);
};

const getReducedMotion = () =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const getServerReducedMotion = () => false;

export function GalleryCarousel({ images }: GalleryCarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const currentRef = useRef(0);
  const [current, setCurrent] = useState(0);
  const [autoPlayEnabled, setAutoPlayEnabled] = useState(true);
  const [interactionPaused, setInteractionPaused] = useState(false);
  const prefersReducedMotion = useSyncExternalStore(
    subscribeToReducedMotion,
    getReducedMotion,
    getServerReducedMotion,
  );
  const autoPlay = autoPlayEnabled && !prefersReducedMotion;

  const moveTo = useCallback(
    (index: number) => {
      const next = (index + images.length) % images.length;
      const track = trackRef.current;
      const slide = track?.children.item(next) as HTMLElement | null;

      if (track && slide) {
        const prefersReducedMotion = window.matchMedia(
          "(prefers-reduced-motion: reduce)",
        ).matches;

        track.scrollTo({
          left: slide.offsetLeft - (track.clientWidth - slide.clientWidth) / 2,
          behavior: prefersReducedMotion ? "auto" : "smooth",
        });
      }

      currentRef.current = next;
      setCurrent(next);
    },
    [images.length],
  );

  useEffect(() => {
    if (!autoPlay || interactionPaused || images.length < 2) return;

    const interval = window.setInterval(() => {
      if (!document.hidden) moveTo(currentRef.current + 1);
    }, 4800);

    return () => window.clearInterval(interval);
  }, [autoPlay, images.length, interactionPaused, moveTo]);

  const updateCurrent = () => {
    const track = trackRef.current;
    if (!track) return;

    const center = track.scrollLeft + track.clientWidth / 2;
    let closest = 0;
    let closestDistance = Number.POSITIVE_INFINITY;

    Array.from(track.children).forEach((child, index) => {
      const slide = child as HTMLElement;
      const slideCenter = slide.offsetLeft + slide.clientWidth / 2;
      const distance = Math.abs(slideCenter - center);

      if (distance < closestDistance) {
        closest = index;
        closestDistance = distance;
      }
    });

    currentRef.current = closest;
    setCurrent(closest);
  };

  return (
    <div
      className="gallery-carousel"
      role="region"
      aria-roledescription="carrusel"
      aria-label="Fotografías de 4U Wellness Gym"
      onMouseEnter={() => setInteractionPaused(true)}
      onMouseLeave={() => setInteractionPaused(false)}
      onFocus={() => setInteractionPaused(true)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
          setInteractionPaused(false);
        }
      }}
    >
      <div className="carousel-toolbar">
        <p
          className="carousel-counter"
          aria-live={!autoPlay || interactionPaused ? "polite" : "off"}
        >
          <span>{String(current + 1).padStart(2, "0")}</span>
          <span aria-hidden="true"> / </span>
          {String(images.length).padStart(2, "0")}
        </p>
        <div className="carousel-controls">
          <button
            className="carousel-autoplay"
            type="button"
            onClick={() => setAutoPlayEnabled((playing) => !playing)}
            aria-pressed={autoPlay}
            disabled={prefersReducedMotion}
          >
            {prefersReducedMotion
              ? "Movimiento reducido"
              : autoPlay
                ? "Pausar"
                : "Reanudar"}
          </button>
          <button
            type="button"
            onClick={() => moveTo(current - 1)}
            aria-label="Ver fotografía anterior"
          >
            <span aria-hidden="true">←</span>
          </button>
          <button
            type="button"
            onClick={() => moveTo(current + 1)}
            aria-label="Ver fotografía siguiente"
          >
            <span aria-hidden="true">→</span>
          </button>
        </div>
      </div>

      <div
        className="carousel-track"
        ref={trackRef}
        onScroll={updateCurrent}
        onKeyDown={(event) => {
          if (event.key === "ArrowLeft") moveTo(current - 1);
          if (event.key === "ArrowRight") moveTo(current + 1);
        }}
        role="listbox"
        tabIndex={0}
        aria-label="Galería automática; usa las flechas izquierda y derecha"
      >
        {images.map((image, index) => (
          <div
            className="carousel-slide"
            key={image.src}
            role="option"
            aria-selected={current === index}
            aria-label={`${index + 1} de ${images.length}: ${image.caption}`}
          >
            <figure>
              <div className="carousel-image">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 820px) 84vw, 44vw"
                  loading={index < 2 ? "eager" : "lazy"}
                />
              </div>
              <figcaption>{image.caption}</figcaption>
            </figure>
          </div>
        ))}
      </div>
    </div>
  );
}
