import HomePage from "../Contaners/HomePage/HomePage";
import PeoplePage from "../Contaners/PeoplePage";
import PersonList from "../Components/PeoplePage/PersonList/PersonList";
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
        patch: "/people/:id",
        element: <PersonList/>,
        exact: true
    },
    {
        patch: "*",
        element: <NotFoundPage/>,
        exact: false
    }
];

