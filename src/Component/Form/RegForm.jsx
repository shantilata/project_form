import React, { useState } from 'react'
import { Form} from 'react-bootstrap';
import Alert from 'react-bootstrap/Alert';
import axios from 'axios';

import './Reg.css'
const RegForm = () => {
  let post_api = "http://localhost:1000/petinfo"


  const [inputData, setInputData] = useState({
    fname: "",
    contact_no: "",
    city: "",
    state: "",
    pin_code: "",
    email: "",
    pname: "",
    animal: "",
    species: "",
    breed: "",
    color: "",
    age: "",
    weight: "",
    gender: "",
    chip_no: "",

    isError: {
      fname: "",
      contact_no: "",
      city: "",
      state: "",
      pin_code: "",
      email: "",
      pname: "",
      animal: "",
      species: "",
      breed: "",
      color: "",
      age: "",
      weight: "",
      gender: "",
      chip_no: ""
    }
  })
  const valid_ChipNo = RegExp(/^[A-Z]{4}[0-9]{4}$/);
  const valid_mail = RegExp(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/)
  const valid_pin = RegExp(/^[0-9]{6}$/)
  const valid_weight = RegExp(/^[0-9][0-9]$/)

  const changeHandler = (event) => {
    event.persist();
    const { name, value } = event.target;
    let err = { ...inputData.isError }
    switch (name) {
      case 'fname':
        if (value.length <= 0) {
          err.fname = "Required fild";
        }
        else if (value.length <= 3) {
          err.fname = "Min 3 character";

        }
        else {
          err.fname = "";
        }
        break;
      case 'contact_no':
        if (value.length <= 0) {
          err.contact_no = "Required fild";
        }
        else if (value.length === 10) {
          err.contact_no = "Put 10 digit";

        }
        else {
          err.contact_no = "";
        }
        break;
      case 'city':
        if (value.length <= 0) {
          err.city = "Required fild";
        }
        else if (value.length <= 3) {
          err.city = "Min 3 character";

        }
        else {
          err.city = "";
        }
        break;
      case 'state':
        if (value.length <= 0) {
          err.state = "Required fild";
        }
        else if (value.length === 10) {
          err.state = "Put 10 digit";

        }
        else {
          err.state = "";
        }
        break;
      case 'pin_code':
        if (value.length <= 0) {
          err.pin_code = "Required fild";
        }
        else if (!valid_pin.test(value)) {
          err.pin_code = "Wrong input";

        }
        else {
          err.pin_code = "";
        }
        break;
      case 'email':
        if (value.length <= 0) {
          err.email = "Required fild";
        }
        else if (!valid_mail.test(value)) {
          err.email = "Wrong input"

        }
        else {
          err.email = "";
        }
        break;
      case 'pname':
        if (value.length <= 0) {
          err.pname = "Required fild";
        }
        else if (value.length < 3) {
          err.pname = "Min 3 chracter";

        }
        else {
          err.pname = "";
        }
        break;
      case 'species':
        if (value.length <= 0) {
          err.species = "Required fild";
        }
        else if (value.length < 3) {
          err.species = "Min 3 chracter";

        }
        else {
          err.species = "";
        }
        break;
      case 'animal':
        if (value.length <= 0) {
          err.animal = "Required fild";
        }
        else if (value.length < 3) {
          err.animal = "Min 3 chracter";

        }
        else {
          err.animal = "";
        }
        break;
      case 'breed':
        if (value.length <= 0) {
          err.breed = "Required fild";
        }
        else if (value.length < 3) {
          err.breed = "Min 3 chracter";

        }
        else {
          err.breed = "";
        }
        break;
      case 'color':
        if (value.length <= 0) {
          err.color = "Required fild";
        }
        else if (value.length < 3) {
          err.color = "Min 3 chracter";

        }
        else {
          err.color = "";
        }
        break;
      case 'age':
        if (value.length <= 0) {
          err.age = "Required fild";
        }
        else if (!valid_weight.test(value)) {
          err.age = "Wrong input";

        }
        else {
          err.age = "";
        }
        break;
      case 'weight':
        if (value.length <= 0) {
          err.weight = "Required fild";
        }
        else if (!valid_weight.test(value)) {
          err.weight = "Wrong input";

        }
        else {
          err.weight = "";
        }
        break;
      case 'gender':
        if (value.length <= 0) {
          err.gender = "Required fild";
        }
        else if (value.length <= 3) {
          err.gender = "Min 3 chracter";

        }
        else {
          err.gender = "";
        }
        break;
      case 'chip_no':
        if (value.length <= 0) {
          err.valid_ChipNo = "Required fild";
        }
        else if (!valid_ChipNo.test(value)) {

          err.chip_no = "Wrong input";

        }
        else {
          err.chip_no = "";
        }
        break;
      default:
        console.log("No error");
        break;

    }
    setInputData({ ...inputData, [name]: value, isError: err 
    
    })
    console.log("Error msg:", inputData.isError);
  }
  let submitHandler = (event) => {
    event.preventDefault();
    console.log("collect data from my product", inputData);
    const error=inputData.isError;
    const isError=Object.values(error).some(v=>v.length>0)
      if(isError){
        alert("validation error")
        return;
      }
    let pet = {

      "owner_name": inputData.fname,
      "contact_no": inputData.contact_no,
      "email": inputData.email,
      "state": inputData.state,
      "city": inputData.city,
      "pin": inputData.pin_code,
      "pet_name": inputData.pname,
      "animal": inputData.animal,
      "species": inputData.species,
      "breed": inputData.breed,
      "color": inputData.color,
      "gender": inputData.gender,
      "age": inputData.age,
      "weight": inputData.weight,
      "chip_no": inputData.chip_no,

    }
    axios.post(post_api, pet)
      .then(res => {
        alert("Data submitted")
        console.log("Add res",res);

      })
      .catch(er=>{
        alert("Error data");
        console.log("Add errr",er);
      })

  };
  return (
    <div className='form_container'>
      <h1>PET FORM</h1>
      <Form className='myForm' onSubmit={submitHandler}>
        <Form.Group>
          <Form.Label htmlFor="fname">Owner Name</Form.Label>
          <Form.Control type="text" name="fname" value={inputData.fname} id="" placeholder="Ex:Happy Singh" onChange={changeHandler} required />
          {inputData.isError.fname.length > 0 ? <Alert className="error">{inputData.isError.fname}</Alert> : ""}
        </Form.Group>

        <Form.Group>
          <Form.Label htmlFor="contact_no">Phone</Form.Label>
          <Form.Control type="text" name="contact_no" value={inputData.contact_no} id="" placeholder="## #######" onChange={changeHandler} />
          {inputData.isError.contact_no.length > 0 ? <Alert className="error">{inputData.isError.contact_no}</Alert> : ""}
        </Form.Group>

        <Form.Group>
          <Form.Label htmlFor="city">City</Form.Label>
          <Form.Control type="text" name="city" value={inputData.city} id="" placeholder="Ex:Kolkata" onChange={changeHandler} />
          {inputData.isError.city.length > 0 ? <Alert className="error">{inputData.isError.city}</Alert> : ""}
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="state">State</Form.Label>
          <Form.Control type="text" name="state" value={inputData.state} id="" placeholder="Ex:WEST BENGAL" onChange={changeHandler} />
          {inputData.isError.state.length > 0 ? <Alert className="error">{inputData.isError.state}</Alert> : ""}
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="pin_code">PIN</Form.Label>
          <Form.Control type="text" name="pin_code" value={inputData.pin_code} id="" placeholder="#####" onChange={changeHandler} />
          {inputData.isError.pin_code.length > 0 ? <Alert className="error">{inputData.isError.pin_code}</Alert> : ""}
        </Form.Group>
        <Form.Group >
          <Form.Label htmlFor="email">Email</Form.Label>
          <Form.Control type="email" name="email" value={inputData.email} id="" placeholder="abc@outlook.com" onChange={changeHandler} />
          {inputData.isError.email.length > 0 ? <Alert>{inputData.isError.email}</Alert> : ""}
        </Form.Group>
        <Form.Group>

          <Form.Label htmlFor="pname">Pet Name</Form.Label>
          <Form.Control type="text" name="pname" value={inputData.pname}id="" placeholder="Ex:Abc" onChange={changeHandler} />
          {inputData.isError.pname.length > 0 ? <Alert>{inputData.isError.pname}</Alert> : ""}
        </Form.Group>
        <Form.Group >
          <Form.Label htmlFor="animal">Animals Name</Form.Label>
          <Form.Control type="text" name="animal" value={inputData.animal} id="" placeholder="" onChange={changeHandler} />
          {inputData.isError.animal.length > 0 ? <Alert>{inputData.isError.animal}</Alert> : ""}
        </Form.Group>
        <Form.Group >
          <Form.Label htmlFor="species">Species</Form.Label>
          <Form.Control type="text" name="species" value={inputData.species} id="" placeholder="Ex:Abc" onChange={changeHandler} />
          {inputData.isError.species.length > 0 ? <Alert>{inputData.isError.species}</Alert> : ""}
        </Form.Group>
        <Form.Group >
          <Form.Label htmlFor="age">Age(In Year)</Form.Label>
          <Form.Control type="text" name="age" value={inputData.age} id="" placeholder="" onChange={changeHandler} />
          {inputData.isError.age.length > 0 ? <Alert className="error">{inputData.isError.age}</Alert> : ""}
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="weight">Weight</Form.Label>
          <Form.Control type="text" name="weight" value={inputData.weight} id="" placeholder="" onChange={changeHandler} />
          {inputData.isError.weight.length > 0 ? <Alert className="error">{inputData.isError.weight}</Alert> : ""}
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="chip_no">Chip No</Form.Label>
          <Form.Control type="text" name="chip_no" value={inputData.chip_no} id="" placeholder="" onChange={changeHandler} />
          {inputData.isError.chip_no.length > 0 ? <Alert className="error">{inputData.isError.chip_no}</Alert> : ""}
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="breed">Breed</Form.Label>
          <Form.Control type="text" name="breed" value={inputData.breed} id="" placeholder="" onChange={changeHandler} />
          {inputData.isError.breed.length > 0 ? <Alert className="error">{inputData.isError.breed}</Alert> : ""}
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="color">Colour</Form.Label>
          <Form.Control type="text" name="color" value={inputData.color} id="" placeholder="" onChange={changeHandler} />
          {inputData.isError.color.length > 0 ? <Alert className="error">{inputData.isError.color}</Alert> : ""}
        </Form.Group>
        <Form.Group >
          <Form.Label htmlFor="gender">Gender</Form.Label>
          <Form.Control type="text" name="gender" value={inputData.gender} id="" onChange={changeHandler} />

          {inputData.isError.gender.length > 0 ? <Alert className="error">{inputData.isError.gender}</Alert> : ""}
        </Form.Group>
        

        <input type="submit" value="Add data" />

      </Form>
    </div>

  )
}

export default RegForm