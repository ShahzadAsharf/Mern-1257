import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  function onclick()
  {
   alert=("My name is Shahzad Ashraf")
   return(alert);
  }
  return (
    <>
     <h1 class="new">I am Shahzad Ashraf</h1>
     <div class="container"></div>
     <button class="button" onclick={onclick}> new button</button>
    </>
  )
}

export default App