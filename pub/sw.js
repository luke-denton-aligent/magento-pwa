console.log('Working');

function syncTabState() {

}

self.addEventListener('message', function(event){
    // Receive the data from the client
    var data = event.data;

    // The unique ID of the tab
    var clientId = event.source.id

    // A function that handles the message
    self.syncTabState(data, clientId);
});
