/**
 * @param {string} title
 * @return {string}
 */
 var capitalizeTitle = function(title) {
    title = title.toLowerCase();
    title = title.split(' ')
    for(let i=0; i<title.length; i++){
        if(title[i].length>2)
            title[i] = title[i].charAt(0).toUpperCase() + title[i].substr(1)
    }
    return title.join(' ')
    
};