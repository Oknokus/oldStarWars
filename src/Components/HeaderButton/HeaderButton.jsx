import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';


import styles from './HeaderButton.module.css';


const HeaderButton = () => {
    return (
        <div className={styles.container}>
            <ul className={styles.list_container}>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/people/?page=1">People</NavLink></li>
                <li><NavLink to="/not-found">Not Found</NavLink></li>
            </ul>
        </div>
    )
}

export default HeaderButton;