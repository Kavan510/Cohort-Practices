import { useState,createContext, useContext ,Provider} from 'react'
import './App.css'

const BulbContext = createContext();

export function BulbProvider({children}){
  const [bulbOn, setBulbOn] = useState(true)

  return <BulbContext.Provider value={{
    bulbOn:bulbOn,
    setBulbOn:setBulbOn
  }}>
    {children}
    </BulbContext.Provider>


}

function App() {
  return <div>
    <BulbProvider>

    <Light />
    </BulbProvider>
  </div>
}

function Light() {

  return <div>
    <BulbState  />
    <ToggleBulbState  />
  </div>
}

function BulbState() {
  const {bulbOn}  = useContext(BulbContext)
  return <div>
    {bulbOn ? "Bulb on" : "Bulb off"}
  </div>
}

function ToggleBulbState() {
 const {bulbOn,setBulbOn} =useContext(BulbContext);
  function toggle() {
    // setBulbOn(currentState => !currentState)
    setBulbOn(!bulbOn)
    
  }

  return <div>
    <button onClick={toggle}>Toggle the bulb</button>
  </div>
}

export default App
