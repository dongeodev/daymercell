import { css, keyframes } from "styled-components"
import DevRepaired from "../../images/device2.svg"

export const colors = {
  primary: "#40E0D0",
  secundary: "#2BBDE1",
  third: "#72B5B7",
  acent: "#633A82",
  light: "#F1FCFC",
  gray: "#E6ECEC",
}

const DotAnimation = keyframes`
  0%{
      opacity: 0;
  }
  20%{
      opacity: 0.8;
  }
  50%{
      opacity: 0.5;
  }
  70%{
      opacity: 0.3;
  }
  100%{
      opacity: 0;
  }
}
`

const GoDonwKeyframes = keyframes`
from{
  transform: translateY(10px);
}
50%{
  transform: translateY(4px);
}
to{
  transform: translateY(10px)
}
`
export const GoRightKeyframes = keyframes`
from{
  transform: translateX(-45px);
}
to{
  transform: translateX(0px)
}
`
export const GoLeftKeyframes = keyframes`
from{
  transform: translateX(45px);
  
}
to{
  transform: translateX(0px)
}
`
const GoRoteKeyframes = keyframes`
from{
  transform: rotateY(0);
  
}
to{
  transform: rotateY(360deg);
  background-image:url(${DevRepaired});
}
`

const fadeInKeyframes = keyframes`
  from {
    filter: blur(5px);
    opacity: 0;
  }

  to {
    filter: blur(0);
    opacity: 1;
  }
`

export const GoDown = ({
  time = "1s",
  type = "ease",
  iteration = "infinite",
} = {}) =>
  css`
    animation: ${time} ${GoDonwKeyframes} ${type} ${iteration};
  `

export const GoRight = ({ time = "0.5s", type = "ease" } = {}) =>
  css`
    animation: ${time} ${GoRightKeyframes} ${type};
  `

export const GoLeft = ({ time = "0.5s", type = "ease" } = {}) =>
  css`
    animation: ${time} ${GoLeftKeyframes} ${type};
  `

export const GoRote = ({
  time = "1s",
  type = "ease",
  delay = "1s",
  fill = "forwards",
} = {}) =>
  css`
    animation: ${time} ${GoRoteKeyframes} ${type} ${delay} ${fill};
  `

export const fadeIn = ({ time = "1s", type = "ease" } = {}) =>
  css`
    animation: ${time} ${fadeInKeyframes} ${type};
  `
export const dotLoading = ({
  time = "1.5s",
  type = "ease",
  delay = "0s",
  iteration = "infinite",
} = {}) =>
  css`
    animation: ${time} ${DotAnimation} ${type} ${delay} ${iteration};
  `
