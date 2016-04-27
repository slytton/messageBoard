* What is $rootScope?
  * ** $rootScope is the parent scope of the app from which all other controller scopes inherit. **


* Explain how $scope is passed from a parent to child controller
  * ** The $scope is injected into the controller when the controller function includes it as an argument. **


* List five built in directives that create their own scope
  * ** ng-if **
  * ** ng-repeat **
  * ** ng-controller **
  * ** ng-view **
  * ** ng-switch **


* "Scope becomes tricky when you try to 2 way data bind to a primitive defined on the parent scope from inside the child scope" - what does this mean?
  * ** It means that when there is a primitive defined on the parent scope and you try to reference it in the child scope the child scope can't find it and will instead create it's own version. This breaks the binding between parent and child scopes. **
