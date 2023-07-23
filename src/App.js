import logo from "./logo.svg";
import "./App.css";
import LeftBar from "./component/LeftBar";
import MainBar from "./component/MainBar";
import RightBar from "./component/RightBar";
import MiniSidebar from "./component/MiniSidebar";
import Upperbar from "./mobcomponent/Upperbar";
import Middlebar from "./mobcomponent/Middlebar";
import Lowerbar from "./mobcomponent/Lowerbar";
import Minibar from "./mobcomponent/Minibar";


function App() {
  return (
    <div>
    <div className=" hidden md:flex bg-gray-200">
      <MiniSidebar />
      <LeftBar />
      <MainBar />
      <RightBar />
    </div>
    < div className="sm:hidden">
      <Upperbar/>
      <Minibar/>
      <Middlebar/>
      <Lowerbar/>
    </div>
    </div>
  );
}

export default App;
