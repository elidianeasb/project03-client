import './App.css';
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage';
import ClientBookings from './pages/ClientBookings';
import ServiceList from './pages/ServiceList';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Header from './components/Header';
import Private from './components/Private';
import Anon from './components/Anon';
import ProfilePage from './pages/ProfilePage';
import GiftCard from './pages/GiftCard';
import AddBook from './pages/AddBook';
import ServicesDescription from './pages/ServicesDescription';
import GetStartedInstructions from './pages/GetStartedInstructions';
import EditProfile from './pages/EditProfile';
import AdminBookings from './pages/AdminBookings';
import Admin from './components/Admin';
import {ToastContainer} from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/instructions" element={<GetStartedInstructions />} />
        <Route path="/giftcard" element={<GiftCard />} />
        <Route path="/services" element={<ServicesDescription />} />
        <Route path="/book" element={
          <Private>
            <AddBook />
          </Private>
        } />
        <Route path="/bookings" element={
          <Private>
            <ClientBookings />
          </Private>
        } />
        <Route path="/admin/bookings" element={
          <Admin>
            <Private>
              <AdminBookings />
            </Private>
          </Admin>
        } />
        <Route path="/account" element={
          <Private>
            <ProfilePage />
          </Private>
        } />
        <Route path="/account/edit/:userId" element={<EditProfile />}></Route>
        <Route path="/service" element={
          <Private>
            <ServiceList />
          </Private>
        } />
        <Route path="/signup" element={
          <Anon>
            <Signup />
          </Anon>
        } />
        <Route path='/login' element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
