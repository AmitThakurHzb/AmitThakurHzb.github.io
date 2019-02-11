/**
 * Created by thihara on 8/29/16.
 * 
 * The service worker for displaying push notifications.
 */

self.addEventListener('push', function(event) {
    if (!(self.Notification && self.Notification.permission === 'granted')) {
        return;
    }

    var data = {};
    if (event.data) {
        //data = event.data.json()|| {};
		data = {};
    }
    var title = data.title || "RMC Notification";
    var message = data.message || "Tast Activity notification";
    var icon = "img/FM_logo_2013.png";
	//var icon = "img/StoreOnce3620.png";

    self.clickTarget = data.clickTarget;

    event.waitUntil(self.registration.showNotification(title, {
        body: message,
        tag: 'push-demo',
        icon: icon,
        badge: icon
    }));
});

self.addEventListener('notificationclick', function(event) {
    console.log('[Service Worker] Notification click Received.');

    event.notification.close();

    if(clients.openWindow){
        event.waitUntil(clients.openWindow(self.clickTarget));
    }
});