import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from'./Header';

function App() {
  const postcode=(
    <p>รหัสไปรษณีย์ 83000</p>
  );
 return (

  <div>
    <p>นางสาวดีน่า พันธุสะ</p>
    <p>Phuket</p>
    {postcode}
    <Header/>
    
  </div>
 
  );
}

export default App;
