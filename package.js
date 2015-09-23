Package.describe({
	name: 'gbit:autoform-mask',
	version: '0.0.1',
	summary: 'Use masks in your AutoForm fields easily',
	git: 'https://github.com/girassolbit/meteor-autoform-mask.git',
	documentation: 'README.md'
});

Package.onUse(function(api) {
	api.versionsFrom('1.2');
	
	api.use('jquery@1.11.3_2');
	api.use('templating@1.1.0');
	api.use('aldeed:autoform@5.3.0');
	
	api.imply('aldeed:autoform');

	api.addFiles(['jquery.mask.js', 'autoform-mask.js'], 'client');
});

Package.onTest(function(api) {
	api.use('ecmascript');
	api.use('tinytest');
	api.use('gbit:autoform-mask');
	api.addFiles('autoform-mask-tests.js');
});
