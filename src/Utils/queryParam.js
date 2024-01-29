import { useLocation } from "react-router";

export const queryParam = () => {
    return  new URLSearchParams(useLocation().search);    
};