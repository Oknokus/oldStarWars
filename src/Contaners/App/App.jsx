import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";

import HeaderButton from "../../Components/HeaderButton/HeaderButton";

import { routesConfig } from "../../Utils/routesConfig";


import styles from "./App.module.css";


const App = () => {  
  return (
      <div className={styles.wrapper}>
      <BrowserRouter>
        <HeaderButton/>    

        <Routes>
          {
            routesConfig.map((route, index) => (
              <Route 
                key={index}
                path={route.patch}
                element={route.element}
                exact={route.exact}/>
            ))
          }        
        </Routes>

      </BrowserRouter> 
    </div>
  )
};

export default App;