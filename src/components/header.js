// import "./header.css";
import styles from "./header.module.css";
const Header = () => { 
return (
    <header className ={styles.header}>
        <nav>
            <ul className={styles.navList}>
                <li > 
                    <a href="#">home</a>
                </li>
                <li className={styles['navItem']}>
                    <a href="#">about</a>
                </li>
                <li className={styles['navItem']}>
                    <a href="#">contact</a>
                </li>
            </ul>
        </nav>
    </header>
);
}
export default Header;