import Main from './Main'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store/store'
import { createTheme, ThemeProvider } from '@mui/material'
import MainLayout from './layouts/MainLayout'
import HomePage from './page/HomePage'
import UserPage from './componenets/userPage/userPage'
import AddPage from "./page/AddPage";

const theme = createTheme({
  palette: {
    primary: {
      main: '#1D1C1C',
    },
    secondary: {
      main: '#F3C54D',
    },
  },
});
function App() {
  return (
    <div className="wrapper">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <Provider store={store}>
            <Routes>
              <Route path='/' element={<MainLayout/>}>
                  <Route index element={<HomePage/>}/>
                  <Route path="/post" element={<AddPage/>}/>
                  <Route path='/userPage'  element={<UserPage/>}/>
              </Route>
            </Routes>
          </Provider>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
