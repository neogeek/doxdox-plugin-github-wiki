const Handlebars = require('handlebars');

Handlebars.registerHelper('replaceNewLinesWithBR', block =>
    block.replace(/[\r\n]+/gu, '<br>'));
