npm i bootstrap

npm install --save-dev @fortawesome/fontawesome-free

npm install jquery --save
npm i --save-dev @types/jquery

npm install @types/googlemaps


 No arquivo tsconfig.json adicionar a linha dentro de "compilerOptions"

"strictPropertyInitialization": false

 No arquivo angular.json adicionar:

            "styles": [
              "node_modules/bootstrap/dist/css/bootstrap.min.css",
              "node_modules/@fortawesome/fontawesome-free/css/fontawesome.min.css",
              "node_modules/ngx-bootstrap/datepicker/bs-datepicker.css",
              "src/styles.scss"
            ],
            "scripts": [ 
              "node_modules/jquery/dist/jquery.js",
              "node_modules/bootstrap/dist/js/bootstrap.min.js",
              "node_modules/jszip/dist/jszip.js"
            ]






