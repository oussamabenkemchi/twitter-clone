import "./App.css";
import Feed from "./Feed";
import Sidebar from "./Sidebar";
import Widgets from "./Widgets";

function App() {
  return (
    //BEM CONVENTION
    <div className="app">
      {/* SIDE BAR  */}
      <Sidebar />
      {/* FEED */}
      <Feed />

      {/* Widgets */}
      <Widgets />
    </div>
  );
}

export default App;
