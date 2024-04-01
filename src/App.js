import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Layout from './comps/Layout'
import Home from './pages/Home'


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/' element={<Home />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
