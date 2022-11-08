import { Link, useLocation } from "react-router-dom";
import styles from "./MenuLink.module.css";

interface MenuLinkProps {
    children?: string;
    to?: any;
}

export const MenuLink: React.FC<MenuLinkProps> = ({children, to})=>{
    const localizacao = useLocation();

    return(
        <Link className={`
        ${styles.link}
        ${localizacao.pathname === to ? styles.linkSublinhado : ''}
        `} to ={to}>
            {children}
        </Link>
    )
}
