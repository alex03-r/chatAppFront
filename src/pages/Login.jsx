
import { useContext, useState } from "react"
import {Form,Button , Container } from "react-bootstrap"
import { Link } from "react-router-dom"
import { ChatContex } from '../contex/ChatContex'
import { useNavigate } from "react-router-dom"


export function Login(){

    const { user, setuser } = useContext( ChatContex )
     const navigate =   useNavigate()

      const [inputs, setinputs] = useState({
        email:"",
        password:""
      })

      function onInputsChange(e){
         
          setinputs( inputs => {

                  return {
                      ...inputs,
                      [e.target.name]:e.target.value
                  }
          })
      }

     async function loginUser(e){

        e.preventDefault()   

        if( !inputs.email  || !inputs.password  ) return alert("Please fill out the inputs")         

        let response = await     fetch("http://127.0.0.1:3001/chat/login" , { method:"POST",headers:{ "Content-Type":"application/json" }, body: JSON.stringify(inputs) });
        let data = await response.json();       

        if( data.ok ){

          setuser(data.user)
          //console.log(user)
     
         
         return navigate('/chat')
        }             

        return alert("Sorry this user does not exist")  
             
  
      }




    return(
   
        <Container className="mt-5 d-flex justify-content-center w-25 border"  >
             
                <Form style={{width:"100vw", marginTop:"36px", marginBottom:"10px"}} onSubmit={ loginUser }  >
                <h2 className="text-center" >Login</h2>
                <Form.Group className="mb-3" >
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email"  name="email" onChange={ onInputsChange }  value={inputs.email} />                 
                </Form.Group>
            
                <Form.Group className="mb-3" >
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" name="password"  onChange={ onInputsChange } value={inputs.password}  />
                </Form.Group>
                <div className="d-flex ">
                    <Button variant="primary" type="submit">
                        Login
                    </Button>
                    <Link to="/signup" style={{marginLeft:"18px", marginTop:"5px"}} >
                    <label  style={{cursor:"pointer"}} > Do not have an account? </label>
                    </Link>
                </div>
                </Form>  
         </Container>
      
    )
}