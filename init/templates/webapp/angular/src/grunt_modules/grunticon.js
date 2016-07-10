module.exports = {

    files: [{
        expand: true,
        cwd     : '<%= assets.images %>',
        src     : ['*.svg', '*.png'],
        dest    : '<%= assets.styles %>/icons'
    }],
    options: {
        datasvgcss      : 'icons.data.svg.css',
        datapngcss      : 'icons.data.png.css',
        urlpngcss       : 'icons.fallback.css',
        previewhtml     : 'preview.html',
        loadersnippet   : 'icons.txt',
        pngpath         : '<%= assets.styles %>/icons/png'
    }

};