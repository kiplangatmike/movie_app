import React from "react";
import styled from "styled-components";

const Cast = styled.div`
display:inline-block;
white-space:normal;
margin:4px;
vertical-align:middle;
align-items:center;
border-radius: 150px;
width: '8rem'
`

const CastDescription = styled.div`
max-width: 100px;
font-size: 12px;
`
const CrewCard = styled.div`
    
  display:inline-block;
  white-space:normal;
  margin: 6px;
  vertical-align:middle;
  align-items: center;
  border-radius: 6px;
  width:13rem;
  height:3rem;
  background-color:#dfe4ea;
  font-size:18px;
  `


 export {CastDescription, Cast,CrewCard}