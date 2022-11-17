/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
 var sortPeople = function(names, heights) {
    let res = []
    for(let el of names.keys()){
        res.push({name:names[el], height:heights[el]})
    }
    
    return res.sort((a,b)=>b.height-a.height).map((el)=>el.name)
};