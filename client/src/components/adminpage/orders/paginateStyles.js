import styled from "styled-components";

const paginateStyle = styled.nav`
  margin-right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  .numPage {
    cursor: pointer;
    padding: 0px 10px 0px 10px;
    &:hover {
      color: #acacac;
      transition: 500ms;
    }
  }
`;

export default paginateStyle;
