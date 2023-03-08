const fs = require('fs');

// const quote = "Everything is possible in this world";

// fs.writeFile("./awesome.text",quote,(err)=>{
//     console.log("Completed writing of awesome.html");
// })



// const quote2 = "Live More,worry less";

// for(i=1;i<=10;i++){
//     fs.writeFile(`./backup/text-${i}.html`,quote2,(err)=>{
//         console.log(`Completed writing of text-${i}.html`);
//     });
// }



// const quote3 = "Happy Day :):):)";

// const[, , noOfFiles]= process.argv;
// console.log(noOfFiles)
// for(let i = 1;i<=15;i++){
//     fs.writeFile(`./backup/text-${i}.txt`,quote3,(err)=>{
//         console.log('Completed writing text-${i}.html');
//     });
// }


// fs.readFile("./awesome45.html","utf-8",(err,data)=>{
//     if(err){
//         console.log("Error :(",err)
//     }
//     console.log("The content of this file :- Our content is not for kids and ",data)
// })


// const niceQuotes = "You are very hardworking person as my point of view !!";

// fs.readdir("./backup", (err, data) => {
//       //console.log(data);
//       data.forEach((filename) => {
//         fs.unlink(`./backup/${filename}`, (err) => {
//           console.log("Deleted Successfully");
//         });
//       });
//     });




// const[, , noOfFiles]=process.argv;
// console.log(process.argv);
// for(let i = 1;i<=noOfFiles;i++){
//     fs.writeFileSync(`./backup/text-${i}.html`,niceQuote);
//     console.log("Finished writing should be of files",i);
// }



const filename = fs.readdirSync("./backup");
filename.forEach((file)=>{
    console.log(file);
});