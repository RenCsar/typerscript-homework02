import PostEps from "../../components/PostEps";
import SelecionarGrupo from "../../components/SelecionarGrupo";
import styles from "./Resenha.module.css"

export default function Resenha() {
    return (
        <>
            <div className={styles.geral}>
                 <PostEps />
                <SelecionarGrupo />                
            </div>
        </>
    );
}