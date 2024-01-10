import PeoplePage from "../Contaners/PeoplePage";
import HomePage from "../Contaners/HomePage/HomePage";

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
    }
];