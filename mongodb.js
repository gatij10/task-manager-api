//CRUD create read update delete

/*const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient
const ObjiectId = mongodb.ObjectID*/

/*const {MongoClient,ObjectID} = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL,{ useUnifiedTopology: true  }, (error,client) => {
    if(error){
        return console.log('Unable to connect to databsase')
    }

    const db = client.db(databaseName)

    db.collection('tasks').deleteOne({
        description : "Complete the mongodb project today"
    }).then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(error)
    })
})*/

