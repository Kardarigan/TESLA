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
  Tradein_Form,
  Demo,
  Help,
  Subscribe,
  Callback,
  Fleet,
} from "./comps/Portal";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index path="/" element={<Home />} />
          <Route path="/vehicles" element={<Overview />} />
          <Route path=":model/order" element={<Order />} />
          <Route path=":model" element={<Learn />} />
          <Route path="/energy" element={<Energy />} />
          <Route path="/powerwall" element={<Powerwall />} />
          <Route path="/megapack" element={<Megapack />} />
          <Route path="/demo" element={<Demo />} />
          <Route path="/tradein" element={<Tradein />} />
          <Route path=":help" element={<Help />} />
          <Route
            path="/communication-preferences/:subscribe"
            element={<Subscribe />}
          />
          <Route path="/Fleet" element={<Fleet />} />
          <Route path="/callback" element={<Callback />} />
          <Route path="/tradein/form" element={<Tradein_Form />} />
          <Route path="/commercial" element={<Commercial />} />
          <Route path="/utilities" element={<Utilities />} />
          <Route path="*" element={<h1 className="m-auto">404</h1>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
