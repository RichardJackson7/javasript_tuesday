function Calculator () 								//créer plusieurs attributs
{
	that = this, 									//that: attribut de notre instance
	this.field = "input#number", 					//actions d'input 
	this.button = "#body .buttons", 				//déclencher les actions
	this.init =false,

	this.run = function() 							// pour initialiser les méthodes à suivre
	{
		$(this.button). click(function (){ 			//quand le bouton est cliqué
			var value = $(this).html();				//on initialise une instance (jQuery style) et on récupère la valeure du bouton
			
			if (that.init==false)					
			{
				$(that.field).val("");				//pour que le 0 du début s'efface quand on entre des valeures
				that.init = true;

			}

			if (value != "=")									//pour ne pas afficher le égal dans le bar
			$(that.field).val($(that.field).val() + value);		//that est ainsi reconnu sous jQuery car on lui a attribué this	

			that.dispatcher(value);								//appeler le dispatcher et lui donner un paramètre: valeur reçu

		});

	},

	this.dispatcher = function (value) 							//orienter sur quelles opérations effectuées
	{
		if($(this.field).val().indexOf("/") != -1)				// != -1 veut dire que s'il n'y a pas d'erreur
			this.operation(value, "/");

		if($(this.field).val().indexOf("*") != -1)					
			this.operation(value, "*");

		if($(this.field).val().indexOf("+") != -1)					
			this.operation(value, "+");

		if($(this.field).val().indexOf("-") != -1)					
			this.operation(value, "-");

	},

	this.operation = function(value, symbol)
	{
		var numbers = $(this.field).val().split(symbol),	//valeur du champ , split sert à séparer les valeures sous forme de tableau 
															//dès qu'il trouve un symbole
			result;

		if (symbol == "/")
			result = numbers[0] / numbers[1];				// 0 car c'est la première valeure d'un tableau quant tu rentres une valeure
															// dans la calculette
		if (symbol == "*")
			result = numbers[0] * numbers[1];	

		if (symbol == "+")
			result = parseFloat(numbers[0]) + parseFloat(numbers[1]);	//+ est utilisé quand on concaténe, il faut utiliser parsefloat

		if (symbol == "-")
			result = numbers[0] - numbers[1];

		result = Math.round((result) * 100) / 100;

		if (numbers.length > 1)
		{
			if (value == "=")
				$(this.field).val(result);
			else if (numbers.length >2)
				$(this.field).val(result * symbol);

		}

		else if (x === "clear") {
		arrayNumbers = [];
		$(this.field).val(0);
	}
	};

}