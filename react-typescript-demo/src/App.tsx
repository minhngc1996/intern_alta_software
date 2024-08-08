import { useState } from 'react';
import './App.css';
import Button from './components/Button';
import Greet from './components/Greet';
import Heading from './components/Heading';
import Input from './components/Input';
import Oscar from './components/Oscar';
import Person from './components/Person';
import PersonList from './components/PersonList';
import Status from './components/Status';
import Container from './components/Container';
import LoggedIn from './components/state/LoggedIn';
// import User from './components/state/User';
import Timer from './components/effect/Timer';

import { ThemeContextProviderProps } from './components/context/ThemeContext';
import Box from './components/context/Box';
import User from './components/context/User';
import { UserContextProvider } from './components/context/UserContext';
import { MutableRef } from './components/ref/MutableRef';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/router/Home';
import About from './components/router/About';
import Contact from './components/router/Contact';
import Counter from './components/redux/Counter';


const handleClick = () => {
  alert('Click Successfully!!!')
}

function App() {
  const personName = {
    firstName: 'Nguyễn Công ',
    lastName: 'Minh'
  }
  const nameList = [
    {
      firstName: 'Nguyễn Công ',
      lastName: 'Minh'
    },
    {
      firstName: 'Nguyễn Văn ',
      lastName: 'A'
    },
    {
      firstName: 'Nguyễn Thị ',
      lastName: 'B'
    }, 
  ]


  const [inputValue, setInputValue] = useState('')
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value)
    console.log(event.target.value);
  }



  return (
    <div className="App">
     {/* <Greet name = 'Nguyễn Công Minh' age ={29} isLoggedIn={true} onClick ={handleClick}/> */}
     {/* <Person name={personName}/>
     <PersonList listPerson = {nameList} /> */}
     {/* <Status status='error' />
     <Heading>Placeholder text</Heading>
     <Oscar>
        <Heading>Oscar goes to Leonardo Dicparia</Heading>
     </Oscar>
     <Button handleClick = {(event,id) => {console.log('Button Clicked',event,id);}}/>
     <Input value={inputValue} handleChange={handleInputChange} />
     <Container styles={{border:'1px solid black', padding: '1rem', margin:'2px'}}/> */}
     {/* <LoggedIn /> */}
     {/* <User/> */}
     {/* <Timer/>  */}
     {/* <Counter /> */}

     {/* bao bọc component Box bằng ThemeContextProvider để cung cấp theme context: */}
     {/* <ThemeContextProviderProps>
        <Box/>
     </ThemeContextProviderProps> */}

     {/* Sử dụng useContext */}
     {/* <UserContextProvider>
      <User/>
     </UserContextProvider> */}

     {/* Sử dụng useRef */}
     {/* <MutableRef /> */}

     {/* Cấu hình Router trong Reactjs - Typescript */}
     <Router>
            <nav className="navbar">
                <ul className="nav-list">
                    <li className="nav-item">
                        <Link to="/" className="nav-link">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/about" className="nav-link">About</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/contact" className="nav-link">Contact</Link>
                    </li>
                </ul>
            </nav>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </Router>

        {/* <Counter /> */}
        {/* Firebase trong ReactJS - Typecript */}
        
    </div>
  );
}

export default App;
