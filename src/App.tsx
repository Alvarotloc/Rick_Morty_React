import Todo from "./components/Todo";
import { Routes, Route } from "react-router-dom";
const App = (): JSX.Element => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Todo />}/>
      </Routes>
    </>
  );
};

export default App;
