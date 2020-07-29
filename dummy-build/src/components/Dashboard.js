import React,{ useEffect, useState } from 'react';
import UserCard from './UserCard';
import styled from 'styled-components';
import fetchPosts from '../action/fetchPosts';
import axios from 'axios';

const StyledContainer = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    width: 100%;
    height: 95vh;
    margin: 2.5% auto;
`

const Dashboard = () => {

    const apiURL = 'https://api.unsplash.com/photos/?client_id=3_I2d2NY-aaFmsSjS09MGbYoLshl7BG7cpOQqtHLoD0';

    const [posts, setPosts] = useState();

    useEffect(() => {
        axios.get(apiURL)
        .then(res => {
            console.log(res.data);
            setPosts(res.data);
        })
        .catch(err => {
            console.log(err.data)
        })
    },[])

    console.log(posts)

    if(!posts){ return <div>ABC</div>}

    return (
        <StyledContainer >
           {
               posts.map(post => (
                    <UserCard data={post} />
               ))
    
           }
        </StyledContainer>
    )
}

export default Dashboard;