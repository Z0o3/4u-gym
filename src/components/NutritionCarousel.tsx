import Image from "next/image";

const nutritionImages = [
    {
        src: "/images/nutrition/jessenia-torres-nutriologa.jpeg",
        alt: "Jessenia Torres, licenciada en Nutrición, durante una presentación profesional",
        caption: "Licenciada en Nutrición Jessenia Torres",
    },
    {
        src: "/images/nutrition/consulta-personalizada.jpeg",
        alt: "Información de consulta nutricional presencial y en línea con plan personalizado",
        caption: "Consulta presencial y en línea",
    },
    {
        src: "/images/nutrition/servicios-incluidos.jpeg",
        alt: "Servicios incluidos en la consulta nutricional y opciones adicionales",
        caption: "Acompañamiento y seguimiento",
    },
    {
        src: "/images/nutrition/contacto-nutriologa.jpeg",
        alt: "Información para contactar a la nutrióloga Jessenia Torres",
        caption: "Agenda tu consulta",
    },
];

export function NutritionCarousel() {
    return (
        <div className="nutrition-carousel">
            <p className="nutrition-swipe-hint">Desliza horizontalmente para ver las imágenes</p>
            <div
                className="nutrition-carousel-track"
                role="region"
                aria-label="Carrusel de imágenes del servicio de nutrición"
                tabIndex={0}
            >
                {nutritionImages.map((image, index) => (
                    <figure className="nutrition-slide" key={image.src}>
                        <div className="nutrition-image">
                            <Image
                                src={image.src}
                                alt={image.alt}
                                fill
                                sizes="(max-width: 520px) 86vw, (max-width: 900px) 64vw, 430px"
                            />
                        </div>
                        <figcaption>
                            <span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                            {image.caption}
                        </figcaption>
                    </figure>
                ))}
            </div>
        </div>
    );
}
