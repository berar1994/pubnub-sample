const PubNub = require('pubnub');


function getRandomArbitrary(min, max) {
  return Math.random() * ((max - min) + min);
}


function startSendingData() {
  const pubnub = new PubNub({
    publishKey : '[your-publish-key]',
    subscribeKey : '[your-subscribe-key]',
    ssl: true
  })

  function publishSampleMessage() {
      var publishConfig = {
          channel : "telemetry",
          message : {
              eon: {
                temperature: getRandomArbitrary(100, 130),
                pressure: getRandomArbitrary(80, 100)
              }
          }
      }

      pubnub.publish(publishConfig, function(status, response) {
         if(status.error){
           console.error(response);
         }  
      })
  }

  publishSampleMessage();
}


setInterval(startSendingData, 2000);

