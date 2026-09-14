// We use in memory database

let users = [
    {id: 1, name: "John Doe", mobile: "123-456-7890", email: "john@example.com"},
    {id: 2, name: "Jane Smith", mobile: "098-765-4321", email: "jane@example.com"},
]

let nextId = 3;

export const getUsers = () => users;