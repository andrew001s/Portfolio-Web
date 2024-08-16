import './App.css'
import { Navbar } from './components/common/Navbar'
import { Index } from './components/home/Index'
function App() {

  return (
    <>
     <div>
        <Navbar/>
     </div>
     <div className='pt-11'>
        <Index/>
     </div>
    </>
  )
}

export default App
