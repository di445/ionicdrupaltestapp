var app_config = angular.module('drupalionic.configuration', []);


/**
* REPLACE HERE YOUR DRUPAL INSTANCE URL AND API ENDPOINT DEFINED ON YOUR SERVICES
* drupal_instance could be 'http://drupal-1001.rhcloud.com/'
* api_endpoint could be: simplyfccapp
**/
app_config.constant('drupal_instance','http://drupal-1001.rhcloud.com/');
app_config.constant('api_endpoint','simplyfccapp');

