import styled from "styled-components";
import { Link } from "react-router-dom";

export const BtnTo = styled(Link)`
  white-space: nowrap;
  padding: 10px 22px;
  margin-bottom: 2px;
  color: #010606;
  background: #01bf71;
  font-size: 16px;
  outline: none;
  border-radius: 5px;
  cursor: pointer;

  text-decoration: none;
  font-family: "Roboto", sans-serif;
`;
export const HeroBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: -1;
`;

export const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: #232a34;
`;
