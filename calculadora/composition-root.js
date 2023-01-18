const { Calculadora, ShellProvider } = require('./calculadora');

class CompositionRoot {
    static getCalculadora() {
        return new Calculadora(new ShellProvider());
    }
}

module.exports = CompositionRoot;