const fs= require("fs");


fs.writeFile("example.txt","Hello World!", (err)=>{
    if(err) throw err;
    console.log('File created!');
});
    
    
    fs.readFile("example.txt", "utf8", (err, data)=>{

        console.log('file content: ',data);
});

    
    fs.writeFile('example.txt','This is the updated content', (err)=>{
        if(err) throw err;
        console.log('File overwritten(updated)!');
        });
       
    fs.appendFile('example.txt','\n This line was added.', (err)=>{
        if(err) throw err;
        console.log('File updated(Appended)!');
    
});

    
    fs.unlink('example.txt', (err)=>{
        if(err) throw err;
        console.log('File deleted!');
    });