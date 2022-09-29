import { useContext } from 'react'
import { Nav ,Navbar , NavDropdown , Container, Button } from  'react-bootstrap'
import { Link , useNavigate, Navigate  } from 'react-router-dom'
import LogoChat from '../assets/LogoChat.png'
import { ChatContex } from '../contex/ChatContex'
import userL from '../assets/userL.png'
export function NabVar(){

    const { user , setuser } = useContext(ChatContex);
    const existUser = Object.keys(user);
    const navigate = useNavigate()  

    function logOutUser(){

        localStorage.removeItem("user")
        setuser({})
        navigate('/')

    }

    return (

        <Navbar style={{height:"100px"}} >
         <Container  >
                <Navbar.Brand> <Link to='/'> <img src={LogoChat} style={{width:"90px"}} /> </Link></Navbar.Brand>
            
                <Navbar.Collapse id="basic-navbar-nav " style={{width:"10px"}} >
                        <Nav className="ms-auto" >
                            {
                                existUser.length <= 0 ? (
                                <>
                                    <Nav.Link > <Link to="/login" style={{textDecoration:"none", color:"black"}} > <p className=' fs-5'>Login</p> </Link> </Nav.Link>
                                    <Nav.Link ><Link to="/signup" style={{textDecoration:"none", color:"black"}} > <p className=' fs-5'>Sign Up</p> </Link> </Nav.Link>
                                                            
                                </>                                  
                                ) :
                                (
                                <>
                                {/* <Nav.Link ><Link to="/chat" style={{textDecoration:"none", color:"black"}} > <p className='fw-bold fs-4'>Chat</p> </Link> </Nav.Link> */}
                                {/* <Navigate to='/chat'/> */}
                                </>
                                )                                  
                            }                         
                           
                           {

                            existUser.length > 0 &&

                            <NavDropdown title={
                                existUser.length > 0 && <div className='d-flex mt-5' >                                                
                                                        <p className='fs-5 fw-bold text-dark'>{user.name}</p>
                                                        <img src={userL}  style={{width:"40px", height:"38px", borderRadius:"50%" , top:"0px" , marginLeft:"10px"}}/>
                                                        </div>

                            } >
                                <NavDropdown.Item >Action</NavDropdown.Item>
                                <NavDropdown.Item>
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Item >Something</NavDropdown.Item>
                                <NavDropdown.Divider />                        
                          
                            <div className='d-flex justify-content-center'>
                            <Button variant="danger" style={{margin:"auto"}} onClick={logOutUser} >Log out</Button>
                            </div>                            
                              
                            </NavDropdown>
                              }
                        </Nav>
                </Navbar.Collapse>
          </Container>
      </Navbar>

    //   <div>hello</div>
    )
}