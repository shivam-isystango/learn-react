import React, { useState } from 'react';
import "./style.css";
import Navbar from "./Navbar";
import CardList from "./CardList"
import Items from "./Items";

let uniqueList = [...new Set(Items.map((elem)=>{
    return elem.type;
})),"All"]
// console.log(uniqueList);
const Restaurent = () => {
    const [cardData, setCardData] = useState(Items);
    const [categoryType, setCategoryType] = useState(uniqueList);

    const filterData = (category) => {
        let updatedData = Items.filter((filterElem)=>{
            return filterElem.type === category
        });

        if(category === "All"){
            return setCardData(Items)
        }

        setCardData(updatedData);
    }
    return (
        <>
            <div className="container">
                <Navbar filterData={filterData} categoryType={categoryType} />
                <CardList cardData={cardData} />            
            </div>
        </>
    )
}

export default Restaurent