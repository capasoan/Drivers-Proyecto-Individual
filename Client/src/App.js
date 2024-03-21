import { Routes, Route,} from 'react-router-dom';
import LandingPage from "./Components/Landing/LandingPage.jsx";
import HomePage from './Components/HomePage/HomePage.jsx';
import Detail from './Components/Detail/Detail.jsx'
import {useState } from "react";
import axios from "axios";



function App() {
    const [busqueda, setBusqueda]= useState([]);

    const URL= 'http://localhost:3001/drivers/name';


    const onSearch= async(nombre)=>{
        try{

            const buscar = await axios.get(`${URL}`, {
                params: {
                    nombre: nombre
                }
            })
            setBusqueda([buscar.data]);
          
      //console.log("onSearch", buscar.data)

        }catch(error){
            console.log(error)
        }
    }

    return (
        <div className='App'>
            <Routes >

                <Route path="/" element={<LandingPage />} />
                <Route path="/HomePage" element={<HomePage onSearch={onSearch} drivers={busqueda} />} />
                <Route path="/drivers/:idDriver" element={<Detail />} />
            

            </Routes>
        </div>
    );



}

export default App;