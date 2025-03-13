import type { Promotion } from "../interface/Promotion"

const promotions: Promotion[] = [
    {
        heading: "Presbicia",
        imageSrc: "/promociones/Presbicia.jpg",
        buttonText: "Más información",
        buttonLink: "/promociones/presbicia",
        price: 95,
        body: "La Presbicia o vista cansada se caracteriza básicamente por la dificultar de ver de cerca. En la Operación de Presbicia se sustituye el cristalino por una lente artificial que nos permitirán ver bien tanto de lejos como de cerca."
    },
    {
        heading: "Cataratas",
        imageSrc: "/promociones/Cataratas.jpg",
        buttonText: "Más información",
        buttonLink: "/promociones/cataratas",
        price: 95,
        body: "Las cataratas son una de las causas más frecuentes de pérdida de visión y se deben a la pérdida de transparencia del cristalino, la lente natural del ojo."
    },
    {
        heading: "Retina",
        imageSrc: "/promociones/Retina.jpg",
        buttonText: "Más información",
        buttonLink: "/promociones/retina",
        price: 95,
        body: "La retina es la capa posterior del ojo y transforma la luz y las imágenes que entran en el ojo en señales nerviosas que son enviadas al cerebro."
    },
]

export default promotions;