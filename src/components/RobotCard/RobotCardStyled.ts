import styled from "styled-components";

const RobotStyled = styled.article`
  font-size: 1rem;
  max-width: 250px;
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

  .card-containter {
    text-align: center;
    &__spect {
      &--bold {
        font-weight: 700;
      }
    }
  }
`;

export default RobotStyled;