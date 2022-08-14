import styled from "styled-components";

const RobotCardStyled = styled.article`
  position: relative;
  font-size: 1rem;
  width: 400px;
  padding: 10px;
  background-color: rgba(255, 255, 255, 1);
  color: #000;
  border-radius: 10px;
  box-shadow: 0px 19px 38px 0px rgba(0, 0, 0, 0.3),
    0px 15px 12px 0px rgba(0, 0, 0, 0.22);

  .card-header {
    font-size: 2rem;
    display: flex;
    justify-content: left;
    align-items: center;
    margin: 10px;

    h2 {
      margin: 0;
    }
    &__img {
      border-radius: 50%;
      aspect-ratio: 1/1;
      font-weight: 700;
      padding: 10px;
    }
  }

  .card-container {
    display: flex;
    flex-direction: column;
    padding-left: 2rem;
    &__spect {
      &--bold {
        font-weight: 700;
      }
    }
  }

  .button {
    position: absolute;
    top: 10px;
    right: 10px;
  }
`;

export default RobotCardStyled;
