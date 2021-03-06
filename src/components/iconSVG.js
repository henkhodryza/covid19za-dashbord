import React from 'react';
import styled from 'styled-components';

const IconSVG = ({ bgColor, fillColor, casesDiff }) => {
  return (
    <Icon bgColor={bgColor} fillColor={fillColor} viewBox="0 0 448 512">
      {casesDiff < 0 ? downPath : upPath}
    </Icon>
  );
};

export default IconSVG;

const Icon = styled.svg`
  width: 4rem;
  height: 4rem;
  fill: ${(props) => props.fillColor};
  background-color: ${(props) => props.bgColor};
  padding: 1em;
  border-radius: 10px;
`;

const upPath = (
  <path d="M34.9 289.5l-22.2-22.2c-9.4-9.4-9.4-24.6 0-33.9L207 39c9.4-9.4 24.6-9.4 33.9 0l194.3 194.3c9.4 9.4 9.4 24.6 0 33.9L413 289.4c-9.5 9.5-25 9.3-34.3-.4L264 168.6V456c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24V168.6L69.2 289.1c-9.3 9.8-24.8 10-34.3.4z" />
);

const downPath = (
  <path d="M413.1 222.5l22.2 22.2c9.4 9.4 9.4 24.6 0 33.9L241 473c-9.4 9.4-24.6 9.4-33.9 0L12.7 278.6c-9.4-9.4-9.4-24.6 0-33.9l22.2-22.2c9.5-9.5 25-9.3 34.3.4L184 343.4V56c0-13.3 10.7-24 24-24h32c13.3 0 24 10.7 24 24v287.4l114.8-120.5c9.3-9.8 24.8-10 34.3-.4z" />
);
