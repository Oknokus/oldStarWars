import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

import { withErrorApi } from '../../../hock-helper/withErrorApi';

import PersonInfo from './PersonInfo/PersonInfo';
import PersonPhoto from './PersonPhoto/PersonPhoto';

import { getApiResource } from '../../../Utils/network';
import { queryParamPersonPage } from '../../../Utils/queryParam';
import { getPersonPageNumber, getPeopleImg } from '../../../Function/getUnitsData';

import { SWAPI_DEV_API, SWAPI_PEOPLE } from '../../../Utils/constants';


import styles from './PersonList.module.css';


const PersonList = ({ setErrorApi }) => {
    const[personInfo, setPersonInfo] = useState(null);
    const[personName, setPersonName] = useState(null);
    const[personPhoto, setPersonPhoto] = useState(null);    

    useEffect(() => {
        (async() => {
            const personPageNumber = queryParamPersonPage();
            const queryPersonPageNumber = getPersonPageNumber(personPageNumber);

            const responce = await getApiResource(SWAPI_DEV_API+SWAPI_PEOPLE+queryPersonPageNumber);

            if(responce) {
                setPersonInfo(
                    [
                    {title: "Gender", data: responce.gender},
                    {title: "Birth_year", data: responce.birth_year},
                    {title: "Created", data: responce.created},
                    {title: "Edited", data: responce.edited},
                    {title: "Height", data: responce.height},
                    {title: "Mass", data: responce.mass},
                    ]
                );
                setPersonName(responce.name);
                setPersonPhoto(getPeopleImg(queryPersonPageNumber));

                setErrorApi(false);
            } else {
                setErrorApi(true);
            }     
        })()
    }, [])

    return ( 
        <div className={ styles.wrapper }>      
            <div className={ styles.container }>      
                { personPhoto && <PersonPhoto personName={personName} personPhoto={personPhoto}/>}
                { personInfo && <PersonInfo personInfo={personInfo}/>}
            </div>    
        </div>
        
    )
};

PersonList.propTypes = {
    setErrorApi: PropTypes.func
};

export default withErrorApi(PersonList);