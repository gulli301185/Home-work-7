
import React, { useState } from "react";


const ContainerForm = (props) => {

    // const [inputValue, setInputValue]= useState({
    //   titleValue:"",
    //   amountValue:"",
    //   emailValue:""
    // })
    
   const [titleValue,setTitleValue]=useState("")
   const [amountValue,setAmountValue]=useState("")
   const [emailValue,setEmailValue]=useState("")


    const titleChange=(event)=>{
          //  setInputValue({
          //   ...inputValue,
          //   titleValue:event.target.value
          //  })

          setTitleValue(event.target.value)
           console.log(event.target.value);
       
    }

    const amountChange=(event)=>{
          //  setInputValue({
          //   ...inputValue,
          //   amountValue:event.target.value
          //  })
          setAmountValue(event.target.value)
           console.log(event.target.value);
    }

    const emailChange=(event)=>{
          //  setInputValue({
          //   ...inputValue,
          //   emailValue: event.target.value
          //  })
          setEmailValue(event.target.value)
           console.log(event.target.value);
    }

    const submitHandler=(event)=>{
      event.preventDefault()

    //  props.onSelectDatas(inputValue.titleValue,inputValue.amountValue,inputValue.emailValue)
     props.onSelectDatas(titleValue,amountValue, emailValue)

    //  setInputValue({
    //    titleValue:"",
    //    amountValue:"",
    //    emailValue:""
    //  })

           setTitleValue("");
           setAmountValue("");
           setEmailValue("");

    }
   

   
  return (
    <form onSubmit={submitHandler}>
      <div >
        <div className="forForm">
          <label >Title</label>
          {/* <input type="text" value={inputValue.titleValue} onChange={titleChange}/> */}
          <input type="text" value={titleValue} onChange={titleChange}/>
        </div>
        <div className="forForm">
          <label >Amount</label>
          {/* <input type="number" value={inputValue.amountValue}  onChange={amountChange}/> */}
          <input type="number" value={amountValue}  onChange={amountChange}/>
        </div>
        <div className="forForm">
          <label >Email</label>
          {/* <input type="email"  value={inputValue.emailValue} onChange={emailChange}/> */}
          <input type="email"  value={emailValue} onChange={emailChange}/>
        </div>
      </div>
      <div className="forForm">
        <button type="submit"  >Add Expense</button>
      </div>
    </form>
  );
};

export default ContainerForm;