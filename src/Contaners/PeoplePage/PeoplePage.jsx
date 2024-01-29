import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

import { withErrorApi } from '../../hock-helper/withErrorApi';

import Navigation from '../../Components/HeaderButton/Navigation/Navigation';
import PeopleList from '../../Components/PeoplePage/PeopleList/PeopleList';

import { getApiResource } from "../../Utils/network";
import { getPeopleId, getPeopleImg, getPageNumber } from '../../Function/getUnitsData';
import { queryParam } from '../../Utils/queryParam';

import { SWAPI_PEOPLE_PATH_URL, SWAPI_PATH_PAGE } from "../../Utils/constants";


import styles from './PeoplePage.module.css';


const PeoplePage = ({ setErrorApi }) => {
    const[people, setPeople] = useState();
    
    const[previousPage, setPreviousPage] = useState();  
    const[nextPage, setNextPage] = useState();
    const[countPage, setCountPage] = useState(Number(1));

    const queryPage = queryParam();
    const page = queryPage.get("page");

    const getApiResult = async (url) => {
        const responce = await getApiResource(url);  

            
            if(responce) { 
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
                setPreviousPage(responce.previous);
                setNextPage(responce.next);
                setCountPage(getPageNumber(url)); 
                setErrorApi(false);            
            } else {
                setErrorApi(true);
            }
        }

    useEffect(()=> {
        getApiResult(SWAPI_PEOPLE_PATH_URL+SWAPI_PATH_PAGE+page)
    },[page]);
    
    return (   
        <>    
            <Navigation 
                previousPage={previousPage} 
                nextPage={nextPage} 
                countPage={countPage} 
                getApiResult={getApiResult} />         
            {people && <PeopleList people={people} />} 
        </>    
    )
}

PeoplePage.propTypes = {
    setErrorApi: PropTypes.func
};

export default withErrorApi(PeoplePage);