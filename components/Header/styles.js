import styled from "styled-components"

export const Navbar = styled.div`

color: #FFFFFF;
height: 50px;
background-color: #EEEEEE;
display: flex;
justify-content: space-around;
width: 100%;

@media (max-width: 480px) {
    display: none;
    margin: 0;
    padding: 0;
    min-width: 100%;
}

`;

export const Button = styled.button`
background-color: red;
width: 30px;
height: 20px;
cursor: pointer;
margin-top: 10px;

`

export const Category = styled.a`
margin-top: 12px;
cursor: pointer;
font-size: 18px;
font-weight: 500;
color: #006269;



`

export const Container = styled.div`
display: flex;
justify-content: center;
`
