import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';
function App() {
    return (_jsxs(BrowserRouter, { children: [_jsx(Navbar, {}), _jsx("main", { children: _jsx(Home, {}) }), _jsx(Footer, {})] }));
}
export default App;
