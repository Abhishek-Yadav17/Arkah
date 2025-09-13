import { Route, Routes } from "react-router-dom";
import Home2Light from "./pages/Homepage";
import About from "./pages/About";
import OperationPhilosophy from "./pages/OperationsPhilosophy";

const Routers = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Home2Light />}></Route>
                <Route path='/about' element={<About />}></Route>
                <Route path="/operations/philosophy" element={<OperationPhilosophy />} />
            </Routes>
        </>
    );
};

export default Routers;