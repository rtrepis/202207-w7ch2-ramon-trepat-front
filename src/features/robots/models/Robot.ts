interface Robot {
  id: number;
  name: string;
  url: string;
  specs: {
    speed: number;
    stamina: number;
    creationDate: string;
  };
}

export default Robot;
