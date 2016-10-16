(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 500,
	height: 210,
	fps: 30,
	color: "#FFCC00",
	manifest: []
};



// symbols:



(lib.playermc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF6666").s().p("Ah0B0QgvgwgBhEQABhDAvgxQAxgvBDgBQBEABAwAvQAwAxABBDQgBBEgwAwQgwAwhEABQhDgBgxgwg");
	this.shape.setTransform(0,0,0.606,0.606);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10,-10,20,20);


(lib.hurdle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#99CC99").s().p("AgDD+QgVAAgPgOQgPgPAAgUIAAmZQAAgUAPgPQAPgOAVAAIAIAAQAUAAAPAOQAOAPAAAUIAAGZQAAAUgOAPQgPAOgUAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.5,-25.5,11,51);


(lib.btnwp = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF6666").s().p("AmAOQQiyhLiIiJQiKiKhLixQhOi4AAjJQAAjIBOi4QBLixCKiJQCIiKCyhLQC4hODIAAQDIAAC4BOQCzBLCICKQCKCJBLCxQBOC4AADIQAADJhOC4QhMCxiJCKQiICJizBLQi4BOjIAAQjIAAi4hOgAlutlQipBIiECDQiCCDhICpQhKCwAAC+QAADABKCvQBICqCCCCQCECDCpBIQCvBKC/AAQDAAACvhKQCphICEiDQCCiCBIiqQBKivABjAQgBi+hKiwQhIipiCiDQiEiDiphIQivhKjAAAQi/AAivBKg");
	this.shape.setTransform(0,0,0.121,0.121);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF6666").s().p("AAwixQBAiiAAiPQAAgsgFgrQBoC+AADaQAADlh1DGQhvDAjBBwg");
	this.shape_1.setTransform(7.7,2,0.121,0.121);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF6666").s().p("AkDFhID+rjIEDLJQACAFAFAHQiKAwiOAAQh8AAh0gig");
	this.shape_2.setTransform(0.3,5.6,0.121,0.121);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF6666").s().p("AnDjpQAzgDAugFQAjgEgDgiQgDgigiACQiKALhZAAIg2gBQB0ixC4hlQC/hqDZAAQCiAACXA9QCRA5BzBqIgLgBQg9AAgpAvQgoAsAAA8QAAAuAZA2QAMAYAuBLQAgA5APAqQAXBAAABGQAAAwgSBIQgKAkgkB2IhVEcIkzuQQAzgDAugFQAigEgCgiQgDgigiACQiKALhZAAQgyAAhbgGIhRgFQgigCgDAjQgCAjAiACIAbADQAiADAcACICCFpIi4Iug");
	this.shape_3.setTransform(-0.8,-2,0.121,0.121);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF6666").s().p("AhpD3QiFjQAAj2QAAi2BKilIGTRUQjYhoiAjLg");
	this.shape_4.setTransform(-7.4,2.5,0.121,0.121);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// bg
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#FFFFFF").ss(1,1,1).p("ACCAAQAAA2gmAmQgmAmg2AAQg1AAgmgmQgmgmAAg2QAAg1AmgmQAmgmA1AAQA2AAAmAmQAmAmAAA1g");
	this.shape_5.setTransform(0.5,-0.5,1.148,1.148);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhbBcQgmgnAAg1QAAg1AmgmQAmgmA1AAQA1AAAnAmQAlAmABA1QgBA1glAnQgnAlg1ABQg1gBgmglg");
	this.shape_6.setTransform(0.5,-0.5,1.148,1.148);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.4,-16.4,31.9,31.9);


(lib.go = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF6666").s().p("AgvBzQgVgNgIgSIgGgLIgCgOQgDgPAAgsQAAgrADgPQACgPAGgKQAIgSAVgNQATgOAcgBQAdABAUAOQATAOAJARQAHAKACAPQACAPAAArQAAAsgCAPQgCAPgHAKQgJASgTANQgUAOgdABQgcgBgTgOgAgVhVQgKAGgGAIQgHAIgDANQgCAOAAAkQAAAlACAOQADANAHAJQAGAHAKAFQAJAGAMAAQANAAAKgGQAJgFAGgHQAHgJADgNQACgOABglQgBgkgCgOQgDgNgHgIQgGgIgJgGQgKgFgNAAQgMAAgJAFg");
	this.shape.setTransform(10.7,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF6666").s().p("AgwBzQgUgNgIgSIgGgLIgCgOQgDgPAAgsQAAgrADgPQACgPAGgKQAIgRAUgOQAUgOAcgBQAkABAWAVQAXAWAFAgIgnAAQgFgPgMgLQgMgLgSAAQgMAAgJAFQgKAGgGAIQgIAIgCANQgDAOABAkQgBAlADAOQACANAIAJQAGAHAKAFQAJAGAMAAQAVAAAOgPQAPgPAAgYIAAgOIgyAAIAAgiIBYAAIAAAyQgBAmgZAaQgYAagmABQgcgBgUgOg");
	this.shape_1.setTransform(-11.3,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FF6666").ss(2,1,1).p("ADNAAQAABVg8A8Qg8A8hVAAQhUAAg8g8Qg8g8AAhVQAAhUA8g8QA8g8BUAAQBVAAA8A8QA8A8AABUg");
	this.shape_2.setTransform(0,0,1.219,1.219);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AiPCRQg9g9ABhUQgBhUA9g7QA7g9BUAAQBUAAA9A9QA7A7AABUQAABUg7A9Qg9A7hUABQhUgBg7g7g");
	this.shape_3.setTransform(0,0,1.219,1.219);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-52,-26,104,52);


(lib._3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF6666").s().p("AguBxQgUgRgFggIAkAAQAEANAIAIQAJAIAOAAQAPAAALgLQALgKAAgTQAAgUgLgLQgLgKgPAAIgPAAIAAgeIANAAQAPAAALgLQAKgKAAgQQgBgQgJgLQgLgKgNAAQgMAAgKAHQgJAIgEAQIgjAAQADgcATgUQATgTAbgBQAgABAUAWQATAVABAdQgBAPgFAOQgGANgQALQAQAJAHAPQAIAOgBAQQAAAkgVAVQgVAWgfAAQgZAAgUgRg");
	this.shape.setTransform(-0.9,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FF6666").ss(2,1,1).p("ADNAAQAABVg8A8Qg8A8hVAAQhUAAg8g8Qg8g8AAhVQAAhUA8g8QA8g8BUAAQBVAAA8A8QA8A8AABUg");
	this.shape_1.setTransform(0,0,1.219,1.219);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AiPCRQg9g9ABhUQgBhUA9g7QA7g9BUAAQBUAAA9A9QA7A7AABUQAABUg7A9Qg9A7hUABQhUgBg7g7g");
	this.shape_2.setTransform(0,0,1.219,1.219);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-52,-26,104,52);


(lib._2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF6666").s().p("AhGCBIAAgjIBgh7QAGgIACgGIABgMQAAgOgJgLQgJgLgRAAQgMAAgKAKQgKAJgCASIgkAAQACggATgVQAUgUAdgBQAdABAVAUQAUAVABAgQgBAZgPAUIhOBlIBeAAIAAAlg");
	this.shape.setTransform(-0.4,-0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FF6666").ss(2,1,1).p("ADNAAQAABVg8A8Qg8A8hVAAQhUAAg8g8Qg8g8AAhVQAAhUA8g8QA8g8BUAAQBVAAA8A8QA8A8AABUg");
	this.shape_1.setTransform(0,0,1.219,1.219);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AiPCRQg9g9ABhUQgBhUA9g7QA7g9BUAAQBUAAA9A9QA7A7AABUQAABUg7A9Qg9A7hUABQhUgBg7g7g");
	this.shape_2.setTransform(0,0,1.219,1.219);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-52,-26,104,52);


(lib._1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF6666").s().p("AAACAIAAjYIgiAbIAAgnIAigbIAjAAIAAD/g");
	this.shape.setTransform(-1.9,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FF6666").ss(2,1,1).p("ADNAAQAABVg8A8Qg8A8hVAAQhUAAg8g8Qg8g8AAhVQAAhUA8g8QA8g8BUAAQBVAAA8A8QA8A8AABUg");
	this.shape_1.setTransform(0,0,1.219,1.219);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AiPCRQg9g9ABhUQgBhUA9g7QA7g9BUAAQBUAAA9A9QA7A7AABUQAABUg7A9Qg9A7hUABQhUgBg7g7g");
	this.shape_2.setTransform(0,0,1.219,1.219);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-52,-26,104,52);


(lib.btn_start = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF6666").s().p("AAOBPQgNAAgGgIQgIgIAAgOIAAhHIgMAAIAAgTIAMAAIAAglIAWAAIAAAlIARAAIAAATIgRAAIAABFQgBAJAJAAIAJAAIAAAXg");
	this.shape.setTransform(19.5,-1.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF6666").s().p("AgmA9IAAh3IAXAAIAAAMIABAAQALgOARAAQAPAAAKAJIgRAVQgIgGgIAAQgHAAgGAGQgHAGgBANIAABIg");
	this.shape_1.setTransform(12.6,0.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF6666").s().p("AgWA7QgIgDgFgFQgLgKAAgQQAAgQAKgJQAKgJASAAIAfAAIAAgNQAAgQgXAAQgIAAgFACQgFACgEAFIgSgOQANgSAbAAQAUAAAOAJQANAJAAAWIAABRIgYAAIAAgLQgDAHgIADQgGADgLAAQgJAAgIgDgAgYAXQABAHAFAEQAFAFAMAAQANAAAGgEQAFgEAAgOIAAgIIgaAAQgVAAAAAOg");
	this.shape_2.setTransform(0.5,0.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF6666").s().p("AAOBPQgNAAgGgIQgIgIAAgOIAAhHIgMAAIAAgTIAMAAIAAglIAWAAIAAAlIARAAIAAATIgRAAIAABFQgBAJAJAAIAJAAIAAAXg");
	this.shape_3.setTransform(-8.4,-1.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF6666").s().p("AgxAoIARgRQAOAQAVAAQALAAAGgEQAGgFAAgHQAAgGgDgDQgFgDgGAAIgTgCQgPgBgJgIQgKgIAAgPQAAgTANgKQAMgJARAAIAOABIAMADQALAFAKAIIgPARQgHgFgIgDQgHgDgKAAQgJAAgEAEQgGAEAAAHQABAEADADQAEADAIABIASACQASABAIAJQAIAJAAAPQAAASgOAKQgOAJgVABQgaAAgYgWg");
	this.shape_4.setTransform(-17.8,0.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#FF6666").ss(2,1,1).p("AkIiBIIRAAQAyAAAAAyIAACfQAAAygyAAIoRAAQgyAAAAgyIAAifQAAgyAyAAg");

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AkHCCQgzAAAAgzIAAidQAAgyAzgBIIPAAQAyABABAyIAACdQgBAzgyAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-52,-17.9,104,32);


(lib.player = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.playermc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10,-10,20,20);


(lib.scr_start = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.btn_start = new lib.btn_start();
	new cjs.ButtonHelper(this.btn_start, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.btn_start).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-52,-17.9,104,32);


(lib.scr_end = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// wp
	this.btn_wp = new lib.btnwp();
	this.btn_wp.setTransform(-69,23);
	new cjs.ButtonHelper(this.btn_wp, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.btn_wp).wait(1));

	// Layer 1
	this.txt_top = new cjs.Text("99.99", "bold 16px 'DIN Alternate'", "#FF6666");
	this.txt_top.name = "txt_top";
	this.txt_top.textAlign = "center";
	this.txt_top.lineHeight = 21;
	this.txt_top.lineWidth = 51;
	this.txt_top.setTransform(66,15.9);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF6666").s().p("AABAeIgHgBIgEgCIgEgDQgEgDgCgGQgDgGAAgJQAAgIADgFQACgHADgDQADgEAFgBIAHgCQAJAAAHAHQAIAHAAAMIAAAIIgjAAQAAAHAEAEQAEAEAEAAQAHAAAGgGIAJAIQgJAKgLAAIgCgBgAgHgPQgEAEAAAHIAXAAQAAgHgEgEQgDgDgFAAQgEAAgDADg");
	this.shape.setTransform(88.8,10.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF6666").s().p("AgSAeIAAg7IAMAAIAAAHQAFgHAIAAQAHAAAFAEIgIALQgEgDgEAAQgDAAgDADQgDADAAAHIAAAig");
	this.shape_1.setTransform(84,10.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF6666").s().p("AgJAcQgFgCgCgDQgDgEgCgFQgCgFAAgJQAAgIACgFQACgGADgDQACgDAFgCQAEgDAFABQAGgBAFADQAEACADAEQADADABAFQACAFAAAIQAAAJgCAFQgBAFgDAEIgEACIgDADQgFACgGABQgFgBgEgCgAgEgQIgEADIgCAFIgBAIIABAJIACAFIAEADQADABABAAQADAAACgBQADgBABgCQACgCAAgDIABgJIgBgIQAAgDgCgCQAAgBgBAAQAAAAgBgBQAAAAgBAAQAAgBgBAAQgCgBgDgBQgBABgDABg");
	this.shape_2.setTransform(78.1,10.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF6666").s().p("AgOAXQgIgHgBgQQABgPAIgHQAIgIAJABQAGAAAFACQAGADADAFIgIAIQgEgGgIgBQgOABAAARQAAATAOgBQAIABAEgHIAIAIQgDAFgGACQgFAEgGAAQgJAAgIgIg");
	this.shape_3.setTransform(72.6,10.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF6666").s().p("AgYAUIAJgIQAHAHAJAAQAFAAAEgCQADgCAAgDQAAgBAAgBQAAgBgBAAQAAgBAAAAQgBgBAAAAQgCgBgDAAIgJgBQgHgBgFgEQgFgDAAgIQAAgJAHgFQAGgEAHAAIAIAAIAGABQAFADAEAEIgHAJIgHgFQgEgBgFAAQgDAAgDACQgCACAAADQAAABAAAAQAAABAAAAQABABAAAAQAAABABAAQACABAEABIAIABQAJABAEADQAEAFAAAHQAAAJgHAEQgHAGgLAAQgMAAgMgLg");
	this.shape_4.setTransform(66.8,10.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF6666").s().p("AgWAqIAAhTIAMAAIAAAHQAGgIAHABQALgBAFAJQADADAAAEIABAPIgBAOQAAAFgDADQgDADgEADQgDACgGAAQgDAAgDgCQgEgCgDgEIAAAfgAgFgcQgCACgBADQgCADAAADIAAAGIAAAHQAAAEACABIADAEQACABADAAQAEAAACgBQADgCABgCIABgFIAAgHIAAgGIgBgGQgBgDgDgCQgCgBgEgBQgDAAgCACg");
	this.shape_5.setTransform(58.2,11.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF6666").s().p("AgJAcQgFgCgCgDQgDgEgCgFQgCgFAAgJQAAgIACgFQACgGADgDQACgDAFgCQAEgDAFABQAGgBAFADQAEACADAEQADADABAFQACAFAAAIQAAAJgCAFQgBAFgDAEIgEACIgDADQgFACgGABQgFgBgEgCgAgEgQIgEADIgCAFIgBAIIABAJIACAFIAEADQADABABAAQADAAACgBQADgBABgCQACgCAAgDIABgJIgBgIQAAgDgCgCQAAgBgBAAQAAAAgBgBQAAAAgBAAQAAgBgBAAQgCgBgDgBQgBABgDABg");
	this.shape_6.setTransform(52,10.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF6666").s().p("AgFAqIAAhIIgWAAIAAgLIA3AAIAAALIgWAAIAABIg");
	this.shape_7.setTransform(46,9);

	this.txt_score = new cjs.Text("999", "bold 30px 'DIN Alternate'", "#FF6666");
	this.txt_score.name = "txt_score";
	this.txt_score.textAlign = "center";
	this.txt_score.lineHeight = 37;
	this.txt_score.lineWidth = 196;
	this.txt_score.setTransform(-2,-22.9);

	this.btn_start = new lib.btn_start();
	this.btn_start.setTransform(0,43);
	new cjs.ButtonHelper(this.btn_start, 0, 1, 1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF6666").s().p("AgIAnIgGgDIgFgDQgFgFgDgIQgEgIAAgMQAAgLADgHQADgJAFgEQAEgFAGgCQAGgCAEAAQANAAAJAJQAKAJAAAQIAAAMIgvAAQAAAKAFAEQAFAGAHgBQAJABAIgJIALALQgMANgQAAQgEAAgGgCgAgKgUQgFAFAAAJIAfAAQAAgJgFgFQgEgFgHAAQgGAAgEAFg");
	this.shape_8.setTransform(31.6,-36.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF6666").s().p("AgZAoIAAhPIAQAAIAAAJIAAAAQAIgKALAAQAJAAAHAHIgLANQgFgDgGAAQgEAAgEADQgFAFAAAJIAAAug");
	this.shape_9.setTransform(25.2,-36.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF6666").s().p("AgNAlQgGgDgDgDQgFgGgCgGQgCgHAAgMQAAgMACgGQACgHAFgEQADgEAGgEQAFgDAIAAQAJAAAGADQAFAEADAEQAFAEACAHQACAGAAAMQAAAMgCAHQgCAGgFAGIgDADIgFADQgGAEgJAAQgIAAgFgEgAgGgWQgDABgCADIgDAHIgBALIABAMIADAHIAFAEQADABADABQAEgBADgBIAFgEQADgDAAgEIABgMIgBgLQAAgEgDgDIgFgEQgDgCgEAAQgDAAgDACg");
	this.shape_10.setTransform(17.4,-36.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FF6666").s().p("AgTAfQgLgJgBgWQABgUALgKQALgKALAAQAJAAAIAEQAGAEAFAGIgLALQgGgIgKgBQgSAAAAAYQAAAZASAAQAKAAAGgIIALAKQgFAGgGAEQgIAEgJAAQgLAAgLgKg");
	this.shape_11.setTransform(10.1,-36.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FF6666").s().p("AggAaIALgLQAJAKAOAAQAGAAAFgCQAFgDAAgFQAAgEgDgCIgHgCIgMgBQgKgBgHgFQgFgEgBgLQABgNAHgGQAJgGALAAIAJABIAJACQAHADAFAFIgKAMIgJgGQgFgCgGAAQgGAAgDADQgDACAAAFQAAADACACQADACAFAAIAMABQAMACAFAFQAFAGAAAKQAAAMgJAGQgJAHgOAAQgSAAgPgPg");
	this.shape_12.setTransform(2.3,-36.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FF6666").s().p("AgZAoIAAhPIAQAAIAAAJIAAAAQAIgKALAAQAJAAAHAHIgLANQgFgDgGAAQgEAAgEADQgFAFAAAJIAAAug");
	this.shape_13.setTransform(-7.5,-36.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FF6666").s().p("AgVAhQgIgHgBgOIAAg0IAQAAIAAAvQAAAIAEAFQAFAEAFAAQAGAAAFgEQAEgFAAgIIAAgvIAQAAIAABPIgQAAIAAgIQgIAJgLAAQgJAAgIgHg");
	this.shape_14.setTransform(-15.6,-36.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FF6666").s().p("AgNAlQgGgDgDgDQgFgGgCgGQgCgHAAgMQAAgMACgGQACgHAFgEQADgEAGgEQAFgDAIAAQAJAAAGADQAFAEADAEQAFAEACAHQACAGAAAMQAAAMgCAHQgCAGgFAGIgDADIgFADQgGAEgJAAQgIAAgFgEgAgGgWQgDABgCADIgDAHIgBALIABAMIADAHIAFAEQADABADABQAEgBADgBIAFgEQADgDAAgEIABgMIgBgLQAAgEgDgDIgFgEQgDgCgEAAQgDAAgDACg");
	this.shape_15.setTransform(-23.9,-36.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FF6666").s().p("AgGA4IAAguIgihCIASAAIAWAzIAXgzIASAAIgiBCIAAAug");
	this.shape_16.setTransform(-31.9,-38);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#FF6666").ss(2,1,1).p("Awyt+MAhlAAAQAyAAAAAyIAAaZQAAAygyAAMghlAAAQgyAAAAgyIAA6ZQAAgyAyAAg");
	this.shape_17.setTransform(0,-7,0.889,0.559);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AwxN/QgzAAAAgzIAA6YQAAgxAzAAMAhkAAAQAxAAAAAxIAAaYQAAAzgxAAg");
	this.shape_18.setTransform(0,-7,0.889,0.559);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.btn_start},{t:this.txt_score},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.txt_top}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-101,-58,202,115);


(lib.countdown = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_104 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(104).call(this.frame_104).wait(1));

	// 3
	this.instance = new lib._3();
	this.instance.setTransform(0,0,0.2,0.2);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,alpha:1},5).wait(18).to({scaleX:0.2,scaleY:0.2,alpha:0},6).to({_off:true},1).wait(75));

	// 2
	this.instance_1 = new lib._2();
	this.instance_1.setTransform(0,0,0.2,0.2);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(30).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:1},5).wait(18).to({scaleX:0.2,scaleY:0.2,alpha:0},6).to({_off:true},1).wait(45));

	// 1
	this.instance_2 = new lib._1();
	this.instance_2.setTransform(0,0,0.2,0.2);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(60).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:1},5).wait(18).to({scaleX:0.2,scaleY:0.2,alpha:0},6).to({_off:true},1).wait(15));

	// go
	this.instance_3 = new lib.go();
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(90).to({_off:false},0).wait(9).to({scaleX:0.2,scaleY:0.2,x:-320,alpha:0},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.4,-5.2,20.8,10.4);


(lib.scr_play = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// bg
	this.countdown = new lib.countdown();

	this.txt_time = new cjs.Text("Ready", "bold 12px 'DIN Alternate'", "#FF6666");
	this.txt_time.name = "txt_time";
	this.txt_time.textAlign = "center";
	this.txt_time.lineHeight = 16;
	this.txt_time.lineWidth = 101;
	this.txt_time.setTransform(-2,73.9);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF6666").ss(2,1,1).p("AnGhUIONAAQAyAAAAAyIAABFQAAAygyAAIuNAAQgyAAAAgyIAAhFQAAgyAyAAg");
	this.shape.setTransform(-0.1,81,0.99,1.059);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AnFBVQgzAAAAgzIAAhDQAAgyAzgBIOMAAQAxABAAAyIAABDQAAAzgxAAg");
	this.shape_1.setTransform(-0.1,81,0.99,1.059);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(210,210,210,0.008)").s().p("EgnCAQaMAAAggyMBOFAAAMAAAAgyg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.txt_time},{t:this.countdown}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-250,-105,500,210);


// stage content:



(lib.ly_an_hurdle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var gs = this;
		var width = stage.canvas.width;
		var height = stage.canvas.height;
		
		var gamestate = 'start';
		var player = {};
		var speed = time_start = time_end = time_top = 0;
		var hurdles = [];
		init();
		
		// ticker
		createjs.Ticker.on('tick', handleTick);
		function handleTick() {
			if (gamestate == 'init') {
				initHurdles();
			}
			if (gamestate == 'play') {
				movePlayer();
				moveHurdles();
				checkDead();
				showtime();
			}
		}
		// event listeners
		gs.scr_start.btn_start.on('click', start);
		gs.scr_play.on('click', function() {
			player.play();
			if (gamestate == 'play') speed = - 5;
		});
		gs.scr_end.btn_start.on('click', start);
		gs.scr_end.btn_wp.on('click', function() {
			window.open('https://jsmania.wordpress.com');
		});
		// functions
		function init() {
			gs.scr_start.visible = true;
			gs.scr_play.visible = false;
			gs.scr_end.visible = false;
		}
		function start() {
			gs.scr_start.visible = false;
			gs.scr_end.visible = false;
			gs.scr_play.visible = true;
			gs.scr_play.countdown.gotoAndPlay(1);
			speed = 0;
			drawPlayer();
			drawHurdles();
			gs.scr_play.txt_time.text = 'Ready';
			for (var i = 0; i < hurdles.length; i++) {
				hurdles[i].h = random(10, height - 10);
			}
			gamestate = 'init';
			setTimeout(function() {
				gamestate = 'play';
				time_start = createjs.Ticker.getTime();
			}, 3000);
		}
		function drawPlayer() {
			player = new lib.player();
			player.x = 50;
			player.y = height / 2;
			gs.addChild(player);
		};
		function drawHurdles() {
			for (var i = 2; i < 7; i++) {
				var h = new lib.hurdle();
				h.x = i * 100 + 20;
				h.y = 185;
				hurdles.push(h);
				gs.addChild(h);
			}
		}
		function movePlayer() {
			speed += 0.5;
			player.y += speed;
		}
		function initHurdles() {
			for (var i = 0; i < hurdles.length; i++) {
				if (hurdles[i].y > hurdles[i].h) hurdles[i].y -= 3;
			}
		}
		function moveHurdles() {
			for (var i = 0; i < hurdles.length; i++) {
				hurdles[i].x -= 10;
				if (hurdles[i].x < -10) {
					hurdles[i].h = random(10, height - 10);
					hurdles[i].x = width + 10;
					hurdles[i].y = hurdles[i].h;
				}
			}
		}
		function showtime() {
			time_end = ((createjs.Ticker.getTime() - time_start) / 1000).toPrecision(4);
			gs.scr_play.txt_time.text = time_end;
		}
		function checkDead() {
			if (player.y < -10 || player.y > height + 10) {
				gamestate = 'start';
				clearStage();
				showScore();
			}
			for (var i = 0; i < hurdles.length; i++) {
				var pt = player.globalToLocal(hurdles[i].x, hurdles[i].y);
				if (player.hitTest(pt.x, pt.y)) {
					gamestate = 'start';
					clearStage();
					showScore();
				}
			}
		}
		function clearStage() {
			gs.removeChild(player);
			player = {};
			for (var i = hurdles.length - 1; i >= 0; i--) {
				gs.removeChild(hurdles[i]);
				hurdles.splice(i);
			}
			hurdles = [];
		}
		function showScore() {
			gs.scr_play.visible = false;
			gs.scr_end.visible = true;
			if (time_end > time_top) time_top = time_end;
			else {};
			gs.scr_end.txt_top.text = time_top;
			gs.scr_end.txt_score.text = time_end;
		}
		
		function random(min, max) {
			return Math.floor((Math.random() * (max - min)) + min);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// scr_play
	this.scr_play = new lib.scr_play();
	this.scr_play.setTransform(250,105);

	this.timeline.addTween(cjs.Tween.get(this.scr_play).wait(1));

	// scr_start
	this.scr_start = new lib.scr_start();
	this.scr_start.setTransform(250,105);

	this.timeline.addTween(cjs.Tween.get(this.scr_start).wait(1));

	// scr_end
	this.scr_end = new lib.scr_end();
	this.scr_end.setTransform(250,112);

	this.timeline.addTween(cjs.Tween.get(this.scr_end).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(250,105,500,210);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;
