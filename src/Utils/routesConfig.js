import HomePage from "../Contaners/HomePage/HomePage";
import PeoplePage from "../Contaners/PeoplePage";
import NotFoundPage from "../Contaners/NotFoundPage/NotFoundPage";



export const routesConfig = [
    {
        patch: "/",
        element: <HomePage/>,
        exact: true
    },
    {
        patch: "/people",
        element: <PeoplePage/>,
        exact: true
    },
    {
        patch: "*",
        element: <NotFoundPage/>,
        exact: false
    }
];