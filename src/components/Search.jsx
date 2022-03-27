import React from 'react';
import {useState} from 'react';
import {FaSearch} from 'react-icons/fa';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom'
function Search() {
    const [input, setInput] = useState("");
    const navigate = useNavigate();
    const submitHandler = (e) => {
        console.log('enter')
        e.preventDefault();
        navigate('/searched/'+ input );
    };
  return (
    <FormStyle onSubmit={submitHandler}>
    <div>
    <FaSearch/>
    <input 
    onChange={(e) => setInput(e.target.value)}
    type="text"
    value={input}
    />
    </div>
    </FormStyle>
  )
}
const FormStyle = styled.form`
    min-width: 15rem;
    div{
        position:relative;
    width:100%;
    }
    input{
        border:none;
        background-color:#D96704;
        font-size:1.5rem;
        color:white;
        padding:1rem 3rem;
        border-radius:1rem;
        outline:none;
        width:100%;
    }
    svg{
        position:absolute;
        top:50%;
        left:0%;
        transform: translate(100%, -50%);
        color:white;
    }
    justify-content: center;
    margin-bottom: 2rem;
`;
export default Search