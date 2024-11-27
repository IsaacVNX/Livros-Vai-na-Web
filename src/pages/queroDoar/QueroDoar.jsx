import s from './queroDoar.module.scss'
import iconeLivroAberto from '../../assets/iconeLivroAberto.png'

export default function QueroDoar() {
    return (
        <section className={s.queroDoarSection}>
            <p>Por favor, preencha o formulário com suas informações e as informações do Livro</p>
            <form action="">
                <div>
                    <img src={iconeLivroAberto} alt="imagem minimalista de livro aberto" />
                    <p>Informações do Livro</p>
                </div>
                <input type="text" name="" id="" placeholder='Titulo' />
                <input type="text" name="" id="" placeholder='Categoria' />
                <input type="text" name="" id="" placeholder='Autor' />
                <input type="text" name="" id="" placeholder='Link da Imagem' />
                <input type="submit" value="Doar" className={s.button}/>
            </form>
        </section>

    )
}