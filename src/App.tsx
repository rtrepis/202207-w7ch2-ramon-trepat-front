import RobotCardList from "./components/RobotCardList/RobotCardList";

const App = () => {
  return (
    <>
      <div className="headers">
        <h1>Robots</h1>
      </div>
      <div className="main-container">
        <RobotCardList />
      </div>
    </>
  );
};

export default App;
