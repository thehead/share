'use strict';

var fruits = [{ id: 100, name: '草莓' }, { id: 101, name: '柚子' }, { id: 102, name: '李子' }];

var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
    for (var _iterator = fruits[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var fruit = _step.value;

        var message = 'ID: ' + fruit.id + ' Name: ' + fruit.name;
        console.log(message);
    }
} catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
} finally {
    try {
        if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
        }
    } finally {
        if (_didIteratorError) {
            throw _iteratorError;
        }
    }
}

//# sourceMappingURL=字符串模版-compiled.js.map