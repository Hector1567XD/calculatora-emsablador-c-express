const exec = require('child_process').exec;
const { 
    CalculatorAddStrategy,
    CalculatorSubStrategy,
    CalculatorMulStrategy,
    CalculatorDivStrategy,
    CalculatorPowStrategy,
    CalculatorBinaryStrategy,
    CalculatorOctalStrategy
} = require('./strategies');

class ShellProvider {
    execute(command) {
        return new Promise((resolve, reject) => {
            exec(command, (error, stdout, stderr) => {
                if (error || stderr) reject(error || stderr);
                resolve(stdout);
            });
        });
    };    
}

class Calculadora {
    constructor(shell) {
        this.shell = shell;
    }

    getCommand(command) {
        const strategyDictionary = {
            'add': CalculatorAddStrategy,
            'sub': CalculatorSubStrategy,
            'mul': CalculatorMulStrategy,
            'div': CalculatorDivStrategy,
            'pow': CalculatorPowStrategy,
            'bin': CalculatorBinaryStrategy,
            'oct': CalculatorOctalStrategy
        };

        if (!strategyDictionary[command]) 
            throw new Error('Estrategia para resolver operacion no encontrada!');

        return new strategyDictionary[command](this.shell);
    }

    async execute(command, numA, numB) {
        const strategyCalculadora = this.getCommand(command);
        return +(await strategyCalculadora.execute(numA,numB));
    }
}

module.exports = { ShellProvider, Calculadora };
