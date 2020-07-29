import React, { useEffect } from 'react';
import './UserCard.css';
import styled from 'styled-components';

const StyledCard = styled.div`
    display: flex;
    width: 20%;
    border: 2px solid black;

    img {
        display: inline-block;
        max-width: 100%;
        max-height: 100%;
    }
`

const UserCard = props => {


    const {data} = props;

    console.log(data);

    return (
   
            <StyledCard>
            <img alt="I don't know what this is of" src={data['urls']['regular']}/>
            </StyledCard>
        
    )
}

export default UserCard;