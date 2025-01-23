# Taskly - Stay Organized in One Place

Taskly is a simple task management application built using React. It allows users to add, edit, delete, and mark tasks as completed. Tasks are saved in local storage to persist across sessions.

## Features

- Add new tasks
- Edit existing tasks
- Delete tasks
- Mark tasks as completed
- Toggle visibility of completed tasks
- Persistent storage using local storage

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/dibya-22/ToDo-List.git
   cd taskly
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the application:
   ```bash
   npm run dev
   ```

## Project Structure

```
Taskly/
│-- src/
│   ├── components/
│   │   ├── Navbar.js
│   ├── App.js
│   ├── App.css
│   ├── index.js
│-- public/
│-- package.json
│-- README.md
```

## Usage

1. Enter a task in the input field and click the `+` button to add it to the list.
2. Click the `Edit` button to modify an existing task.
3. Click the `Delete` button to remove a task.
4. Use the checkbox to mark tasks as completed.
5. Toggle the "Show Finished" option to show or hide completed tasks.

## Technologies Used

- React
- React Hooks (useState, useEffect)
- UUID for unique task IDs
- TailwindCSS for styling
- Local Storage for data persistence

## Contributing

If you want to contribute to Taskly, feel free to fork the repository and submit a pull request with your changes.

## License

This project is licensed under the MIT License.
