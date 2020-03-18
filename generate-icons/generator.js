const del = require('del');
const fs = require('fs-extra');

function uppercamelcase(str) {
  return str.toLowerCase().replace(/(?:^\w|[A-Z]|\b\w)/g, (firstLetter) => {
    return firstLetter.toUpperCase();
  }).replace(/[-_]/g, '');
}


const iconsSrcFolder = 'node_modules/feather-icons/dist/icons';

const iconsDestFolder = 'projects/ng-feather/src/icons/svg';
const indexFile = 'projects/ng-feather/src/icons/index.ts';
const allFile = 'projects/ng-feather/src/icons/all.ts';

let exportAllString = `\nexport const allIcons = {\n`;

const componentTemplate = fs.readFileSync('./generate-icons/component.ts.tpl', 'utf-8');

return Promise.resolve()
  // delete feather folder and index
  .then(() => del([iconsDestFolder, indexFile, allFile]))
  // create destination folder
  .then(() => fs.mkdirSync(iconsDestFolder))
  .then(() => {
    fs.readdirSync(`${iconsSrcFolder}`).forEach(filename => {
      'use strict';
      const iconName = stripExtension(filename);
      const exportName = uppercamelcase(iconName);

      const markup = fs.readFileSync(`${iconsSrcFolder}/${filename}`);
      const payload = String(markup).match(/^<svg[^>]+?>(.+)<\/svg>$/);

      let output = componentTemplate
        .replace(/__EXPORT_NAME__/g, exportName)
        .replace(/__ICON_NAME__/g, iconName)
        .replace(/__PAYLOAD__/, payload[1]);

      fs.writeFileSync(`${iconsDestFolder}/${iconName}.ts`, output, 'utf-8');

      fs.appendFileSync(
        indexFile,
        `export { ${exportName} } from './svg/${iconName}';\n`
      );

      fs.appendFileSync(
        allFile,
        `import { ${exportName} } from './svg/${iconName}';\n`
      );

      exportAllString += `  ${exportName},\n`;
    });

    exportAllString += `};\n`;

    fs.appendFileSync(
      allFile,
      exportAllString
    );

    fs.appendFileSync(
      indexFile,
      `\nexport { allIcons } from './all';\n`
    );
  })
  .catch((err) => console.log(err));


function stripExtension(str) {
  return str.substr(0, str.lastIndexOf('.'));
}
