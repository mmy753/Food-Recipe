
import Pages from "./components/pages/Pages";
import Category from "./components/Category";
import {BrowserRouter} from 'react-router-dom';
import Search from "./components/Search";

import Navbared from "./components/Navbared";
function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Navbared />
    <Search/>

      <Pages/>
      </BrowserRouter>
    </div>
  );
}

export default App;
