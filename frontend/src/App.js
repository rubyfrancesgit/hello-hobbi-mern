import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import SignUp from "./pages/SignUp";
import { useSelector } from 'react-redux';

// Styles
import "./sass/style.scss";
import UserProfile from "./pages/UserProfile";
import Hosting from "./pages/Hosting";

function App() {
  const user = useSelector((state) => state.user.value);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/sign-up" element={ <SignUp /> } />
          <Route path="/" element={ <Index /> } />
          <Route path="/user-profile" element={ user ? <UserProfile /> : <Index /> } />
          <Route path="/teach-a-hobby" element={ <Hosting />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
