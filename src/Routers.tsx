import { Route, Routes } from "react-router-dom";
import Home2Light from "./pages/Homepage";
import About from "./pages/About";

const Routers = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Home2Light />}></Route>
                <Route path='/about' element={<About />}></Route>
            </Routes>
        </>
    );
};

export default Routers;