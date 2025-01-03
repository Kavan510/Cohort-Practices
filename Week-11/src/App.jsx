import { useState } from 'react';
import './App.css'
import { usePost } from './hooks/useFetch';
import { RecoilRoot ,atom, useRecoilValue, useSetRecoilState} from 'recoil';
import { counter } from './store/atoms/counter';


function App() {

return (
  <>
  <RecoilRoot>
    <Counter/>
    </RecoilRoot>
  </>
)
}


  function Counter(){

    return (
    <div>
      <CurrentCounter />
      <Increase  />
      <Decrease /> 
    </div>
    )
  }

  function CurrentCounter()
  {
    const count = useRecoilValue(counter) //subscribed to atom counter
    return <>
    {count}
    </>

  }

  function Increase(){
    const setCount = useSetRecoilState(counter)
    function increase(){
      setCount(c=>c+1);
    }
    return <div>
      <button onClick={increase}>Increase</button>
    </div>
  }

  function Decrease(){
    const setCount =useSetRecoilState(counter)
    function decrease(){
      setCount(c=>c-1);
    }
    return <div>
      <button onClick={decrease}>Decrease</button>
    </div>

  }

export default App
