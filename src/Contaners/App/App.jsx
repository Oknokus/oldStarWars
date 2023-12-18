import { getApiResource } from "../../Utils/network";

import { SWAPI_DEV_API, SWAPI_PEOPLE } from "../../Utils/constants";


const App = () => {
  (async() => {
    const body = await getApiResource(SWAPI_DEV_API+SWAPI_PEOPLE);   
    console.log(body)   
})()

  return (
    <h1>HELLO</h1>
  )
}

export default App;