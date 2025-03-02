#Redux Todo Application

This project is a simple Todo application built using Redux Toolkit. It allows users to add new tasks, edit existing tasks, and delete tasks. The application is built with React, TypeScript, and Material-UI (MUI) for styling and components.
Features

![Demo](/images/todo-list.png)

``
src/
├── components/
│   ├── TodoCreate.tsx       # Component for creating new todos
│   ├── TodoList.tsx         # Component for listing todos
│   ├── Todo.tsx             # Component for displaying and editing a single todo
├── redux/
│   ├── store.ts             # Redux store configuration
│   ├── todoSlice.ts         # Redux slice for todos (state and reducers)
├── types/
│   ├── Types.ts             # TypeScript types for the application
├── App.tsx                  # Main application component
├── index.tsx                # Entry point of the application

    Add New Todo: Users can add a new todo by typing their task into an input field and clicking the "Create" button.

    Edit Todo: Each todo has an "Edit" button that allows users to modify the task. In edit mode, the task text can be updated and saved by clicking the "Check" button.

    Delete Todo: Each todo has a "Delete" button that removes the task from the list.

    Todo List: All added tasks are displayed in a list.

Technologies

    React: Used for building the user interface.

    Redux Toolkit: Used for state management.

    Material-UI (MUI): Used for buttons, icons, and input fields.

    TypeScript: Used for type safety and better developer experience.
