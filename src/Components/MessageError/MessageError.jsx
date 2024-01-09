import PropTypes from 'prop-types';


import styles from './MessageError.module.css';


const MessageError = () => {
    return (
        <>
            <h3 className={styles.text}>
                The Star Wars website does not load,<br/> 
                check the request to the host</h3>
        </>
    )
}

export default MessageError;