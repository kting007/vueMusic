1.注入服务
myCtr.$inject = ['$scope','debounce'].
2.直接使用debounce例如
html 内容如下
<input type="text" name="activities" ng-model="inputValue" ng-change="changeValue"></input>
js内容如下：
function myCtr($scope，debounce){
    $scope.changeValue = debounce(function(){
        this.currentValue = inputValue;
    },500)
}