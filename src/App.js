import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Siwa from './components/Siwa';


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/siwa' element={<Siwa/>}></Route>
                <Route path='/home' element={<Home/>}></Route>
                <Route path='/about' element={<About/>}></Route>
                <Route path='/contact' element={<Contact/>}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
