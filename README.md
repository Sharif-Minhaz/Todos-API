# Todos-API
A todos api created with express and mongoose

Base URL: https://todo-service-v-1-api.onrender.com

```
interface ITodo {
	_id: string;
	title: string;
	isComplete: boolean;
	createdAt: string;
	_v: number;
}
```

```
# Get all todos: GET:/api/todos
```
```
# Add todo: POST:/api/todos
body: {
  "title": "test"
}
```
```
# Find a single todo: GET:/api/todos/find/63276fb2daf87ed53a142bf3
```
```
# Search todos: GET:/api/todos/search?title=Client's App project
```
```
# Update todo: PATCH:/api/todos/65e07ffe2b79b56125a0926c
body: {
    "title": "test-2",
    "isComplete": true
}
```
```
# Delete a todo: DELETE:/api/todos/65e07ffe2b79b56125a0926c
```
