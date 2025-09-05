# Lol Challenge

A League of Legends champion guessing minigame inspired by Loldle, built as a React application.

## Features

- **Two Game Modes**:

  - **Classic Mode**: Guess the champion based on hints like position, resource, attack type, release date, and gender.
  - **Ability Mode**: Guess the champion based on one of their abilities displayed.

- **Champion Database**: Includes all League of Legends champions with detailed information such as abilities, positions, and more.
- **Hints System**: Provides feedback on your guesses to narrow down the possibilities.
- **Victory Animations**: Celebrates your wins with smooth animations.

## Tech Stack

- **Frontend**: React 19, TypeScript
- **Build Tool**: Vite
- **Styling**: Styled Components
- **Data Management**: TanStack React Query
- **API Simulation**: JSON Server for local champion data
- **Linting**: Biome

## Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/rostfred/lol-challenge.git
   cd lol-challenge
   ```

2. **Install dependencies**:

   ```bash
   npm install
   # or
   bun install
   ```

3. **Start the JSON Server** (for champion data):

   ```bash
   npm run server
   ```

4. **Start the development server**:

   ```bash
   npm run dev
   ```

5. Open your browser and navigate to `http://localhost:5173`.

## Usage

- Choose a game mode from the home page.
- Use the search input to guess champions.
- Receive hints after each guess to guide you towards the correct answer.
- Try to guess the champion in as few attempts as possible!

## Project Structure

```
src/
├── @entites/          # Type definitions
├── api/               # API calls
├── components/        # Reusable UI components
├── hooks/             # Custom React hooks
├── pages/             # Page components (Home, Ability modes)
└── types/             # TypeScript type definitions

public/
├── data/db.json       # Champion database
└── images/            # Static assets

cdragon-api/           # Scripts for data processing
```

## Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build for production
- `npm run preview` - Preview the production build
- `npm run server` - Start the JSON server for data
- `npm run lint` - Run the linter
- `npm run lint:fix` - Fix linting issues

## Data Source

Champion data is sourced from the official League of Legends Community Dragon API. The project includes scripts to process and enhance the data, including adding gender information based on official lore.

## License

This project is for educational purposes. League of Legends and its champions are property of Riot Games.
