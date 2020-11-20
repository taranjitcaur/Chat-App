const generateMessage = (username, text) => {
    return {
        username,
        text,
        createdAt: new Date().getTime()
    }
}
const generateLocationMessage = (username, url) => {
    return {
        username,
        url,
        createdAt: new Date().getTime()
    }
}

const getUsersInRoom = (room) => {
    room = room.trim().toLowerCase()
    return users.filter((user) => user.room === room)
}

const getUser = (id) => {
    return users.find((user) => user.id === id)
}

module.exports = {
    generateMessage,
    generateLocationMessage,
    getUsersInRoom,
    getUser
}