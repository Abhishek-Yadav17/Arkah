import { Route, Routes } from "react-router-dom";
import Home2Light from "./pages/Homepage";
import About from "./pages/About";
import OperationPhilosophy from "./pages/OperationsPhilosophy";
import Team from "./pages/Team";
import Contact from "./pages/Contact";
import NewsRoom from "./pages/NewsRoom";

const Routers = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Home2Light />}></Route>
                <Route path='/about' element={<About />}></Route>
                <Route path='/team' element={<Team />}></Route>
                <Route path='/contact' element={<Contact />}></Route>
                <Route path='/newsroom' element={<NewsRoom />}></Route>
                <Route path="/operations/philosophy" element={<OperationPhilosophy />} />
            </Routes>
        </>
    );
};

export default Routers;