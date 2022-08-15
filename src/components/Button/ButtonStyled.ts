import styled from "styled-components";

const ButtonStyled = styled.button`
  background: #3d94f6;
  border-radius: 10px;
  color: #ffffff;
  font-size: 0.8rem;
  font-weight: 700;
  padding: 10px;
  border: solid #337fed 1px;
  text-decoration: none;
  display: inline-block;
  cursor: pointer;
  text-align: center;

  .button:hover {
    border: solid #337fed 1px;
    background: #1e62d0;
    text-decoration: none;
  }
`;

export default ButtonStyled;
