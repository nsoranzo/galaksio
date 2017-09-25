(function(){var app=angular.module("workflows.services.workflow-run",[]);app.factory("WorkflowInvocationList",function(){var invocations={};var _hasErrors=false;return{getInvocations:function(){return Object.values(invocations)},setInvocations:function(_invocations){invocations=_invocations;return this},saveInvocations:function(){sessionStorage.workflow_invocations=JSON.stringify(invocations);return this},loadInvocations:function(){try{invocations=JSON.parse(sessionStorage.workflow_invocations)}catch(e){console.error("Unable to load the stored invocations.");invocations={}}return this},clearInvocations:function(){invocations={};return this},addInvocation:function(_invocation){delete _invocation.checking;invocations[_invocation.id]=_invocation;return this},removeInvocation:function(_invocation){delete invocations[_invocation.id];return this},updateInvocation:function(_invocation){delete invocations[_invocation.id].checking;delete _invocation.checking;for(var attr in _invocation){invocations[_invocation.id][attr]=_invocation[attr]}return this},getInvocation:function(invocation_id){return invocations[invocation_id]},getNewInvocation:function(){return{id:"",workflow_id:"",workflow_title:"",current_step:1}},setHasErrors:function(errors){_hasErrors=errors===true},hasErrors:function(){return _hasErrors===true}}})})();