function getUserData() {
    return new Promise(resolve => {
        $.get("/api/user_data").then(function (data) {
            return data;
        });
    });
}

angular.module('travelListApp').component('travelList', {
    template:
        '<ul>' +
        '<li ng-repeat="destination in $ctrl.destinations">' +
        '<span>{{destination.name}}</span>' +
        '</li>' +
        '</ul>',
    controller: async function TravelListController() {
        this.destination = await getUserData();
    },
});
