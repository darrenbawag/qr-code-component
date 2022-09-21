import styled from "styled-components";

export const QRCard = styled.div`
	width: 20rem;
	max-width: 100%;
	margin: 9.5rem auto 0;
	padding: 1rem;
	border-radius: 1.25rem;
	background-color: ${({ backgroundColor }) => backgroundColor || "none"};
	text-align: center;
	box-shadow: 0 1.25rem 1.5625rem rgba(0, 0, 0, 0.07);
	@media (max-width: ${({ breakpoints }) => breakpoints.mobile}) {
		margin-top: 85px;
	}
	animation: fade-in-bottom 0.6s cubic-bezier(0.550, 0.055, 0.675, 0.190) both;

	img {
		width: 100%;
		border-radius: 0.625rem;
		margin-bottom: 1.25rem;
	}

	h1 {
		color: ${({ headingColor }) => headingColor || "inherit"};
		font-size: 1.375rem;
		font-weight: 700;
		margin-bottom: 1rem;
	}

	p {
		color: ${({ textColor }) => textColor || "inherit"};
		margin-left: 0.9375rem;
		margin-right: 0.9375rem;
		margin-bottom: 1.5625rem;
		letter-spacing: 0.0125rem;
	}
`;