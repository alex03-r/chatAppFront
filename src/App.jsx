
import {
    BrowserRouter as Router,
    Routes,
    Route,
  } from "react-router-dom";


import { NabVar } from "./Components/NabVar";
import { Chat } from "./pages/Chat";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { SingUp } from "./pages/SingUp";


import { ChatProvider } from "./contex/ChatContex";

 export function App(){


    return(

       <div>
        <ChatProvider>
                <Router>
                        <NabVar />
                        <Routes>
                            <Route path="/" element={<Home />} > </Route>
                            <Route path="/login" element={<Login />} > </Route>
                            <Route path="/signup" element={<SingUp />} > </Route>
                            <Route path="/chat" element={<Chat />} > </Route>
                 </Routes>
            </Router>
           </ChatProvider>
       </div>
    )
}