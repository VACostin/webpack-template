If you want to start from 0 (not cloning this repo)

0. set your project structure to look like this
1. npm init -yes
2. npm install webpack webpack-cli --save-dev
3. npm install --save-dev html-webpack-plugin
4. set package.json "private": true and remove "main": "index.js"
5. npm install your_packages --save(-dev)
6. Loading unsupported assets -> npm install --save-dev:
    6.1 CSS: style-loader css-loader
    6.2 CSV, TSV, XML: csv-loader xml-loader
    6.3 toml, yaml, json5: toml yamljs json5
7. npm run build ("npx webpack" embedded in package.json)

If you're cloning this repo just npm install & npm run build.