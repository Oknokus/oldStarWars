import { useState } from "react"

import MessageError from "../Components/MessageError/MessageError";

export const withErrorApi = Wiew => {
    return props => {
        const[errorApi, setErrorApi] = useState(false);
        return (
            <>
                {
                    errorApi
                        ? 
                        <MessageError/>
                        :                         
                            <Wiew 
                                setErrorApi={setErrorApi}
                                {...props}
                            />                        
                }
            </>
        )
    };
};

