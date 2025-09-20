import { Route, Routes } from "react-router-dom";
import Home2Light from "./pages/Homepage";
import Team from "./pages/Team";
import Contact from "./pages/Contact";
import NewsRoom from "./pages/NewsRoom";
import About2 from "./pages/About2";
import OperatingPhilosophy from "./pages/OperatingPhilosophy";
import RenewableGas from "./pages/RenewableGas";

const Routers = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Home2Light />}></Route>
                <Route path='/about2' element={<About2 />}></Route>
                <Route path='/team' element={<Team />}></Route>
                <Route path='/contact' element={<Contact />}></Route>
                <Route path='/newsroom' element={<NewsRoom />}></Route>
                <Route path="/operations/philosophy" element={<OperatingPhilosophy />} />
                <Route path="/operations/renewable-natural-gas" element={<RenewableGas />} />
            </Routes>
        </>
    );
};

export default Routers;