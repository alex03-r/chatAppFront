
import { useContext, useState, useEffect } from "react";
import { Button } from "react-bootstrap"
import { socket } from "../contex/ChatContex"
import { ChatContex } from "../contex/ChatContex";
import "../style.css"
import { getcurrentDateAndTime } from "../helper"

export function ChatMessage() {

    const [message, setmessage] = useState()
    const { user, messages, setmessages, currentRoom, setCurrentRoom , userComper, setuserComper } = useContext(ChatContex);

    useEffect(() => {

        socket.off("mess").on("mess", (messages) => {

            setmessages(messages)
        })

    }, [])


    function sendMessage() {

        if (!message) return alert("please enter a message");

        let currentDate = getcurrentDateAndTime();

        socket.emit("send_messages", message, user, currentDate.date, currentDate.time, currentRoom)

        setmessage("")
    }

    return (

        <div className="ms-sm-4 ms-md-0" >
            <div className="border rounded shadow mt-sm-0 mt-md-3" style={{ height: "300px", overflowY: "scroll" }} >
                {

                    messages.length <= 0 ? <div className="alert alert-info text-center m-4" >Start a conversation with <span className="fw-bold text-capitalize" >{userComper.name}</span>  your patner</div> :
                //    { messages.filter((msg, i, arr) =>  ) }
                       
                        messages.map((msg, i, arr) => (
                            <>
                                <h1 className="text-center h3" >{msg?.date.split("/")[0] !== arr[i + 1]?.date.split("/")[0] ? msg?.date  : null}</h1>

                                <div className={msg.from?.email == user.email ? "incoming_message shadow border rounded mt-3" : "local_message shadow border   border  rounded mt-3"}>

                                    <div className="d-flex " >
                                        <p className=" fw-bold ms-2 me-4 text-capitalize"> {msg.from?.name}</p>
                                        <p className="" > {msg.time} {msg.time.split(":")[0] - 0 > 12 ? "PM" : "AM"} </p>
                                    </div>
                                    <p className="ms-2" >{msg.content}</p>
                                </div>
                            </>

                        ))
                }
            </div>
            <div className="d-flex mt-2 ">
                <input type="text" className="form-control" onChange={(e) => setmessage(e.target.value)} value={message} placeholder="Enter message.." />
                <Button className="ms-2"  onClick={sendMessage}><i class="bi bi-send-fill"></i></Button>
            </div>
        </div>

    )
}