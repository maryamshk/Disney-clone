import React from 'react'
import styled from "styled-components"


function Detail() {
    return (
        <Container>
            <Background>
                <img src="images/disneypixarbao.jpg" />
            </Background>

            <ImageTitle>
                <img src="images/disney-logo.png" />
            </ImageTitle>

            <Controls>
                <PlayButton>
                    <img src='/images/play-icon-black.png' alt='' />
                    <span>PLAY</span>
                </PlayButton>
                <TrailerButton>
                    <img src='/images/play-icon-white.png' alt='' />
                    <span>TRAILER</span>
                </TrailerButton>
                <AddButton>
                    <span>+</span>
                </AddButton>
                <GroupWatchButton>
                    <img src='/images/group-icon.png' alt='' />
                </GroupWatchButton>
            </Controls>

            <SubTitle>
                2018 - 7m - Family, Fantasy, Kids, Animation
            </SubTitle>

            <Description>
                The short film begins when Mrs. Li is preparing a traditional Chinese dumpling for dinner. To her surprise, the dumpling comes to life, becoming a cute, little dumpling baby. Mrs. Li raises the dumpling child as her own, caring for it as a real baby through various stages of life, from infancy to adolescence.
            </Description>
        </Container>
    )
}

export default Detail



const Container = styled.div`
    min-height: calc(100vh - 70px);
    padding: 0 calc(3.5vw + 5px);
    position: relative;
`

const Background = styled.div`
    position: fixed;   //with fixed we always use relative position
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
    opacity: 0.7;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`

const ImageTitle = styled.div`
    height: 20vh;
    min-height: 170px;
    width: 20vw;
    min-width: 200px;
    margin-top: 50px;
    margin-bottom: 10px;
    left: 0;

    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
`


const Controls = styled.div`
    display: flex;
    align-items: center;
`

const PlayButton = styled.button`
    height: 56px;
    border: 3px solid rgba(249, 249, 249);
    padding: 0px 24px;
    margin-right: 22px;
    border-radius: 5px;
    font-size: 15px;
    letter-spacing: 1.8px;
    display: flex;
    align-items: center;
    cursor: pointer;

    &:hover {
        background: rgb(198, 198, 198, 0.7);
    }
`

const TrailerButton = styled(PlayButton)`

    color: white;
    background: rgba(0, 0, 0, 0.3);
    border: 1px solid rgba(249, 249, 249);

    &:hover {
        background: rgb(198, 198, 198, 0.5);
    }
`

const AddButton = styled.button`
    height: 44px;
    width: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 16px;
    border-radius: 50%;
    background: rgba(0, 0, 0, 0.7);
    border: 1px solid rgba(249, 249, 249);
    cursor: pointer;

    span {
        font-size: 30px;
        color: white;
    }

    &:hover {
        background: rgb(198, 198, 198, 0.2);
    }
`

const GroupWatchButton = styled(AddButton)`
    background: rgba(0, 0, 0, 0.9);
`

const SubTitle = styled.div`
    font-size: 15px;
    color: rgba(249, 249, 249);
    min-height: 20px;
    margin-top: 26px;
`

const Description = styled.div`
    font-size: 20px;
    margin-top: 16px;
    max-width: 700px;
    color: rgba(249, 249, 249);
`

