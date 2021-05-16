var app = {
	//initial variables
	canvas  : null,
	context : null,

	//resizing
	width   : 800,
	height  : 400,

	//nodes
	nodes   : [],

	//timing
	timestamp  : 0,
	now        : 0,
	lastUpdate : 0,

	init : function(){
		this.canvas  = document.getElementById('canvas');
		this.context = this.canvas.getContext('2d');

		this.render();
		this.onInit();
	},
	render : function(){
		this.clear();
		this.update();

		window.requestAnimationFrame(this.render.bind(this));
	},
	clear  : function(){
		this.context.clearRect(0, 0, this.width, this.height);
	},
	update : function(){
	    var dt = Date.now() - this.lastUpdate;

		this.onUpdate(dt);

		for(var index in this.nodes){
			var node = this.nodes[index];

			this.context.fillStyle = node.color;
			this.context.fillRect(node.x, node.y, node.width, node.height);

		}


		this.lastUpdate = Date.now();
		this.timestamp+=dt;
	},
	getNode : function(id){
		for(var index in this.nodes){
			var node = this.nodes[index];
			
			if(node.id == id){
				return node;
			}
		}

		return { x : null, y : null, width : null, height : null };
	},

	//events
	onInit   : function(){},
	onUpdate : function(){}
};

window.onload = function(){
	app.init();
};

app.onInit = function(){

	//Restarts App
	app.restart = function(){
		//Resets Ball
		this.getNode('ball').x = app.width/2;
		this.getNode('ball').y = app.height/2;
		this.getNode('ball').x += this.getNode('ball').velocityX;
		this.getNode('ball').y += this.getNode('ball').velocityY;
		this.getNode('ball').speed = 5;
		//Restarts Paddles
		this.getNode('player1').x = 0;
		this.getNode('player1').y = app.height/2-app.width/20;
		this.getNode('player2').x = app.width-app.width/40;
		this.getNode('player2').y = app.height/2-app.width/20;
	};

	this.nodes.push({
		id : 'player1',
		x  : 0,
		y  : app.height/2-app.width/20,
		width  : app.width/40,
		height : app.height/3,
		color  : 'white',
		direction : 0,
		velocity: 0.01
	});

	this.nodes.push({
		id : 'player2',
		x  : app.width-app.width/40,
		y  : app.height/2-app.width/20,
		width  : app.width/40,
		height : app.height/3,
		color  : 'green',
		direction : 0,
		velocity: 0.01
	});

	this.nodes.push ({
		id:'ball',
		x: app.width/2,
		y: app.height/2,
		width  : app.width/100,
		height : app.height/50,
		color: '#05EDFF',
		velocityX:5,
		velocityY:5,
		speed:5
	});


};


app.onUpdate = function(time){

	 //Game Pause
	 if (this.getNode('ball').color == "green") { 
		document.addEventListener('keydown',(event)=>{
			if(event.keyCode == '32') {
				app.resume();
			}
		})
	} else if (this.getNode('ball').color == '#05EDFF'|| this.getNode('ball').color == "purple") {
			document.addEventListener('keydown',(event)=> {
				if(event.keyCode == '32') {
					app.pause();
			}
			})
	}   
	//Pauses App
	app.pause = function(){
		this.getNode('ball').color = "green";
	};
	//Resumes App 
	app.resume = function() {
		//Resets Ball
		this.getNode('ball').color = "purple";
	};

		//Restarts App
		app.restart = function(){
			//Resets Ball
			this.getNode('ball').x = app.width/2;
			this.getNode('ball').y = app.height/2;
			this.getNode('ball').x += this.getNode('ball').velocityX;
			this.getNode('ball').y += this.getNode('ball').velocityY;
			this.getNode('ball').speed = 5;
			//Restarts Paddles
			this.getNode('player1').x = 0;
			this.getNode('player1').y = app.height/2-app.width/20;
			this.getNode('player2').x = app.width-app.width/40;
			this.getNode('player2').y = app.height/2-app.width/20;
	};

	//Paddle Movement 
	document.addEventListener('keydown', (event)=>{
		if(event.keyCode == '87')
		{
			this.getNode('player1').y -= this.getNode('player1').velocity; 

	 } else if (event.keyCode == '83'){
		this.getNode('player1').y += this.getNode('player1').velocity; 
		
		} else if (event.keyCode == '38') {
			this.getNode('player2').y -= this.getNode('player2').velocity; 
		
		} else if (event.keyCode == '40') {
		this.getNode('player2').y += this.getNode('player2').velocity; 
		
		}}) 

	//Ball Movement
	if (this.getNode('ball').color != "green") {
	this.getNode('ball').x += this.getNode('ball').velocityX;
	this.getNode('ball').y += this.getNode('ball').velocityY;
}

	//Checks to see if the ball has collided with the walls
	if(this.getNode("ball").y + this.getNode("ball").width > app.height || this.getNode("ball").y - this.getNode("ball").width < 0) {
		this.getNode("ball").velocityY = -this.getNode("ball").velocityY;
	} 

	//Checks to see if the ball has collided with the paddles
	function collision(b,p){
		p.top = p.y;
		p.bottom = p.y + p.height;
		p.left = p.x;
		p.right = p.x + p.width;
		
		b.top = b.y - b.height;
		b.bottom = b.y + b.height;
		b.left = b.x - b.width;
		b.right = b.x + b.width;

		return p.left < b.right && p.top < b.bottom && p.right > b.left && p.bottom > b.top;
	}

	let currentPlayer = (this.getNode("ball").x < app.width/2) ? this.getNode('player1') : this.getNode('player2');

	if (collision(this.getNode("ball"),currentPlayer))   {

		let collidePoint = (this.getNode("ball").y - (currentPlayer.y + currentPlayer.height/2));

		collidePoint = collidePoint / (currentPlayer.height/2);

		let angleRad = (Math.PI/4) * collidePoint;
		
		let direction = (this.getNode("ball").x + this.getNode("ball").width < app.width/2) ? 1 : -1;
		this.getNode("ball").velocityX = direction * this.getNode("ball").speed * Math.cos(angleRad);
		this.getNode("ball").velocityY = this.getNode("ball").speed * Math.sin(angleRad);
		
		this.getNode("ball").speed += 0.1;
}

//Reset Ball Upon Score
if( this.getNode("ball").x < 0 ){
	console.log("Point for Player 2!")
	app.restart();
}else if( this.getNode('ball').x > app.width){
	console.log("Point for Player 1!")
	app.restart();
}

};