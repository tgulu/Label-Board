# Label Board

🎵 Label Board – The Task Manager for Artists & Labels
Label Board is a MERN-based task manager designed specifically for independent artists, producers, and record label teams. Organise your releases, plan studio sessions, assign tasks, and keep the creative process flowing — all in one place.

## Description

Label Board is a full-stack MERN-based task manager built for music labels and creative collectives. Designed to support artists, producers, engineers, and visual teams, it enables seamless collaboration . From mixing and mastering to artwork and promotional planning, Label Board helps organise creative workflows with clarity and structure.

## Features

🎛️ Create and manage projects (EPs, singles, albums, events)

🗂️ Assign tasks to team members (mixing, artwork, promo, etc.)

📅 Set deadlines and track progress visually

👥 Role-based access for artists, managers, and collaborators

📈 Dashboard with task status and release timelines

Integrated Axios for API communication between front-end and Express.js backend, with secure JWT-based user authentication and MongoDB data persistence.

Included custom dashboards, release timelines, and collaborator tagging, allowing each team member to view and manage only their assigned responsibilities.

## Website

https://label-board.greenhouseprojects.space/

## Image of Website

![image](https://github.com/user-attachments/assets/38fa4d91-10a4-4e00-91e6-d4748cb1464e)
![image](https://github.com/user-attachments/assets/6be28e12-e7f2-4614-8d02-9ee0be92f54d)

## Who It’s For

Artists tracking personal projects, studio goals, and promo plans

Label Managers coordinating across a team of artists, engineers, and designers

Collaborators like producers, photographers, and marketers

##Tech Stack (MERN)

- MongoDB – store user profiles, releases, tasks, and timeline data

- Express + Node.js – API backend, auth, task logic

- React – front-end state management and dynamic UI

- Tailwind CSS – fast styling with responsive UI

- JWT Auth – user login

## Installation & Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/Label-Board.git
   cd Label-Board

   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm start
   ```

4. Environment Variables:

   - Create a `.env` file in the root directory and add:
     `REACT_APP_API_URL=http://localhost:5000
`

5. Build for production:
   ```bash
   npm run build
   ```
