/*
 * Necessários: phantomjs, async e system
 * Uso: phantomjs capture.js <dist> <project> <url>
 *
 * Onde:
 * <dist>    : pasta destino (ex.: ./screenshoots).
 * <project> : nome do projeto .
 * <url>     : a URL que será avaliada para capturas de telas.
 *
 */
var async   = require('async'),
    system  = require('system'),
    dist    = system.args[1],
    project = system.args[2],
    url     = system.args[3],
    sizes   = [         // Resoluções
        [320, 480],     // 320x480   - iPhone (portrait)
        [480, 240],     // 480x240   - iPhone (landscape)
        [320, 568],     // 320x568   - Android
        [768, 1024],    // 768x1024  - iPad (portrait)
        [1024, 768],    // 1024x768  - iPad (landscape) e Desktops
        [1280, 800],    // 1280x800  - Common Desktops
        [1440, 900],    // 1440x900  - Desktops mais recentes
        [1660, 1050]    // 1660x1050 - Tela grande
    ];

function capture(sizes, callback) {
    var page = require('webpage').create();
    page.viewportSize = {
        width: sizes[0],
        height: sizes[1]
    };
    page.zoomFactor = 1;
    page.open(url, function (status) {
        var savedir = url.replace(/[^a-zA-Z0-9]/gi, '-').replace(/^https?-+/, ''),
            filename = project + '_' + sizes[0] + 'x' + sizes[1] + '.png';
        page.render('./' + dist + '/' + savedir + '/' + filename); // Diretório das telas capturadas
        page.close();
        callback.apply();
    });
}

async.eachSeries(sizes, capture, function (e) {
    if (e) {
        console.log(e);
    }
    console.log('Captura de telas realizada com sucesso!'); // Mensagem de sucesso!
    phantom.exit();
});
