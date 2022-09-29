
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { useContext } from "react"
import { NabVar } from "./Components/NabVar";
import { Chat } from "./pages/Chat";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { SingUp } from "./pages/SingUp";
import { ChatContex } from "./contex/ChatContex";


export function App() {


  const { user } = useContext(ChatContex)

  const exitUser = Object.keys(user)

  return (

    <div>

      <Router>
        <NabVar />
        <Routes>
          {
            exitUser.length <= 0 ? (
              <>

                <Route path="/" element={<Home />} > </Route>
                <Route path="/login" element={<Login />} > </Route>
                <Route path="/signup" element={<SingUp />} > </Route>

              </>
            ) : <Route path="/chat" element={<Chat />} > </Route>

          }
        </Routes>

      </Router>

    </div>
  )
}