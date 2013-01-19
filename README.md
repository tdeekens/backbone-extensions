backbone-extensions
===================

A hopefully growing set of extensions to backbone.js I've been building and using over time in smaller projects.

Backbone.MovableCollection
--------------------------

An simple extension to the classical Backbone.Collection with functionality for moving inner models up and down or to a specific position/index in their parent collection.
The collection inherits all functionality from the standard Backbone.Collection and adds three methods: *up*, *down* and *to*. Please refer to the original [backbone documentation](http://backbonejs.org/#Collection) for instanciation, functionality and usage.

Calling *.up(model, silent)* or *.down(model, silent)* on a collection will move the model in the corresponding way and suppress *add* and *remove* events depending on the *silent option*.
The function *to(idx, model, silent)* will move the model to the corresponding index.
In both cases a *move* event will be fired. Additional data passed is: *model*, *idx* and *roundtrip*. Whereas the boolean roundtrip just indicates if the model has been reinserted at the first or last position in the collection.