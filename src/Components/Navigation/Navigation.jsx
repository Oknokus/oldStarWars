import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';


import styles from './Navigation.module.css';


const Navigation = ({ pageNext, pagePreviuos, pageCount, getApiResult }) => {
    const getNextPage = () => (getApiResult(pageNext));
    const getPreviousPage = () => (getApiResult(pagePreviuos));


    return (
        <div className={styles.navigation_container}>
            <Link to={`/people/?page=${pageCount-1}`}>
                <button
                    className={styles.navigation_button}
                    onClick={getPreviousPage}
                    disabled={!pagePreviuos}>
                        Previous
                </button>
            </Link>

            <Link to={`/people/?page=${pageCount+1}`}>
                <button
                    className={styles.navigation_button}
                    onClick={getNextPage}
                    disabled={!pageNext}>
                        Next
                </button>
            </Link>
        </div>
    )
}

Navigation.propTypes = {
    pageNext: PropTypes.string,
    pagePreviuos: PropTypes.number,
    pageCount: PropTypes.number,
    getApiResult: PropTypes.func
};

export default Navigation;