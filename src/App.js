import React, { Component } from 'react';
//imports component functionality from react
import './App.css';
//imports app styling
import Header from './Header';
//imports header component from the header file
import SectionMain from './SectionMain';
// imports sectionMain component from the sectionMain file 
import Aside from './Aside';
// imports aside component from the aside file
import Footer from './Footer';
// imports footer component from the footer file

class App extends Component {
// creates App as a new component
  render() {
     // Calls the render function
    return (
      <div className="App"> // a div with class 'App'
        <Header backColor="green" width="50%"></Header> 
      // imported header, given props backColor 'green' width '50%'
        <SectionMain></SectionMain>
      // imported sectionMain will go here
        <Aside></Aside>
        // imported aside will go here
        <Footer></Footer>
      // imported footer will go here
      </div>
    );
  }
}

export default App;
// export a single value, which is class App 
