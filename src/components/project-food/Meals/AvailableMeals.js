import React, { useEffect, useState } from 'react';
import MealItem from './MealItem';

const AvailableMeals = () => {
    const [mealsData, setMealsData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [httpError, setHttpError] = useState();
    useEffect(()=>{
        const fetchMealsData = async () => {
            const responce = await fetch('https://react-http-a3d43-default-rtdb.firebaseio.com/meals.json');

            if(!responce.ok){
                throw new Error('Somthing went wrong!')
            }

            const data = await responce.json();

            const loadedData = [];

            for(const keys in data){
                loadedData.push({
                    id: keys,
                    name: data[keys].name,
                    description: data[keys].description,
                    price: data[keys].price
                })
            }   
            setMealsData(loadedData);
            setIsLoading(false);
        }

       
        fetchMealsData().catch(error =>{
            setIsLoading(false);
            setHttpError(error.message);
        });      
    }, []);

    if(isLoading){
        return (
            <div className="text-center mt-4">
                <div className="spinner-border" role="status"></div>
                <div>Loading...</div>
            </div>
        )
    }

    if(httpError){
        return (
            <div className="text-center mt-4">
                <div className="text-danger">{httpError}</div>
            </div>
        )
    }
  return (
    <>
        <div className='row'>
            {
                mealsData.map((elem) => {
                    return <MealItem id={elem.id} name={elem.name} description={elem.description} price={elem.price} key={elem.id} />
                })
            }
        </div>
    </>
  )
}

export default AvailableMeals