import { useState,useEffect } from "react";

function App(){
const [ isModalOpen,SetModal] = useState(0);

return (
  <div>

 <button onClick={()=>{
   SetModal(!isModalOpen)
  }}>
Open
 </button> 
<Modal isOpen={isModalOpen}  isClose={()=>{
  SetModal(0)
}}>
  <h2>This is title of modal</h2>
  <p>Hi there</p>
</Modal>
   </div>
);

}

const Modal = ({isOpen,isClose,children})=>{
if(isOpen==0) return null;

return (
<div style={{
   position: 'fixed',
   top: 0,
   left: 0,
   right: 0,
   bottom: 0,
   backgroundColor: 'rgba(0, 0, 0, 0.5)',
   display: 'flex',
   justifyContent: 'center',
   alignItems: 'center',
}}>
<div style={{
  background:"white",
  borderRadius:'10',
  padding:'20px'
}}>
  <button onClick={isClose}>Close</button>  
  <div>
  {children} {/* chlildren should be in small letters only */}

  </div>
</div>





</div>


);




}

export default App;
