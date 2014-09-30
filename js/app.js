(function(){
var app = angular.module('apollo',[ ]);

    app.controller('HitsController', ['$scope', '$http', function($scope, $http){
        var url = 'http://ws.audioscrobbler.com/2.0/';
        config = {
            params: {
                api_key: 'c56d341e419af937337f42e83bf0daab',
                format: 'json',
                callback: 'JSON_CALLBACK'
            }
        };

        $scope.getTopTracks = function(){
            // var topTracks = [];
            config.params.method = 'chart.gettoptracks';
            $http({
                method: 'JSONP',
                url: url,
                params: config.params,
            }).success(function(response){
                $scope.tracks = response.tracks.track
                // console.log($scope.tracks); 
            }).error(function(x){
                console.log(x);
            });
        };
        $scope.getTopTracks();

        $scope.getSimilar = function(){
            var artist = $scope.artist;
            var track = $scope.song;
            console.log(track);
            console.log(artist);
            config.params.artist = artist;
            config.params.track = track;
            config.params.method = 'track.getSimilar';
            $http({
                method: 'JSONP',
                url: url,
                params: config.params
            }).success(function(response){
                $scope.tracks = response.similartracks.track
                console.log($scope.tracks)
                $scope.check = true;
                console.log($scope.check);
            }).error(function(x){
                console.log(x);
            });
        };
    }])
})()
