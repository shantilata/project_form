import React from 'react'
import {Route,Routes,BrowserRouter as Router} from 'react-router-dom'
import Home from '../Component/Home/Home'
import RegForm from '../Component/Form/RegForm'
import Header from '../Layout/Header/Header'
import PetInfo from '../Component/Pet Information/PetInfo'

const Routing = () => {
  return (
    <div>
      <Router>
        <Header/>
        <Routes>
        <Route path="" element={<Home />} />
        <Route path="reg_form" element={<RegForm />} />
        <Route path="pet_info" element={<PetInfo/>} />

        </Routes>
      </Router>
    </div>
  )
}

export default Routing