import { Link } from "react-router-dom";
import styles from './NavBar.module.css';

function NavBar() {
    return (
        <div className={styles.NavBarContainer}>
            <h1>Nail Salon :)</h1>
            <nav className={styles.NavBar}>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/booking">Booking</Link>
                    </li>
                    <li>
                        <Link to="/services">Services</Link>
                    </li>
                    <li>
                        <Link to="/gallery">Gallery</Link>
                    </li>
                    <li> <Link to="/aboutus">About Us</Link></li>
                </ul>
            </nav>
        </div>
    );
}

export default NavBar;