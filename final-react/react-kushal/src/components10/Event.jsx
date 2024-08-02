import React from 'react'

const yeekFunctionhai = () => {
    return alert('first click');
}
const yeekFunctionhaidbl = () => {
    return alert('Double click');
}
const yeekFunctionhaithird = () => {
    return alert('Third click');
}


const Event = () => {
  return (
    <div>
        <div className="container">
            <div className="row">
             <h2>Event in jsx</h2>
             <div className="col-md-4"><button onClick={yeekFunctionhai} class="btn btn-primary">Onclick</button></div>
             <div className="col-md-4"><button onDoubleClick={yeekFunctionhaidbl} class="btn btn-success">Double Click Me</button></div>
             <div className="col-md-4"><button onClick={() => yeekFunctionhaithird()} class="btn btn-info">Third Me 3</button></div>
           
            </div>
            <div className="row mt-4">
            <div className="col-md-4"><button onClick={() => alert("Hey I am using event function")} class="btn btn-warning">In Line Onclick</button></div>
            </div>
        </div>
      
    </div>
  )
}

export default Event
