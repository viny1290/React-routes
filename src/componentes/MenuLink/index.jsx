import { Link, NavLink, useLocation } from 'react-router-dom';
import styles from './MenuLink.module.css';

export default function MenuLink({ children, to}) {
    
    {/* Estrutura do react router que desativa o recarregar da pagina para links internos */}

    return(

       <NavLink className={ ({isActive}) => `
            ${isActive ? styles.linkDestacado : ""}
        `} to={to}>
            {children}
        </NavLink>

    );

}