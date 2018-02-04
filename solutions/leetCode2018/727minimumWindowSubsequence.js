function findSubseq(superSet, subset) {
    const startingIndeces = [];
    const sets = [];

    superSet.split('').forEach((v,i) => {
        const starting = subset[0];
        if (starting === v) {
            startingIndeces.push(i);
        }
    });
    console.log(startingIndeces)

    startingIndeces.forEach((v, i) => {
        searchForSet(v);
        debugger;
    });

    function searchForSet(startingIndex){
        const set = [subset[0]];
        for (let i = 1; i < subset.length; i++) {
            const subValue = subset[i];

            for (let j = startingIndex + 1; j < superSet.length; j++) {
                const val = superSet[j];
                debugger;
                set.push(val);
                if (val === subValue) {
                    startingIndex = j;
                    if (i === subset.length - 1) {
                        sets.push(set);
                    }
                    break;
                }
            }
        }
    }

    if (!sets.length) {
        return false;
    }

     return sets.reduce((prev, curr) => {
        if (curr.length < prev.length) {
            return curr;
        }
        return prev;
    });

}

const S = "abcdebdde", T = "bde";

console.log(findSubseq(S, T));
