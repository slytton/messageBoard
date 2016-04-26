* What does ng-model do?
  * ** ng-model binds form fields to a property on the scope. It is responsible for binding the view to the model, providing validation keeping the state of the control, setting css classes on the element, and registering the control with the parent form. **


* What is "dirty checking"?
  * ** Dirty checking is the process of iterating over every property on the scope and checking for changes.**


* Find a way to set the initial value of "name" as "BoJack" (without writing a controller).
  * ** You can accomplish this using ng-init="name='BoJack'"**


* What are those {{ }} expressions? Are they Handlebars?
  * ** The double curly braces are not Handlebars. They are angular specific mark-up that allow you to evaluate angular expressions within the context of an html page.**


* Explain what two-way data binding is.
  * ** One-way data binding is the idea that a view is populated based on the state of you model (data). Two-way data binding extends that pattern and allows the view to modify the model when it is updated. This means that multiple items on a page can be both updating and being updated by the model simultaneously.

* BONUS: Research the $digest loop
