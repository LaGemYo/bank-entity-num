import React from 'react';
import styled from 'styled-components';

const imgUrl = "https://media.istockphoto.com/photos/pink-piggy-bank-standing-on-a-wooden-table-picture-id1126365803?k=6&m=1126365803&s=612x612&w=0&h=ehgTqUrNMTZjqCXjnZxR7j-H-vjn3ybQ_3YaR_0z9E0="

export default function Hero() {
    return <HeroWrapper>
        <div className="banner">
            <h1 className="title">¿Qué banco es?</h1>
            <img src={imgUrl}/>
        </div>
    </HeroWrapper>
}

const HeroWrapper = styled.div`
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: ${props => (props.max ? "100vh" : "60vh")};
    color: var(--mainWhite);
    center/cover no-repeat;
    .title {
        padding-top: 2rem;
        font-size: 3.5rem;
        text-shadow: 4px 4px 2px rgba(0, 0, 0, 3);
        text-transform: uppercase;
        letter-spacing: var(--mainSpacing);
    }
`;
