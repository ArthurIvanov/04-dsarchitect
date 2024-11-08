import React from "react";
import { GlobalStyle } from "./lib/theme";
import { Placeholder, Button, lightTheme, darkTheme } from "./lib";
import { Icon } from "./lib/icon";
import { ThemeProvider } from "styled-components";

function App() {
	const switcher = false;
	return (
		<ThemeProvider theme={switcher ? darkTheme : lightTheme}>
			<GlobalStyle />
			<main>
				{/* <Placeholder text="Поехали!" /> */}

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
				{/* <Button appearance="secondary" size="small" /> */}
			</main>
		</ThemeProvider>
	);
}

export default App;
