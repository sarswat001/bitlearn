import { ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { useState } from 'react';
import { Outlet, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';
import './App.css';
import Admin from './components/Admin';
import AdminDashboard from './components/AdminDashboard';
import Course from './components/Course';
import Landing from './components/Landing';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Signup from './components/Signup';

function App() {
  const [progress, setProgress] = useState(0);
  const [isLogin, setIsLogin] = useState(false);
  const [user, setUser] = useState('users');
  
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#FFFFFF',
      },
    },
    components: {
      MuiContainer: {
        styleOverrides: {
          root: {
            fontSize: '1rem',
            backgroundColor:'#121212',
            color:'#fff',
            //backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.09), rgba(255, 255, 255, 0.09));'
          },
        },
      },
    },
  });
        
  const DefaultContainer = (props) => {
    return(
      <>
        <Navbar isLogin={props.isLogin} updateIsLogin={updateIsLogin}/>
        <Outlet />
      </>
    )
  }

  const WithoutNavbarContainer = () => {
    return(
      <>
        <Outlet />
      </>
    )
  }

  const setLoader = (load) => {
    //console.log(progress);
    setProgress(load);
    //console.log(progress);
  }

  const updateIsLogin = (flag)=>{
    setIsLogin(flag);
  }

  const updateUser = (curr)=>{
    setUser(curr);
  }

  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <Router>
          <LoadingBar
            color='#ce93d8'
            progress={progress}
          />
          <Routes>
            <Route element={<DefaultContainer isLogin={isLogin} updateIsLogin={updateIsLogin}/>}>
              <Route exact path='/' element={<Landing setLoader={setLoader}/>}/>
              <Route exact path='/admin' element={<Admin setLoader={setLoader} updateUser={updateUser}/>}/>
              <Route exact path='/admin/dashboard/*' element={<AdminDashboard setLoader={setLoader}/>}/>
              <Route exact path='/courses/:courseId' element={<Course/>}/>
            </Route>
            <Route element={<WithoutNavbarContainer/>}>
              <Route exact path='/login' element={<Login setLoader={setLoader} updateIsLogin={updateIsLogin} user={user}/>}/>
              <Route exact path='/signup' element={<Signup setLoader={setLoader} updateIsLogin={updateIsLogin} user={user}/>}/>
            </Route>
          </Routes>
        </Router>
      </ThemeProvider>
    </>
  )

}

export default App
