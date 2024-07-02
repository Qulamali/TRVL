import './index.scss';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import MainLayout from './layout/MainLayout';
import Products from './pages/Products';
import Services from './pages/Services';
import SignUp from './pages/SignUp';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route  element={<MainLayout/>}>
            <Route path="/" element={<Home/>} />
            <Route path="/services" element={<Services/>} />
            <Route path="/products" element={<Products/>} />
            <Route path="/sign-up" element={<SignUp/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
