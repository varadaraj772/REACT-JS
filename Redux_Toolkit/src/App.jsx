import "./App.css";
import Addtodo from "./components/Addtodo";
import Todos from "./components/Todos";

function App() {
  return (
    <div className=" bg-slate-400 p-4 rounded-lg justify-center flex-column">
      <Addtodo />
      <Todos />
    </div>
  );
}

export default App;
