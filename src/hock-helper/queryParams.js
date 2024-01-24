import { useLocation } from "react-router";

export const queryParams = () => {
        return  new URLSearchParams(useLocation().search)
};