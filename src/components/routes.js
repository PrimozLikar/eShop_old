angular.module('app').config(function($stateProvider, $urlRouterProvider){

    //  If a user goes to an url that doesn't have a valid state assigned
	$urlRouterProvider.otherwise('/error');

	$stateProvider.state('home',
	{
		url: '/',
		template: '<h1>Homepage</h1>'
	});

	$stateProvider.state('login',
	{
		url: '/login',
		template: '<h1>Login</h1>'
	});

    
	$stateProvider.state('products',
	{
		url: '/products',
		template: '<h1>Products</h1>'
	});
    	
    $stateProvider.state('about',
	{
		url: '/about',
		template: '<h1>Products</h1>'
	});
    
	$stateProvider.state('error',
	{
		url: '/error',
		template: '<h2>Error 404</h2>'
	});

	$stateProvider.state('profile',
	{
		url: '/profile',
		template: '<h1>Your Profile <span class="text-muted"><small>Has an additional ui-view.</small></span></h1><ui-view></ui-view>'
	});

	$stateProvider.state('profile.setup', 
	{
		url: '/setup',
		template: '<div class="well"><h4>Profile Settings</h4></div>'
	})

	$stateProvider.state('profile.cart', 
	{
		url: '/cart',
		template: '<div class="well"><h4>Cart</h4></div>'
	})
    
	$stateProvider.state('parameter', {
		url: '/parameter/:name',
		template: '<h1>Parameter state with a name parameter</h1><p>Name is : {{ name }}</p>',
		controller: function($scope, $stateParams, $state){
            //  Use $stateParams to get url parameters
            $scope.name = $stateParams.name;

            //  If you want to redirect to a state
            //  $state.go('login');

            //  If you want to reload a state
			//  $state.reload();

            //  Check if the current active state is...
            //if($state.is('prva'))
            // $state.is('login');
		}
	});

});

