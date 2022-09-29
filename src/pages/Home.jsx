
import background from "../assets/background.jpg"
import homeChat from "../assets/homeChat.png"
import { useNavigate } from "react-router-dom"


export function Home() {

    const navigate  = useNavigate();

    function goToLogin(){

        navigate('/login')

    }

    return (

        <div className=" ms-3 me-3" style={{ height: "80vh", width: "100vw" }}>

            <div className="row">
                <div className="col-4 mt-2 d-column ">


                    <div className="mt-5 ">
                        <p className="text-center h1" >Wellcome </p>
                        <p className="text-center" >Get in touch with your friends </p>
                        <div className="ms-2 mt-5 d-flex justify-content-center  ">
                            <button onClick={goToLogin} className="btn btn-primary" >Get started</button>
                        </div>

                    </div>
                </div>
                <div className="col-8"  >
                    <img src={background} style={{ width: "90%", height:"400px", borderRadius: "2%", objectFit: "cover" }} />
                </div>

            </div>
        </div>
    )
}