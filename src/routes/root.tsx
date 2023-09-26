import { Outlet, Link } from "react-router-dom";
import { styled } from "styled-components";

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #bf4f74;
  width: auto;
`;
const Nav = styled.nav`
  flex-direction: row;
`;

export default function Root() {
  return (
    <>
      <div id="sidebar">
        <Title>Docker Demo Page</Title>
        <Nav>
          <ul>
            <li>
              <Link to={`/home`}>Home</Link>
            </li>
            <li>
              <Link to={`/about`}>About</Link>
            </li>
          </ul>
        </Nav>
      </div>
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
}
