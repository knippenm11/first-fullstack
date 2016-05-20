'use strict';

angular.module('generatorSmithApp.auth', ['generatorSmithApp.constants', 'generatorSmithApp.util',
    'ngCookies', 'ui.router'
  ])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
