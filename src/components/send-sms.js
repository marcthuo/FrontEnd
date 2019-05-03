const accountSid = 'ACfa290d3e1da61a82090e4105886b5fca';
const authToken = '0ba9d6508c9c3c2c17e8257fd2bc54ef';
const client = require('twilio')(accountSid, authToken);

client.messages
  .create({
     body: 'This is the ship that made the Kessel Run in fourteen parsecs?',
     from: '+16788318182',
     to: '+14042003696'
   })
  .then(message => console.log(message.sid));