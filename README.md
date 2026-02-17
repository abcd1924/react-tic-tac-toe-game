# ❌⭕️ React Tic Tac Toe Game

**Live Demo:** https://abcd1924.github.io/react-tic-tac-toe-game/

A lightweight Tic Tac Toe game built with React, developed as part of the freeCodeCamp curriculum. This project focuses on simple state management and implementing game logic using React Hooks.

## Features
* Two-player (same device) gameplay.
* Detects winning combinations and highlights the winner.
* Detects draw conditions when the board is full.
* Reset button to start a new game.
* Responsive layout with basic styling.

## Technical Implementation: Why `useState`?
In this freeCodeCamp challenge, the focus is on managing UI state and game logic.

This implementation demonstrates how to:
1.  **Manage component state:** Keep the board, turn counter, and game status in state using `useState`.
2.  **Derive game outcome:** Check winning combinations after each move and update state accordingly to stop further moves.
3.  **Keep logic simple and readable:** Tic Tac Toe is lightweight, so memoization isn't required; clear state updates keep the UI responsive.

## Tech Stack
- Library: React
- State Management: `useState`
- Styling: CSS3 / HTML5

## How to run
1. Clone the repo: git clone https://github.com/abcd1924/react-tic-tac-toe-game
2. Install dependencies: npm install
3. Start the dev server: npm start