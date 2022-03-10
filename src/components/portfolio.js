import React from 'react'

const Portfolio = ({ projects }) => {

  console.log(projects);
  return (
    <>

      <div className="row s-portfolio__header">
        <div className="column large-12">
          <h3>ALGUNOS DE MIS PROYECTOS</h3>
        </div>
      </div>

      <div className="row collapse  folio-list">

       
        <div className="column folio-item">
          <h5>Sistema de Inventario </h5>
          <img
            src="images/portfolio/gallery/fosforera_two.png"
            srcSet="images/portfolio/gallery/fosforera_two.png 1x, 
                       images/portfolio//gallery/fosforera_two.png 2x"
            alt="Portfolio"
          />

          <div className="modal-popup__desc">

            <br />
            <p>

              {projects[0].description}
            </p>
          </div>
          <ul className="modal-popup__cat">
            <li>Laravel </li>
            <li>Livewire </li>
            <li>Bootstap</li>
            <li>MySQL</li>
          </ul>
          {/*<a href="https://www.behance.net/">
            Project link
          </a>*/}


        </div>  {/* end folio-item */}


      </div> {/* end folio-list */}

      {/* end s-portfolio */}
    </>
  );
}

export default Portfolio;