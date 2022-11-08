import styles from './PostEps.module.css';
import {useState} from 'react';

export default function PostEps(){

    let eps = [
        {
            titulo: "The Walking Dead 11ª Temporada",
            ep: "Episódios 17",
            resumo: 'Todas as informações do 17º episódio da 11ª temporada de The Walking Dead: "Lockdown" e do 18º episódio da 11ª temporada de The Walking Dead: "A New Deal". Dê sua nota para estes episódios e comente com outros fãs!',
            imagem:`/assets/1/rick.png`
        },
        {
            titulo: "The Walking Dead 11ª Temporada",
            ep: "Episódios 16",
            resumo: 'Todas as informações do 16º episódio da 11ª temporada de The Walking Dead: "Lockdown" e do 18º episódio da 11ª temporada de The Walking Dead: "A New Deal". Dê sua nota para estes episódios e comente com outros fãs!',
            imagem:`/assets/2/rick.png`
        },
        {
            titulo: "The Walking Dead 11ª Temporada",
            ep: "Episódios 15",
            resumo: 'Todas as informações do 15º episódio da 11ª temporada de The Walking Dead: "Lockdown" e do 18º episódio da 11ª temporada de The Walking Dead: "A New Deal". Dê sua nota para estes episódios e comente com outros fãs!',
            imagem:`/assets/3/rick.png`
        },
        {
            titulo: "The Walking Dead 11ª Temporada",
            ep: "Episódios 14",
            resumo: 'Todas as informações do 14º episódio da 11ª temporada de The Walking Dead: "Lockdown" e do 18º episódio da 11ª temporada de The Walking Dead: "A New Deal". Dê sua nota para estes episódios e comente com outros fãs!',
            imagem:`/assets/4/rick.png`
        },
        {
            titulo: "The Walking Dead 11ª Temporada",
            ep: "Episódios 13",
            resumo: 'Todas as informações do 13º episódio da 11ª temporada de The Walking Dead: "Lockdown" e do 18º episódio da 11ª temporada de The Walking Dead: "A New Deal". Dê sua nota para estes episódios e comente com outros fãs!',
            imagem:`/assets/1/rick.png`
        },
        {
            titulo: "The Walking Dead 11ª Temporada",
            ep: "Episódios 12",
            resumo: 'Todas as informações do 12º episódio da 11ª temporada de The Walking Dead: "Lockdown" e do 18º episódio da 11ª temporada de The Walking Dead: "A New Deal". Dê sua nota para estes episódios e comente com outros fãs!',
            imagem:`/assets/1/rick.png`
        },
        {
            titulo: "The Walking Dead 11ª Temporada",
            ep: "Episódios 15",
            resumo: 'Todas as informações do 15º episódio da 11ª temporada de The Walking Dead: "Lockdown" e do 18º episódio da 11ª temporada de The Walking Dead: "A New Deal". Dê sua nota para estes episódios e comente com outros fãs!',
            imagem:`/assets/3/rick.png`
        },
        {
            titulo: "The Walking Dead 11ª Temporada",
            ep: "Episódios 14",
            resumo: 'Todas as informações do 14º episódio da 11ª temporada de The Walking Dead: "Lockdown" e do 18º episódio da 11ª temporada de The Walking Dead: "A New Deal". Dê sua nota para estes episódios e comente com outros fãs!',
            imagem:`/assets/4/rick.png`
        },
        {
            titulo: "The Walking Dead 11ª Temporada",
            ep: "Episódios 13",
            resumo: 'Todas as informações do 13º episódio da 11ª temporada de The Walking Dead: "Lockdown" e do 18º episódio da 11ª temporada de The Walking Dead: "A New Deal". Dê sua nota para estes episódios e comente com outros fãs!',
            imagem:`/assets/1/rick.png`
        },
        {
            titulo: "The Walking Dead 11ª Temporada",
            ep: "Episódios 12",
            resumo: 'Todas as informações do 12º episódio da 11ª temporada de The Walking Dead: "Lockdown" e do 18º episódio da 11ª temporada de The Walking Dead: "A New Deal". Dê sua nota para estes episódios e comente com outros fãs!',
            imagem:`/assets/1/rick.png`
        },
    ];

    const [postagens, mostrarPostagens] = useState(eps)

    return(
        <>
            <div className={styles.postagensGeral}>
                    {postagens.map(post => (
                        <div className={styles.container}>
                            <div className={styles.imgContainer}>
                                <img src={`${post.imagem}`} alt="" />
                            </div>
                            <div className={styles.conteudoContainer}>
                                <h3>{post.titulo}</h3>
                                <h4>{post.ep}</h4>
                                <p>{post.resumo}</p>
                                <div className={styles.postFooter}>
                                    <div className={styles.imgFooter}>
                                        <img src={`${post.imagem}`} alt="" />
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