import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import HomePage from '../../Contaners/HomePage/HomePage';
import PeoplePage from '../../Contaners/PeoplePage';

import styles from './HeaderButton.module.css';


const HeaderButton = () => {
    return (
        <div className={styles.container}>
            <ul className={styles.list_container}>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/people">People</NavLink></li>
            </ul>
        </div>
    )
}

export default HeaderButton;