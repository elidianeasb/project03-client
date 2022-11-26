import './App.css';
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage';
import BookList from './pages/BookList';
import ServiceList from './pages/ServiceList';
import Signup from './pages/Signup';
import LoginClient from './pages/LoginClient';
import Navbar from './components/Navbar';
import Private from './components/Private';
import Anon from './components/Anon';
import ProfilePage from './pages/ProfilePage';
import GiftCard from './pages/GiftCard';
import Footer from './components/Footer';
import AddBook from './pages/AddBook';
import GetStartedInstructions from './pages/GetStartedInstructions';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/instructions" element={<GetStartedInstructions />} />
        <Route path="/giftcard" element={<GiftCard />} />
        <Route path="/booking" element={<AddBook />} />
        <Route path="/book" element={
          <Private>
            <BookList />
          </Private>
        } />
        <Route path="/account" element={<ProfilePage />}></Route>
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
        <Route path='/login' element={<LoginClient />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
