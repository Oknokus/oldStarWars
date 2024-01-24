import PropTypes from 'prop-types';
import { useLocation } from 'react-router';

import imgNotFoundPage from "./imgNotFoundPage/imgNotFoundPage.png";


import styles from './NotFoundPage.module.css';


const NotFoundPage = () => {
    const location = useLocation();
    return (
        <div className={styles.notFound_container}>  
            <img src={imgNotFoundPage} alt="imgNotFoundPage" />
            <p className={styles.container_text}>Url not found <u>{location.pathname}</u></p>
        </div>
    )
}
export default NotFoundPage;