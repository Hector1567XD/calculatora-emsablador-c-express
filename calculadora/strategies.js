const calculatorCommand = __dirname + '\\calculator.exe'

class CalculatorAddStrategy {
    constructor(shell) { this.shell = shell; }
    async execute(numA, numB) {
        return +(await this.shell.execute(`${calculatorCommand} add ${numA} ${numB}`));
    }
}

class CalculatorSubStrategy {
    constructor(shell) { this.shell = shell; }
    async execute(numA, numB) {
        return +(await this.shell.execute(`${calculatorCommand} sub ${numA} ${numB}`));
    }
}

class CalculatorMulStrategy {
    constructor(shell) { this.shell = shell; }
    async execute(numA, numB) {
        return +(await this.shell.execute(`${calculatorCommand} mul ${numA} ${numB}`));
    }
}

class CalculatorDivStrategy {
    constructor(shell) { this.shell = shell; }
    async execute(numA, numB) {
        return +(await this.shell.execute(`${calculatorCommand} div ${numA} ${numB}`));
    }
}

class CalculatorPowStrategy {
    constructor(shell) { this.shell = shell; }
    async execute(numA, numB) {
        return +(await this.shell.execute(`${calculatorCommand} pow ${numA} ${numB}`));
    }
}

module.exports = {
    CalculatorAddStrategy,
    CalculatorSubStrategy,
    CalculatorMulStrategy,
    CalculatorDivStrategy,
    CalculatorPowStrategy,
};