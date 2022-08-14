
import Robot from "./features/robots/components/Robot/Robot";
import Button from "./features/robots/components/Button/Button";


const App = () => {
  return (
    <>
      <h1>Hello World</h1>
      <Robot />
      <Button text="Prova" actionClick={() => {}}></Button>
    </>
  );
};

export default App;
