import './App.css'

import Card from './componets/Card'

function App() {
  const myObj = {
    username:'Deepak Yadav',
    age:19
  }
  

  return (
   <>
   <h1 className='bg-green-400 p-4 text-black rounded-xl mb-3'>Tailwid css</h1>

    <Card  username = 'Deepak' btnText='ClickMe'/>
    <Card username = 'Yadav' btnText='VisitMe'/>






   
   </>
  )
}

export default App
