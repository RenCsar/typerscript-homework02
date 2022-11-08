import {MenuLink} from '../MenuLink';
import styles from './Menu.module.css';

export default function Menu() {
    return(
        <>
            <header>
                <nav className={styles.navegacao}>
                    <MenuLink to="/">
                        Início
                     </MenuLink>
                     <MenuLink to="/Resenha">
                        Resenha dos Episódios
                     </MenuLink>
                     <MenuLink to="/Opiniao">
                        Opinião
                     </MenuLink>
                </nav>
            </header>
        </>
    )
}