// import logo from './logo.svg';
// import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
// import Form from './Components/Form';
// import Home from './components/Home';
// import Home fr
// import Form from './components/Form';
// import App from './Components/Utilities/Productcard';
import './App.css';
import Card from './Components/Utilities/Productcard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user" element={<Card />} />
        {/* <Route path="/" element={<Home />} /> */}
        {/* <Route path="/form" element={<Form />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App
