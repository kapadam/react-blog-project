import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Bollywood from './Components/Bollywood';
import Home from './Components/Home';
import Hollywood from './Components/Hollywood';
import Fitness from './Components/Fitness';
import Food from './Components/Food';
import Technology from './Components/Technology';
import PageNotFound from './Components/PageNotFound';
import Navbar from './Components/Navbar';
import FoodFullView from './Components/Food/FoodFullView';
import TechnologyFullView from './Components/Technology/TechnologyFullView';
import BollywoodFullView from './Components/Bollywood/BollywoodFullView';
import HollywoodFullView from './Components/Hollywood/HollywoodFullView';
import FitnessFullView from './Components/Fitness/FitnessFullView';
import './App.css';

function App() {
  return (
   <>
    <Routes>
      <Route path='/' element={<Navbar/>}></Route>
      <Route path='/home' element={<Home/>}></Route>
      <Route path='/hollywood' element={<Hollywood/>}/>
      <Route path='/bollywood' element={<Bollywood/>}/>
      <Route path='/fitness' element={<Fitness/>}/>
      <Route path='/food' element={<Food/>}/>
      <Route path='/technology' element={<Technology/>}/>
      <Route path="/Food/:name" element={<FoodFullView/>}/>
      <Route path="/Technology/:name" element={<TechnologyFullView/>}></Route>
      <Route path='/Fitness/:name' element={<FitnessFullView/>}></Route>
      <Route path="/Bollywood/:name" element={<BollywoodFullView/>}></Route>
      <Route path='/Hollywood/:name' element={<HollywoodFullView/>}></Route>
      <Route path='*' element={<PageNotFound/>}/>
    </Routes>
   </>
  );
}

export default App;
