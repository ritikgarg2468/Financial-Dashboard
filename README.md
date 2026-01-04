# Finova Capital Financial Dashboard

A modern financial dashboard built with React, Vite, Tailwind CSS, and Express.js.

## Features

- **Real-time KPIs**: Total Balance, Monthly Income, Expenses, and Savings
- **Interactive Charts**: Revenue vs Expenses bar chart
- **Transaction History**: Recent transactions with categorization
- **Responsive Design**: Works on desktop and mobile devices
- **Modern UI**: Clean design with Tailwind CSS

## Tech Stack

### Frontend
- React 19
- Vite
- Tailwind CSS v4
- Recharts for data visualization

### Backend
- Node.js
- Express.js
- CORS enabled

## Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies for both client and server:

```bash
# Install server dependencies
cd server
npm install

# Install client dependencies
cd ../client
npm install
```

3. Start the server:
```bash
cd server
node server.js
```

4. Start the client (in a new terminal):
```bash
cd client
npm run dev
```

5. Open [http://localhost:5174](http://localhost:5174) in your browser

## API Endpoints

- `GET /api/kpis` - Key Performance Indicators
- `GET /api/revenue` - Monthly revenue and expenses data
- `GET /api/transactions` - Recent transactions

## Environment Variables

Create a `.env` file in the client directory:

```
VITE_API_URL=http://localhost:5000
```

## Project Structure

```
finova-capital/
├── client/          # React frontend
│   ├── src/
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── package.json
│   └── vite.config.js
├── server/          # Express backend
│   ├── server.js
│   └── package.json
└── README.md
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## License

This project is licensed under the MIT License.