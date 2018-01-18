function getTempCallback(location, callback){
    callback(undefined, 25);
    callback('City not found');
}

getTempCallback('Moscow', function (err, temp){
    if (err){
        console.log('error', err);
    }else{
        console.log('success', temp)
    }
});

function getTempPromise(location) {
    return new Promise(function (resolve, reject){
        resolve(27);
        reject('City not found');
    });
}

getTempPromise('Elista').then(function (temp) {
    console.log('promise success', temp);
}, function (err) {
    console.log('promise error', err);
})