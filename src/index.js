const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')
const Task = require('./models/task')
const User = require('./models/user')



const app = express()
const port = process.env.PORT

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})

/*const multer = require('multer')
const upload = multer({
    dest: 'images',
    limits: {
        fileSize: 1000000
    },
    fileFilter(req,file,cb) {
        
        if (!file.originalname.match(/\.(doc|docx)$/)){
            return cb(new Error('Please upload a word documnet'))
        }
        cb(undefined, true)
        
        cb(new Error('File must be a PDF'))
         cb(undefined, true)
         cb(undefined, false)
        }
})


app.post('/upload',upload.single('upload'),(req,res) => {
    res.send()
}, (error,req,res,next) => {
    res.status(400).send({error: error.message})
})*/






/*app.use((req,res,next) => {
    if (req.method==='GET'){
        res.send('GET requests are disabled')
    } else {
        next()
    }
})*/

/*app.use((req,res,next) => {
    if(req.method){
        res.status(503).send('Website under maintainence. Check back')
    }
})*/




/*const jwt = require('jsonwebtoken')
const myFunction = async () => {
    const token = jwt.sign({ _id:'abc123' },'thisismynewcourse',{ expiresIn: '7 days' })
    console.log(token)
    const data = jwt.verify(token,'thisismynewcourse')
    console.log(data)
}

myFunction()*/ 

/*const pet = { 
    name: 'Hal'
}

pet.toJSON = function () {
    //console.log(this)
    return {}
}

console.log(JSON.stringify(pet))*/


/*const main = async () => {
    /*const task = await Task.findById('5eceb21d219a9b3070d11e56')
    await task.populate('owner').execPopulate()
    console.log(task.owner)*/

   /* const user = await User.findById('5eceb10bad140c20b0a6d629')
    await user.populate('tasks').execPopulate()
    console.log(user.tasks)
}

main()*/

