import React from "react";
import HTMLFlipBook from "react-pageflip";

// Componente de Página
const Page = React.forwardRef(({ imageSrc }, ref) => {
  return (
    <div className="demoPage" ref={ref}>
      <img src={imageSrc} alt="Página del flipbook" className="flipbook-image" />
    </div>
  );
});

// Componente del Flipbook
function MyBook({ pages }) {
  return (
    <HTMLFlipBook width={500} height={700}>
      <div className="demoPage"><img src={pages[0].content}/></div>
      <div className="demoPage"><img src={pages[1].content}/></div>
      <div className="demoPage"><img src={pages[2].content}/></div>
      <div className="demoPage"><img src={pages[3].content}/></div>
    </HTMLFlipBook>
    // <HTMLFlipBook
    //   width={400} 
    //   height={600}
    //   minWidth={300} 
    //   maxWidth={800} 
    //   minHeight={400} 
    //   maxHeight={1000} 
    //   maxShadowOpacity={0.5}
    //   showCover={true}
    //   >
    //   {pages.map((page, index) => (
    //     <Page key={index} imageSrc={page.content} />
    //   ))}
    // </HTMLFlipBook>
  );
}

// Componente principal que recibe las páginas como prop
const Flipbook = ({ pages }) => {
  return (
    <div>
      <MyBook pages={pages} />
    </div>
  );
};

export default Flipbook;
