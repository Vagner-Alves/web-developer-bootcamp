const fs = require('fs');
const folderName = process.argv[2] || 'Project'


fs.mkdirSync(folderName);

try{
    fs.writeFileSync(`${folderName}/index.html`,''); // i removed string 
    fs.writeFileSync(`${folderName}/style.css`,'');
    fs.writeFileSync(`${folderName}/app.js`,'');

}catch(error){
    console.log('unfortunately We catch an error, see it below')
    console.log(e)
}
