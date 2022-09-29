
import { useState} from 'react'
import {Form,Button , Container } from "react-bootstrap"
import { Link, useNavigate } from "react-router-dom"
import Swal from 'sweetalert2'
export function SingUp(){

    let navigate = useNavigate();
    const [inputsChange, setinputsChange] = useState({
        name:"",
        email:"",
        password:""
    })

    function handleInputsChange(e){

        setinputsChange(inputs => {

            return {
                ...inputs,
                [e.target.name]:e.target.value
            }
        })

    }

   async function signUpUser(e){

      e.preventDefault();
      if(!inputsChange.name || !inputsChange.email || !inputsChange.password) return alert("One of the inputs are not filled out please enter the information");
            
      const response  = await fetch("http://127.0.0.1:3001/chat/signup", { method:"POST",headers:{ "Content-Type":"application/json" }, body: JSON.stringify(inputsChange) });
      const data = await response.json()

      if(data.ok){

        Swal.fire("Good", "You are already signed up , go ahead and log in")
       return  navigate('/login')

      }
      return alert(data.msg)
    }


    return(
        <Container className="mt-3 d-flex justify-content-center"  >
                <Form style={{  marginBottom:"10px"}} className="border rounded p-3" onSubmit={ signUpUser } >
                        <h2 className="text-center" >Sign up</h2>
                        <Form.Group className="mb-3" >
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" name="name"  onChange={ handleInputsChange }  value={inputsChange.name} placeholder="Enter name" />                 
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" name="email"   onChange={ handleInputsChange } value={inputsChange.email}   placeholder="Enter email" />                 
                        </Form.Group>
                    
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" name="password"  onChange={ handleInputsChange } value={inputsChange.password}   placeholder="Password" />
                        </Form.Group>
                        <div>
                        <Button variant="primary" type="submit">
                                Sign Up
                            </Button>
                            <Link to="/login" style={{marginLeft:"18px", marginTop:"5px"}} >
                            <label style={{cursor:"pointer"}} > Already have an acocunt? </label>
                            </Link>
                        </div>
                </Form>  
        </Container>
    )
}