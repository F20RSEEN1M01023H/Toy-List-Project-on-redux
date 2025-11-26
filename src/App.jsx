import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToy } from "./Actions/ToyActions";

function Playroom() {
  const [newToy, setNewToy] = useState("");
  const toys = useSelector((state) => state.toys);
  const dispatch = useDispatch();

  return (
    <div
      style={{
        padding: "30px",
        border: "8px solid purple",
        margin: "20px",
        borderRadius: "20px",
      }}
    >
      <h2>Playroom - Add Toys Here!</h2>
      <input
        value={newToy}
        onChange={(e) => setNewToy(e.target.value)}
        placeholder="Type a toy name..."
        style={{ padding: "10px", fontSize: "18px" }}
      />
      <button
        onClick={() => {
          if (newToy.trim()) {
            dispatch(addToy(newToy));
            setNewToy("");
          }
        }}
        style={{ padding: "10px 20px", margin: "10px", fontSize: "18px" }}
      >
        Add Toy
      </button>
      <h3>Toys List:</h3>
      <ul style={{ fontSize: "20px" }}>
        {toys.map((toy, i) => (
          <li key={i}>{toy}</li>
        ))}
      </ul>
    </div>
  );
}

function Bedroom() {
  const toys = useSelector((state) => state.toys);

  return (
    <div
      style={{
        padding: "30px",
        border: "8px solid orange",
        margin: "20px",
        borderRadius: "20px",
      }}
    >
      <h2>Bedroom - I Can See All Toys Too!</h2>
      <h3>Same List:</h3>
      <ul style={{ fontSize: "20px" }}>
        {toys.map((toy, i) => (
          <li key={i}>{toy}</li>
        ))}
      </ul>
    </div>
  );
}

function App() {
  return (
    <>
      <h1 style={{ textAlign: "center", fontSize: "40px", color: "purple" }}>
        Magic Toy House with Vite + Redux!
      </h1>
      <Playroom />
      <Bedroom />
    </>
  );
}

export default App;
