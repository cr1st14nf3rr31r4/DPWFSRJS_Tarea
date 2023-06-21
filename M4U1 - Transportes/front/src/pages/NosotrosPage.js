import React from "react";
import '../styles/components/pages/NosotrosPage.css';

const NosotrosPage = (props) => {
    return (
        <main className="holder">
            <div className="historia">
                <h2>Historia</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit soluta expedita explicabo cumque
                    adipisci odio consectetur commodi sequi corporis iste, voluptatem excepturi libero? Libero quia
                    perferendis harum quasi obcaecati deleniti!</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit obcaecati ex nihil aspernatur iusto
                    totam maxime, fuga repudiandae nam voluptatibus quae nesciunt necessitatibus earum beatae nemo ad quidem
                    nisi explicabo?</p>
            </div>
            <div class="staff">
                <h2>Staff</h2>
                <div class="personas">
                    <div class="persona">
                        <img src="../images/nosotros/nosotros1.jpg" alt="Juan Gomez" />
                        <h5>Juan Gomez</h5>
                        <h6>Gerente General</h6>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim et iure corporis tenetur cumque
                            fuga quam at quibusdam debitis. Minus quos similique corrupti cupiditate earum debitis id
                            quaerat totam vero?</p>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default NosotrosPage;