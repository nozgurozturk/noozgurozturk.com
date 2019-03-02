import React, { Component } from "react";
import styled from "styled-components";

const Info = styled.div`
  position: absolute;
  right: 15vw;
  top: 50vh;
  @media (max-width: 768px) {
    top: 15vh;
    right: 30vw;
  }
`;
const Header = styled.li`
  position: absolute;
  font-weight: 300;
  font-size: 2.4vh;
  letter-spacing: 0.2vh;
  right: ${props => props.right};
  align-content: space-between;
  color: #ffab5d;
  @media (max-width: 768px) {
    top: ${props => props.top};
    right: unset;
  }
`;
const Content = styled.h4`
  margin: 0;
  padding: 0;
  position: absolute;
  font-weight: 600;
  top: 30px;
  color: #fafafa;
`;

const titles = ["field", "technologies", "role", "year"];

export default class ProjectInfo extends Component {
  render() {
    return (
      <div>
        <Info>
          <ul>
            {titles.map((item, i) => (
              <Header
                key={i}
                right={(4 - i) * 15 - 20 + "vw"}
                top={i * 15 + 15 + "vh"}
              >
                [{item}]<Content>{`${this.props.onInfo[item]}`}</Content>
              </Header>
            ))}
          </ul>
        </Info>
      </div>
    );
  }
}
