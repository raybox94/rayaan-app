
QUnit.test("Here's a test that should always pass", function (assert) {
    assert.ok(1 <= "3", "1<3 - the first agrument is 'truthy', so we pass!");
});

QUnit.test('Testing AI function with positive number sets of inputs', function (assert) {

    assert.equal(ai(5),0,'Tested with small positive number 5');
    assert.equal(ai(0),0,'Tested with zero number ');
    assert.equal(ai(555),0,'Tested with large positive number 555');
});

QUnit.test('Testing AI function with negitive number sets of inputs', function (assert) {

    assert.equal(ai(-5),0,'Tested with small -ve number -5');
    assert.equal(ai(-1),0,'Tested with small -ve number -1');
    assert.equal(ai(555),0,'Tested with large -ve number -555');
});

QUnit.test('Testing AI function with floating point number sets of inputs', function (assert) {

    assert.equal(ai(5.67),0,'Tested with small floating point number 5.67');
    assert.equal(ai(1.0),0,'Tested with small floating point number 1.0');
    assert.equal(ai(555.55555),0,'Tested with large floting number 555.555');
});

QUnit.test('Testing AI function with negitive floating point number sets of inputs', function (assert) {

    assert.equal(ai(-5.67),0,'Tested with small -ve floating point number -5.67');
    assert.equal(ai(-1.0),0,'Tested with small -ve floating point number -1.0');
    assert.equal(ai(-555.55555),0,'Tested with -ve large floting number -555.555');
});

QUnit.test('Testing AI function with String', function (assert) {

    assert.throws(function () { ai('a'); }, /The given argument is not a number/, 'Passing in a string correctly raises an Error');
});