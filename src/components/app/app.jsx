import Header from "../header/Header";
import Main from "../main/Main";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "../about/About";

const App=()=>{
    return(
        <div className="container" style={{display:'flex', flexDirection:'column', gap:'24px'}}>
            <Router>
                <Header/>
                <Routes>
                    <Route path="/" element={<Main/>}/>
                    <Route path="/about" element={<About/>}/>
                </Routes>
            </Router>
        </div>
    )
};

export default App;