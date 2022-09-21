import "./App.css";
import { Route, Routes } from "react-router-dom";
import Main from "./Main/Main";
import About from "./About/About";
import ContactMe from "./ContactMe/ContactMe";
import HFI from "./Services/Heatings/HFI";
import HFR from "./Services/Heatings/HFR";
import LCH from "./Services/Heatings/LCH";
import RIH from "./Services/Heatings/RIH";
import TWH from "./Services/Heatings/TWH";
import BI from "./Services/Heatings/BI";
import LC from "./Services/Heatings/LC";
import ReqAnEstimate from "./ReqAnEstimate/ReqAnEstimate";
import ACI from "./Services/Coolings/ACI";
import ACS from "./Services/Coolings/ACS";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/contactme" element={<ContactMe />} />
        <Route path="/req_an_estimate" element={<ReqAnEstimate />} />
        <Route path="/hfi" element={<HFI />} />
        <Route path="/bi" element={<BI />} />
        <Route path="/hfr" element={<HFR />} />
        <Route path="/lch" element={<LCH />} />
        <Route path="/rih" element={<RIH />} />
        <Route path="/twh" element={<TWH />} />
        <Route path="/lc" element={<LC />} />
        <Route path="/aci" element={<ACI />} />
        <Route path="/acs" element={<ACS />} />
      </Routes>
    </div>
  );
}

export default App;
