
import { Route, Router, Routes } from 'react-router-dom';
import './App.css';
import Background from './Background/Background';
import Login from './Signup/Login';
import Signup1 from './Signup/Signup1'
import Signup2 from './Signup/Signup2'
import Signup3 from './Signup/Signup3'

function App() {
  return (
    <div>

      <Routes>
        <Route path='/' element={<Signup1></Signup1>}></Route>
        <Route path='/signup1' element={<Signup1></Signup1>}></Route>
        <Route path='/signup2' element={<Signup2></Signup2>}></Route>
        <Route path='/signup3' element={<Signup3></Signup3>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>

      </Routes>


    </div>
  );
}

export default App;
