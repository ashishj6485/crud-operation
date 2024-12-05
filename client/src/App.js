import logo from './logo.svg';
import './App.css';

// components
import NavBar from './components/NavBar';
import AshishJaiswal from './components/AshishJaiswal';
import AllUsers from './components/AllUsers';
import AddUser from './components/AddUser';
import EditUser from './components/EditUser'
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar />
      <Routes>
         <Route path='/' element={<AshishJaiswal />} />
         <Route path='/all' element={<AllUsers />} />
         <Route path='/add' element={<AddUser />} />
         <Route path='/edit/:userId' element={<EditUser />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
