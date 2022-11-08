import styles from './Banner.module.css';
import minhaFoto from '../../assets/twd.png'

export default function Banner(){
    return(

        <>
            <div className={styles.banner}>
                <div className={styles.apresentacao}>
                    <h1 className={styles.titulo}>The Walking Dead</h1>
                     <p className={styles.paragrafo}>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis ea voluptates maxime dignissimos laboriosam exercitationem doloribus vitae, repudiandae atque voluptate, provident distinctio nisi iusto ipsam. Odit hic doloribus ipsam veritatis.
                    </p>
                </div>
                <div className={styles.imagens}></div>
                <img src={minhaFoto} alt="Atlanta pos apocalíptico" className={styles.minhaFoto}/>
            </div>
        </>

    )
}