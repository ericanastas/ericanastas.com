const fs = require("fs");
const path = require("path");
const process = require("process");


const mddir = path.join(process.cwd(), "_projects/SOM");
const imagesDir = path.join(process.cwd(), "public/images/som");

let mdFiles = fs.readdirSync(mddir);


for (let mdFileName of mdFiles) {
    console.log(`mdFileName: ${mdFileName}`)

    let mdFilePath = path.join(mddir, mdFileName);

    console.log(`    mdFilePath: ${mdFilePath}`)


    let slug = mdFileName.substring(0, mdFileName.length - 3)

    console.log(`    slug: ${slug}`)


    let content = fs.readFileSync(mdFilePath, "utf-8");

    content = processContent(content);

    fs.writeFileSync(mdFilePath, contents, { encoding: "utf-8" });


}


//coverImage: /images/placeholder.png
//coverImages: /images/som/slug/MISSING_COVER

//![Check Family Names 2](Check-Family-Names-2.png)

// let searchPattern = /!\[(.*)\]\(([^/]*)\)/g;
// let replaceText = `![$1](/images/som/${slug}/$2)`


contents = contents.replaceAll(searchPattern, replaceText);


function processContent(content) {

    return content
}