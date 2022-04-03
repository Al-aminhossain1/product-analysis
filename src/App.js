
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './Componants/Dashboard/Dashboard';
import Header from './Componants/Header/Header';
import Home from './Componants/Home/Home';
import Review from './Componants/Review/Review';
import About from './Componants/About/About';
import NotFound from './Componants/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <h1>Wellcome to Hotel Water Blue Inn</h1>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/review' element={<Review></Review>}></Route>
        <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
