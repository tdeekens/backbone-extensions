/**
 * Collection extending Backbones collection for sort functionality.
 *
 * @author Tobias Deekens
 */
Backbone.MovableCollection = Backbone.Collection.extend({
	/**
     * Function moving a given model up the collection.
	 *
     * @param {Object} [model] Model that should be moved up
     * @param {Boolean} [silent] If silent is true, no remove event is triggered on model and collection
     */
	up: function(model, silent) {
		if (this.length <= 1) {return false;}

		var idx = this.indexOf(model);

		if(--idx >= 0) {
			this.remove(model, {silent: _.isBoolean(silent) ? silent : false});
			this.add(model, {at: idx, silent: true});

			this.trigger('move', model, idx, false);
		} else {
			idx = this.length - 1;

			this.remove(model, {silent: _.isBoolean(silent) ? silent : false});
			this.add(model, {at: idx, silent: true});

			this.trigger('move', model, idx, true);
		}
	},

	/**
     * Function moving a given model down the collection.
	 *
     * @param {Object} [model] Model that should be moved up
     * @param {Boolean} [silent] If silent is true, no remove event is triggered on model and collection
     */
	down: function(model, silent) {
		if (this.length <= 1) {return false;}

		var idx = this.indexOf(model);

		if(++idx <= this.models.length - 1) {
			this.remove(model, {silent: _.isBoolean(silent) ? silent : false});
			this.add(model, {at: idx, silent: true});

			this.trigger('move', model, idx, true);
		} else {
			this.remove(model, {silent: _.isBoolean(silent) ? silent : false});
			this.add(model, {at: 0, silent: true});

			this.trigger('move', model, 0, false);
		}
	},

	/**
     * Function moving a given model to the given index in the collection.
	 *
	 * @param {Int} [idx] Index to which model shall be moved
     * @param {Object} [model] Model that should be moved up
     * @param {Boolean} [silent] If silent is true, no remove event is triggered on model and collection
     */
	to: function(idx, model, silent) {
		this.remove(model, {silent: _.isBoolean(silent) ? silent : false});
		this.add(model, {at: idx});

		this.trigger('move', model, idx);
	}
});