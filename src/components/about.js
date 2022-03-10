import React, { Component } from 'react'
export default class about extends Component {
    render() {
        return (
            <>
                <section id="about" className="s-about target-section">
                    <div className="row">
                            <img
                                className="s-about__pic"
                                src="images/about_me.svg" alt="avatar"
                            />
                        <div className="column large-9 tab-12 s-about__content">
                        
                            <h3>Acerca de Mí</h3>
                            <p >
                                Soy estudiante de la carrera de Informática Administrativa
                                en la Universidad Nacional de Honduras, actualmente me encuentro 
                                cursando las ultimas cuatro clases del pensum académico.

                                Tengo conocimiento de programación, desarrollando sistemas de 
                                información, con diferentes lenguajes, herramientas de desarrollo
                                y bases de datos relacionales. Con capacidad de resolución de problemas,
                                adaptación y aprendizaje de nuevas tecnologías de Software.
                            
                            </p>
                            <hr />
                            
                            <div className="row s-about__content-bottom">
                       
                                <div className="column w-1000-stack">
                                    <h3>Contact Details</h3>
                                    <p>
                                        Dany Javier Corea Lazo <br />
                                        Tegucigalpa,Honduras <br />
                                        <a href="tel:+50499330758">+504 9933-0758</a> <br />
                                        <a href="mailto:#0">Javier.corea27@gmail.com</a>
                                    </p>
                                </div>
                                <div className="column w-1000-stack">
                                    <a href="/images/CURRICULUM-DANY_JAVIER_COREA_LAZO.pdf" className="btn btn--download" download>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={24}
                                            height={24}
                                            viewBox="0 0 24 24"
                                            style={{ fill: "rgba(0, 0, 0, 1)", transform: "", msFilter: "" }}
                                        >
                                            <path d="M12 16L16 11 13 11 13 4 11 4 11 11 8 11z" />
                                            <path d="M20,18H4v-7H2v7c0,1.103,0.897,2,2,2h16c1.103,0,2-0.897,2-2v-7h-2V18z" />
                                        </svg>
          Download CV
        </a>
                                </div>
                            </div>
                        </div>
                    </div>{" "}
                    {/* end row */}
                </section>
            </>
        );
    }
}
