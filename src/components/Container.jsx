import { useState } from "react"
import ContainerForm from "./ContainerForm" 
import ListItems from "./ListItems"

function Container(){
    
    const [newValues, setNewValues]= useState([])
function allDatas(title,amount,email){
setNewValues((prevValue)=>{
    return [...prevValue,
    {
        title:title,
        amount:amount,
        email:email,
        id:Math.random().toString()
    }]
})
      
    }
    return(
        <div className="container">
           <ContainerForm onSelectDatas={allDatas}/>
           <ListItems newValues={newValues}/>

        </div>
    )
}

export default Container