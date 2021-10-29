import "./App.css";
import {DndProvider} from "react-dnd"
import {HTML5Backend} from "react-dnd-html5-backend"
import Listuser from "./Listuser";
import Createtask from "./Createtask";
import Updatetask from "./Updatetask";
import Deletetask from "./Deletetask";
import Listtask from "./Listtask";

export const HEADER = {
  AuthToken: "UrM4YHgb1FcqEf1tuKwmAMMX5MxFZ12a",
};

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
    <div className="App">
      <h1>Mini-Task_manager</h1>
      <Listuser />
      <div className="Createtask">
      <Createtask />
      </div>
      <div className="Updatetask">
      <Updatetask />
      </div>
      <div className="Deletetask">
      <Deletetask />
      </div>
      <div className="Listtask">
      <Listtask />
      </div>
    </div>
    </DndProvider>
  );
}

export default App;
