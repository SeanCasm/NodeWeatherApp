const inquirer = require('inquirer');
require('colors');

const menuOpts = [
    {
        type: 'list',
        name: 'opcion',
        message: '¿Que desea hacer?',
        choices: [
            {
                value: 1,
                name: `${'1'.green}. Buscar ciudad`
            },
            {
                value: 2,
                name: `${'2'.green}. Historial`
            },
            {
                value: 0,
                name: `${'0'.green}. Salir`
            },
            
        ]
    }
];


const inquirerMenu = async()=>{
    console.clear();
    console.log('=========================='.green);
    console.log('  Seleccione una opción'.white );
    console.log('==========================\n'.green);

    const { opcion } = await inquirer.prompt(menuOpts);

    return opcion;
}

const pausa = async() =>{
    const input = [
        {
            type: 'input',
            name: 'enter',
            message: `Presione ${'enter'.green} para continuar`
        }
    ];
    await inquirer.prompt(input)
}
const leerInput=async(message)=>{
    const question=[
        {
            type: 'input',
            name: 'desc',
            message,
            validate(value){
                if(value.length==0){
                    return 'Ingrese un valor';
                }
                return true;
            }
        }
    ];
    const {desc} = await inquirer.prompt(question);
    return desc;
}
const listarLugares=async(lugares=[])=>{
    const choices = lugares.map((lugar,idx)=>{
        const i = `${idx+1}.`.green;
        return{
            value:lugar.id,
            name: `${i} ${lugar.nombre}`
        }
    });
    choices.unshift({
        value:'0',
        name:'0'.green+' Cancelar'
    });
    const preguntas = [
        {
            type:'list',
            name:'id',
            message:'Seleccione lugar:',
            choices
        }
    ]
    const {id} = await inquirer.prompt(preguntas);
    return id;
}
module.exports={
    inquirerMenu,
    pausa,
    leerInput,
    listarLugares
}