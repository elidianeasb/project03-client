import './App.css';
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage';
import BookList from './pages/BookList';
import Signup from './pages/Signup';
import LoginClient from './pages/LoginClient';
import Navbar from './components/Navbar';
import Private from './components/Private';
import Anon from './components/Anon';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/book" element={
          <Private>
            <BookList />
          </Private>
        } />
        <Route path="/signup" element={
          <Anon>
            <Signup />
          </Anon>
        } />
        <Route path='/login' element={<LoginClient />} />
      </Routes>
    </div>
  );
}

export default App;
