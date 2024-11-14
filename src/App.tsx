import React from "react";
import { GlobalStyle } from "./lib/theme";
import {
	Placeholder,
	Button,
	lightTheme,
	darkTheme,
	ButtonLink,
	Badge,
} from "./lib";
import { ThemeProvider } from "styled-components";

function App() {
	const switcher = false;
	return (
		<ThemeProvider theme={switcher ? darkTheme : lightTheme}>
			<GlobalStyle />
			<main>
				<Badge size="base" text="Hello world" />
				<Badge
					outlined
					appearance="green"
					size="small"
					text="Hello world"
				/>
			</main>
		</ThemeProvider>
	);
}

export default App;
