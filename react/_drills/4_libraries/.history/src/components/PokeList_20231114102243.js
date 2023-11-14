import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dex from './Dex';

const PokeList = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={PokeListCom} /> 
        <Route path="Dex" element={<Dex />} />
      </Routes>
    </Router>
  );
};

export default PokeList;
