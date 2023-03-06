import { Route, Routes } from 'react-router-dom';
import NotFound from '../components/NotFound/NotFound';
import Layout from '../Layout/Layout';
import About from '../pages/About';
import Home from '../pages/Home';
import Signup from './../pages/Signup';
import Register from './../pages/Register';

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="signup" element={<Signup />} />
                <Route path="register" element={<Register />} />
                <Route path="*" element={<NotFound />} />
            </Route>
        </Routes>
    );
};
export default Router;
