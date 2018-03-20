function handleMessage(clientId) {
    clients.matchAll().then(clients => {
        clients.forEach(client => {
            // No need to update the tab that sent the data
            if (client.id !== clientId) {
                client.postMessage('update_cart');
            }

        })
    })
}

self.addEventListener('install', event => {
    // The promise that skipWaiting() returns can be safely ignored.
    self.skipWaiting();
});

self.addEventListener('message', function(event){
    console.log('[ServiceWorker] Received message');

    // The unique ID of the tab
    var clientId = event.source.id;

    // A function that handles the message
    handleMessage(clientId);
});
