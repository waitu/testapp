
import './App.css';
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home/Home';
import LayoutClient from './components/Layouts/LayoutWebsite/LayoutClient';
import Result404 from './components/Result/Result404';
import Login from './components/Home/Auth/Login';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<LayoutClient/>}>       
          <Route index element={< Home/>} />        
          <Route path="login" element={<Login />} />
        </Route>
        <Route path='*' element={<Result404/>} />
      </Routes>
    </div>
  );
}

export default App;
