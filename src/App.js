
import 'bootstrap/dist/css/bootstrap.min.css';

import {Routes,Route} from "react-router-dom";
import CardDetails from './components/CardDetails';
import Cards from './components/Cards';
import Login from './components/Login';
import ProtectedRoutes from './Services/ProtectedRoutes';
const App=()=> {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login/>}/> 
        <Route path="/" element={<ProtectedRoutes/>}>
           <Route path="/cards" element={<Cards/>}/>
           <Route path="/cartpage" element={<CardDetails/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
