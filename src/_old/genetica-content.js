/*
  ARRAY de secciones.
  Cada sección tiene un ARRAY de ROW.
  Cada ROW tiene un ARRAY de COL.
*/

// Se define una interface que tenga todos los campos de la sección
// El índice acordeón se conecta por cada campo title del objeto content

//Lógica de visualización
//Si el BaseContent trae Title e icono se abre sección, se conecta con índice y se invoca al widget IconRow
//Si viene relleno description_2 se invoca un TextBlock
//Si el BaseContent trae imageSrc, imageDesc, orientation y description se invoca al widget ImageRow
//Si solo viene relleno el description_1 se invoca a un HtmlBlock

export const content = [
  {
    rows: [
      [
        {
          component: "IconRow",
          imageSrc: "/genetica/genetica-icon1.png",
          title: "Nutrición Personalizada",
        },
      ],
      [
        {
          component: "IconColumn",
          imageSrc: "/genetica/genetica-img-icon1.png",
          title: "Intolerancias Alimentarias",
          text: "El test de intolerancia alimentaria A200 evalúa la respuesta del sistema inmune frente a más de 200 alimentos habituales en la dieta mediterránea.",
        },
        {
          component: "IconColumn",
          imageSrc: "/genetica/genetica-img-icon2.png",
          title: "Nutrigenética",
          text: "Personas que deseen adaptar su dieta en función a su genética y conocer sus necesidades nutricionales específicas de manera personalizada.",
        },
        {
          component: "IconColumn",
          imageSrc: "/genetica/genetica-img-icon3.png",
          title: "MigraTest",
          text: "Indicada en el caso de personas que padezcan migrañas y quieran saber si el origen está relacionado con un déficit de la actividad de la enzima DAO.",
        },
        {
          component: "IconColumn",
          imageSrc: "/genetica/genetica-img-icon4.png",
          title: "Cuidado intestinal",
          text: "Lactosa Test consiste en un estudio genético de intolerancia a la lactosa, a través de una muestra de raspado bucal.",
        },
      ],
    ],
  },
  {
    rows: [
      [
        {
          component: "IconRow",
          imageSrc: "/genetica/genetica-icon2.png",
          title: "Cardio",
        },
      ],
      [
        {
          component: "IconColumn",
          imageSrc: "/genetica/genetica-img-icon5.png",
          title: "CardioScore",
          text: "Se basa en una extracción de sangre que permitirá una evaluación clínico-genética del riesgo cardiovascular real.",
        },
        {
          component: "IconColumn",
          imageSrc: "/genetica/genetica-img-icon6.png",
          title: "Omega 3",
          text: "Indicador para la prevención de enfermedades cardiovasculares y cerebrovasculares.",
        },
        {
          component: "IconColumn",
          imageSrc: "/genetica/genetica-img-icon7.png",
          title: "Perfil Cardiovascular",
          text: "Permite obtener información sobre los niveles de colesterol (HDL y LDL), triglicéridos, homocisteína, proteína C reactiva, índice aterogénico, lipoproteína (a) y hemoglobina glicosilada.",
        },
      ],
    ],
  },
  {
    rows: [
      [
        {
          component: "IconRow",
          imageSrc: "/genetica/genetica-icon3.png",
          title: "Edad y Salud",
        },
      ],
      [
        {
          component: "ImageRow",
          imageSrc: "/genetica/genetica1.png",
          html: `
          <h3>Longitud Telomérica</h3>
          <p>
            Te permitirá conocer la edad biológica de tu organismo frente a tu edad
            cronológica. Si la prueba resulta desfavorable, la incorporación de
            hábitos de vida saludables te ayudará a mejorar tu longitud telomérica y
            edad biológica en el plazo de un año.
          </p><br />
          <h3>Alteraciones del Sueño</h3>
          <p>
            Permite determinar los niveles de melatonina en saliva en diferentes
            momentos de la noche pudiendo detectar cualquier desviación respecto al
            nivel normal, tanto en horarios como en intensidad. Con ello, se puede
            observar si la producción de melatonina es o no suficiente para la
            conciliación del sueño.
          </p><br />
          <h3>Valoración del Estrés</h3>
          <p>
            Comparar los niveles de cortisol y DHEA con los valores normales,
            aportando información acerca de la fase de estrés en la que se encuentra
            el individuo.
          </p>`,
        },
      ],
    ],
  },
];
