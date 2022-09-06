import styled from "styled-components";

export const QRCard = styled.div`
	width: 320px;
	max-width: 100%;
	margin: 152px auto 0;
	padding: 16px;
	border-radius: 20px;
	background-color: ${({ backgroundColor }) => backgroundColor || "none"};
	text-align: center;
	box-shadow: 0 20px 25px rgba(0, 0, 0, 0.07);
	@media (max-width: ${({ breakpoints }) => breakpoints.mobile}) {
		margin-top: 85px;
	}
	animation: fade-in-bottom 0.6s cubic-bezier(0.550, 0.055, 0.675, 0.190) both;

	img {
		width: 100%;
		border-radius: 10px;
		margin-bottom: 20px;
	}

	h1 {
		color: ${({ headingColor }) => headingColor || "inherit"};
		font-size: 22px;
		font-weight: 700;
		margin-bottom: 1rem;
	}

	p {
		color: ${({ textColor }) => textColor || "inherit"};
		margin-left: 15px;
		margin-right: 15px;
		margin-bottom: 25px;
		letter-spacing: 0.2px;
	}
`;