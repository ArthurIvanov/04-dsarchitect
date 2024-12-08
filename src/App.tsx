import React from "react";
import { GlobalStyle } from "./lib/theme";
import { Placeholder, Button, lightTheme, darkTheme, InputText } from "./lib";
import { ThemeProvider } from "styled-components";

function App() {
	const switcher = false;
	return (
		<ThemeProvider theme={switcher ? darkTheme : lightTheme}>
			<GlobalStyle />
			<main>
				<InputText label="This is a label" helpMessage="Coool!" />
			</main>
		</ThemeProvider>
	);
}

export default App;
