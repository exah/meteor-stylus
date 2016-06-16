var setDomElement = function (domStr, testFunc) {
  var div = document.createElement('div');
  div.innerHTML = domStr;
  div.style.display = 'block';
  document.body.appendChild(div);
  var p = div.firstChild;
  testFunc.call(p);
  document.body.removeChild(div);
};

var setStylusClass = function (className, testFunc) {
  return setDomElement('<p class="stylus-' + className + '"></p>', testFunc);
};

Tinytest.add("stylus - presence", function(test) {
  setStylusClass('dashy-left-border', function () {
    var leftBorder = getStyleProperty(this, 'border-left-style');
    test.equal(leftBorder, "dashed");
  });
});

Tinytest.add("stylus - relative @import", function(test) {
  setStylusClass('relative-import-dashy-border', function () {
    test.equal(getStyleProperty(this, 'border-left-style'), "dashed");
  });

  setStylusClass('overwrite-size', function () {
    test.equal(getStyleProperty(this, 'font-size'), "20px");
  });
});

Tinytest.add("stylus - absolute @import", function(test) {
  setStylusClass('absolute-import-dashy-border', function () {
    test.equal(getStyleProperty(this, 'border-left-style'), "dashed");
  });
});
