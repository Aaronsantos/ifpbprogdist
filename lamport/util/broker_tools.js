var mqHelper = require("./RabbitMQHelper");

var channel;
var queue;

exports.brokerConnect = async function(address, queueName) {
  if (!queue) queue = queueName;
  if (channel) return channel;

  try {
    channel = await mqHelper.getChannel(address);

    channel.assertQueue(queue, {
      durable: false
    });

    return channel;
  } catch (e) {
    console.log("Error creating channel or connection: " + e);
    return e;
  }
};

exports.getChannel = function() {
  if (channel) return channel;

  console.log("There is no channel");
  return null;
};

exports.sendMsg = msg => {
  channel.sendToQueue(queue, Buffer.from(JSON.stringify(msg)));
  console.log("[X] Sent(" + new Date() + ")");
  console.table(msg);
};

exports.getMsg = async callBack => {
  channel.consume(
    queue,
    msg => {
      let msg = JSON.parse(msg.content.toString());
      callBack(msg);
    },
    { noAck: true }
  );
};
