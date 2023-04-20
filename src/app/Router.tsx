import { Route, Routes } from 'react-router-dom';
import NotFound from '../components/NotFound/NotFound';
import Layout from '../Layout/Layout';
import About from '../pages/About';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Profile from '../pages/Profile';
import EventPage from './../pages/Event';
import Register from './../pages/Register';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="event" element={<EventPage />} />
        <Route path="profile" element={<Profile />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
export default Router;
