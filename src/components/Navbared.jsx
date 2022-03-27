import React from 'react'
import {GiKnifeFork} from 'react-icons/gi';
import styled from 'styled-components';
import { Link, NavLink} from 'react-router-dom';
import {FaPizzaSlice, FaHamburger} from 'react-icons/fa';
import {GiDonerKebab, GiChopsticks} from 'react-icons/gi';
import { device } from "./devices";

function Navbared() {
  return (
    <Nav>
    <GiKnifeFork/>
      <Logo to={'/'}>Food-Recipes</Logo>
      <List>
        <SLink to={'/cuisine/Italian'}>
            <FaPizzaSlice/>
            <h4>Italian</h4>
        </SLink>
        <SLink to={'/cuisine/American'}>
            <FaHamburger/>
            <h4>American</h4>
        </SLink>
        <SLink to={'/cuisine/Mexican'}>
            <GiDonerKebab/>
            <h4>Mexican</h4>
        </SLink>
        <SLink to={'/cuisine/Japanese'}>
            <GiChopsticks/>
            <h4>Japanese</h4>
        </SLink>
    </List>
    </Nav>
  )
}
const Logo = styled(Link)`
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 400;
  font-family: 'Lobster Two';
  margin-right: 8rem;
  color:#BF0404;
  @media ${device.tablet} {
    color: purple;
    font-size: 1.2rem;
    margin-right: 1rem;
    font-weight: 200;
  }
  svg{
    margin-right: 1rem;
  }
`;
const Nav = styled.div`
  padding: 4rem 0rem;
  display: flex;
  justify-content: center;
  align-items: center;
  svg{
    font-size: 2rem;
  }


}
`;
const List = styled.div`
    display:flex;
    justify-content: center;
    margin:2rem 0rem;
    

`;
const SLink = styled(NavLink)`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    border-radius:50%;
    margin-right:2rem;
    text-decoration:none;
    background-color: #467302;
    width:5rem;
    height:5rem;
    cursor:pointer;
    transform:scale(0.8);
    h4{
        color:white;
        font-size:0.8rem;
    }
    svg{
        color:white;
        font-size:1.5rem;
    }
    &.active{
        background: linear-gradient(to right, #f27121, #e94057);
    }
    @media ${device.tablet} {
    width: 3rem;
    height: 3rem;
    svg{
      font-size: 0.9rem;
    }
    h4{
      font-size:0.5rem;
    }
  }
`;
export default Navbared