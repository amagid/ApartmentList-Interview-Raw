const mocha = require('mocha');
const chai = require('chai');
const functions = require('./familyFriday');
const assert = chai.assert;

describe('Shuffle', function() {
    it('Should return a different result each time', function(done) {
        const names1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
        const names2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
        const names3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
        const output1 = functions.shuffle(names1);
        const output2 = functions.shuffle(names2);
        const output3 = functions.shuffle(names3);

        assert.notDeepEqual(output1, output2, 'First two shuffles were same');
        assert.notDeepEqual(output2, output3, 'Shuffles 2 and 3 were same');
        assert.notDeepEqual(output1, output3, 'Shuffles 1 and 3 were same');
        done();
    });
    it('Should preserve all of the elements in the array', function(done) {
        const names1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
        const finalArray = new Array(names1.length);
        functions.shuffle(names1);
        for (let i = 0; i < names1.length; i++) {
            finalArray[names1[i] - 1] = names1[i];
        }
        for (let i = 0; i < finalArray.length; i++) {
            if (!finalArray[i]) {
                assert.fail(null, null, 'Didn\'t preserve array elements');
            }
        }
        done();
    });
});

describe('GenerateGroups', function() {
    it('Should split a case that is well-fit to the group size into even groups.', function (done) {
        const names1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
        const groups = functions.generateGroups(names1, 4);

        assert.deepEqual(groups, [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]], 'Did not split groups evenly');
        done();
    }); 
    it('Should split a case that is one over a case that is well-fit to the group size into even groups.', function (done) {
        const names1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
        const groups = functions.generateGroups(names1, 4);

        assert.deepEqual(groups, [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12, 13]], 'Did not split groups evenly');
        done();
    }); 
    it('Should split a case that is one under a case that is well-fit to the group size into even groups.', function (done) {
        const names1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
        const groups = functions.generateGroups(names1, 3);

        assert.deepEqual(groups, [[1, 2, 3], [4, 5, 6, 11], [7, 8, 9, 10]], 'Did not split groups correctly');
        done();
    }); 
});