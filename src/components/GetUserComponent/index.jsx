import { useState } from "react";

function GetUserComponent({ setUser, setIsLoggedIn }) {
  const [userInput, setUserInput] = useState("");

  function HandleLogin(userInput) {
    setUser(userInput);
    setIsLoggedIn(true);
  }

  return (
    <form>
      <h2>Bem-vinde à página de Login!</h2>
      <input
        type="text"
        value={userInput}
        onChange={(event) => setUserInput(event.target.value)}
      />
      <button onClick={() => HandleLogin(userInput)}>Acessar com o nome</button>
    </form>
  );
}

export default GetUserComponent;
