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

const root = {
    hello : () => "Welcome to GraphQL"
}

app.use('/graphql',graphqlHTTP({
    schema : schema,
    rootValue : root,
    graphiql : true
}))

app.listen(3000,() => {
    console.log("App is running on port 3000");
})