import styles from './PostCard.module.css'

interface PostCardProps{
    post: any;
}

export const PostCard: React.FC <PostCardProps>=({ post })=>{
    return(
        <>
            <div className={styles.post}>
                <img src={`/assets/${post.id}/rick.png`} alt="Imagem do post"  className={styles.capa}/>
            </div>
            <h2 className={styles.titulo}>{post.titulo}</h2>
            <button className={styles.botaoLer}>Ler</button>
        </>
    )
}