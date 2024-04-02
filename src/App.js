import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Layout, Home, Overview } from './comps/Portal'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/' element={<Home />} />
          <Route path='/vehicles' element={<Overview />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
