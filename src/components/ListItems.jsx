function ListItems(props){
 
    return(
      <div className="container1">

      <ul>
        {props.newValues.map((item)=>(
        <li key={item.id}>{item.title}  {item.email} {item.amount} </li>
        ))}
      </ul>
      </div>
    )
}

export default ListItems