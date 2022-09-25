import { useContext } from 'react'
import { Nav ,Navbar , NavDropdown , Container, Button } from  'react-bootstrap'
import { Link , useNavigate } from 'react-router-dom'
import LogoChat from '../assets/LogoChat.png'
import { ChatContex } from '../contex/ChatContex'
import erickBrother from '../assets/erickBrother.png'
export function NabVar(){

    const { user , setuser } = useContext(ChatContex);
    const existUser = Object.keys(user);
    const navigate = useNavigate()


    function logOutUser(){

        setuser({})
        navigate('/')

    }

    return (

        <Navbar style={{height:"120px"}} >
         <Container  >
                <Navbar.Brand> <Link to='/'> <img src={LogoChat} style={{width:"90px"}} /> </Link></Navbar.Brand>
                {/* <Navbar.Toggle aria-controls="basic-navbar-nav  " /> */}
                <Navbar.Collapse id="basic-navbar-nav " style={{width:"10px"}} >
                        <Nav className="ms-auto" >

                            {
                                   existUser.length <= 0 && (
                                    <>
                                      <Nav.Link > <Link to="/login" style={{textDecoration:"none", color:"black"}} > <p className='fw-bold'>Login</p> </Link> </Nav.Link>
                                      <Nav.Link ><Link to="/signup" style={{textDecoration:"none", color:"black"}} > <p className='fw-bold'>Sign Up</p> </Link> </Nav.Link>
                                    </>
                                  
                                   )
                            }
                         
                            <Nav.Link ><Link to="/chat" style={{textDecoration:"none", color:"black"}} > <p className='fw-bold'>Chat</p> </Link> </Nav.Link>
                            <NavDropdown title={
                                existUser.length > 0 && <div className='d-flex' >                                                
                                                 <p>{user.name}</p>
                                                 <img src={erickBrother}  style={{width:"40px", height:"38px", borderRadius:"50%" , top:"0px" , marginLeft:"10px"}}/>
                                                 </div>

                            } id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                {/* <NavDropdown.Item href="#action/3.4"> */}
                                <Button variant="danger" style={{margin:"auto"}} onClick={logOutUser} >Log out</Button>
                                {/* </NavDropdown.Item> */}
                            </NavDropdown>
                        </Nav>
                </Navbar.Collapse>
          </Container>
      </Navbar>

    //   <div>hello</div>
    )
}