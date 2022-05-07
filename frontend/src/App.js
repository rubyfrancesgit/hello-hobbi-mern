import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./pages/SignUp";

// Styles
import "./sass/style.scss";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/sign-up" element={ <SignUp /> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
