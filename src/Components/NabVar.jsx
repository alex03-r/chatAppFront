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
                <Navbar.Brand>  <img src={LogoChat} style={{width:"90px"}} /> </Navbar.Brand>
                 {    existUser.length > 1 &&  <label className='h1' >Chat app</label> }  
                <Navbar.Collapse id="basic-navbar-nav " style={{width:"10px"}} >
                        <Nav className="ms-auto" >
                            {
                                existUser.length <= 0 && (
                                <>
                                  <Nav.Link > <Link to="/" style={{textDecoration:"none", color:"black"}} > <p className=' fs-5'>Home</p> </Link> </Nav.Link>
                                    <Nav.Link > <Link to="/login" style={{textDecoration:"none", color:"black"}} > <p className=' fs-5'>Login</p> </Link> </Nav.Link>
                                    <Nav.Link ><Link to="/signup" style={{textDecoration:"none", color:"black"}} > <p className=' fs-5'>Sign Up</p> </Link> </Nav.Link>
                                                            
                                </>                                  
                                ) 
                                                                  
                            }                         
                           
                           {

                            existUser.length > 0 &&

                            <NavDropdown className='me-sm-4 me-md-0' title={
                                existUser.length > 0 && 
                               
                                                        <>                                
                                                     
                                                        <img src={userL}  style={{width:"40px", height:"50px", borderRadius:"50%" , top:"0px" , marginRight:"14px" ,objectFit:"cover"}}/>
                                                        {user.name}
                                                        </>         

                            } >
                                <NavDropdown.Item >Action</NavDropdown.Item>                            
                                <NavDropdown.Item >Something</NavDropdown.Item>                                        
                          
                            <div className='d-flex justify-content-center mt-2'>
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