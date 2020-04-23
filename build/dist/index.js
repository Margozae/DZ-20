'use strict';

const letters = {
    a: 'appel',
    b: 'banana',
    c: 'cucumber',
    d: 'dog'
};
const recipeMap = new Map([['огурец', 500], ['помидор', 350], ['капуста', 50]]);

function getKeys(obj) {
    const arrKeys = [];
    if (obj.size) {
        for (const [key] of recipeMap) {
            arrKeys.push(key);
        }
    } else if (typeof obj === 'object') {
        for (const key in obj) {
            arrKeys.push(key);
        }
    }
    return arrKeys;
}

Object.keys(letters);
getKeys(letters);

function getValues(obj) {
    const arrValues = [];
    if (obj.size) {
        for (const [key, value] of recipeMap) {
            arrValues.push(value);
        }
    } else if (typeof obj === 'object') {
        for (const key in obj) {
            arrValues.push(obj[key]);
        }
    }
    return arrValues;
}

Object.values(letters);
getValues(letters);

function getEntries(obj) {
    const arrEntries = [];
    if (obj.size) {
        for (const [key, value] of recipeMap) {
            arrEntries.push({ key, value });
        }
    } else if (typeof obj === 'object') {
        for (const key in obj) {
            arrEntries.push([key, obj[key]]);
        }
    }
    return arrEntries;
}

Object.entries(letters);
getEntries(letters);