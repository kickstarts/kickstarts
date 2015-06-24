module.exports = {

    options: {
        nokey           : true
    },
    desktop: {
        options: {
            url         : '<%= report.url %>',
            locale      : '<%= report.lang %>', // 'pt_BR',
            strategy    : 'desktop',
            threshold   : '<%= report.ts %>'
        }
    },
    mobile: {
        options: {
            url         : '<%= report.url %>',
            locale      : '<%= report.lang %>', // 'pt_BR',
            strategy    : 'mobile',
            threshold   : '<%= report.ts %>'
        }
    }

};
