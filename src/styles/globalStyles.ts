import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`

:root {
  --color-primary: #6741d9;
  --color-primary-light: #7950f2;
  --color-text: #dee2e6;
  --color-text-dark: #adb5bd;
  --color-background-100: #343a40;
  --color-background-500: #2b3035;
  --color-background-900: #212529;
  --color-red: #fa5252;
  --color-red-dark: #e03131;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-size: 62.5%;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;

  color: var(--color-text);
  background-color: var(--color-background-900);
  padding: 2.4rem;
}

/* ******* */

.summary {
  padding: 2.2rem 3.2rem 1.8rem 3.2rem;
  border-radius: 0.9rem;
  background-color: var(--color-background-100);
  box-shadow: 0 1.2rem 2.4rem rgba(0, 0, 0, 0.2);
}

.summary h2 {
  text-transform: uppercase;
  font-size: 1.6rem;
  margin-bottom: 0.6rem;
}

.summary div {
  display: flex;
  align-items: center;
  gap: 2.4rem;
  font-size: 1.6rem;
  font-weight: 600;
}

.summary p {
  display: flex;
  align-items: center;
  gap: 0.8rem;
}


.seconds {
  background-color: var(--color-background-100);
  width: 8rem;
  border-radius: 10rem;
  font-weight: 600;
  text-align: center;
  padding: 0.4rem;
  margin-top: 2.4rem;
}



`
