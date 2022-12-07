
import { Route, Router, Routes } from 'react-router-dom';
import './App.css';
import Background from './Background/Background';
import Table from './DataTable/Table';
import TableDesign from './DataTable/TableDesign';
import Login from './Signup/Login';
import Signup1 from './Signup/Signup1'
import Signup2 from './Signup/Signup2'
import Signup3 from './Signup/Signup3'

function App() {
  return (
    <div className='body-background-color'>

      <Routes>
        <Route path='/' element={<Signup1></Signup1>}></Route>
        <Route path='/signup1' element={<Signup1></Signup1>}></Route>
        <Route path='/signup2' element={<Signup2></Signup2>}></Route>
        <Route path='/signup3' element={<Signup3></Signup3>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/table' element={<Table></Table>}></Route>

      </Routes>


    </div>
  );
}

export default App;
