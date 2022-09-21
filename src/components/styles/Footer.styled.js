import styled from "styled-components";

export const StyledFooter = styled.footer`
	text-align: center;
	padding: 5rem 1.5625rem;
	font-size: 0.6875rem;
	color: ${({ textColor }) => textColor || "inherit"};

	a {
		color: hsl(228, 45%, 44%);
		text-decoration: none;

		&:hover {
			text-decoration: underline;
		}
	}
`;