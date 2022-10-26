import React from 'react'
import styled from "styled-components"
import { Link } from "react-router-dom"
import Search from "../Components/Search"
import SearchIcon from '@mui/icons-material/Search';
import DescriptionIcon from '@mui/icons-material/Description';
import ImageIcon from '@mui/icons-material/Image';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import RoomIcon from '@mui/icons-material/Room';
import MoreVertIcon from '@mui/icons-material/MoreVert';

function SearchPage() {
    return (
        <Container>
            <SearchPageHeader>
                <Link to="/">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" alt="google" />
                </Link>
                <SearchPageHBody>
                    <Search hide />
                    <SearchPageOption>
                        <SearchOptionNames>
                            <SearchOption>
                                <SearchIcon />
                                <Link to="/">All</Link>
                            </SearchOption>
                            <SearchOption>
                                <DescriptionIcon />
                                <Link to="/">News</Link>
                            </SearchOption>
                            <SearchOption>
                                <ImageIcon />
                                <Link to="/">Images</Link>
                            </SearchOption>
                            <SearchOption>
                                <LocalOfferIcon />
                                <Link to="/">Shopping</Link>
                            </SearchOption>
                            <SearchOption>
                                <RoomIcon />
                                <Link to="/">Maps</Link>
                            </SearchOption>
                            <SearchOption>
                                <MoreVertIcon />
                                <Link to="/">More</Link>
                            </SearchOption>
                        </SearchOptionNames>

                        <SearchOptionNames right>
                            <SearchOption>
                                <Link to="/">Settings</Link>
                            </SearchOption>
                            <SearchOption>
                                <Link to="/">Tools</Link>
                            </SearchOption>
                        </SearchOptionNames>

                    </SearchPageOption>
                </SearchPageHBody>
            </SearchPageHeader>

            <SearchPageResults>
                <p className="resultCount">
                    About 21,00,00,000 results( 1.32 seconds) for TWD
                </p>
                <div className="result">
                    <SearchPageLink href="">
                        <img src="" alt="New" />
                    </SearchPageLink>
                    <SearchPageResultTitle href="">
                        <h2>The Web Dev</h2>
                    </SearchPageResultTitle>
                    <SearchPageDescription>
                        Lorem ipsum dolor sit amet, consectetur adip non proident dolor sit amet, consectetur adip non proident.
                    </SearchPageDescription>
                </div>
            </SearchPageResults>
        </Container>
    )
}

export default SearchPage

const Container = styled.div``
const SearchPageHeader = styled.div`
    display: flex;
    position: sticky;
    top: 0;
    z-index: 100;
    background-color: white;
    align-items: flex-start;
    padding: 30px;
    border-bottom: 1px solid lightgray;
        img {
            height: 50px;
            margin-right: 50px;
        }
`
const SearchPageHBody = styled.div``
const SearchPageOption = styled.div`
    display: flex;
    align-items: center;
    color: gray;
    margin-top: 30px;
        a {
            text-decoration: none;
            color: gray;
            margin-left: 5px;
        }
`
const SearchOptionNames = styled.div`
    margin-left: ${props => props.right ? "80px" : "0px"};
    display: flex;
    align-items: center;
`
const SearchOption = styled.div`
    display: flex;
    align-items: center;
    margin-right: 20px;
`

const SearchPageResults = styled.div`
        max-width: 650px;
        margin-top: 20px;
        margin-left: 240px;
        margin-bottom: 100px;
            .resultCount {
                color: #70757a;
                font-size: 14px;
            }
            .result {
                margin: 40px 0px;
            }
`
const SearchPageLink = styled.a`
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #000;
    margin-bottom: 3px;
            img {
                height: 50px;
                width: 50px;
                object-fit: contain;
                margin-right: 10px;
            }
`
const SearchPageResultTitle = styled.a`
    text-decoration: none;
        h2 {
            font-weight: 500px;
        }
        &:hover{
            text-decoration: underline;
        }
`
const SearchPageDescription = styled.p`
    margin-top: 10px;
`