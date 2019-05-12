const amqp = require('amqplib/callback_api')
const ENDERECO_FILA = 'amqp://localhost'
amqp.connect(ENDERECO_FILA, (error0, connection) => {

    if(error0) {
        throw error0
    }

    connection.createChannel((error1, channel) => {
        
        if(error1){
            throw error1
        }
        var queue = 'persistencia'
        var msg = 'Mensagem nº '
        var options = {persistent: true}
        var count  = 1
        channel.assertQueue(queue, {
            durable: true
        })
        
        for(let i = 1; i < 4; i++) {
            channel.sendToQueue(queue, Buffer.from(msg + i), options)
            console.log(" [x] Sent %s", msg + i)
        }
        
    })
    setTimeout(function() {
        connection.close();
        process.exit(0);
    }, 600);
})