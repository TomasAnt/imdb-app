<h2 align="center">Simple application with focus on structure and future scalability.</h2>

# Popcorn 🍿

Popcorn is a movie database application that allows users to discover movies, see ratings, manage a watchlist, and much more.

### Technologies & Frameworks
[![React](https://img.shields.io/badge/react-black?style=for-the-badge&logo=react)](https://github.com/orpeq)
[![NextJS](https://img.shields.io/badge/next-black?style=for-the-badge&logo=next)](https://github.com/orpeq)

## Formatting and Syntax ##
[![TypeScript](https://img.shields.io/badge/typescript-black?style=for-the-badge&logo=typescript)](https://github.com/orpeq)
[![ESLint](https://img.shields.io/badge/eslint-black?style=for-the-badge&logo=eslint)](https://github.com/orpeq)
[![Prettier](https://img.shields.io/badge/prettier-black?style=for-the-badge&logo=prettier)](https://github.com/orpeq)

## Table of Contents

1. [Features](#features)
2. [Installation](#installation)
3. [Usage](#usage)
4. [Contributing](#contributing)
5. [License](#license)

## Features

- 🎬 **Discover Movies**: Easily find movies you'll love.
- 🌟 **Ratings**: See IMDb ratings to help you decide what to watch.
- 📋 **Watchlist**: Keep track of movies you've watched.
- 🎯 **Search**: Use the search bar to find specific movies.
- 📊 **Statistics**: Get summary information about your watched movies.
- ⏳ **Debounce Search**: Minimizes API calls while searching.
- 💡 **Local Storage**: Stores your watched movies list.

## Installation

Clone this repository and install the dependencies.

\`\`\`bash
git clone https://github.com/yourusername/popcorn.git
cd popcorn
npm install
\`\`\`

## Usage

Start the development server:

\`\`\`bash
npm run dev
\`\`\`

Navigate to \`http://localhost:3000/\` to see the app running.

## API

The main \`MoviesDatabase\` component uses the following hooks and components:

### Hooks

- \`useDebounce\`: Debounces the search query to minimize API calls.
- \`useGetMovies\`: Fetches movies based on the debounced search query.

### Components

- \`Navbar\`: Contains the Search and NumResults components.
- \`Search\`: Allows you to input a movie search query.
- \`NumResults\`: Displays the number of results based on the search query.
- \`Movies\`: Displays the list of fetched movies.
- \`MovieDetails\`: Displays details of a selected movie.
- \`Loader\`: Displays a loader while fetching data.
- \`ErrorMessage\`: Displays an error message if data fetching fails.
- \`WatchedSummary\`: Displays summary info about watched movies.
- \`WatchedMovies\`: Displays the list of watched movies.

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on how to contribute to this project.

## License

This project is licensed under the MIT License. See [LICENSE.md](LICENSE.md) for more details.



