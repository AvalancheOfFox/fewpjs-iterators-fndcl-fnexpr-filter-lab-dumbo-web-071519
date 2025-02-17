// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']


function findMatching(drivers, string) {
    let matching = drivers.filter(driver => {
        return driver.toUpperCase() === string.toUpperCase()
    })
    return matching
}

function fuzzyMatch(drivers, string){
    let fuzzMatch = drivers.filter(driver => {
        return driver.substring(0, string.length) === string
    })
    return fuzzMatch
}

//accesses data structure
function matchName(drivers, name){
    return drivers.filter(driver => {
        return driver.name === name
    })
}