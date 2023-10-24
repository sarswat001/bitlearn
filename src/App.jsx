import { ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { Outlet, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Admin from './components/Admin';
import AdminDashboard from './components/AdminDashboard';
import Course from './components/Course';
import Landing from './components/Landing';
import Loader from './components/Loader';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Signup from './components/Signup';

function App() {
  
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
        <Navbar/>
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

  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <Router>
          <Loader/>
          <Routes>
            <Route element={<DefaultContainer/>}>
              <Route exact path='/' element={<Landing/>}/>
              <Route exact path='/admin' element={<Admin/>}/>
              <Route exact path='/admin/dashboard/*' element={<AdminDashboard/>}/>
              <Route exact path='/courses/:courseId' element={<Course/>}/>
            </Route>
            <Route element={<WithoutNavbarContainer/>}>
              <Route exact path='/login' element={<Login/>}/>
              <Route exact path='/signup' element={<Signup/>}/>
            </Route>
          </Routes>
        </Router>
      </ThemeProvider>
    </>
  )

}

export default App
