import Multiple from "./multiple";
import Single from "./Single";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>single upload</h1>

      <Single />
      <h1>Multiple upload</h1>

      <Multiple />
    </div>
  );
}
