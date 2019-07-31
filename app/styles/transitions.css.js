import styled from 'styled-components'
const StyledModal = styled.div`
position: fixed; /* Stay in place */
z-index: 1; /* Sit on top */
padding-top:10vh; /* Location of box */
left: 0;
top: 0;
overflow: hidden;
width: 100%; /* Full width */
height: 100%; /* Full height *//* Enable scroll if needed */
background-color: rgb(255, 255, 255); /* Fallback color */
background-color: rgba(0, 0, 0, 0.35);/* Black w/ opacity */
opacity: ${props => {
switch (props.fadeType) {
  case "in":
    return "1";
  default:
    return "0";
  };
}};
transition: ${props => {
  switch (props.fadeType) {
    case "in":
      return `opacity ease-in 0.65s;`;
      case "out":
      return `opacity ease-in 0.65s;`;
      default:
      return "";
    }
  }};
`;
export default StyledModal;
