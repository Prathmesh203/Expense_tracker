import { useState } from 'react'
import Navbar from './Components/Navbar'
import  {useUserContext}  from './Context'
import Main from './Components/Main';
import ExpensePieChart from './Components/ExpensePieChart';
import About from './Components/About';



function App() {
  const expences = useUserContext();
  console.log(expences.Expences);
  return (
    <>
<Navbar />
<Main />
<ExpensePieChart />
<About />
    </>
  )
}

export default App
