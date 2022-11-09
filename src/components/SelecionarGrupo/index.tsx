import { useState } from "react"
import styles from './SelecionarGrupo.module.css';

export default function SelecionarGrupo(){
    const [listaPersonagens, setListaPersonagens] = useState<string[]>([]);
   
    let hilltop:string[] = ['Mege', ' Tara ', 'Gregory ', 'Dante', 'Hershel Greene Jr.', 'Dr. Harlan Carson'];
    let alexandria:string[] = ['Rick Grimes', 'Aaron', 'Michonne', 'Aaron', 'Gabriel Stokes', 'Laura'];
    let reino:string[] = ['Ezekiel', 'Carol', 'Morgan', 'Jenny', 'Richard'];

    return(
        <>
            <div className={styles.container}>
                <h1>Selecione um Grupo</h1>
                <div className={styles.btnContainer}>
                    <button onClick={()=> setListaPersonagens(hilltop)}>Hilltop</button>
                    <button onClick={()=> setListaPersonagens(alexandria)}>Alexandria</button>
                    <button onClick={()=> setListaPersonagens(reino)}>Reino</button>
                </div>
                <ul>                    
                    {listaPersonagens.map((personagem, index)=>{
                            return <li key={index}>{personagem}</li>
                        })}
                </ul>
            </div>
        </>
    )
}