import { useEffect } from "react";
import {
  Route, Routes
} from "react-router-dom";
import { Header } from "./components";
import { Home, Cart } from "./pages";
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { setPizzas as setPizzasAction } from './redux/actions/pizzas'




const App = () => {
  const dispatch = useDispatch();



  useEffect(() => {
    axios.get('http://localhost:3001/pizzas')
      .then(res => {
        dispatch(setPizzasAction(res.data))
      })
  }, [])


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

export default App

// const mapStateToProps = (state) => {
//   return {
//     items: state.pizzas.items
//   }
// }

// const mapDispatchToProps = (dispatch) => {
//   return {
//     setPizzas: (items) => dispatch(setPizzasAction(items))
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(App);
