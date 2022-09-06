// 
import { ThemeProvider } from "styled-components";

import { GlobalStyles } from "./components/styles/Global.styled";
import { Container } from "./components/styles/Container.styled";
import { QRCard } from "./components/styles/QRCard.styled";

const theme = {
  colors: {
    white: "hsl(0, 0%, 100%)",
    "light-gray": "hsl(212, 45%, 89%)",
    "grayish-blue": "hsl(220, 15%, 55%)",
    "dark-blue": "hsl(218, 44%, 22%)"
  },
  breakpoints: {
    mobile: "375px"
  }
};

const App = () => {
  return (
		<ThemeProvider theme={theme}>
			<>
				<GlobalStyles backgroundColor={theme.colors["light-gray"]} />
				<main>
					<Container>
						<QRCard
							backgroundColor={theme.colors.white}
							headingColor={theme.colors["dark-blue"]}
							textColor={theme.colors["grayish-blue"]}
							breakpoints={theme.breakpoints}
						>
							<img src="./images/image-qr-code.png" alt="QR Code" />
							<h1>Improve your front-end skills by building projects</h1>
							<p>
								Scan the QR code to visit Frontend Mentor and take your coding
								skills to the next level
							</p>
						</QRCard>
					</Container>
				</main>
			</>
		</ThemeProvider>
	);
}

export default App;
