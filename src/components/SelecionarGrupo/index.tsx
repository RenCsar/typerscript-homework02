import { useState } from "react"
import styles from './SelecionarGrupo.module.css';

export default function SelecionarGrupo(){
    const [listaPersonagens, setListaPersonagens] = useState<string[] | string>(`Qual grupo quer ver?`);
   
    let hilltop:string[] = ['Mege', ' Tara ', 'Gregory '];
    let alexandria:string[] = ['Rick Grimes', ' Aaron', ' Michonne'];
    let reino:string[] = ['Ezekiel', ' Carol', ' Morgan'];

    return(
        <>
            <div className={styles.container}>
                <h1>Selecione um Grupo</h1>
                <div className={styles.btnContainer}>
                    <button onClick={()=> setListaPersonagens(`Os membros de Hilltop são: ${[hilltop]}.`)}>Hilltop</button>
                    <button onClick={()=> setListaPersonagens(`Os membros de Alexandria são: ${[alexandria]}.`)}>Alexandria</button>
                    <button onClick={()=> setListaPersonagens(()=>`Os membros do Reino são: ${[reino]}.`)}>Reino</button>
                </div>
                <p>{listaPersonagens}</p>
            </div>
        </>
    )
}