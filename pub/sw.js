function handleMessage(data, clientId) {
    clients.matchAll().then(clients => {
        clients.forEach(client => {

            // No need to update the tab that
            // sent the data
            if (client.id !== clientId) {
                console.log('[ServiceWorker] Posting message to other clients to update cart');
                client.postMessage('update_cart');
            }

        })
    })
}

self.addEventListener('install', event => {
    // The promise that skipWaiting() returns can be safely ignored.
    self.skipWaiting();
});

self.addEventListener('activate', event => {
    //console.log("Activate event")
});

self.addEventListener('message', function(event){
    console.log('[ServiceWorker] Received message');
    // Receive the data from the client
    var data = event.data;

    // The unique ID of the tab
    var clientId = event.source.id;

    // A function that handles the message
    handleMessage(data, clientId);
});
