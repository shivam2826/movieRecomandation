import React, { useEffect, useState } from 'react';
import './App.css';
import Card from './components/Card';
import Banner from './components/Banner';
import Nav from './components/Nav';
import { Counter } from './features/counter/Counter';
import { useSelector } from 'react-redux';
import { selectCount } from './features/counter/counterSlice';

function App() {
  const count = useSelector(selectCount);

  useEffect(() => {
    console.log(count);
  }, [count]);



  return (
    <>
      <Nav />
      <Banner />
      <Card />
      {/* <Counter /> */}
    </>
  );
}

export default App;
