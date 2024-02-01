import PropTypes from 'prop-types';


import styles from './PersonInfo.module.css';


const PersonInfo = ({ personInfo }) => {    
    return (
        <ul className={styles.list__container}>
            {
                personInfo && (
                    personInfo.map(({title, data}) => (
                        <li 
                            className={styles.list__item}
                            key={title}>
                                <span className={ styles.item__title }>
                                    {title}: {data}
                                </span>                            
                        </li>
                        
                    ))
                )
            }   
        </ul>
    )
};

PersonInfo.propTypes = {
    personInfo: PropTypes.array
};

export default PersonInfo;