
import { useState } from "react"
import data from "../data";
import '../Accordian.css'


function Accordian() {
  const [selected,setselected] = useState(true);

  function handleSingleSelection(dataItem) {
    // console.log(dataItem);
    setselected(dataItem === selected ? null : dataItem);
  }

  return (
    <>
    <h1>React Concepts</h1>
<div className="wrapper">
    <div className="accordian">
      {
        data && data.length >0 ? 
        data.map(dataItem => <div className="item">
          <div onClick={()=> handleSingleSelection(dataItem.id)} className="title">
            <h3>{dataItem.question}</h3>
            <span>+</span>
            </div>


            {
                selected === dataItem.id ? 
                <div className="content">
                    <p>{dataItem.answer}</p>
                </div>
                : null
            }

        </div>
        )
        : <div>No data Found Erripappa</div>
      }
    </div>
</div>
    </>
  )
}

export default Accordian;