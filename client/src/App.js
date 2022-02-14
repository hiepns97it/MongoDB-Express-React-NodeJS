import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {Dashboard, Register, Ladings, Error} from './pages'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
            path='/'
            element={
             <Dashboard/>
            }
        />
        <Route path='/register' element={<Register/>} />
        <Route path='/landing' element={<Ladings />} />
        <Route path='*' element={<Error/>} />
      </Routes>
  </BrowserRouter>
  );
}

export default App;
