export interface BaseContent {
  icon: string;
  title: string;
  imageSrc: string;
  imageDesc: string;
  description_1: string;
  orientation: number;
  description_2: string;
}

export const content: BaseContent[] = [
  {
    icon: "/src/assets/oftalmologia/oftalmologia-icon1.png",
    title: "Unidad de Oftalmología",
    imageSrc: "/src/assets/oftalmologia/oftalmologia1.png",
    imageDesc: "",
    description_1: `
        <h3>Cirugía refractiva</h3>
        <p>
            Técnicas quirúrgicas que tienen como finalidad eliminar o minimizar los defectos refractivos oculares. Estos problemas de la refracción son la miopía, hipermetropía y el astigmatismo. La cirugía refractiva se puede aplicar a través de las técnicas láser (Lasik o de las técnicas de superficie –PRK/Lasek-) o a través de otro tipo de tratamientos, como el implante de una lente intraocular fáquica o pseudofáquica.
        </p>`,
    orientation: 1,
    description_2: "",
  },
  {
    icon: "",
    title: "",
    imageSrc: "/src/assets/oftalmologia/oftalmologia2.png",
    imageDesc: "",
    description_1: `
        <h3>Presbicia o vista cansada</h3>
        <p>
            Es la principal anomalía visual que afecta a los españoles mayores de 45 años. Es un problema refractivo que se produce cuando el cristalino (la lente natural del ojo) pierde parte de su capacidad de enfoque debido al paso del tiempo.<br>
            La presbicia está asociada al envejecimiento de los órganos y no se puede prevenir. En la actualidad, existe un tratamiento quirúrgico muy seguro y eficaz para corregir este problema.
        </p>`,
    orientation: 0,
    description_2: "",
  },
  {
    icon: "",
    title: "",
    imageSrc: "/src/assets/oftalmologia/oftalmologia3.png",
    imageDesc: "",
    description_1: `
        <h3>Cataratas</h3>
        <p>
            Son una opacidad total o parcial del cristalino del ojo. Se producen cuando el cristalino, la lente natural del ojo que tiene capacidad refractiva y permite enfocar los objetos y el paso de la luz, va perdiendo transparencia progresivamente.
            <br>La aparición de las cataratas visuales forma parte del proceso natural de envejecimiento del ser humano, cuando también pueden aparecer otras patologías oculares, como el glaucoma o los problemas de retina. También existen otros factores que las propician, como la diabetes, las infecciones o traumatismos oculares y la herencia genética.
        </p>`,
    orientation: 0,
    description_2: "",
  },
  {
    icon: "",
    title: "",
    imageSrc: "/src/assets/oftalmologia/oftalmologia4.png",
    imageDesc: "",
    description_1: `
        <h3>Retina</h3>
                <p><strong>CENTROS ESPECIALIZADOS EN ENFERMEDADES DE RETINA.</strong></p>
                <p>Nuestra red asistencial está integrada por un grupo de profesionales de la oftalmología con amplia experiencia que tratan toda clase de patologías retinianas, desde las más frecuentes a las más complejas, como la Degeneración Macular Asociada a la Edad, la retinopatía diabética, la retinosis pigmentaria, las posibles consecuencias de la miopía magna.</p>`,
    orientation: 0,
    description_2: "",
  },
  {
    icon: "/src/assets/oftalmologia/oftalmologia-icon2.png",
    title: "Enfermedades de los ojos",
    imageSrc: "/src/assets/oftalmologia/oftalmologia5.png",
    imageDesc: "",
    description_1: `
        <div class="col-md-12">
                <h2>Tratamientos oftalmológicos</h2>
            </div>
             <h3>Oftalmología pediátrica</h3>
                <p>Se ocupa de la detección, tratamiento y seguimiento de los problemas visuales infantiles especialmente del ojo vago y del estrabismo infantil.</p><br>
                <h3>Glaucoma</h3>
                <p>Es una de las enfermedades de los ojos que no suele presentar síntomas hasta fases avanzadas. La detección precoz y abordaje temprano del problema resulta fundamental para frenar la enfermedad.</p>`,
    orientation: 1,
    description_2: "",
  },
  {
    icon: "",
    title: "",
    imageSrc: "/src/assets/oftalmologia/oftalmologia6.png",
    imageDesc: "",
    description_1: `
                        <h3>Estrabismo</h3>
                <p>Se debe abordar desde una doble vía: tratamiento de consecuencias visuales del problema y tratamiento de consecuencias estéticas.</p><br>
                <h3>Oculoplastia</h3>
                <p>Se ocupa de las estructuras faciales que rodean los ojos (párpados, órbita y vía lagrimal) y de los problemas y anomalías que las afectan.</p><br>
                <h3>Córnea</h3>
                <p>Puede verse afectada por algunos problemas que pueden alterar sus características y provocar una visión defectuosa.</p>`,
    orientation: 0,
    description_2: "",
  },
  {
    icon: "",
    title: "",
    imageSrc: "/src/assets/oftalmologia/oftalmologia7.png",
    imageDesc: "",
    description_1: `   <h3>Alteraciones neuroftalmológicas</h3>
                <p>Los casos son tratados conjuntamente por un neurólogo y un oftalmólogo para ofrecer un enfoque y una solución multidisciplinar.</p><br>
                <h3>Vias lagrimales</h3>
                <p>El lagrimeo constante puede llegar a interferir en la calidad de vida del paciente. La obstrucción de la vía lagrimal tiene una solución quirúrgica.</p>`,
    orientation: 0,
    description_2: "",
  }
];