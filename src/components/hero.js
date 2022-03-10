import React, { Component } from 'react'
export default class hero extends Component {
  render() {
    return (
      <>

        <section id="hero" className="s-hero target-section">
          <div className="s-hero__bg rellax" data-rellax-speed={-7} />
          <div className="row s-hero__content">
            <div className="column">
              <div className="s-hero__content-about">

                <img className="s-hero__photo" src="images/dany_corea.jpg" alt="avatar" />

                <h2 >Dany Corea</h2>
                <h3>
                  Hola Mundo! Soy <span>Desarrollador de Software</span>,
                  apasionado por la tecnología, me encanta crear cosas desde el código. {" "}
                  <a className="smoothscroll" href="#about">
                    desplazate hacía abajo{" "}
                  </a>
            y descubre más {" "}
                  <a className="smoothscroll" href="#about">
                    acerca de mí
            </a>
            .
          </h3>
                <div className="s-hero__content-social">


                  <a href="https://github.com/djcorea" target="_blank" rel="noreferrer" >
                    <i className="fab fa-github-square" aria-hidden="true" />
                  </a>
                  <a href="https://www.linkedin.com/in/dany-corea-6326b7177" target="_blank" rel="noreferrer" >
                    <i className="fab fa-linkedin" aria-hidden="true" />
                  </a>
                  <a href="https://www.facebook.com/danyjavier.corea" target="_blank" rel="noreferrer" >
                    <i className="fab fa-facebook-square" aria-hidden="true" />
                  </a>

                  <a href="https://www.instagram.com/dany_corea/" target="_blank" rel="noreferrer" >
                    <i className="fab fa-instagram" aria-hidden="true" />
                  </a>
                </div>
              </div>{" "}
              {/* end s-hero__content-about */}
            </div>
          </div>

        
        </section>{" "}
        {/* end s-hero */}
      </>
    )
  }
}

