module.exports = function(content) {
  var callback = this.async();

  const options = loaderUtils.getOptions(this);

  require('properties').parse(content, options, function(err, obj) {
    if (err) { return console.error(err); }
    callback(null, 'module.exports = ' + JSON.stringify(obj) + ';');
  });
};
