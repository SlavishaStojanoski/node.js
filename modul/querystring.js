// 2. querystring modul
// funkcija koja proveruva 
// dali querystring modulot koj e pretvoren vo objekt ima vrednost za propertito name

const querystring = require('querystring');
const obj = querystring.parse('name=Slavisha&surname=Stojanoski');
if(obj.name != '') {
    console.log(obj.name) 
} else { 
    console.log('Enter a Name')
}