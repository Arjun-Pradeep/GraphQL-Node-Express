const users = []

let user = {}

const resolver = {
    item : () => {
        return {
            id : '12414',
            text : 'This i hacker item',
            timeISO : '2 pm tuesday',
            time : 241435,
            title : 'Graphql Learning',
            deleted : false
        }
    },

    getUser : ({id}) => {
        return users.find(user => user.id === id)
    },

    users: () => {
        return users;
    },

    createUser : ({input}) => {
        user = input
        users.push(user)
        return user
    }
}

export default resolver