const express  = require('express') 
const sqlite3  = require('sqlite3') 

const app = express()
const sql = sqlite3

const db = new sql.Database('./database.db')

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get('/api/v1/students',(_req,res) =>{
    db.all('SELECT * FROM students;',(_error, notes) =>{
        res.send(students)
    })
})

app.delete('/api/v1/deletestudent',(req,res) =>{
    const {id} = req.body
    db.run('DELETE FROM students WHERE id = ?',[id],(error) =>{
        res.send(req.body)
    })

})

app.post('/api/v1/newstudent', (req, res) =>{
    const {name} = req.body
    const {surname} = req.body
    const {image} = req.body
    const {yourgroup} = req.body
    const {age} = req.body

    db.run('INSERT INTO notes (name,surname,age,group,image) VALUES (?,?,?,?,?)', [name,surname,image,yourgroup,age], (error) =>{
        db.all('SELECT * FROM students WHERE id =(SELECT MAX(id) FROM students) ',(error,student) =>{
            res.send(student)
        })
    })

})

app.patch('/api/v1/patchstudent', (req,res) =>{
    const { id } = req.body
    const {name} = req.body
    const {surname} = req.body
    const {image} = req.body
    const {yourgroup} = req.body
    const {age} = req.body
    db.run('UPDATE students SET name = ?, surname = ?, image = ?, yourgroup = ?, age = ? WHERE id = ?',[name,surname,image,yourgroup,age,id],(error,patched) =>{
        db.all('SELECT * FROM students WHERE id = ?',[id],(error,patchednote) =>{
            res.send(patchedstudent)
        })
    })
})

app.listen(process.env.PORT || 8080, ()=>{
    console.log('api running on port '+ (process.env.PORT || 8080));
})