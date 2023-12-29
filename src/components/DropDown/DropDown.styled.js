import styled from "styled-components";

const DropDownList = styled.ul`
  opacity: 0;
  position: absolute;
  top: 45px;
  border-radius: 10px;
  left: 0;
  width: 100%;
  list-style-type: none;
  padding: 0.5rem 1rem;
  box-shadow: inset 6px 6px 12px #2c3035, inset -6px -6px 12px #363c41;
  transition: all 0.3s ease;
`
const DropDownListItem = styled.li`
  margin: 1rem 0;
  z-index: 10;
  cursor: pointer;
`
const DropdownContainer = styled.div`
  position: relative;
  padding: 1.2rem 1rem;
  width: 100px;
  height: 40px;
  border-radius: 10px;
  border: none;
  background: #31363b;
  box-shadow: inset 6px 6px 12px #2c3035, inset -6px -6px 12px #363c41;
  display: flex;
  justify-content: space-between;
  align-items: center;
  &:hover ${DropDownList} {
      opacity: 1;
    }
`;

const DropDownBtn = styled.button`
background: none;
border: none;
color: #f96d00;
    &::after {
        content: ">";
        display: block;
        transform: rotate(90deg);
        color: linear-gradient(107deg, rgb(255, 67, 5) 11.1%, rgb(245, 135, 0) 95.3%);
        cursor: pointer;
        font-size: 1.6rem;
        opacity: 0.8;
    }
`;




export {DropdownContainer, DropDownBtn, DropDownList, DropDownListItem}