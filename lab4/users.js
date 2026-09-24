// We use in memory database

let users = [
    {id: 1,
     name: "John Doe",
     mobile: "123-456-7890",
    email: "john@example.com"},

    {id: 2,
     name: "Jane Smith",
     mobile: "098-765-4321", 
     email: "jane@example.com"},
]

let nextId = 3;

export const getAllUsers = () => {
    return users;
}

export const getUserById = (pid) => {
  const found = users.find((user) => user.id === pid)
  return found;
}

export const addUser = (user) => {
    user.id = nextId++;
    users.push(user);
    return user;
};

export const updateUser = (pid, updateData) => {
    const index = users.findIndex((user) => user.id === pid);
    if(index == -1) {
     return false;
    }
    updateData.id = pid;
    users[index] = updateData;
    return updateData;
}
export const DeleteUser = (pid) => {
    const index = users.findIndex((user) => user.id === pid);
    if(index == -1) {
     return false;
    }
    users.splice(index, 1);
    return true;
}
