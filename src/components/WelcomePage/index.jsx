function WelcomePage({ user, setIsLoggedIn }) {
  const HandleLogout = () => {
    return setIsLoggedIn(false);
  };

  return (
    <div>
      <h1>Bem-vinde, {user}!</h1>
      <button onClick={HandleLogout}>Logout</button>
    </div>
  );
}

export default WelcomePage;
