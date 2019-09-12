const program = require('commander');
const { prompt } = require('inquirer');

const {
    addStudent,
    findStudent,
    updateStudent,
    removeStudent,
    listStudent
} = require('./index');

const questions = [
    {
        type: 'input',
        name: 'firstname',
        message: 'Student first name:'
    },
    {
        type: 'input',
        name: 'lastname',
        message: 'Student last name:'
    },
    {
        type: 'input',
        name: 'phone',
        message: 'Student phone number:'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Student email address:'
    },
    {
        type: 'input',
        name: 'gender',
        message: 'Student gender:'
    }
]

program
    .version('1.0.0')
    .description('Student management system')

program
    .command('add')
    .alias('a')
    .description('Add new student')
    .action(()=>{
        prompt(questions)
        .then(answers => addStudent(answers))
    })

program
    .command('find <name>')
    .alias('f')
    .description('Search for a student')
    .action((name) => {
        findStudent(name)
    })

program
    .command('update <_id>')
    .alias('u')
    .description('Update student by id')
    .action(_id => prompt(questions)
    .then(answers => updateStudent(_id, answers)))

program
    .command('remove <_id>')
    .alias('r')
    .description('Remove a student')
    .action(_id => removeStudent(_id))

program
    .command('list')
    .alias('l')
    .description('List all students')
    .action(() => listStudent())

program
    .parse(process.argv)
