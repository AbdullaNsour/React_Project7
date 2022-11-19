import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import './card.css'

function SingleContract({ user }) {

  //contract popup trigers
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


   //company popup trigers
  const [show2, setShow2] = useState(false);
  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);



 // One day Time in ms (milliseconds)
 var one_day = 1000 * 60 * 60 * 24
 // To set present_dates to two variables
 var present_date = new Date();
 // 0-11 is Month in JavaScript
 var christmas_day = new Date(user.enddate)
 // To Calculate the result in milliseconds and then converting into days
 var Result = Math.round(christmas_day.getTime()-present_date.getTime()) / (one_day);
 // To remove the decimals from the (Result) resulting days value
 var x = Result.toFixed(0);
   



//To change card color 
let color=''
if(x<=10 && x>3){  color="#E6E117"}else if(x<3){ color="#FF0019"}else{ color="green"}




  return (  
<><div className="col m-5">



<div style={{backgroundColor:color}} className="card radius-15">
          start date{user.startdate}<br/>
          end date{user.enddate}
    <div className="card-body text-center">
      <div className="p-4 radius-15">
        <img src="https://i.pinimg.com/564x/a0/32/c0/a032c0bc4dd684dc71283d3935f07039.jpg" width={170} height={170}  alt />
        <h5> Days until contract ends : {x} Days</h5>
        <h5 className="mb-0 mt-5 text-white">{user.id}</h5>
        <h5>{user.officerName}</h5>
        <h5>{user.employeeNumber}</h5>
        <p className="mb-3 text-white">{user.contractName}</p>
        <div className="d-grid">
            
    <button
  onClick={handleShow}
  className="link-preview"
  title="Contract Details"
>
  <i className="ion ion-eye" />
</button>


{/* Contract detales popup */}

<Modal show={show} onHide={handleClose}>
  <Modal.Header closeButton>
    <Modal.Title>{user.id}</Modal.Title>
  </Modal.Header>
  <Modal.Body>
  <tr>Officer Name : {user.officerName}</tr>
  <tr>Contract Name :  {user.contractName}</tr>
  <tr>Start Date : {user.startdate}</tr>
  <tr>End Data : {user.enddate}</tr>
  <tr>Total Cost : {user.totalCost}</tr>
  <tr>Total Cost : {user.totalCost}</tr>
  </Modal.Body>
  <Modal.Footer>
    <Button variant="secondary" onClick={handleClose}>
      Close
    </Button>
  
  </Modal.Footer>
</Modal>

<button
  onClick={handleShow2}
  className="link-details"
  title="Company Details"
>


  <i className="ion ion-android-open" />
</button>




{/* Contract detales popup */}


<Modal show={show2} onHide={handleClose2}>
  <Modal.Header closeButton>
    <Modal.Title>{user.companyName}</Modal.Title>
  </Modal.Header>
  <Modal.Body>
  <tr>Company Location: {user.companyLocation}</tr>
  <tr>Company Employee Name :  {user.companyEmployeeName}</tr>
  <tr>Company Number : {user.companyNumber}</tr>
  </Modal.Body>
  <Modal.Footer>
    <Button variant="secondary" onClick={handleClose2}>
      Close
    </Button>
    
  </Modal.Footer>
</Modal>


             </div>
      </div>
    </div>
  </div>
</div></>
  )
  

  }


export default SingleContract;


