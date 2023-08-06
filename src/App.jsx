import { ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { useState } from 'react';
import { Outlet, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';
import './App.css';
import Admin from './components/Admin';
import Landing from './components/Landing';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Signup from './components/Signup';

function App() {
  const [progress, setProgress] = useState(0);
  
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
            backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.09), rgba(255, 255, 255, 0.09));'
          },
        },
      },
    },
  });
        
  const DefaultContainer = () => {
    return(
      <>
        <Navbar />
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
    console.log(progress);
    setProgress(load);
    console.log(progress);
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
            <Route element={<DefaultContainer />}>
              <Route exact path='/' element={<Landing setLoader={setLoader}/>}/>
              <Route exact path='/admin' element={<Admin setLoader={setLoader}/>}/>
            </Route>
            <Route element={<WithoutNavbarContainer/>}>
              <Route exact path='/login' element={<Login setLoader={setLoader}/>}/>
              <Route exact path='/signup' element={<Signup setLoader={setLoader}/>}/>
            </Route>
          </Routes>
        </Router>
      </ThemeProvider>
    </>
  )

}

export default App
