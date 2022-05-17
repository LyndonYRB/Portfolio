import React from 'react';
import './App.css';
import Tabs, { TabPane } from 'rc-tabs';
import '../node_modules/rc-tabs/assets/index.css'
import AboutMe from './Components/About-Me';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import Contact from './Components/Contact';


export default function App() { 
  function callback(e) {
    console.log(e);
} 
  return (
    <div className='App' >
      <div className='header'>
        <h1 className='name' >
          <span className='first-letter'>L</span><span className='change-color'>yndon</span>
          <span className='first-letter'> S</span><span className='change-color'>t.</span>
          <span className='first-letter'>L</span><span className='change-color'>uce</span>
        </h1>
      <Tabs defaultActiveKey='1' onChange={callback}>
        <TabPane className='mid' tab=' About Me' key='1'>
          <Tabs className='about-me' defaultActiveKey='2' onChange={callback}>      
          <TabPane className='about-me-tab' tab=' About Me' key='1a'>
               <AboutMe/>
          </TabPane>
          <TabPane className='skills-tab' tab=' Skills' key='1b'>
               <Skills/>
          </TabPane>
            </Tabs>
        </TabPane>
        <TabPane className='mid' tab=' Projects' key='2'>
            <Projects/>
        </TabPane>
        <TabPane className='mid' tab=' Contact' key='3'>
            <Contact/>
        </TabPane>
        </Tabs>
      </div>
</div >
  
  );

}

 
