if( Template.afFieldInput ){

	Template.afFieldInput.onCreated(function(){
		var self = this.data;
		if( self.hasOwnProperty('mask') ){
			this.selector = 'input[name=\'' + self.name +'\']';
			
			if( self.mask.constructor == String )
				$(this.selector).mask( self.mask );
			else if( self.mask.constructor == Object )
				$(this.selector).mask( self.mask.syntax, self.mask.options);

			delete self.mask;
		}
	});

	Template.afFieldInput.onDestroyed(function() {
		var selector = this.selector;
		if( selector ){
			$( selector ).unmask();
		}
	});

}