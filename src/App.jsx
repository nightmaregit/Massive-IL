import SignUp from './perpus/SignUp'
import SignIn from './perpus/SignIn'
import { LupaKataSandi } from './perpus/LupaKataSandi'
import { BrowserRouter, Routes, Route} from 'react-router-dom'


export default function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/SignUp" element={<SignUp />}></Route>
        <Route path="/SignIn" element={<SignIn />}></Route>
        <Route path="/LupaKataSandi" element={<LupaKataSandi />}></Route>        
      </Routes>
    </BrowserRouter>
    </>
  )
}

