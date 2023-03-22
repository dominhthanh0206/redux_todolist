import { Divider, Typography } from "antd";
import "./App.css";
import Filter from "./component/Filters";
import TodoList from "./component/Todolist";

const { Title } = Typography;

function App() {
  return (
    <div
      style={{
        width: 500,
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "white",
        padding: 20,
        boxShadow: "0 0 10px 4px #bfbfbf",
        borderRadius: 5,
        height: "90vh",
      }}
    >
      <Title style={{ textAlign: "center" }}>TODO APP with REDUX</Title>
      <Filter></Filter>
      <Divider></Divider>
      <TodoList></TodoList>
    </div>
  );
}

export default App;
