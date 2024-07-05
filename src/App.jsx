
import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'
import UserContextProvider from './context/UserContextProvider'

function App() {
  //iski wajah se hum jo bhi component lenge uska access milega 
  return (
    <UserContextProvider>
    <h1>React MiniContext</h1> 

    <Login/>
    <Profile/>
    </UserContextProvider>
  )
}

export default App
 