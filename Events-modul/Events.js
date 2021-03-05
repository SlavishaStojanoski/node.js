const students = [
    {
        name: 'John',
        grade: 5
    },
    {
        name: 'Bon',
        grade: 6
    },
    {
        name: 'Maria',
        grade: 8
    },
    {
        name: 'Monika',
        grade: 8
    }
]


const events = require('events');
const emitter = new events.EventEmitter();

emitter.on('passExam', data => {
    console.log(`Students who pass the exam  ${data.name}`)
})

students.forEach(student => {
    if (student.grade > 5) {
        emitter.emit('passExam', {
            name:student.name
        })
    }
})
