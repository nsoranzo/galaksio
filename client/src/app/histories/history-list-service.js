(function(){var app=angular.module("histories.services.history-list",[]);app.factory("HistoryList",["$rootScope",function($rootScope){var histories=[];return{getHistories:function(){return histories},setHistories:function(_histories){histories=_histories;return this},getHistory:function(history_id){for(var i in histories){if(histories[i].id===history_id){return histories[i]}}return null}}}])})();