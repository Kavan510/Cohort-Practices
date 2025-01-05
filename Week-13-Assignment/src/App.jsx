import { MainContent } from './components/MainContent'
import { Sidebar } from './components/Sidebar'
import React from 'react'
import { useState } from 'react';
function App() {
  
  const [isOpen,setOpen] =useState(true);
return (
<div className='flex'>
   
      <Sidebar isOpen={isOpen} setOpen={setOpen}/>
      <MainContent/>

  
</div>
)  
}




export default App
