import {useEffect, useState} from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';

import React from 'react'

function Recipes() {
  let params = useParams();
  const [details, setDetails] = useState({});
  const [activeTab, setActiveTab] = useState('insturctions');
  const fetchDetails = async () => {
    const data = await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`);
    const detailData = await data.json();
    setDetails(detailData);
  }
  useEffect(()=>{
    fetchDetails();
  },[params.name]);
  return (
    <Container>
    <Title><h2>{details.title}</h2></Title>
    
    <DetailWrapper>
      
        
        <img src={details.image}/>
      
  </DetailWrapper>
  <Info>
        <Button 
        className={activeTab === 'instructions' ? 'active' : ''} 
        onClick={() => setActiveTab('instructions')}
        >Instructions</Button>
        <Button 
        className={activeTab === 'ingredients' ? 'active' : ''} 
        onClick={() => setActiveTab('ingredients')}
        >Ingredients</Button>
        {activeTab === 'instructions' && (
          <div>
          <h5 dangerouslySetInnerHTML={{__html: details.summary}}></h5>
          <p dangerouslySetInnerHTML={{__html: details.instructions}}></p>
        </div>
        )}
        {activeTab === 'ingredients' && (
          <ul>
          {details.extendedIngredients.map((ingredient) =>
              <li key={ingredient.id}>{ingredient.original}</li>
            )}
        </ul>
        )}
          
      </Info>
      </Container>
  );

}
const DetailWrapper = styled.div`
    margin-top: 5rem;
    margin-bottom: 3rem;
    display: flex;
    .active{
      background: linear-gradient(35deg, #494949, #313131);
      color: white;
    }
    h2{
      margin-bottom: 2rem;
    }
    li{
      font-size: 1.2rem;
      line-height: 2.5rem;
    }
    ul{
      margin-top: 2rem;
    }
   justify-content: center;
`;
const Button = styled.button`
  font-size: 16px;
  font-weight: 200;
  letter-spacing: 1px;
  padding: 13px 20px 13px;
  outline: 0;
  border: 1px solid black;
  cursor: pointer;
  position: relative;
  background-color: rgba(0, 0, 0, 0);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  margin-right  : 2rem;
  color: white;

   &:after {
  content: "";
  background-color: #467302;
  width: 100%;
  z-index: -1;
  position: absolute;
  height: 100%;
  top: 7px;
  left: 7px;
  transition: 0.2s;
 
}

    &:hover:after {
  top: 0px;
  left: 0px;
}

@media (min-width: 768px) {
  Button {
    padding: 13px 50px 13px;
  }
}
`;
const Info = styled.div`
    justify-content: center;
    align-items: center;
    text-align: center;
    Button{
      margin-bottom: 2rem;
    }
    color: white;
    li{
      margin-bottom: 0.5rem;
    }
    ul {
      list-style-type: none;
    }
    font-family: 'Lobster Two';
    font-size: large;
`;
const Title = styled.div`
  width: 100%;
  justify-content: center;
  align-items: center;
  color: #BF0404;
`;
const Container = styled.div`
  justify-content: center;
  align-items: center;
  width: 100%;
  text-align: center;
`;
export default Recipes