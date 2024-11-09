import React from "react";
import { GlobalStyle } from "./lib/theme";
import {
	Placeholder,
	Button,
	lightTheme,
	darkTheme,
	ButtonLink,
	Badge,
	Card,
} from "./lib";
import { ThemeProvider } from "styled-components";

function App() {
	const switcher = false;
	return (
		<ThemeProvider theme={switcher ? darkTheme : lightTheme}>
			<GlobalStyle />
			<main>
				<Card text="Подразделение ветроэнергетического дивизиона «Росатома» и «Кьези» подписали соглашение на приобретение «зеленых» сертификатов I-REC" />
				<Card
					text="Подразделение ветроэнергетического дивизиона «Росатома» и «Кьези» подписали соглашение на приобретение «зеленых» сертификатов I-REC"
					textSize="large"
					badgeText="Важное"
				/>
			</main>
		</ThemeProvider>
	);
}

export default App;
