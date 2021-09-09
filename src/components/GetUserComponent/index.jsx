import { useState } from "react";
import "./style.css";

function GetUserComponent({ setUser, setIsLoggedIn }) {
  const [userInput, setUserInput] = useState("");

  function HandleLogin(userInput) {
    let tamanho = userInput.length;
    if (tamanho > 1) {
      setUser(userInput);
      setIsLoggedIn(true);
    }
  }

  return (
    <div>
      <form>
        <h2>Bem-vinde à página de Login!</h2>
        <p>Insira seu nome abaixo para acessar</p>

        <input
          type="text"
          value={userInput}
          onChange={(event) => setUserInput(event.target.value)}
          placeholder="Digite seu nome aqui"
        />
        <button onClick={() => HandleLogin(userInput)}>Acessar página</button>
      </form>
    </div>
  );
}

export default GetUserComponent;
