import React from 'react';
// css modules me permite tener mis estilos atados a mi componente
import styles from './SearchBar.module.css';
// traemos el icono, la carpeta son las primeras 2 letras
import { BsSearch } from 'react-icons/bs'

export default function SearchBar() {
  return (
    //  traigo de modulo SearchBar  
    <form className={styles.searchBar}>
        <BsSearch className={styles.icon} />
        <input className={styles.input} placeholder='buscar...' />
        {/* en style siguiente no funcionan pseudoclases y se ponen utilizando camel case, ej: alignItems */}
        <button 
        className={styles.submit} 
        type ="submit" 
        style={{cursor: 'pointer'}} // agregar la mano cuando se pone arriba del GO
        >go
        </button>
    </form>        
    )
}
