import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useSelector } from 'react-redux';

// Styles
import "./sass/style.scss";

// Pages
import UserProfile from "./pages/UserProfile";
import Hosting from "./pages/Hosting";
import CreateSession from "./pages/CreateSession";
import Index from "./pages/Index";
import SignUp from "./pages/SignUp";

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
          <Route path="/create-session" element={ user ? <CreateSession /> : <Index /> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
