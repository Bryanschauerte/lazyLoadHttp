require.ensure examples and usage.

Works like this...
  The node server checks the location through res.url
  The server gets the request and passes back generated html with the required bundle and component(generated to string) for that location.

require.ensure -> brings the webpack chunk into a component when needed.
  requires chunk bundles. Can use optimization.

  
for on routes :

require.ensure(["<file-path or module name>"], function(moduleExportsValue) {
    var myModule = require("<file-path or module name>");
});

for a using d3

require.ensure(["d3"], function() {
    var d3 = require("d3");
    // do something with d3
});


on an action

onButtonClick: function(event) {
    this.showLoader();

    require.ensure("path/to/dialog", _.bind(function() {
        this.hideLoader();

        var dialog = require("path/to/dialog");
        dialog.open();
    }, this));
},
