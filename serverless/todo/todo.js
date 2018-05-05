'use strict';
const dictionary = require('./dictionary').dictionary;

module.exports.get = (event, context, callback) => {

    const randomValue = Math.floor(Math.random() * dictionary.length);
    console.log(randomValue);
    callback(null, {
        statusCode: 200,
        headers: {
            "Access-Control-Allow-Origin": "*", // Required for CORS support to work
            "Access-Control-Allow-Credentials": true, // Required for cookies, authorization headers with HTTPS
            "Access-Control-Allow-Methods": "*"
        },
        body: JSON.stringify(dictionary[randomValue])
    })
};
