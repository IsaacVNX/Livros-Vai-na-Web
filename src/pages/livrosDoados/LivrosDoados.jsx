import s from './livrosDoados.module.scss'
import livroProtagonista from '../../assets/livroProtagonista.png'

export default function LivrosDoados() {
    return (
        <section className={s.livroDoadosSection}>
            <h2>Livros Doados</h2>
            <section className={s.containerCards}>
                <section>
                    <img src={livroProtagonista} alt="Imagem do livro O Protagonista" />
                    <div>
                        <h3>O Protagonista</h3>
                        <p>Susanne Andrade</p>
                        <p>Ficção</p>
                    </div>
                </section>
                <section>
                    <img src={livroProtagonista} alt="Imagem do livro O Protagonista" />
                    <div>
                        <h3>O Protagonista</h3>
                        <p>Susanne Andrade</p>
                        <p>Ficção</p>
                    </div>
                </section>
            </section>
        </section >
    )
}