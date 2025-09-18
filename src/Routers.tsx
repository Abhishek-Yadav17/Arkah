import { Route, Routes } from "react-router-dom";
import Home2Light from "./pages/Homepage";
import OperationPhilosophy from "./pages/OperationsPhilosophy";
import Team from "./pages/Team";
import Contact from "./pages/Contact";
import NewsRoom from "./pages/NewsRoom";
import About2 from "./pages/About2";

const Routers = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Home2Light />}></Route>
                <Route path='/about2' element={<About2 />}></Route>
                <Route path='/team' element={<Team />}></Route>
                <Route path='/contact' element={<Contact />}></Route>
                <Route path='/newsroom' element={<NewsRoom />}></Route>
                <Route path="/operations/philosophy" element={<OperationPhilosophy />} />
            </Routes>
        </>
    );
};

export default Routers;