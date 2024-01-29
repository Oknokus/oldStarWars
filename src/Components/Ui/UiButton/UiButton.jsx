import PropTypes from 'prop-types';
import cn from 'classnames';


import styles from './UiButton.module.css';


const UiButton = ({ 
        name, 
        onClick, 
        disabled,  
        theme="white" 
    }) => {
    return (
        <>
            <button 
                className={cn(styles.navigation_button, theme)}
                onClick={onClick}
                disabled={disabled}>
                    {name}
            </button>
        </>
    )
};

UiButton.propTypes = {
    name: PropTypes.string,
    onClick: PropTypes.func,
    disabled: PropTypes.bool,
    className: PropTypes.string
};


export default UiButton;