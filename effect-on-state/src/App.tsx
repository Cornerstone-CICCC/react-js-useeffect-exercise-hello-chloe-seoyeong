import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [message, setMessage] = useState<string>("Hello from React!");
  const [likes, setLikes] = useState<number>(0);
  const [isRed, setIsRed] = useState<boolean>(false);

  useEffect(() => {
    console.log(message);
  }, [message]);

  useEffect(() => {
    if (likes > 0) {
      alert(`Likes updated to ${likes}!`);
    }
  }, [likes]);

  useEffect(() => {
    console.log(`Current color is ${isRed ? "RED" : "BLUE"}`);
  }, [isRed]);

  return (
    <div>
      <h2>Message Logger</h2>
      <button onClick={() => setMessage((prevState) => prevState + " again")}>
        Send Message
      </button>

      <h2>Like Counter</h2>
      <button onClick={() => setLikes((prev) => prev + 1)}>Like</button>

      <h2>Color Box</h2>
      <button onClick={() => setIsRed((prev) => !prev)}>Change Color</button>
      <div
        style={{
          width: 100,
          height: 100,
          margin: "10px auto",
          backgroundColor: isRed ? "red" : "blue",
        }}
      >
        Color Box
      </div>
    </div>
  );
}

export default App;
