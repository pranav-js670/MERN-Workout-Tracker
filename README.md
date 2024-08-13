# MERN-Workout-Tracker

MERN Workout Tracker is a comprehensive full-stack application designed to help users manage their workout routines effectively. Built with the MERN stack (MongoDB, Express, React, Node.js), this app provides an intuitive interface for adding, viewing, and deleting workout entries, making it an ideal tool for fitness enthusiasts.

## Features

- **Add New Workouts:** Input your exercise details including title, load in kilograms, and the number of repetitions.
- **View Workout History:** Easily browse through all your saved workouts, displayed in a user-friendly layout.
- **Delete Workouts:** Remove any workout entry with a single click, ensuring your records stay organized and up-to-date.

## Tech Stack

- **Frontend:** React.js with Tailwind CSS for styling
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (Mongoose for object data modeling)
- **API Testing:** Postman for testing API routes

## Getting Started

### Prerequisites

Ensure you have the following software installed:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) 
- [MongoDB](https://www.mongodb.com/)

### Installation

1. **Clone this repository:**

   ```bash
   https://github.com/pranav-js670/MERN-Workout-Tracker.git
   ```

2. **Install dependencies for both the frontend and backend:**

Install backend dependencies
```bash
cd backend
npm install
```

Install frontend dependencies
```bash
cd ../frontend
npm install
```

3. **Set up environment variables:**

In the backend directory, create a .env file and add your MongoDB connection string and the port number:

**MONGO_URI**=your_mongodb_connection_string
**PORT**=5000

4. **Run the application:**

## Usage

1. **Adding a Workout:** Use the form on the right-hand side of the page to add a new workout. Enter the exercise title, load (in kg), and the number of repetitions, then click "Add Workout".
2. **Viewing Workouts:** All your workouts are displayed on the main page. Each workout shows the exercise title, load, number of repetitions, and the date it was added.
3. **Deleting a Workout:** Click the trash can icon next to any workout to delete it.

## Testing

**API Testing:** Postman was used to test the API endpoints during development.

## Future Enhancements

Some ideas for future development:

1. **User Authentication:** Implement user login and registration to track individual workout histories.
2. **Edit Workouts:** Allow users to update the details of existing workouts.
3. **Workout Categories:** Add the ability to categorize workouts (e.g., cardio, strength training).

## License

This project is licensed under the MIT License.
