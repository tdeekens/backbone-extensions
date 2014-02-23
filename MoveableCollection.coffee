###
Collection extending Backbones collection for sort functionality.

@author Tobias Deekens
###
Backbone.MovableCollection = Backbone.Collection.extend(

  ###
  Function moving a given model up the collection.

  @param {Object} [model] Model that should be moved up
  @param {Boolean} [silent] If silent is true, no remove event is triggered on model and collection
  ###
  up: (model, silent) ->
    return false  if @length <= 1
    idx = @indexOf(model)
    if --idx >= 0
      @remove model,
        silent: (if _.isBoolean(silent) then silent else false)

      @add model,
        at: idx
        silent: true

      @trigger "move", model, idx, false
    else
      idx = @length - 1
      @remove model,
        silent: (if _.isBoolean(silent) then silent else false)

      @add model,
        at: idx
        silent: true

      @trigger "move", model, idx, true
    return


  ###
  Function moving a given model down the collection.

  @param {Object} [model] Model that should be moved up
  @param {Boolean} [silent] If silent is true, no remove event is triggered on model and collection
  ###
  down: (model, silent) ->
    return false  if @length <= 1
    idx = @indexOf(model)
    if ++idx <= @models.length - 1
      @remove model,
        silent: (if _.isBoolean(silent) then silent else false)

      @add model,
        at: idx
        silent: true

      @trigger "move", model, idx, true
    else
      @remove model,
        silent: (if _.isBoolean(silent) then silent else false)

      @add model,
        at: 0
        silent: true

      @trigger "move", model, 0, false
    return


  ###
  Function moving a given model to the given index in the collection.

  @param {Int} [idx] Index to which model shall be moved
  @param {Object} [model] Model that should be moved up
  @param {Boolean} [silent] If silent is true, no remove event is triggered on model and collection
  ###
  to: (idx, model, silent) ->
    @remove model,
      silent: (if _.isBoolean(silent) then silent else false)

    @add model,
      at: idx

    @trigger "move", model, idx
    return
)
