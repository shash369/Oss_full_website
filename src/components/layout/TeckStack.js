import React from "react";
import styled, { keyframes, css } from "styled-components";

export default function TeckStack() {
  const row1 = [
    "https://cdn-icons-png.flaticon.com/512/5968/5968705.png",
    "https://cdn-icons-png.flaticon.com/512/3098/3098090.png",
    "https://cdn-icons-png.flaticon.com/512/5968/5968292.png",
    "https://cdn-icons-png.flaticon.com/512/732/732190.png",
    "https://cdn-icons-png.flaticon.com/512/174/174854.png",
    "https://cdn-icons-png.flaticon.com/512/919/919851.png",
    "https://img.icons8.com/?size=512&id=7I3BjCqe9rjG&format=png",
    "https://cdn-icons-png.flaticon.com/512/5968/5968322.png",
    "https://img.icons8.com/?size=512&id=ZoxjA0jZDdFZ&format=png"
  ];

  const row2 = [
   "https://cdn-icons-png.flaticon.com/512/5968/5968705.png",
    "https://cdn-icons-png.flaticon.com/512/3098/3098090.png",
    "https://cdn-icons-png.flaticon.com/512/5968/5968292.png",
    "https://cdn-icons-png.flaticon.com/512/732/732190.png",
    "https://cdn-icons-png.flaticon.com/512/174/174854.png",
    "https://cdn-icons-png.flaticon.com/512/919/919851.png",
    "https://img.icons8.com/?size=512&id=7I3BjCqe9rjG&format=png",
    "https://cdn-icons-png.flaticon.com/512/5968/5968322.png",
    "https://img.icons8.com/?size=512&id=ZoxjA0jZDdFZ&format=png"
  ];

  return (
    <AppContainer>
      <Wrapper>
        <Text>Our Teck Stack</Text>
        <Note>The latest technology used by us are</Note>
        <Marquee>
          <MarqueeGroup>
            {row1.map((el, index) => (
              <ImageGroup key={`row1-${index}`}>
                <Image src={el} />
              </ImageGroup>
            ))}
          </MarqueeGroup>
          <MarqueeGroup>
            {row1.map((el, index) => (
              <ImageGroup key={`row1-${index}-duplicate`}>
                <Image src={el} />
              </ImageGroup>
            ))}
          </MarqueeGroup>
        </Marquee>
        <Marquee>
          <MarqueeGroup2>
            {row2.map((el, index) => (
              <ImageGroup key={`row2-${index}`}>
                <Image src={el} />
              </ImageGroup>
            ))}
          </MarqueeGroup2>
          <MarqueeGroup2>
            {row2.map((el, index) => (
              <ImageGroup key={`row2-${index}-duplicate`}>
                <Image src={el} />
              </ImageGroup>
            ))}
          </MarqueeGroup2>
        </Marquee>
      </Wrapper>
    </AppContainer>
  );
}

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  color: #000000;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

const Wrapper = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 1rem; 
`;

const Text = styled.div`
  font-size: 2rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
  color:#00FF00;
`;

const Note = styled.div`
  font-size: 1rem;
  font-weight: 200;
  margin-bottom: 2.5rem;
  color: #7c8e9a;
`;

const Marquee = styled.div`
  display: flex;
  width: 100%;
  overflow: hidden;
  user-select: none;

  mask-image: linear-gradient(
    to right,
    hsl(0 0% 0% / 0),
    hsl(0 0% 0% / 1) 10%,
    hsl(0 0% 0% / 1) 90%,
    hsl(0 0% 0% / 0)
  );

  
`;

const scrollX = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
`;

const common = css`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  white-space: nowrap;
  width: max-content; /* Adjusts width to content, preventing overflow */
  animation: ${scrollX} 30s linear infinite;
`;

const MarqueeGroup = styled.div`
  ${common}
`;

const MarqueeGroup2 = styled.div`
  ${common}
  animation-direction: reverse;
  animation-delay: -3s;
`;

const ImageGroup = styled.div`
  display: grid;
  place-items: center;
  width: 9rem;
  padding: 2rem; 
  margin-right: 0.5rem;
  height:9rem;
`;

const Image = styled.img`
  object-fit: contain;
  width: 100%;
  height: auto; /* Maintain aspect ratio */
  border-radius: 0.5rem;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;
