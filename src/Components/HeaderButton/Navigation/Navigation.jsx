import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import UiButton from '../../Ui/UiButton/UiButton';



import styles from './Navigation.module.css';


const Navigation = ({ 
        previousPage,
        nextPage,
        countPage,
        getApiResult
    }) => {     
        const getPreviousPage = (url) => {
            getApiResult(previousPage)
        };

        const getNextPage = (url) => {
            getApiResult(nextPage)
        };

    return (
        <div className={styles.navigation_container}>
            <Link to={`/people/?page=${countPage-1}`}>
                <UiButton 
                    name={"Previous"}
                    onClick={getPreviousPage}
                    disabled={!previousPage}
                    theme={styles.dark}/>                                 
            </Link>
            
            <Link to={`/people/?page=${countPage+1}`}>
                <UiButton 
                    name={"Next"}
                    onClick={getNextPage}
                    disabled={!nextPage}
                    theme={styles.dark}/>                
            </Link>
        </div>
    )
}

Navigation.propTypes = {
    previousPage: PropTypes.string,
    nextPage: PropTypes.string,
    countPage: PropTypes.number,
    getApiResult: PropTypes.func
};


export default Navigation;