const Nomad = require('nomad-stream')
const nomad = new Nomad()

nomad.subscribe(['QmUZBryhZe2nRZJeJo457jEC9z62kdMTHzYSdaRby1aSNF'], function(message) {
  console.log(message.message)
})

function populateErr() {
    document.getElementById("err").style.display = "block";
}
