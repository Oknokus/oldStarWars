import PropTypes from 'prop-types';


import styles from './PeopleList.module.css';


const PeopleList = ({ people }) => {
    return (        
             <ul className={styles.list_container}>
                {people.map(({name, img}) => 
                    <li className={styles.container_person} 
                        key={name}>
                            <a href="">
                                <img className={styles.container_img}
                                    src={img} alt={name} />
                                     <p>{name}</p>          
                            </a>        
                    </li>
                )}
            </ul>        
        )
}

export default PeopleList;