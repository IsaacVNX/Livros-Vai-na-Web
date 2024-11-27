import s from './footer.module.scss'
import logoFacebook from '../../assets/logoFacebook.png'
import logoInstagran from '../../assets/logoInstagran.png'
import logoLinkedin from '../../assets/logoLinkedin.png'
import logoTwitter from '../../assets/logoTwitter.png'
import logoYoutube from '../../assets/logoYoutube.png'

export default function Footer() {
    return (
        <footer className={s.footer}>
            <section className={s.contatosFooter}>
                <p>0011-2233</p>
                <nav>
                    <a href=""><img src={logoFacebook} alt="icone da rede facebook" /></a>
                    <a href=""><img src={logoTwitter} alt="icone da rede twitter" /></a>
                    <a href=""><img src={logoYoutube} alt="icone do youtube" /></a>
                    <a href=""><img src={logoLinkedin} alt="icone da rede linkedin" /></a>
                    <a href=""><img src={logoInstagran} alt="icone da rede instagran" /></a>
                </nav>
            </section>
            <section className={s.copyright}>
<p>Layout desenvolvido pela Vai Na Web para fins educativos - 2024</p>
            </section>
        </footer >
    )
}