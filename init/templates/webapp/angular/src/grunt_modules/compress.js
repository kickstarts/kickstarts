module.exports = {

    dev: {
        options: {
            mode: 'zip',
            archive: '../_dev/_<%= package.name %>.<%= package.version %>.zip'
        },
        expand  : true,
        cwd     : '../_dev/',
        src     : ['**/*'],
        dest    : '../_dev/'
    },
    prod: {
        options: {
            mode: 'gzip',
            archive: '../_prod/_<%= package.name %>.<%= package.version %>',
            ext: '.gz'
        },
        expand  : true,
        cwd     : '../_prod/',
        src     : ['**/*'],
        dest    : '/'
    }

};
