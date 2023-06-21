import React from "react";
import '../styles/components/pages/HomePage.css';

const HomePage = (props) => {
    return (
        <main className="holder">
            <div className="homeimg">
                <img src="../images/home/img01.jpg" alt="Avion" />
            </div>
            <div className="columnas">
                <div className="bienvenidos">
                    <h2>Bienvenidos</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum culpa, id expedita aut architecto
                        reiciendis perferendis explicabo maiores officiis laudantium porro tempora ullam recusandae
                        doloribus quae earum, velit aliquid suscipit.</p>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum culpa, id expedita aut architecto
                        reiciendis perferendis explicabo maiores officiis laudantium porro tempora ullam recusandae
                        doloribus quae earum, velit aliquid suscipit.</p>
                </div>
                <div className="testimonios">
                    <h2>Testimonios</h2>
                    <div className="testimonio">
                        <span className="cita">Simplemente Excelente</span>
                        <span className="autor">Juan Gómez - zapatos.com</span>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default HomePage;