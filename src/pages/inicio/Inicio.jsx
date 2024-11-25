import s from './inicio.module.scss'
import iconeMainInicio1 from '../../assets/iconeMainInicio1.png'
import iconeMainInicio2 from '../../assets/iconeMainInicio2.png'
import iconeMainInicio3 from '../../assets/iconeMainInicio3.png'
import iconeMainInicio4 from '../../assets/iconeMainInicio4.png'

export default function Inicio() {
    return (
        <main>
            <section className={s.section1}>
                <h2>VENHA FAZER PARTE DA MAIOR REDE DE DOAÇÃO</h2>
            </section>

            <section className={s.section2}>
                <h2>Por que devo doar?</h2>
                <div className={s.containerCards}>
                    <section>
                        <img src={iconeMainInicio1} alt="Imagem minimalista de circulo com 4 pessoas" />
                        <p> Oferece livros a quem não tem acesso, ajudando a reduzir a exclusão social.</p>
                    </section>

                    <section>
                        <img src={iconeMainInicio2} alt="Imagem minimalista com pessoa segurando livro " />
                        <p>Estimula o hábito da leitura e o aprendizado contínuo.</p>
                    </section>

                    <section>
                        <img src={iconeMainInicio3} alt="Imagem minimalista com mão fechada em cima e embaixo 6 pessoas" />
                        <p>Fornece conhecimento e inspiração, permitindo que indivíduos transformem suas vidas.</p>
                    </section>

                    <section>
                        <img src={iconeMainInicio4} alt="Imagem minimalista de balança equilibrada" />
                        <p>Garante que todos, independentemente de sua condição, tenham oportunidades de aprendizado.</p>
                    </section>
                </div>
            </section>
        </main>
    )
}