const db = {};

const addToDb = item => {
    if(item in db){
        db[item] += 1;
    }
    db[item] = 1;
    return db;
}
console.log(addToDb('manna'))