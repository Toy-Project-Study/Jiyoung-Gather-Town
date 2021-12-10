import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Styled from 'styled-components';

import {
  buildIcon,
  calendarIcon,
  chatIcon,
  homeIcon,
  map,
  participantsIcon,
  settingIcon,
} from '../assets/index';

const MAX_CANVAS_WIDTH = 548;
const MAX_CANVAS_HEIGHT = 384;

function Home() {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!canvasRef) return;
    const ctx = canvasRef.current.getContext('2d');
    const image = new Image();

    image.src = map;

    image.onload = () => {
      const width =
        image.width > image.height
          ? MAX_CANVAS_WIDTH
          : (image.width * MAX_CANVAS_HEIGHT) / image.height;

      const height =
        image.width > image.height
          ? (image.height * MAX_CANVAS_WIDTH) / image.width
          : MAX_CANVAS_HEIGHT;

      ctx.drawImage(image, 0, 0, width, height);
    };
  }, [canvasRef]);

  return (
    <SRoot>
      <SMenu>
        <div>
          <Link to="/">
            <img src={homeIcon} alt="homeIcon" />
          </Link>
        </div>
        <img src={settingIcon} alt="settingIcon" />
        <img src={buildIcon} alt="buildIcon" />
        <img src={calendarIcon} alt="calendarIcon" />
        <img src={chatIcon} alt="chatIcon" />
        <img src={participantsIcon} alt="participantsIcon" />
      </SMenu>
      <SMap>
        <canvas ref={canvasRef} width={MAX_CANVAS_WIDTH} height={MAX_CANVAS_HEIGHT}></canvas>
      </SMap>
    </SRoot>
  );
}

export default Home;

const SRoot = Styled.div`
  display: flex;
  height: 100%;
`;

const SMenu = Styled.div`
  background-color: ${({ theme: { colors } }) => colors.navy1};
  width: 75px;
  display: flex;
  flex-direction: column;
  align-items: center;
  & > div {
    flex:1
  }
  & > img {
    width: 45px;
    height: 47px;
    margin: 20px;
  }
`;

const SMap = Styled.div`
  width: 100%;
  & > canvas {
    width: 100%;
  }
`;
