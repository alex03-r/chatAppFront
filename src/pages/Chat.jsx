
import { useState, useEffect, useContext } from "react"
import { Row, Col, Container } from "react-bootstrap"
import { Users } from "../Components/Users"
import { ChatMessage } from "../Components/ChatMessage"
import { ChatContex } from "../contex/ChatContex"

export function Chat() {

    const [showAlert, setshowAlert] = useState(true)
    const { user } = useContext(ChatContex)


    useEffect(() => {

        setTimeout(() => {

            setshowAlert(false)

        }, 4000)

    }, [])


    return (

        <div className=" container-md " >
            {showAlert &&
                <div className="d-flex justify-content-center">
                    <div class="alert alert-success w-50 text-center " role="alert">
                        Wellcome to  the chat <span className="fw-bold" >{user.name}</span>, go ahead and get in contact with your friends
                    </div>
                </div> 
       
            }
            <Row >
                <Col sm={11} md={4} >
                    <Users />
                </Col>
                <Col sm={11} md={8}  >
                    <ChatMessage />
                </Col>

            </Row>

        </div>
    )

}


