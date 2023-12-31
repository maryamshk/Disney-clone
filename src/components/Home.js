import React, { useEffect } from 'react';
import styled from "styled-components";
import ImgSlider from './ImgSlider';
import Viewers from './Viewers';
import Movies from './Movies';
import db from '../firebase';
import { onSnapshot, collection, query } from "firebase/firestore";
import { useDispatch } from 'react-redux'; //for calling action

import { setMovies } from '../features/movie/movieSlice';




function Home() {
    const dispatch = useDispatch();


    useEffect(() => {                            //its going to run when home component is running
        const q = query(collection(db, "movies"))
        onSnapshot(q, (querySnapshot) => {
            let tempMovies = querySnapshot.docs.map((doc) => {
                return { id: doc.id, ...doc.data() }   //unpacking object and putting it in another object returning
            })
            dispatch(setMovies(tempMovies))
        });
    })

    return (
        <Container>
            <ImgSlider />
            <Viewers />
            <Movies />
        </Container>
    )
}

export default Home

// main tells browser its the main content
const Container = styled.main`
    min-height: calc(100vh - 70px);
    padding: 0 calc(3.5vw + 5px);
    position: relative;
    overflow-x: hidden;


&:before{
    background: url("/images/home-background.png") center center / cover
    no-repeat fixed;
    content: "";
    position:absolute;
    top:0;
    left:0;
    right:0;
    bottom:0;
    z-index: -1;
}


`