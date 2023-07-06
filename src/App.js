import Home from "./navbar/home";
import Categories from "./navbar/categories";
import Store from "./navbar/store";
import MyStuff from "./navbar/myStuff";
import ToggleButton from "./examples/toggle";
import DropdownToggle from "./examples/dropdown";
import Collection from "./navbar/collection";
import CollectionMenu from './pages/menu';
import Traffic from "./examples/traffic";

function App() {
  return (
    <div className="">

      <div className="app d-flex row-col" style={{width:'60%',margin:'auto'}}>
        {/* <Home/>
        <Collection/>
        <Categories/>
        <Store/>
        <MyStuff/> */}
      </div>
      {/* <CollectionMenu/> */}
      {/* <ToggleButton/>
      <DropdownToggle/>       */}
      <Traffic/>
  
    </div>
  );
}

export default App;
