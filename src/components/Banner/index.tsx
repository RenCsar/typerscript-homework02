import styles from './Banner.module.css';
import minhaFoto from '../../assets/twd.png'

export default function Banner(){
    return(

        <>
            <div className={styles.banner}>
                <div className={styles.apresentacao}>
                    <h1 className={styles.titulo}>The Walking Dead</h1>
                     <p className={styles.paragrafo}>
                     The Walking Dead conta a história de um grupo de sobreviventes, liderados pelo xerife Rick Grimes, após um apocalipse zumbi. Toda a população da Terra é infectada por um vírus misterioso que transforma os mortos em zumbis.
                    </p>
                </div>
                <div className={styles.imagens}></div>
                <img src={minhaFoto} alt="Atlanta pos apocalíptico" className={styles.minhaFoto}/>
            </div>
        </>

    )
}