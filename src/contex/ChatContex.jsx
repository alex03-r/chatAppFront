import { createContext, useState , useEffect} from "react";


export const  ChatContex  = createContext(null)
import { io } from "socket.io-client"

export const socket = io("https://chat-backend-app-sok.herokuapp.com/")
 

export function ChatProvider({children}){

     let localStorageUser =  localStorage.getItem("user") || "{}";
     let parseUser = JSON.parse(localStorageUser)
     const [user, setuser] = useState(parseUser)

     const [ currentRoom , setCurrentRoom ] = useState("")
     const [messages, setmessages] = useState([])
     const [userComper, setuserComper] = useState({})    
    
    useEffect(() => {

        localStorage.setItem("user" , JSON.stringify(user) )

    }, [ user ])    


    return(
        <ChatContex.Provider value={{ user , setuser , currentRoom, setCurrentRoom , messages, setmessages , userComper, setuserComper}} >
            { children }
        </ChatContex.Provider>
    )
}