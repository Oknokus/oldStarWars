import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

import { withErrorApi } from '../../hock-helper/withErrorApi';
import { queryParams } from '../../hock-helper/queryParams';

import Navigation from '../../Components/Navigation/Navigation';
import PeopleList from '../../Components/PeoplePage/PeopleList/PeopleList';

import { getApiResource } from "../../Utils/network";
import { getPeopleId, getPeopleImg, getPageNumber } from '../../Function/getUnitsData';

import { SWAPI_PEOPLE_PATH_URL, SWAPI_PATH_PAGE } from "../../Utils/constants";


import styles from './PeoplePage.module.css';


const PeoplePage = ({ setErrorApi }) => {
    const[people, setPeople] = useState();
    const[pageNext, setPageNext] = useState();
    const[pagePreviuos, setPagePrevious] = useState();
    const[pageCount, setPageCount] = useState(1);

    const queru= queryParams();
    const queryPage = queru.get("page")


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
                setErrorApi(false);
                setPageNext(responce.next);
                setPagePrevious(responce.previous);   
                setPageCount(getPageNumber(url))    
            } else {
                setErrorApi(true)
            }
        }

    useEffect(()=> {
        getApiResult(SWAPI_PEOPLE_PATH_URL+SWAPI_PATH_PAGE+queryPage)
    },[queryPage]);

    return (   
        <>  
            <Navigation pageNext={pageNext} pagePreviuos={pagePreviuos} pageCount={pageCount} getApiResult={getApiResult}/>
            {people && <PeopleList people={people}/>} 
        </>    
    )
}

PeoplePage.propTypes = {
    setErrorApi: PropTypes.func
};

export default withErrorApi(PeoplePage);