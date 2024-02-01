import PropTypes from 'prop-types';


import styles from './PersonPhoto.module.css';


const PersonPhoto = ({ personName, personPhoto }) => {
    return (
        <>
            <h2 className={styles.person__name}>{personName}</h2>
            <img src={personPhoto} alt={personName} />
        </>
    )
}

PersonPhoto.propTypes = {
    personName: PropTypes.string,
    personPhoto: PropTypes.string,
};

export default PersonPhoto;