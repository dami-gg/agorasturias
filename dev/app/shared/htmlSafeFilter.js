agorasturiasApp.filter('htmlSafe',['$sce',function($sce){
  
    return $sce.trustAsHtml;
}]);