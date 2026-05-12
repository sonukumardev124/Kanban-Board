# Kanban Board

A simple and intuitive web-based Kanban board application for managing tasks and tracking project progress.

## Description

Kanban Board is a lightweight task management application that helps you organize and track your work using the Kanban methodology. It provides an interactive interface where you can create tasks, move them through different stages (To Do, In Progress, Done), and manage your workflow efficiently.

## Features

- ✅ **Three-Column Kanban Layout**: Organize tasks into To Do, In Progress, and Done columns
- ✅ **Add New Tasks**: Create tasks with title and description using a modal form
- ✅ **Drag and Drop**: Seamlessly move tasks between columns by dragging
- ✅ **Delete Tasks**: Remove completed or unnecessary tasks with a single click
- ✅ **Dark Theme UI**: Modern and easy-on-the-eyes dark interface
- ✅ **Responsive Design**: Clean and organized layout

## Technologies Used

- **HTML5**: Semantic markup and structure
- **CSS3**: Styling with CSS variables for customizable theming
- **Vanilla JavaScript**: No dependencies, pure client-side functionality
- **Drag and Drop API**: Native browser technology for task movement

## Getting Started

### Prerequisites

No installation or build process required. You only need:
- Any modern web browser (Chrome, Firefox, Safari, Edge, etc.)

### Installation

1. Clone the repository or download the project files:
   ```bash
   git clone https://github.com/sonukumardev124/Kanban-Board.git
   cd Kanban-Board
   ```

2. Open `index.html` in your web browser:
   - Double-click the `index.html` file, or
   - Right-click and select "Open with" and choose your browser

That's it! The application will run directly in your browser.

## Usage

### Adding a Task

1. Click the **"Add new Task"** button in the navigation bar
2. Enter the task title in the input field
3. Add an optional description in the textarea
4. Click **"Add Task"** to create the task
5. The task will appear in the **To Do** column

### Moving Tasks

- **Click and drag** a task card to move it between columns
- The task will follow your cursor during the drag operation
- Drop it in the destination column to move it there

### Deleting Tasks

- Click the **"Delete"** button on any task card to remove it from the board
- The task will be immediately removed

## Project Structure

```
Kanban-Board/
├── index.html          # Main HTML file with structure and modal
├── style.css           # Styling and layout
├── script.js           # JavaScript functionality and interactions
└── README.md           # Project documentation
```

### File Details

- **index.html**: Contains the DOM structure including the navigation bar, three task columns, and the modal form for adding new tasks
- **style.css**: Defines the visual styling with CSS variables for easy customization and a dark theme
- **script.js**: Handles all interactivity including drag-and-drop functionality, modal controls, and task management

## How It Works

1. **Task Creation**: When you add a task, JavaScript creates a new DOM element and attaches event listeners
2. **Drag and Drop**: Native HTML5 Drag and Drop API enables moving tasks between columns
3. **Task Deletion**: Click handlers remove tasks from the DOM
4. **Modal Management**: A modal overlay allows task entry without page reload

## Customization

You can easily customize the appearance by modifying CSS variables in `style.css`:

```css
:root {
    --bg-color: rgb(21, 19, 19);              /* Background color */
    --bg-task-color: #3e3b3b;                 /* Task card color */
    --primary-text-color: rgb(234, 231, 231); /* Text color */
    --delete-btn: rgba(183, 14, 14, 0.774);   /* Delete button color */
}
```

## Future Enhancements

- [ ] Local storage to persist tasks between sessions
- [ ] Task priority levels
- [ ] Due dates and reminders
- [ ] Task editing functionality
- [ ] Filtering and searching tasks
- [ ] User authentication and multi-user support
- [ ] Dark/Light theme toggle
- [ ] Task categories or labels

## Contributing

Contributions are welcome! Feel free to:
1. Fork the repository
2. Create a new branch for your feature
3. Make your changes
4. Submit a pull request

## Author

**Sonu Kumar**
- GitHub: [@sonukumardev124](https://github.com/sonukumardev124)

## License

This project is open source and available under the MIT License.

## Support

If you encounter any issues or have suggestions for improvements, please open an issue on the GitHub repository.

---

Happy task managing! 🚀
