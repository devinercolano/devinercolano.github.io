var module = angular.module('yourApp');

module.controller('HomeCtrl', function ($scope, $rootScope) {

	//github profile url and logo location
	$scope.gitHubUrl = 'https://github.com/devinercolano';
	$scope.github_logo ='icons/github_logo.png';

	//resume url, filename, and logo location
	$scope.resumeUrl = '/public/DevinErcolanoResume.pdf';
	$scope.resumeFile = 'DevinErcolanoResume.pdf'
	$scope.resume_logo ='icons/resume_logo.png';


	//linkedIn profile url and logo location
	$scope.linkedinUrl = 'https://www.linkedin.com/in/devin-ercolano/';
	$scope.linkedin_logo ='icons/linkedIn_logo.png';
 });
