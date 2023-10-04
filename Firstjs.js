alert('hi');
prompt ('this is the prompt');
//postMessage("messageabc",parent);      //post message to the parent window
//alert("messageabc");


function calculateDaysBetweenDates(begin, end) {
    var oneDay = 1000 * 60 * 60 * 24;
    var beginDate = new Date(begin);
    var endDate = new Date(end);
    var diff = endDate.getTime() - beginDate.getTime();
    var days = Math.floor(diff / oneDay);
    return days;
}


const net = require('net');
const dns = require('dns');

const remoteHost = 'gotsvw4432.got.volvocars.net'; // Replace with the remote host you want to test
const remotePort = 1489; // Replace with the remote port you want to test

// Resolve the remote host to an IP address
dns.resolve4(remoteHost, (err, addresses) => {
  if (err) {
    console.error(`Error resolving host: ${err.message}`);
    return;
  }

  const remoteIP = addresses[0];

  // Create a socket to the remote host and port
  const socket = new net.Socket();

  // Set a timeout for the connection attempt
  const timeoutMs = 5000; // 5 seconds
  socket.setTimeout(timeoutMs);

  socket.on('connect', () => {
    console.log(`Port ${remotePort} on ${remoteHost} is reachable.`);
    socket.end();
  });

  socket.on('timeout', () => {
    console.log(`Port ${remotePort} on ${remoteHost} is not reachable (timeout).`);
    socket.destroy();
  });

  socket.on('error', (error) => {
    console.log(`Port ${remotePort} on ${remoteHost} is not reachable (error: ${error.message}).`);
    socket.destroy();
  });

//Attempt to connect to the remote host and port
 socket.connect(www.google.com, 445);
});
