import RobotStyed from "./RobotStyled";

const Robot = () => {
  return (
    <RobotStyed className="card">
      <div className="card-header">
        <img
          src="https://media1.popsugar-assets.com/files/thumbor/KRbmkIWqkbbt_2eYm6uQFXcxKaE/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2022/01/22/038/n/43611095/e8fd622feebcde09_MCDTWTH_EC160/i/Best-Robot-Movies-2001-Space-Odyssey.jpg"
          className="card-header__img"
          alt="the robot Hal"
          height="70px"
        />
        <h2 className="card-header__title">Hal</h2>
      </div>
      <div className="card-container">
        <p>
          <span className="card-containter__spect--bold">Speed: </span>5 {"\n"}
          <span className="card-containter__spect--bold">Stamina: </span>3{"\n"}
          <span className="card-containter__spect--bold">Create Data: </span>
          23/02/85
        </p>
      </div>
    </RobotStyed>
  );
};

export default Robot;
