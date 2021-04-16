
const https = require('https');
const fs = require('fs');

let url = "https://jsonplaceholder.typicode.com/posts";

let folder ='results';
try{
    if (!fs.existsSync(folder)) {
        fs.mkdirSync(folder);
        console.log(folder, "created successfully");
    }
} catch (error){
    console.log(error);
}

https.get(url, (res) => {
    let body = "";
    res.on("data",  (chunk) => { body += chunk });
    res.on("end", () => {
        try {
            let json = body
            fs.appendFile('results/posts.text', json, (err) => err ? console.log(err) : console.log('Data saved')) 
        } catch (error){
            console.error(error.message);
        }
    });
}).on("error", (error) => { console.log(error.message)}); 

