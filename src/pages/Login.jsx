
import { useContext, useState } from "react"
import { Form, Button, Container } from "react-bootstrap"
import { Link } from "react-router-dom"
import { ChatContex } from '../contex/ChatContex'
import { useNavigate } from "react-router-dom"

import Swal from 'sweetalert2'

export function Login() {

    const { user, setuser } = useContext(ChatContex)
    const navigate = useNavigate()

    const [inputs, setinputs] = useState({
        email: "",
        password: ""
    })

    function onInputsChange(e) {

        setinputs(inputs => {

            return {
                ...inputs,
                [e.target.name]: e.target.value
            }
        })
    }

    async function loginUser(e) {

        e.preventDefault()

        if (!inputs.email || !inputs.password) return alert("Please fill out the inputs")

        let response = await fetch("https://chat-backend-app-sok.herokuapp.com/chat/login", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(inputs) });
        let data = await response.json();

        if (data.ok) {

            setuser(data.user)
            //console.log(user)     

            return navigate('/chat')
        }

        return Swal.fire("Error" , "Sorry this user does not exist")

    }




    return (

        <Container className="mt-3 d-flex justify-content-center"  >
               
            <Form style={{  marginTop: "26px", marginBottom: "10px" }} className="border rounded p-3"   onSubmit={loginUser}  >
                <h2 className="text-center" >Login</h2>
                <Form.Group className="mb-3" >
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" name="email" onChange={onInputsChange} value={inputs.email} />
                </Form.Group>

                <Form.Group className="mb-3" >
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" name="password" onChange={onInputsChange} value={inputs.password} />
                </Form.Group>
                <div className="">
                    <Button variant="primary" type="submit">
                        Login
                    </Button>
                    <Link to="/signup" style={{ marginLeft: "10px", marginTop: "5px" }} >
                        <label style={{ cursor: "pointer" }} > Do not have an account? </label>
                    </Link>
                </div>
            </Form>
        </Container>

    )
}