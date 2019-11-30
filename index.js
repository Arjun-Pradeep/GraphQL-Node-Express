import express from 'express';

// A L L O W S    U S    T O    U S E    G R A P H Q L    W I T H    E X P R E S S J S 
import graphqlHTTP from 'express-graphql'

// I M P O R T    S C H E M A    F I L E 
import schema from './schema'

const app = express();

app.get('/',(req,res) => {
    return res.json({
        msg : "Welcome to GraphQL World !!"
    })
})

const users = []

let user = {}

const root = {
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

    user : () => {
        return {
            firstName : 'Arjun',
            lastName : 'Pradeep',
            email : 'arjun@gmail.com'
        }
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

app.use('/graphql',graphqlHTTP({
    schema : schema,
    rootValue : root,
    graphiql : true
}))

app.listen(3000,() => {
    console.log("App is running on port 3000");
})