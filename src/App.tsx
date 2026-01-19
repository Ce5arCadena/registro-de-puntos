import './App.css';
import AuthLayout from './auth/layouts/AuthLayout';
import { LoginPage } from './auth/pages/LoginPage';
import RegisterPage from './auth/pages/RegisterPage';
import { BrowserRouter, Route, Routes } from 'react-router';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<LoginPage/>}/>

        <Route path='auth' element={<AuthLayout/>}>
          <Route index element={<LoginPage/>}/>
          <Route path='login' element={<LoginPage/>}/>
          <Route path='register' element={<RegisterPage/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
