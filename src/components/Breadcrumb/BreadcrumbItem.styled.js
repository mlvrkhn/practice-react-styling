import styled, { css } from "styled-components";

const StyledBreadcrumbItem = styled.li`
  padding-left: 15px;
  list-style: none;
  flex-wrap: wrap;
  color: rgba(120, 120, 120);
  box-sizing: border-box;
  display: list-item;
  & + li:before {
    content: "/";
    display: inline-block;
    padding-right: 0.5rem;
  }
`;

export default StyledBreadcrumbItem;
