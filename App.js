import React from "react";
import './App.css';
import Card from "./components/Card";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";




function App() {
  return (
    <div className='App'>

      <NavBar
        logo='Bonjour'
        Home='Home'
        Events='Events'
        Contact='Contact Us'
      />

      <Card 
        day='THURSDAY'
        title='Karaoke'
        entry='Entry: FREE'
        imageUrl='/IMG4.jpeg'
        bodyp1='THIS THURSDAY!!'
        bodyp2='YOU ASKED FOR IT!! (Kinda)'
        bodyp3='Karaoke is back at Bonjour with an absolute vengeance!'
        bodyp4='DM us to book a table.'
        bodyp5=''
      />

      <Card 
        day='FRIDAY'
        title='Yo Perreo Solx'
        entry='Entry: Sliding Scale £7/£10/£15'
        imageUrl='/IMG5.jpeg'
        bodyp1='This Friday vamos a perrearr'
        bodyp2='Tickets en bio!!'
        bodyp3=''
        bodyp4=''
        bodyp5=''
      />

      <Card 
        day='SATURDAY'
        title='BLOODSPORT'
        entry='Entry: Sliding Scale £7/£10/£15'
        imageUrl='/IMG6.jpeg'
        bodyp1='Bloodsport is back'
        bodyp2='To take you past the point of reason'
        bodyp3=''
        bodyp4='Joining us from Berlin is NURSE3D to perform their live set after performing across Europe.'
        bodyp5='Tickets are limited.'
      />

      <Footer
        copyright='Copyright Kirsty Mellon 2023.'
        terms='Terms & Conditions'
        cookies='Cookies'
      />

    </div>
  );
}

export default App;
