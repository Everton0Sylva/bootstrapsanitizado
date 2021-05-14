Exemplos de uso dos componentes:

O que for ICON deve utilizar o conteudo da CLASS do @fortawesome, para pesquisar icones: 
https://fontawesome.com/icons?d=gallery&p=2&m=free

Prefix não aceita icones.

COMPONENTE CHECKBOX-GROUP:
    <app-king-b-checkgroup 
    (checkgroupEvent)="returnText($event)" 
    [name]="'checkgroup'" 
    [label]="'Caixas de seleçãos'"
    [error]="'Ao menos uma Caixa de seleção deve ser selecionada'" 
    [form]="formulario" 
    [setOpts]="checkOpts">
    </app-king-b-checkgroup>

COMPONENTE CHECKBOX: 
    <app-king-b-checkbox 
    (checkEvent)="returnText($event)" 
    [name]="'checkbox'" 
    [label]="'Caixa de seleção'"
    [error]="'Caixa de seleção é'" 
    [form]="formulario">
    </app-king-b-checkbox>

COMPONENTE DATA/HORA: 
    <app-king-b-data-hora 
    (dateEvent)="returnText($event)" 
    [name]="'datetime'" 
    [label]="'Data & Hora'"
    [error]="'Data & Hora é'" 
    [form]="formulario" 
    [prefix]="'date'" 
    [icon1]="'far fa-calendar-alt'"
    [icon2]="'far fa-clock'">
    </app-king-b-data-hora>

COMPONENTE CONSULTA:
    <app-king-b-consulta 
    (filterEvent)="returnText($event)" 
    [name]="'list'" 
    [label]="'Consulta'" 
    [error]="'Consulta é'"
    [form]="formulario" 
    [prefix]="'Consulta'" 
    [icon]="'fas fa-th-list'" 
    [setOpts]="valuesSelect">
    </app-king-b-consulta>

COMPONENTE SELEÇÃO:
    <app-king-b-select 
    (selectEvent)="returnText($event)" 
    [name]="'select'" 
    [label]="'Selecionar'"
    [error]="'Selecionar é'" 
    [form]="formulario" 
    [prefix]="'Busca'" 
    [icon]="'fas fa-th-list'"
    [setOpts]="valuesSelect">
    </app-king-b-select>

COMPONENTE HORA:
    <app-king-b-time 
    (timeEvent)="returnText($event)" 
    [name]="'time'" 
    [label]="'Hora'" 
    [error]="'Hora é'"
    [form]="formulario" 
    [icon]="'far fa-clock'">
    </app-king-b-time>

COMPONENTE DATA:
    <app-king-b-date 
    (dateEvent)="returnText($event)" 
    [name]="'date'" 
    [label]="'Data'" 
    [error]="'Data é'"
    [form]="formulario" 
    [prefix]="'date'" 
    [icon]="'far fa-calendar-alt'">
    </app-king-b-date>

COMPONENTE IMAGEM:
    <app-king-b-image 
    (imageEvent)="returnText($event)" 
    [name]="'image'" 
    [label]="'Imagem'" 
    [error]="'Imagem é'"
    [form]="formulario" 
    [icon]="'far fa-images'" 
    [multiple]="true">
    </app-king-b-image>

COMPONENTE EMAIL:
    <app-king-b-email 
    (emailEvent)="returnText($event)" 
    [name]="'email'" 
    [label]="'Email'" 
    [error]="'Email é'"
    [form]="formulario" 
    [icon]="'fas fa-at'">
    </app-king-b-email>

COMPONENTE NUMBER:
    <app-king-b-number 
    (numberEvent)="returnText($event)" 
    [name]="'number'" 
    [label]="'Número'" 
    [error]="'Número é'"
    [form]="formulario" 
    [prefix]="'Nº'" 
    [icon]="'fas fa-list-ol'">
    </app-king-b-number>

COMPONENTE MONEY:
    <app-king-b-money 
    (moneyEvent)="returnText($event)" 
    [name]="'money'" 
    [label]="'Moeda'" 
    [error]="'Moeda é'"
    [form]="formulario" 
    [prefix]="'R$'" 
    [icon]="'fas fa-dollar-sign'">
    </app-king-b-money>


COMPONENTE TEXT AREA:
    <app-king-b-textarea 
    (textEvent)="returnText($event)" 
    [name]="'textarea'" 
    [label]="'Caixa de Texto'"
    [error]="'Caixa de Texto é'" 
    [form]="formulario" 
    [prefix]="'#'" 
    [icon]="'fas fa-text-height'">
    </app-king-b-textarea>

COMPONENTE SENHA:
    <app-king-b-senha 
    (passwdEvent)="returnText($event)" 
    [name]="'passwd'" 
    [label]="'Senha'" 
    [error]="'Senha é'"
    [form]="formulario" 
    [icon]="'fas fa-asterisk'">
    </app-king-b-senha>


COMPONENTE TEXTO:
    <app-king-b-text 
    (textEvent)="returnText($event)" 
    [name]="'text'" 
    [label]="'Texto'" 
    [error]="'Texto é'"
    [form]="formulario" 
    [prefix]="'#'" 
    [icon]="'fas fa-hashtag'">
    </app-king-b-text>

COMPONENTE TELEFONE:
    <app-king-b-telefone 
    (phoneEvent)="returnText($event)" 
    [name]="'phone'" 
    [label]="'Telefone'" 
    [error]="'Telefone é'"
    [form]="formulario" 
    [icon]="'fas fa-phone'">
    </app-king-b-telefone>