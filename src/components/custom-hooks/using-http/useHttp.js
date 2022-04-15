import React, {useState} from 'react'

const useHttp = () => {
    const [isLoading, setIsLoading] = useState(false);

    const sendRequest = async (config,applyData) => {
        setIsLoading(true);
        try{
            const response = await fetch(config.url, {
                method: config.method ? config.method : 'GET',
                body: config.body ? JSON.stringify(config.body ): null,
                headers: config.headers ? config.headers : {}
            });

            if (!response.ok) {
                throw new Error('Request failed!');
            }

            const data = await response.json();

            applyData(data);
        }catch(err){
            
        }
        setIsLoading(false);
    }
  return {
    isLoading,
    sendRequest
  }
}

export default useHttp