import React from "react";
import styled from "styled-components";

type MainProps = {
  onLogout: () => void;
};

const LogoutBtn = styled.button`
  font-family: inherit;
  font-size: 15px;
  color: #ffffff;
  border: none;
  border-radius: 10px;
  background: #c37a7a;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  padding: 0.3rem 1.1rem 0.5rem;
  display: flex;
  margin: 50px auto;
  cursor: pointer;
`;

const Main: React.FC<MainProps> = (props) => {
  return (
    <div>
      <LogoutBtn onClick={props.onLogout}>Logout</LogoutBtn>
    </div>
  );
};

export default Main;
