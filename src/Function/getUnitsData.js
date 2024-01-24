import { 
    SWAPI_PEOPLE_PATH_URL, 
    SWAPI_IMG, SWAPI_IMG_PEOPLE, 
    SWAPI_IMG_EXECTION,
    SWAPI_PATH_PAGE
} from "../Utils/constants"; 


const getUnitsData = (url, categoru) => {
    const id = url
        .replace(categoru, "")
        .replace(/\//, "");
    return id;
};

export const getPeopleId = (url) => {
    return getUnitsData(url, SWAPI_PEOPLE_PATH_URL)
};


export const getPeopleImg = (id) => {
    return `${SWAPI_IMG}${SWAPI_IMG_PEOPLE}${id+SWAPI_IMG_EXECTION}`
};



export const getPageNumber = (url) => {    
    const pos = url.indexOf(SWAPI_PATH_PAGE)
    
    const numb = url
        .slice(pos+SWAPI_PATH_PAGE.length, url.length);

    return Number(numb);
}


