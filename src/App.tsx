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
				<Button
					appearance="primary"
					size="base"
					iconBefore="chevronUp"
					iconAfter="user"
					text="Hello DS"
				/>
				<Button
					appearance="secondary"
					size="base"
					iconBefore="chevronUp"
					iconAfter="user"
					text="Hello DS"
				/>
				<ButtonLink
					appearance="primary"
					text="Подробнее"
					iconAfter="chevronRight"
				/>
				<Badge appearance="blue" text="hello" size="small" />
			</main>
		</ThemeProvider>
	);
}

export default App;
