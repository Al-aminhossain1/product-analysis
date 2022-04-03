
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './Componants/Dashboard/Dashboard';
import Header from './Componants/Header/Header';
import Home from './Componants/Home/Home';
import Reviews from './Componants/Reviews/Reviews';
import About from './Componants/About/About';
import NotFound from './Componants/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/review' element={<Reviews></Reviews>}></Route>
        <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
