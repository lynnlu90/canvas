(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 640,
	height: 480,
	fps: 24,
	color: "#EFECF3",
	webfonts: {},
	manifest: []
};



lib.webfontAvailable = function(family) { 
	lib.properties.webfonts[family] = true;
	var txtFilters = lib.webFontTxtFilters && lib.webFontTxtFilters[family] || [];
	for(var f = 0; f < txtFilters.length; ++f) {
		txtFilters[f].updateCache();
	}
};
// symbols:



(lib.tissue_shake = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FCFCFE").s().p("AovIwIAAxfIC6CgICzigIDCCtIC5itICwC7IDHi7IAARfg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-56,-56,112.2,112.2);


(lib.coupon = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FCFCFE").s().p("AgpBiQgUgRAAgfIAAhjQAAggAUgRQASgQAXAAQAZAAASAQQATARAAAgIAABjQAAAfgTARQgSARgZAAQgXAAgSgRgAgdgvIAABfQAAAiAdABQAegBABgiIAAhfQgBgigegBQgdABAAAig");
	this.shape.setTransform(26.1,-5.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FCFCFE").s().p("AgEBwQgUgDgMAAQgNAAgPAGIAAgeQALgHAMAAQAGgOAAgNQAAgHgCgJIgFgSIgaAAIAAgTIARAAQgLgZAAgXQAAgfARgRQAQgQAaAAQAeAAAQASQAPASAAAdIggAAQgBgjgZAAQgeABAAAiQAAAaALAVIAyAAIAAATIgqAAQAFAPABANQgBASgJARIAQACQAKADAIAAQAHAAAIgDQAIgCAHgGIAUAZQgLAJgMAEQgMADgKAAg");
	this.shape_1.setTransform(7.1,-5.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FCFCFE").s().p("ApqAkIAAhHITVAAIAABHg");
	this.shape_2.setTransform(0,16.5,0.952,1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#99FFFF").s().p("Ar8FxIAArhIX4AAIAALhg");
	this.shape_3.setTransform(0,0,0.812,0.747);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FCFCFE").s().p("AAABxIAAi/IgeAYIAAgjIAegXIAfAAIAADhg");
	this.shape_4.setTransform(24.7,-5.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#99FFCC").s().p("Ar8FxIAArhIX4AAIAALhg");
	this.shape_5.setTransform(0,0,0.812,0.747);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FCFCFE").s().p("Ag9ByIAAgeIBUhuQAFgGABgGIABgLQABgNgIgJQgIgKgOAAQgMAAgIAJQgKAIgBAQIgfAAQAAgcASgTQASgSAZAAQAaAAASASQASATABAcQAAAWgOASIhFBaIBTAAIAAAgg");
	this.shape_6.setTransform(26,-6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#99FF99").s().p("Ar8FxIAArhIX4AAIAALhg");
	this.shape_7.setTransform(0,0,0.812,0.747);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FCFCFE").s().p("AgmBlQgTgOgEgfIAfAAQAFAaAZAAQAMAAAGgFQAHgFACgGQADgIAAgJIABgQQAAgUgGgMQgEgEgGgDQgHgDgIAAQgIAAgHAEQgHAFgGAIIgeAAIAAh5IB0AAIAAAgIhWAAIAAA0QAQgMARAAQAOAAAKAEQAKAFAGAHQAKAKADAMIADAPIACAYQgBAVgDAMQgDAMgHAKQgHAIgMAHQgMAIgRAAQgUAAgTgNg");
	this.shape_8.setTransform(26.2,-5.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#99FF66").s().p("Ar8FxIAArhIX4AAIAALhg");
	this.shape_9.setTransform(0,0,0.812,0.747);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FCFCFE").s().p("AguBxIBJjBIg5AAIAAAhIgfAAIAAhBIB7AAIAAAgIhJDBg");
	this.shape_10.setTransform(26.6,-5.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#99FF33").s().p("Ar8FxIAArhIX4AAIAALhg");
	this.shape_11.setTransform(0,0,0.812,0.747);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#99FF00").s().p("Ar8FxIAArhIX4AAIAALhg");
	this.shape_12.setTransform(0,0,0.812,0.747);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape,p:{x:26.1}}]}).to({state:[{t:this.shape_5},{t:this.shape_2},{t:this.shape_1},{t:this.shape_4}]},1).to({state:[{t:this.shape_7},{t:this.shape_2},{t:this.shape_1},{t:this.shape_6}]},1).to({state:[{t:this.shape_9},{t:this.shape_2},{t:this.shape_1},{t:this.shape_8}]},1).to({state:[{t:this.shape_11},{t:this.shape_2},{t:this.shape_1},{t:this.shape_10}]},1).to({state:[{t:this.shape_12},{t:this.shape_2},{t:this.shape_1},{t:this.shape_4},{t:this.shape,p:{x:41.5}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-62,-27.6,124.2,55.3);


(lib.btn_re = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#99FF66").s().p("AAXA9IAAhHQAAgNgHgGQgGgHgKAAQgJAAgHAHQgGAGAAANIAABHIgYAAIAAh3IAYAAIAAAMIABAAQALgOARAAQAPAAAMALQAMAKAAAVIAABPg");
	this.shape.setTransform(20.9,0.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#99FF66").s().p("AgKBVIAAh3IAVAAIAAB3gAgKg8IAAgYIAVAAIAAAYg");
	this.shape_1.setTransform(11.7,-2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#99FF66").s().p("AgWA7QgIgDgFgFQgLgKAAgQQAAgQAKgJQAKgJATAAIAeAAIAAgNQAAgQgXAAQgIAAgFACQgFACgEAFIgSgOQANgSAbAAQAUAAAOAJQANAJAAAWIAABRIgYAAIAAgLQgDAHgIADQgGADgLAAQgJAAgIgDgAgYAXQABAHAFAEQAFAFAMAAQANAAAFgEQAGgEAAgOIAAgIIgaAAQgVAAAAAOg");
	this.shape_2.setTransform(2.3,0.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#99FF66").s().p("AgrBCIASgPQAFAEAGADQAFAEAHAAQAKAAAHgHQAIgHAAgMIAAgNQgMAOgQAAQgMAAgHgFQgIgEgFgGQgEgGgCgIQgCgIgBgXQABgZACgIQACgJAEgGQAFgFAIgFQAHgEAMAAQAPAAANAOIAAgNIAYAAIAAB1QgBAbgPANQgOANgUAAQgYAAgQgUgAgKg6IgHAGQgDAEgBAFIgBAUIABATQABAEADAEQACADAFADQAFADAFAAQAHAAAEgDIAIgGQACgEABgEIABgTIgBgUQgBgFgCgEIgIgGQgEgDgHAAQgFAAgFADg");
	this.shape_3.setTransform(-9.7,2.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#99FF66").s().p("AgWA7QgHgDgGgFQgLgKAAgQQAAgQAKgJQAJgJATAAIAfAAIAAgNQAAgQgXAAQgIAAgFACQgFACgDAFIgTgOQAOgSAaAAQAUAAANAJQANAJABAWIAABRIgYAAIAAgLQgEAHgGADQgHADgKAAQgKAAgIgDgAgXAXQgBAHAGAEQAFAFALAAQAOAAAFgEQAGgEAAgOIAAgIIgaAAQgVAAABAOg");
	this.shape_4.setTransform(-22.2,0.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FCFCFE").s().p("AjdClQg/AAgtgtQgsgtgBg/IAAgXQABg/AsgtQAtgtA/AAIG7AAQA/AAAtAtQAsAtABA/IAAAXQgBA/gsAtQgtAtg/AAg");
	this.shape_5.setTransform(0,1.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-37.5,-17.9,75,36);


(lib.btn_more = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#99FF66").s().p("AgNA7IgIgEIgJgGQgIgHgEgMQgFgLAAgTQAAgQAFgMQAEgMAHgHQAHgIAJgDQAIgDAHAAQAUAAANAOQAPAOAAAYIAAASIhHAAQgBAOAJAIQAIAIAKAAQAOAAAMgMIARAPQgSAUgYAAQgIAAgJgDgAgQgfQgGAHgBAPIAvAAQAAgPgHgHQgHgHgKAAQgJAAgHAHg");
	this.shape.setTransform(20.7,0.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#99FF66").s().p("AgmA9IAAh3IAXAAIAAAMIABAAQALgOARAAQAPAAAKAJIgRAVQgIgGgIAAQgHAAgGAGQgHAGgBANIAABIg");
	this.shape_1.setTransform(11.1,0.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#99FF66").s().p("AgVA4QgIgEgFgGQgHgHgDgKQgDgKAAgTQAAgSADgKQADgKAHgHQAFgGAIgFQAJgFAMAAQANAAAJAFQAIAFAGAGQAGAHAEAKQACAKAAASQAAATgCAKQgEAKgGAHIgHAFQgCADgFACQgJAFgNABQgMgBgJgFgAgJgiQgGACgCAEQgEAFgBAFQgBAHgBALQABAMABAGQABAGAEAEQACAEAGADQAEACAFAAQAGAAAFgCQAFgDADgEQADgEABgGIACgSIgCgSQgBgFgDgFQgDgEgFgCQgFgDgGAAQgFAAgEADg");
	this.shape_2.setTransform(-0.6,0.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#99FF66").s().p("AA8A9IAAhGQAAgNgGgHQgHgHgLAAQgLAAgGAHQgIAHAAANIAABGIgWAAIAAhGQABgNgHgHQgHgHgKAAQgMAAgGAHQgIAHABANIAABGIgYAAIAAh3IAYAAIAAANIAAAAQAMgPAUAAQANAAAHAEQAHAFAFAHQAPgQAYAAQAPAAAMALQANALAAAUIAABPg");
	this.shape_3.setTransform(-16.9,0.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FCFCFE").s().p("AjdClQg/AAgtgtQgsgtgBg/IAAgXQABg/AsgtQAtgtA/AAIG7AAQA/AAAtAtQAsAtABA/IAAAXQgBA/gsAtQgtAtg/AAg");
	this.shape_4.setTransform(0,1.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-37.5,-17.9,75,36);


(lib.tissue_up = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.tissue_shake();
	this.instance.setTransform(0,56,1,1,0,0,0,0,56);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleY:0.93},3).to({scaleY:1},3).to({scaleY:0.92},2).to({scaleY:1},3).wait(13));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-56,-56,112.2,112.2);


(lib.tissue = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.tissue_up();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-56,-56,112.2,112.2);


(lib.result = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#99FF66").s().p("AALBWIgVgFIgXgGQgJgCgMAEIADgXQAJgDAKABQAFgKACgKIAAgMIgCgOIgTgCIACgOIANACQgGgUADgRQAEgWAOgLQANgLARADQAYAEAKAPQAJAPgDAVIgXgDQACgagUgDQgTgDgFAZQgDATAHASIAkAEIgCAPIgfgFQACAMgBAKQgCANgJALIANADQAFAEAGAAQAFABAHgBIAMgEIAMAUQgJAGgKABIgIABIgIgBg");
	this.shape.setTransform(-0.5,-31.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#99FF66").s().p("Ak5BHQgCgRAmg2QAWgdBJgWQBGgUBagEQBagFBKAPQBTAPAkAiQA/A6gMAYQgGAMgTgBQjKhWjVAiQhrARhEAjIgDAAQgFAAgCgGg");
	this.shape_1.setTransform(0.6,-46.5,0.239,0.239);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FCFCFE").s().p("AlWNkQiphWhMinQiGknCulDQBWiiByhoQATgSATgcQAng4ACguQg9hXgmhdQhLi6B5giIA4gFQBAADApAjQAIgnAdgnQA7hPBrAAQBtAAAhBRQARAogGApIABADQABADAGgBQARgEAxgpQAdgXAiAEQAhAFAaAbQAbAcAIAnQAJArgRArQgeBNg+BOIg5A/IAMA6QAVBCAuAuQCkCkBECTQCQE8ivFDQg+BxicBHQiZBGizACIgMABQi4AAiShKg");
	this.shape_2.setTransform(0.3,-36.5,0.239,0.239);

	this.btn_more = new lib.btn_more();
	this.btn_more.setTransform(42,41.5,0.8,0.8);
	new cjs.ButtonHelper(this.btn_more, 0, 1, 1);

	this.btn_re = new lib.btn_re();
	this.btn_re.setTransform(-40,41.5,0.8,0.8);
	new cjs.ButtonHelper(this.btn_re, 0, 1, 1);

	this.txt_result = new cjs.Text("You have won £10!", "bold 24px 'DIN Alternate'", "#FCFCFE");
	this.txt_result.name = "txt_result";
	this.txt_result.textAlign = "center";
	this.txt_result.lineHeight = 30;
	this.txt_result.setTransform(-2,-12.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#99FF66").s().p("Ay9LLIAA2UMAl8AAAIAAWUg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.txt_result},{t:this.btn_re},{t:this.btn_more},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-121.5,-71.5,243,143);


(lib.coupons = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_23 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(23).call(this.frame_23).wait(1));

	// scr_end
	this.result = new lib.result();
	this.result.setTransform(0,-3.5);
	this.result.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.result).to({alpha:1},23).wait(1));

	// coupon5
	this.coupon5 = new lib.coupon();
	this.coupon5.setTransform(0,65);

	this.timeline.addTween(cjs.Tween.get(this.coupon5).to({y:0,alpha:0},23).wait(1));

	// coupon4
	this.coupon4 = new lib.coupon();
	this.coupon4.setTransform(67,0);

	this.timeline.addTween(cjs.Tween.get(this.coupon4).to({x:0,alpha:0},23).wait(1));

	// coupon3
	this.coupon3 = new lib.coupon();
	this.coupon3.setTransform(-67,0);

	this.timeline.addTween(cjs.Tween.get(this.coupon3).to({x:0,alpha:0},23).wait(1));

	// coupon2
	this.coupon2 = new lib.coupon();
	this.coupon2.setTransform(67,-65);

	this.timeline.addTween(cjs.Tween.get(this.coupon2).to({x:0,y:0,alpha:0},23).wait(1));

	// coupon1
	this.coupon1 = new lib.coupon();
	this.coupon1.setTransform(-67,-65);

	this.timeline.addTween(cjs.Tween.get(this.coupon1).to({x:0,y:0,alpha:0},23).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-129,-92.6,258.2,185.3);


// stage content:



(lib.ly_an_smart_tissue_box = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var gs = this;
		var width = stage.canvas.width;
		var height = stage.canvas.height;
		
		var remain = count = 5;
		var c1, c2, c3, c4, c5;
		var cp = [];
		cp[0] = gs.display.coupon1;
		cp[1] = gs.display.coupon2;
		cp[2] = gs.display.coupon3;
		cp[3] = gs.display.coupon4;
		cp[4] = gs.display.coupon5;
		
		init();
		
		function init() {
			remain = count = 5;
			update_txt();
			for (var i = 0; i < cp.length; i++) {
				cp[i].visible = false;
			}
			gs.tissue.visible = true;
		}
		
		function update_txt() {
			gs.remain_txt.text = remain;
			gs.next_txt.text = count;
		}
		
		gs.tissue.on('click', function() {
			gs.tissue.visible = false;
			remain--;
			update_txt();
			showCoupon();
		
			if (remain != 0) {
				var timer = setInterval(function() {
					if (count == 0) {
						count = 5;
						clearInterval(timer);
						gs.tissue.visible = true;
					} else count--;
					update_txt();
				}, 1000);
			} else gs.next_txt.text = 'N/A';
		});
		
		function showCoupon() {
			var n = random(0, 6);
			if (n <= 2) c = n;
			else if (n == 3) c = 5;
			else if (n == 4) c = 7;
			else if (n == 5) c = 10;
		
			if (remain == 4) {
				c1 = c;
				cp[0].gotoAndStop(n);
				cp[0].visible = true;
			} else if (remain == 3) {
				c2 = c;
				cp[1].gotoAndStop(n);
				cp[1].visible = true;
			} else if (remain == 2) {
				c3 = c;
				cp[2].gotoAndStop(n);
				cp[2].visible = true;
			} else if (remain == 1) {
				c4 = c;
				cp[3].gotoAndStop(n);
				cp[3].visible = true;
			} else if (remain == 0) {
				c5 = c;
				cp[4].gotoAndStop(n);
				cp[4].visible = true;
				var total = c1 + c2 + c3 + c4 + c5;
				setTimeout(function() {
					gs.display.result.visible = true;
					gs.display.gotoAndPlay(1);
					gs.display.result.txt_result.text = 'You have won ' + total + ' !';
				}, 1000);
			}
		}
		
		gs.display.result.btn_re.on('click', function() {
			init();
			gs.display.gotoAndStop(0);
		});
		gs.display.result.btn_more.on('click', function() {
			window.open('https://youtu.be/jHQGyMBtE9Y');
		});
		
		/*
		function showCoupon() {
			var n = random(0, 6);
			var c = new lib.coupon();
			c.gotoAndStop(n);
			c.x = width / 6 * 5;
			c.y = (5 - remain) * 80;
			display.push(c);
			gs.addChild(c);
		}
		*/
		
		function random(min, max) {
			return Math.floor((Math.random() * (max - min)) + min);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// text
	this.next_txt = new cjs.Text("5", "bold 32px 'DIN Alternate'", "#333333");
	this.next_txt.name = "next_txt";
	this.next_txt.textAlign = "center";
	this.next_txt.lineHeight = 39;
	this.next_txt.setTransform(370,387.4);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AAJA1QgJgBgDgFQgGgFABgJIAAgvIgIAAIAAgMIAIAAIAAgaIANAAIAAAaIAMAAIAAAMIgMAAIAAAtQAAAGAGAAIAGAAIAAAQg");
	this.shape.setTransform(384,376.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AAQAoIgQgbIgPAbIgTAAIAbgoIgagnIATAAIAOAaIAPgaIATAAIgbAnIAcAog");
	this.shape_1.setTransform(378,377.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AgIAnIgGgCIgFgFQgFgEgDgIQgEgIAAgMQAAgLADgHQADgJAFgEQAEgFAGgCQAGgCAEAAQANAAAJAJQAKAJAAAQIAAALIgvAAQAAALAFAEQAFAFAHABQAJgBAIgHIALAKQgMANgQAAQgEAAgGgCgAgKgUQgFAFAAAJIAfAAQAAgJgFgFQgEgFgHAAQgGAAgEAFg");
	this.shape_2.setTransform(370.1,377.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("AAPApIAAgvQAAgIgEgFQgFgFgGAAQgFAAgFAFQgEAFAAAIIAAAvIgQAAIAAhPIAQAAIAAAIIABAAQAHgJAKAAQALAAAHAGQAJAIAAAOIAAA0g");
	this.shape_3.setTransform(361.9,377.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("AgcArIAMgKIAHAGQAEACAEAAQAGAAAFgEQAFgGAAgIIAAgIQgIAJgKAAQgIABgFgEQgFgDgDgEQgDgDgBgGQgCgFAAgPQAAgRACgFQABgGADgEQADgDAFgEQAFgDAIAAQAKAAAIAKIAAgJIAQAAIAABOQAAASgKAJQgKAJgMAAQgQgBgLgOgAgGgmIgFAEQgCACAAAEIgBANIABANQAAACACACIAFAEQADACADAAQAEAAADgCIAFgEQACgCABgCIAAgNIAAgNQgBgEgCgCIgFgEIgHgCIgGACg");
	this.shape_4.setTransform(283,378.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#333333").s().p("AAPAoIAAguQAAgIgEgFQgEgFgHABQgFgBgEAFQgFAFAAAIIAAAuIgQAAIAAhPIAQAAIAAAJIABAAQAHgKALAAQAKAAAIAIQAHAGABAOIAAA0g");
	this.shape_5.setTransform(274.7,377.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#333333").s().p("AgGA4IAAhPIANAAIAABPgAgGgnIAAgRIANAAIAAARg");
	this.shape_6.setTransform(268.6,375.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#333333").s().p("AAPAoIAAguQAAgIgEgFQgFgFgGABQgFgBgEAFQgFAFAAAIIAAAuIgQAAIAAhPIAQAAIAAAJIAAAAQAIgKALAAQAJAAAJAIQAHAGABAOIAAA0g");
	this.shape_7.setTransform(262.4,377.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#333333").s().p("AgHA4IAAhPIAOAAIAABPgAgHgnIAAgRIAOAAIAAARg");
	this.shape_8.setTransform(256.3,375.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#333333").s().p("AgOAnQgFgBgEgEQgHgHAAgLQAAgKAGgGQAHgFAMgBIAUAAIAAgIQAAgLgPAAQgFAAgDACQgEABgCAEIgMgKQAJgMARAAQANAAAJAGQAJAGAAAPIAAA1IgQAAIAAgHIAAAAQgCAEgFACQgEACgGAAQgHAAgFgCgAgPAQQAAAEADADQAEADAIAAQAHAAAFgDQADgCAAgJIAAgGIgRAAQgNAAAAAKg");
	this.shape_9.setTransform(250,377.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#333333").s().p("AAoApIAAgvQAAgIgFgFQgEgEgHAAQgHAAgFAEQgEAFAAAIIAAAvIgPAAIAAgvQAAgIgEgFQgEgEgIAAQgHAAgEAEQgFAFAAAIIAAAvIgQAAIAAhPIAQAAIAAAIQAJgJANAAQAIAAAFADIAHAHQAKgLAQABQAKAAAIAHQAJAHAAAOIAAA0g");
	this.shape_10.setTransform(239.4,377.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#333333").s().p("AgIAnIgGgDIgFgDQgFgFgDgIQgEgIAAgMQAAgLADgHQADgJAFgEQAEgFAGgCQAGgCAEAAQANAAAJAJQAKAJAAAQIAAAMIgvAAQAAAKAFAEQAFAGAHgBQAJABAIgJIALALQgMANgQAAQgEAAgGgCgAgKgUQgFAFAAAJIAfAAQAAgJgFgFQgEgFgHAAQgGAAgEAFg");
	this.shape_11.setTransform(228.7,377.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#333333").s().p("AgZAoIAAhPIAQAAIAAAJIAAAAQAIgKALAAQAJAAAHAHIgLANQgFgDgGAAQgEAAgEADQgFAEAAAKIAAAug");
	this.shape_12.setTransform(222.3,377.2);

	this.remain_txt = new cjs.Text("5", "bold 32px 'DIN Alternate'", "#333333");
	this.remain_txt.name = "remain_txt";
	this.remain_txt.textAlign = "center";
	this.remain_txt.lineHeight = 39;
	this.remain_txt.setTransform(251,387.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.remain_txt},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.next_txt}]}).wait(1));

	// tissue
	this.tissue = new lib.tissue();
	this.tissue.setTransform(311,290,0.802,0.749);
	new cjs.ButtonHelper(this.tissue, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.tissue).wait(1));

	// box
	this.display = new lib.coupons();
	this.display.setTransform(310,149);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#1A1A1A").p("AfMAAQAAA+pJAsQpJAss6AAQs5AApJgsQpIgsAAg+QAAg9JIgsQJJgsM5AAQM7AAJIAsQJJAsAAA9g");
	this.shape_13.setTransform(311,330.2,0.249,0.249);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#333333").s().p("A2CBqQpIgsAAg+QAAg9JIgsQJIgsM6AAQM7AAJIAsQJIAsAAA9QAAA+pIAsQpJAss6AAQs5AApJgsg");
	this.shape_14.setTransform(311,330.2,0.249,0.249);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#EBCFBF").s().p("EhKuAKHIPv0RMB69AAAIKxUVg");
	this.shape_15.setTransform(311,330.9,0.249,0.249);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#ECD4B9").s().p("EhKtAc3MAAAg5tMCVbAAAMAAAA5tg");
	this.shape_16.setTransform(311,392.8,0.249,0.249);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.display}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(501,296.4,258.2,382.4);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;