- Usando NPM INSTALL, instale os pacotes:
    npm i bootstrap
    npm install --save-dev @fortawesome/fontawesome-free
    npm install jquery --save
    npm i --save-dev @types/jquery
    npm install @types/googlemaps
    npm install @agm/core --force
    npm install @types/googlemaps@3.39.12 --save-dev


- No arquivo tsconfig.json adicionar as linhas dentro de "compilerOptions"
    "strictPropertyInitialization": false
    "noImplicitAny": false, 

- No mesmo arquivo alterar as linhas:
    "strict": false,
    "noImplicitReturns": false,

- No arquivo angular.json adicionar:
    "styles": [
      "node_modules/bootstrap/dist/css/bootstrap.min.css",
      "node_modules/ngx-bootstrap/datepicker/bs-datepicker.css",
      "src/styles.scss"
    ],
    "scripts": [ 
      "node_modules/jquery/dist/jquery.js",
      "node_modules/bootstrap/dist/js/bootstrap.min.js",
      "node_modules/jszip/dist/jszip.js"
    ]

- Incluir no arquivo src/styles.scss (ou no arquivo principal de style do projeto):
    $fa-font-path: '~@fortawesome/fontawesome-free/webfonts';
    @import "/node_modules/@fortawesome/fontawesome-free/scss/fontawesome"; 
    @import "/node_modules/@fortawesome/fontawesome-free/scss/regular"; 
    @import "/node_modules/@fortawesome/fontawesome-free/scss/solid"; 
    @import "/node_modules/@fortawesome/fontawesome-free/scss/v4-shims"; 
    @import "/node_modules/@fortawesome/fontawesome-free/scss/brands"; 
