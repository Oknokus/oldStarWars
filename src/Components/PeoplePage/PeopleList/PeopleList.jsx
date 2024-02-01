import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


import styles from './PeopleList.module.css';


const PeopleList = ({ people }) => {
    return (        
             <ul                
                className={styles.list_container}>
                {people.map(({name, img, id}) => 
                    <Link 
                        to={`/people/${id}`}
                        key={name}>
                        <li className={styles.container_person}>                                
                                <img className={styles.container_img}
                                    src={img} alt={name} />
                                    <p>{name}</p>          
                                        
                        </li>
                    </Link>
                )}
            </ul>        
        )
};

PeopleList.propTypes = {
    people: PropTypes.array
};

export default PeopleList;