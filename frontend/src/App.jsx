import { BrowserRouter, Routes, Route } from "react-router-dom";
import routes from "./app/routes";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} {...route} />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
