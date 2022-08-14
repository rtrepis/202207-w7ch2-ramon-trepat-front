interface Robot {
  id: string;
  name: string;
  img: string;
  specs: {
    speed: number;
    stamina: number;
    creationDate: string;
  };
}

export default Robot;
