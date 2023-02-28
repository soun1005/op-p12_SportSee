import './App.css';

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';

function App() {
  return (
    <>
      <main>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navigate replace to="/user/12" />} />
            <Route exact path="/user/:id/" element={<Home />} />
            {/* <Route path="*" element={<Error404 />} /> */}
          </Routes>
        </BrowserRouter>
      </main>
    </>
  );
}

export default App;
