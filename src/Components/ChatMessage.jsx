
import { useContext , useState , useEffect } from "react";
import { Button } from "react-bootstrap"
import { socket } from "../contex/ChatContex"
import { ChatContex } from "../contex/ChatContex";
// import { getFilteredMessages } from "../helper"

import { getcurrentDateAndTime } from "../helper"

export function ChatMessage(){

    const [message, setmessage] = useState()
    const { user , messages , setmessages , currentRoom , setCurrentRoom } = useContext(ChatContex);
 
    useEffect(() => {

        socket.off("mess").on("mess" , ( messages) => {

            // let filtered = getFilteredMessages(messages,  currentRoom )        
            setmessages( messages )
        })

    }, [  ])  



    function sendMessage(){

        if(!message) return alert("please enter a message");            
       
        let currentDate = getcurrentDateAndTime();

        socket.emit("send_messages" , message , user, currentDate.date, currentDate.time , currentRoom )

        setmessage("")     
    }

    return (

        <div>
            <div className="border" style={{height:"500px"}} >
              {
                messages.map(msg => (

                    <p>{ msg.content }</p>

                ))
              }
           </div>
            <div className="d-flex mt-2 ">
                <input type="text"  className="form-control" onChange={(e) => setmessage(e.target.value) } value={message} placeholder="enter message" />
                <Button className="ms-2" onClick={sendMessage}  >Send</Button> 
            </div>
        </div>

    )
}