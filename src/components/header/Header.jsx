import React, { useContext } from 'react';
import { DarkModeContext, useDarkMode } from '../../context/DarkModeContext';
import styles from './Header.module.css';
import {HiMoon,HiSun} from 'react-icons/hi';

export default function Header({filters,filter,onFilterChange}) {
    const {darkMode,toggleDarkMode} = useDarkMode();
   

  return (
    <header className={styles.header}>
        <button onClick={toggleDarkMode} className={styles.toggle}>
            {!darkMode && <HiMoon></HiMoon>}
            {darkMode && <HiSun></HiSun>}
        </button>
        <ul className={styles.filters}>
            {filters.map((value,index)=>(
                <li key={index}>
                    <button className={`${styles.filter} ${value==filter&&styles.selected}`} onClick={()=>onFilterChange(value)}>{value}</button>
                </li>
            ))}
        </ul>
    </header>
  )
}
