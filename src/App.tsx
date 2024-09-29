import "./App.css";
import { Link, Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <nav>
        <Link to='/home'>Home</Link>
        <Link to='/tables'>Tables</Link>
        <Link to='/menu'>Menu</Link>
        <Link to='/products'>Products</Link>
        <Link to='/customers'>Customers</Link>
      </nav>
      <Outlet/>
    </div>
  );
}

export default App;
