import React from "react"
import data from '../data.json'
import'./grocery.css'
import'./CartButton'
import GroceryItem from './GroceryItem'

JSON.stringify(data)


const GroceryDetails = ()=>{
console.log(data)

    return(
        <>
        
        <h1>Groceries</h1>
        <div className="container">
            {/* map through the data and display the cards */data.map((elem)=>{
              return(
                  <GroceryItem key={elem.id}{...elem}/>
              ) 
                

})
            }
        </div>
        </>
    )
}
export default GroceryDetails