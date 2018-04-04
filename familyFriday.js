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

function generateGroups(names) {
    let groups = [];
    //Iterate in steps of 4 and add groups to output list
    for (let i = 0; i < names.length; i += 4) {
        //General case, can take a group of 4
        if (names.length - i > 6) {
            groups.push(names.slice(i, i + 4));
            //Edge case, need to take 2 groups of 3
        } else if (names.length - i  === 6) {
            groups.push(names.slice(i, i + 3));
            groups.push(names.slice(i + 3, i + 6));
            i = names.length;
            //Anything else, we can just set all of the remaining people into one last group
        } else {
            groups.push(names.slice(i, names.length));
            i = names.length;
        }
    }
    return groups;
}

function createGroups(names) {
    shuffle(names);
    return generateGroups(names);
}