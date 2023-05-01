let statistics = {
    redCars: 21,
    blueCars: 45,
    greenCars: 12,
    raceCars: 5,
    blackCars: 40,
    rareCars: 2,
};
    

for (const stat in statistics) {
    if(stat[0] == 'r' || statistics[stat] % 2 == 1) {
        console.log(`${stat}: ${statistics[stat]}`);
    }
}

// Question 17
function modifyArray(array, callback) {
    const newArr = [];
    for(let i = 0; i < array.length; i++) {
        newArr.push(callback(array[i]));
    }
    return newArr;
}
function doSomething(num) {
    return num * 2;
}
console.log(modifyArray([1,2,3], doSomething));
