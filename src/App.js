import './App.css';
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage';
import BookList from './pages/BookList';
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

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/instructions" element={<GetStartedInstructions />} />
        <Route path="/giftcard" element={<GiftCard />} />
        <Route path="/booking" element={<AddBook />} />
        <Route path="/services" element={<ServicesDescription />} />
        <Route path="/bookings" element={
          <Private>
            <BookList />
          </Private>
        } />
        <Route path="/account" element={<ProfilePage />}></Route>
        <Route path="/edit/:userId" element={<EditProfile />}></Route>
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
