
 import background from "../assets/background.jpg"


export function Home(){


    return(
       
        <div className=" ms-3 me-3 border" style={{height:"80vh" , width:"100vw" }}>

           <div className="row">
                <div className="col-4 d-column ">

                    <p className="text-center" >Wellcome</p>
                    <div className="border ms-5 justify-self-center  ">
                      <p className="fw-light"> hola mi gente este es el chat universal aqui podran chatear con amigos e otras personas</p> 
                    </div>
                
                </div>
                <div className="col-8"  >
                   <img  src={background} style={{width:"100%"}} />
                </div>

           </div>
        </div>
    )
}