function shuffle(names) {
    let index, temp;
    for (let i = 0; i < names.length; i++) {
        index = Math.floor(Math.random() * names.length);
        temp = names[index];
        names[index] = names[i];
        names[i] = temp;
    }
    return names;
}

function generateGroups(names, groupSize) {
    let groups = [];
    let i = 0;
    //Iterate in steps of 4 and add groups to output list
    while (i < names.length - (groupSize - 1)) {
        //General case, can take a group of 4
        if (names.length - i >= groupSize) {
            groups.push(names.slice(i, i + groupSize));
            i += groupSize;
        }
    }
    let currentGroup = groups.length - 1;
    while (i < names.length) {
        groups[currentGroup].push(names[i]);
        i++;
        currentGroup--;
    }
    return groups;
}

function createGroups(names, groupSize) {
    shuffle(names);
    return generateGroups(names, groupSize);
}

module.exports = {
    shuffle,
    generateGroups,
    createGroups
};