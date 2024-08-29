import { BrowserRouter, Route,   Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Todo from "./components/Todo.jsx";

 
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Home/>} />
        <Route path={"/t"} element={<Todo/>} />

      </Routes>
    </BrowserRouter>
  )
}
