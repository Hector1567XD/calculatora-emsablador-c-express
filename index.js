const express = require('express');
const { isNil } = require('lodash');
const CompositionRoot = require('./calculadora/composition-root.js');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Holi :3!')
});

const calculadora = CompositionRoot.getCalculadora();

const getCalculatorParams = (req) => {
    if (isNil(req.query.numA) || isNil(req.query.numB)) {
        throw new Error("Error al recibir los numeros");
    }

    if (isNil(req.query.operation)) {
        throw new Error("Error al recibir la operacion");
    }

    return {
        numA: +req.query.numA,
        numB: +req.query.numB,
        operation: req.query.operation
    }
}

app.get('/calculator', async (req, res) => {
    try {
        const { numA, numB, operation } = getCalculatorParams(req);

        return res.status(200).json({
            success: true,
            result: await calculadora.execute(operation, numA, numB)
        });
    } catch (e) {
        return res.status(400).json({ success: false, message: e.message });
    }
});

app.listen(port, async () => {
  console.log(`Servidor Calculator en el puerto ${port} iniciado!`);
});
