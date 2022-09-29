import { useState } from "react"
import { useContext } from "react"
import { useEffect } from "react"
import { socket } from "../contex/ChatContex"
import { ChatContex } from "../contex/ChatContex"

import "../style.css"

export function Users() {

    const { currentRoom, setCurrentRoom, user, messages, setmessages } = useContext(ChatContex)

    const existUser = Object.keys(user);

    const [users, setUsers] = useState([])
    const [userComper, setuserComper] = useState({})

    useEffect(() => {

        // if(existUser.length > 0 ){
        if (existUser.length <= 0) return

        setCurrentRoom("diaz")

        socket.emit("join_room", currentRoom)

        socket.emit("new_user")


    }, [user])



    function orderID(currentUserId, selectedUserId) {

        if (currentUserId > selectedUserId) {

            return currentUserId + "-" + selectedUserId;

        } else {

            return selectedUserId + "-" + currentUserId
        }

    }


    function joinRoom(member) {

        let roomId = orderID(user._id, member._id)

        socket.emit("join_room", roomId)

        setCurrentRoom(roomId)
        setuserComper(member)

        socket.on("mess", messages => {

            setmessages(messages)

        })
    }

    socket.off("new_user").on("new_user", (members) => {
        setUsers(members)
    })



    return (
        <div className="">
            {
                users.map(u => (
                    <ul key={u.id} className="list-group mb-2" hidden={u.email == user.email} onClick={() => joinRoom(u)} >
                        <li className={u.name == userComper.name ? "list-group-item list-group-item-primary text-capitalize" : " list-group-item text-capitalize"} >{u.name}</li>
                    </ul>
                ))
            }
        </div>
    )
}