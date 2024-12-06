import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.div`
    margin: 1rem;
    display: flex;
    justify-content: space-between;
    bottom-border: 1px solid black;
`;

const RoutingButtons = styled.div`
    display: flex;
    gap: 2rem;
    justify-content: center;
    align-items: center;
`;

const StyleLogoutButton = styled.button`
    background-color: #da4d3f;
    border: none;
    border-radius: 20px;
    color: #f9fdff;
    width: 7rem;
    height: 2.25rem;
    cursor: pointer;
    &:hover {
        background-color: #f9fdff;
        border-radius: 20px;
        color: #da4d3f;
        border: 3px solid #da4d3f;
    }
`;

const StyledButton = styled.button`
    border: none;
    background-color: transparent;
    cursor: pointer;
`;

const StyledLogo = styled.img`
    width: 20rem;
    height: 2.5rem;
`;

export const Header = () => {
    return (
        <HeaderContainer>
            <StyledLogo src={require("../images/Logo.png")} alt="Logo" />

            <RoutingButtons>
                <StyledButton>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="2rem"
                        height="2rem"
                        fill="#da4d3f"
                        className="bi bi-person-circle"
                        viewBox="0 0 16 16"
                    >
                        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                        <path
                            fill-rule="evenodd"
                            d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"
                        />
                    </svg>
                </StyledButton>
                <StyleLogoutButton>Logout</StyleLogoutButton>
            </RoutingButtons>
        </HeaderContainer>
    );
};
