import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import VisaProcessing from './Components/VisaProcessing'; // import the page
import Header from './Components/Header'; // assuming Header is separate
import Flights from './Components/Flights';
import Login from './Components/Login'; // import Login page
import Signup from './Components/Signup'; // import Signup page
import ResetPassword from './Components/ResetPassword'; // import ResetPassword page
import ForgotPassword from './Components/ForgotPassword'; // import ForgotPassword page
import HotelAccommodation from './Components/HotelAccommodation';
import CustomizedPackages from './Components/CustomizedPackages';
import UmrahPackages from './Components/UmrahPackages';
import Transportation from './Components/Transportation ';
import Tours from './Components/Tours';
import Adventure from './Components/Adventure';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/visa-processing" element={<VisaProcessing />} />
        <Route path="/flights" element={<Flights />} />
        <Route path="/hotel-accommodation" element={<HotelAccommodation />} />
        <Route path="/customize-packages" element={<CustomizedPackages />} />
        <Route path="/umrah-packages" element={<UmrahPackages />} />
        <Route path="/transportations" element={<Transportation />} />
        <Route path="/tours" element={<Tours />} />
        <Route path="/adventure" element={<Adventure />} />
        


        
        {/* Authentication Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
      </Routes>
    </Router>
  );
}

export default App;
