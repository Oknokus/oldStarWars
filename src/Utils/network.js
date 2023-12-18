

export const getApiResource = async (url) => {
    try {
        const responce = await fetch(url);

        if(!responce.ok) {
            console.log("Not fetch", responce.status);
            return false;
        }

        return await responce.json();   

    } catch (error) {
        console.log("Not fetch try", error.message);
        return false;
    }    
};



