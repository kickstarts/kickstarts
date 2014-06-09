///////////////////////////////////////////
// CONTROLLERS                           //
///////////////////////////////////////////

'use strict';

// Build
exports._main = function($scope) {
    $scope.message = 'Main';
    console.log('Main');
};

// Export
module.exports = {

    main: _main

};
