

import { Row, Col, Container } from "react-bootstrap"
import  { Users } from "../Components/Users"
import { ChatMessage } from "../Components/ChatMessage"

export function Chat(){

    return(

     <Container className="mt-5" >
            <Row>

                <Col md={4} >
                        <Users />
                </Col>
                <Col md={8}  >
                        <ChatMessage />
                </Col>

            </Row>

       </Container>
    )

}


