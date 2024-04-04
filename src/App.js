import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Layout, Home, Overview, Order, Learn } from './comps/Portal'


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/' element={<Home />} />

          <Route path='/vehicles' element={<Overview />} />
          <Route path=':model/order' element={<Order />} />
          <Route path=':model/learn' element={<Learn />} />

        </Route>
      </Routes>
    </Router>
  );
}

export default App;
