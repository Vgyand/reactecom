import {
  Route, Routes
} from "react-router-dom";
import { Header } from "./components";
import { Home, Cart } from "./pages";



const App = () => {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Routes>
          <Route path="/cart" element={<Cart />} />
          <Route path="/" element={<Home />} />
        </Routes>

      </div>
    </div >
  );
}

export default App;
