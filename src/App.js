import "./App.css";
import { useState } from "react";
import WelcomePage from "./components/WelcomePage";
import GetUserComponent from "./components/GetUserComponent";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [user, setUser] = useState("");

  return (
    <div className="App">
      <header className="App-header">
        {isLoggedIn ? (
          <div>
            <WelcomePage user={user} setIsLoggedIn={setIsLoggedIn} />
          </div>
        ) : (
          <div>
            <GetUserComponent setUser={setUser} setIsLoggedIn={setIsLoggedIn} />
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
