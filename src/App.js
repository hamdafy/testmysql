import logo from './logo.svg';
import{Routes ,Route} from "react-router-dom"
import Home from './page/Home';

import './App.css';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AddEdit from './page/AddEdit';

function App() {
  return (
  <div>
      <ToastContainer/>
    <Routes>


    <Route path="/" element={<Home />} />
    <Route path="/addcontact" element={<AddEdit />} />
         
    </Routes>
    

  </div>
  )
}

export default App;
