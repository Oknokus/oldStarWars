import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

import PeopleList from '../../../Components/PeoplePage/PeopleList/PeopleList';

import { getApiResource } from "../../../Utils/network";
import { getPeopleId, getPeopleImg } from '../../../Function/getUnitsData';

import { SWAPI_PEOPLE_PATH_URL } from "../../../Utils/constants";


import styles from './PeoplePage.module.css';


const PeoplePage = () => {
    const[people, setPeople] = useState();
    const getApiResult = async (url) => {
        const responce = await getApiResource(url);
           
        const peopleList = responce.results.map(({name, url}) => {
            const id = getPeopleId(url);
            const img = getPeopleImg(id)        

            return {
                name,
                url,
                id,
                img  
            }
        });   

        setPeople(peopleList);           
    };     

    useEffect(()=> {
        getApiResult(SWAPI_PEOPLE_PATH_URL)
    },[]);

    return (   
        <>
            {people && <PeopleList people={people}/>} 
        </>    
    )
}

export default PeoplePage;