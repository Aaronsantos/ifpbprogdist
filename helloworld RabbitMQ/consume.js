const amqp = require('amqplib/callback_api')
const ENDERECO_FILA = 'amqp://localhost'
amqp.connect(ENDERECO_FILA, (error0, connection) => {

    if(error0) {
        throw error0
    }

    connection.createChannel((error1, channel) => {
        if(error1) throw error1
        var queue = 'hello'
        channel.assertQueue(queue, {
            durable: false
        })

        console.log(" [*] Esperando por mensanges em %s. para sair CTRL+C", queue)

        channel.consume(queue, 
          (msg) => console.log(" [X] Recebida %s", msg.content.toString()),
          {noAck : true})

       console.log("Continuo executando atividades enquanto espero")
    })
})