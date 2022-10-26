import React, { useState } from 'react'
import styled from "styled-components"
import SearchIcon from '@mui/icons-material/Search';
import MicIcon from '@mui/icons-material/Mic';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

function Search({ hide }) {
    const [input, setInput] = useState('');
    const navigate = useNavigate();

    const search = e => {
        e.preventDefault();
        console.log(input);
        navigate.push("/search");
    }

  return (
    <form onSubmit={search}>
        <SearchInput>
            <SearchIcon className="searchicon"/>
            <input type="text" value={input} onChange={e => setInput(e.target.value)}/>
            <MicIcon />
        </SearchInput>
        {!hide && (
        <SearchButton>
            <Button type="submit" variant="outlined">Google Search</Button>
            <Button variant="outlined">I am feeling lucky</Button>
        </SearchButton>
        )}
    </form>
  )
}

export default Search

const SearchInput = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid lightgray;
    height: 30px;
    padding: 10px 15px;
    width: 500px;
    margin: 0px auto;
    border-radius: 999px;
        input {
            flex: 1;
            padding: 8px 13px;
            font-size: medium;
            border: 0;
            outline: 0;
        }
        .searchicon {
            color: gray;
        }
`
const SearchButton = styled.div`
    margin-top: 20px;
    display: flex;
    justify-content: center;
        button {
            margin: 5px;
            background: #f8f8f8;
            border: 1px solid white;
            text-transform: inherit;
            &:hover {
                margin: 5px;
                background: #f8f8f8;
                color: #000;
                border: 1px solid #c6c6c6;
            }
        }
`