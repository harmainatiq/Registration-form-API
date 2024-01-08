import {useState} from 'react'
import Login from "./Components/Login"
import Register from "./Components/Register";
const App = () => {
  const [active, setActive] = useState(false);
  const handleState = () => {
    setActive(true);}


  return (
    <div className='container bg-[#7942DF] w-[100%] h-[651px]'>
      {active ? <Register handleState={() => setActive(false)} /> : <Login handleState={handleState} />}
    </div>
  )
}

export default App