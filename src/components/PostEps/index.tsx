import styles from './PostEps.module.css';
import {useState} from 'react';

export default function PostEps(){

    let eps = [
        {
            titulo: "The Walking Dead 11ª Temporada",
            ep: "Episódios 17",
            resumo: 'Todas as informações do 17º episódio da 11ª temporada de The Walking Dead: "Lockdown" e do 18º episódio da 11ª temporada de The Walking Dead: "A New Deal". Dê sua nota para estes episódios e comente com outros fãs!',
            imagem:`../assets/eps/1/ep.jpg`
        },
        {
            titulo: "The Walking Dead 11ª Temporada",
            ep: "Episódios 16",
            resumo: 'Todas as informações do 16º episódio da 11ª temporada de The Walking Dead: "Lockdown" e do 18º episódio da 11ª temporada de The Walking Dead: "A New Deal". Dê sua nota para estes episódios e comente com outros fãs!',
            imagem:`../assets/eps/2/ep.jpg`
        },
        {
            titulo: "The Walking Dead 11ª Temporada",
            ep: "Episódios 15",
            resumo: 'Todas as informações do 15º episódio da 11ª temporada de The Walking Dead: "Lockdown" e do 18º episódio da 11ª temporada de The Walking Dead: "A New Deal". Dê sua nota para estes episódios e comente com outros fãs!',
            imagem:`../assets/eps/3/ep.jpg`
        },
        {
            titulo: "The Walking Dead 11ª Temporada",
            ep: "Episódios 14",
            resumo: 'Todas as informações do 14º episódio da 11ª temporada de The Walking Dead: "Lockdown" e do 18º episódio da 11ª temporada de The Walking Dead: "A New Deal". Dê sua nota para estes episódios e comente com outros fãs!',
            imagem:`../assets/eps/4/ep.jpg`
        },
        {
            titulo: "The Walking Dead 11ª Temporada",
            ep: "Episódios 13",
            resumo: 'Todas as informações do 13º episódio da 11ª temporada de The Walking Dead: "Lockdown" e do 18º episódio da 11ª temporada de The Walking Dead: "A New Deal". Dê sua nota para estes episódios e comente com outros fãs!',
            imagem:`../assets/eps/5/ep.jpg`
        },
        {
            titulo: "The Walking Dead 11ª Temporada",
            ep: "Episódios 12",
            resumo: 'Todas as informações do 12º episódio da 11ª temporada de The Walking Dead: "Lockdown" e do 18º episódio da 11ª temporada de The Walking Dead: "A New Deal". Dê sua nota para estes episódios e comente com outros fãs!',
            imagem:`../assets/eps/6/ep.jpg`
        },
        {
            titulo: "The Walking Dead 11ª Temporada",
            ep: "Episódios 11",
            resumo: 'Todas as informações do 15º episódio da 11ª temporada de The Walking Dead: "Lockdown" e do 18º episódio da 11ª temporada de The Walking Dead: "A New Deal". Dê sua nota para estes episódios e comente com outros fãs!',
            imagem:`../assets/eps/7/ep.jpg`
        },
        {
            titulo: "The Walking Dead 11ª Temporada",
            ep: "Episódios 10",
            resumo: 'Todas as informações do 14º episódio da 11ª temporada de The Walking Dead: "Lockdown" e do 18º episódio da 11ª temporada de The Walking Dead: "A New Deal". Dê sua nota para estes episódios e comente com outros fãs!',
            imagem:`../assets/eps/8/ep.jpg`
        },
        {
            titulo: "The Walking Dead 11ª Temporada",
            ep: "Episódios 9",
            resumo: 'Todas as informações do 13º episódio da 11ª temporada de The Walking Dead: "Lockdown" e do 18º episódio da 11ª temporada de The Walking Dead: "A New Deal". Dê sua nota para estes episódios e comente com outros fãs!',
            imagem:`../assets/eps/9/ep.jpg`
        },
        {
            titulo: "The Walking Dead 11ª Temporada",
            ep: "Episódios 8",
            resumo: 'Todas as informações do 12º episódio da 11ª temporada de The Walking Dead: "Lockdown" e do 18º episódio da 11ª temporada de The Walking Dead: "A New Deal". Dê sua nota para estes episódios e comente com outros fãs!',
            imagem:`../assets/eps/1/ep.jpg`
        },
    ];

    const [postagens, mostrarPostagens] = useState(eps)

    return(
        <>
            <div className={styles.postagensGeral}>
                    {postagens.map(post => (
                        <div className={styles.container} key={post.ep}>
                            <div className={styles.imgContainer}>
                                <img src={`${post.imagem}`} alt="" />
                            </div>
                            <div className={styles.conteudoContainer}>
                                <h3>{post.titulo}</h3>
                                <h4>{post.ep}</h4>
                                <p>{post.resumo}</p>
                                <div className={styles.postFooter}>
                                    <div className={styles.imgFooter}>
                                        <img src={`/assets/1/rick.png`} alt="" />
                                    </div>
                                    <small> The Walking Dead</small>
                                    <small> 3 de outubro de 2022</small>
                                </div>
                            </div>
                        </div>
                    ))}
            </div>         
        </>
    )
}