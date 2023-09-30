import { Routes, Route } from 'react-router-dom' 
import Home from './pages/Home'; 
import Signup from './pages/Signup';
import Allvideos from './pages/Allvideos';
import Singlevideo from './pages/Singlevideo';
import Recording from './pages/Recording';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/single-video' element={<Singlevideo />} />
      <Route path='/all-videos' element={<Allvideos />} />
      <Route path='/recording' element={<Recording />} />
    </Routes>
  );
}

export default App;
