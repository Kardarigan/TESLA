import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Layout,
  Home,
  Overview,
  Order,
  Learn,
  Energy,
  Powerwall,
  Megapack,
  Tradein,
  Commercial,
  Utilities,
} from "./comps/Portal";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/vehicles" element={<Overview />} />
          <Route path=":model/order" element={<Order />} />
          <Route path=":model" element={<Learn />} />
          <Route path="/energy" element={<Energy />} />
          <Route path="/powerwall" element={<Powerwall />} />
          <Route path="/megapack" element={<Megapack />} />
          <Route path="/tradein" element={<Tradein />} />
          <Route path="/commercial" element={<Commercial />} />
          <Route path="/utilities" element={<Utilities />} />
          <Route path="*" element={<h1 className="m-auto">404</h1>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
