(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 240,
	height: 420,
	fps: 30,
	color: "#FFD25A",
	manifest: []
};



// symbols:



(lib.Tween7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFD25A").s().p("AgvAwQgUgUgBgcQABgbAUgUQAUgVAbAAQAcAAAUAVQAVAUAAAbQAAAcgVAUQgUAVgcAAQgbAAgUgVg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.9,-6.9,13.8,13.9);


(lib.wingrgt = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1.5,1,1).p("Ag0hFIgVAuQgNAyApAaQAtAcAigRQAcgOAPgj");
	this.shape.setTransform(10.2,-13.5,1.408,1.408);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(1.5,1,1).p("AhUCYQgBgeAVg0QAqhoBrh0");
	this.shape_1.setTransform(2.7,2.1,1.408,1.408);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ag5AiIgSgIIATgeQAaggAfgDQAkgEAUALQAQAIADAPQACAPgPAPQgTAUgoAAIgEAAQggAAgZgHg");
	this.shape_2.setTransform(-10.3,8.8,1.408,1.408);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21,-24.5,43.1,49.1);


(lib.winglft = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1.5,1,1).p("AAzAcQhAh8hRhCIgJAcQgIAhAFAcQARBaCMALgABtCiQgRg1gihEQgEgGgDgH");
	this.shape.setTransform(-5.1,0,1.408,1.408);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgnAtQgRgCgJgSQgJgRAEgSQADgVAPgJQAQgLAaAKQArARAYAhQANARADANQgrAIgiAAQgSAAgRgCg");
	this.shape_1.setTransform(10.3,10.6,1.408,1.408);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.5,-23.9,42.1,47.9);


(lib.legs = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("AgOgbIAdA3");
	this.shape.setTransform(24.8,-0.6,1.408,1.408);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(1,1,1).p("AgnAcIAKg3IBFAb");
	this.shape_1.setTransform(27,-0.6,1.408,1.408);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(1,1,1).p("AANgbIgZA3");
	this.shape_2.setTransform(-25.3,0.6,1.408,1.408);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FFFFFF").ss(1,1,1).p("AgmAEIBAgfIANA3");
	this.shape_3.setTransform(-27.2,0.6,1.408,1.408);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-33.7,-5.6,67.4,11.3);


(lib.heart = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgGArQgigGgEgmQgDgfAWgBQALAAAMAGQAYgYAOAMQAMALgDAZQgCANgEAJQgMAZgZAAIgIgBg");
	this.shape.setTransform(-5.7,19.1,1.408,1.408);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgNAuQgjgHgGgnQgEgiAbgBQAOAAAPAHQAYgWARAFQAPAFABATQACAOgGAOQgFAPgKAKQgPAPgVAAIgNgBg");
	this.shape_1.setTransform(5.7,0.2,1.408,1.408);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgmAZQgZgVALgZQALgZAWAIQALADAIAJQAQgSASADQATADADAYQADAWgTASQgQAQgUAAQgUAAgWgRg");
	this.shape_2.setTransform(-5.6,-19.3,1.408,1.408);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},4).to({state:[{t:this.shape},{t:this.shape_1}]},5).to({state:[{t:this.shape},{t:this.shape_1},{t:this.shape_2}]},5).wait(16));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.hair = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAdBQIAGgBQhCgRhEgLIgMgCIAPgEIACgBIAAgNQABhHAWgYQAPgRAjACQAUADABAgQAAAQgDAQIAPgfQAUgcAVANQAUANgIAQQgEAJgIAGIAWgHQAXAAAMAhQAGATgLAOQgIAKgTAIIgtALIAWADIgUACIABABg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.2,-8,22.5,16.1);


(lib.body = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFD43F").ss(1,1,1).p("AgTARQACgGAGgIQALgMAUgH");
	this.shape.setTransform(-34.8,5.7,1.408,1.408);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFD43F").ss(1,1,1).p("AgPARQANgVASgM");
	this.shape_1.setTransform(-27.5,5.7,1.408,1.408);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFD43F").ss(1,1,1).p("AgRARQADgGAHgIQAKgNAPgG");
	this.shape_2.setTransform(-20.8,5.7,1.408,1.408);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FFD43F").ss(1,1,1).p("AgQARIALgPQAMgPAKgD");
	this.shape_3.setTransform(32.8,4,1.408,1.408);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FFD43F").ss(1,1,1).p("AgOAQIAJgNQAJgMALgG");
	this.shape_4.setTransform(26,4.5,1.408,1.408);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#FFD43F").ss(1,1,1).p("AgSAPQAEgHAHgHQALgMAPgD");
	this.shape_5.setTransform(19.1,4.7,1.408,1.408);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFD43F").s().p("AgfgMQALgTAMgHQAFgDADAAIAKADQALAHAKATQARAbgwAbQgvgbAQgbg");
	this.shape_6.setTransform(-1,8.5,1.408,1.408);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#FFD43F").ss(1,1,1).p("AA3AHQgYgHgagCQgygJgJAL");
	this.shape_7.setTransform(-19.6,-3.7,1.408,1.408);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#FFD43F").ss(1,1,1).p("AgUggIAYAWQAeAUAVADQgYAAgaACQgxAGgKAM");
	this.shape_8.setTransform(-19.6,-4.5,1.408,1.408);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#FFD43F").ss(1,1,1).p("AgsAHIAcgHQAggJAdAF");
	this.shape_9.setTransform(16.8,-4.8,1.408,1.408);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#FFD43F").ss(1,1,1).p("AAOgfQgHAJgJALQgXASgXAGIAqAEQAqAFANAK");
	this.shape_10.setTransform(17.4,-5.7,1.408,1.408);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AlaHEQh4g0gGjdQgFi4BFjZIAGgSIABgDQA0iNCChUQA8gnA1gQIALACQBEALBCASIgFAAIAHAAIgCAAIAUgDQDgAlBfDXIALAZQAwB+gCB0IASAzQASA+ACA5QADBpgzBEQgnA1hHAgQijBIikAAQimAAiohIg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-47.4,-52.4,94.8,104.9);


(lib.player = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Al7BKQgxAAAAgxIAAgxQAAgyAxABIL3AAQAxgBAAAyIAAAxQAAAxgxAAg");
	this.shape.setTransform(0,0,0.698,0.667);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-30,-5,60,10);


(lib.egg_sm = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFD25A").ss(1.5).p("AAuBEQgKALgJAEQgGACgPADQgQADgUgJQgQgHgOgOQgMgMgIgSQgJgVADgOQACgOAGgJQAGgKAMgMQAcgcArgIQAtgJAUAUQATATgKAxQgLAugcAcg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFD25A").s().p("AgeBSQgQgHgOgOQgMgMgIgSQgJgVADgOQACgOAGgJQAGgKAMgMQAcgcArgIQAtgJAUAUQATATgKAxQgLAugcAcQgKALgJAEQgGACgPADIgHABQgOAAgPgHg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.7,-9.9,21.7,22.1);


(lib.eggs6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").p("AAAFfIAAq9");
	this.shape.setTransform(-0.2,-33.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhlE2Qg7gcgZgwQgWgmgHglQgIglABg8QAAiGBIiCQBIiEBMAAQBKAABMCRQBJCOAACHQAAA1gJAeQgHAUgYAtQgcAyg6AbQgvAWgyAAQgxAAgzgZg");
	this.shape_1.setTransform(0,35.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22.3,-69.6,44.6,138.3);


(lib.eggs5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").p("AAAKBIAA0B");
	this.shape.setTransform(-0.2,-44);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AiFGXQhNgmgig9QgbgzgKgxQgKgwAAhOQAAixBfirQBfitBkAAQBhAABjC+QBhC7AACyQAABGgMAnQgJAaghA7QgkBBhLAjQg/AehBAAQhAAAhEghg");
	this.shape_1.setTransform(0,64.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-29.2,-109.2,58.6,217.4);


(lib.eggs4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").p("AAAG+IAAt7");
	this.shape.setTransform(-0.2,-44);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AiFGXQhOgmghg9QgbgzgKgxQgKgvAAhPQAAiwBfitQBfisBkAAQBhAABjC+QBhC7AACyQAABFgMAoQgJAaghA8QgkBAhLAkQg/AdhBAAQhAAAhEghg");
	this.shape_1.setTransform(0,44.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-29.2,-89.7,58.6,178.4);


(lib.eggs3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").p("AAAGdIAAs5");
	this.shape.setTransform(-0.2,-34.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhpFCQg9gdgbgxQgVgogIgnQgIgnAAg9QAAiLBLiIQBLiJBPAAQBNAABOCWQBNCVAACMQAAA2gKAgQgGAUgaAwQgdAzg7AcQgzAXgzAAQgyAAg2gag");
	this.shape_1.setTransform(0,41.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23.2,-77.1,46.3,153.3);


(lib.eggs2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").p("AAAIOIAAwb");
	this.shape.setTransform(-0.2,-39);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ah2FpQhFgigdg2QgYgsgJgsQgJgqAAhHQAAicBUiYQBViZBYAAQBWAABXCoQBXCmAACeQAAA9gLAjQgIAXgdA1QggA6hDAfQg3Aag6AAQg4AAg9gdg");
	this.shape_1.setTransform(0,52.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25.9,-92.6,51.9,184.3);


(lib.eggs1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").p("AAAGcIAAs3");
	this.shape.setTransform(-0.2,-34);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhnE6Qg7gdgagvQgVgogIgmQgIgkAAg9QAAiIBKiFQBJiFBNAAQBLAABMCTQBMCQAACKQAAA1gKAfQgHATgZAuQgcAzg6AbQgxAXgyAAQgxAAg1gag");
	this.shape_1.setTransform(0,41.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22.6,-76.2,45.2,151.5);


(lib.copyright = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgUAjIgGgBQgBAAAAgBQAAAAgBAAQAAgBAAAAQAAgBAAAAIgBgGIAAgyQAAgFACgCQACgCAFAAIATAAQAFAAAFABQAFABAFAEQALAKAAASIgBALQgBAFgCAFIgHAHIgGAEIgHADIgHAAgAgPAYIALAAIAEAAIAFgBIADgDQAIgGAAgOQgBgJgDgGQgDgFgEgBQgFgCgFAAIgKAAg");
	this.shape.setTransform(91.4,0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgRAjQgFAAgCgCQgCgCAAgFIAAgzIABgGQAAAAAAgBQAAAAABAAQAAgBABAAQAAAAAAAAIAGgBIAkAAQAEAAABABQAAABABAAQAAAAAAABQABABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAQgBABAAAAQgBACgEAAIgfAAIAAARIAdAAQACAAACACQABAAAAABQAAAAABAAQAAABAAABQAAAAAAABQAAAAAAAAQAAAAAAAAQgBABAAAAQAAAAgBABQgBABgDAAIgdAAIAAAVIAgAAQAEAAACABQAAABAAAAQAAABABAAQAAABAAAAQAAABAAABQAAAAAAABQAAAAAAABQgBAAAAABQAAAAAAABQgCABgEAAg");
	this.shape_1.setTransform(84.4,0.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgDAjIgEgCIgCgFIgCgFIgRgsIgBgDIAAgDIgBgBQAAgDACgDQACgCADAAQAEABACACIADAHIAOAuIAQguIACgGIACgCQABAAAAgBQAAAAABAAQABAAAAAAQABAAAAgBIAEABIACADIABADIAAACIgBADIgBADIgRAsIgCAFIgCAFIgDACIgFABIgDgBg");
	this.shape_2.setTransform(77.4,0.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AASAjIgDgDIgDgFIgGgKIgGgIIgCgEIgHgBIgFAAIAAAXQAAAFgCACQgCACgDAAQgEAAgCgCQgBgDAAgEIAAg1QgBgFADgCQACgCAFAAIAVAAIAIABQAEAAADABIAGAEQACADABADQACAEAAAEQAAAIgEAFQgFACgJACQADACAEAEIAHAJIAEAIIACAFIgCADIgCACIgDABIgFgBgAgOgEIANAAIAHgBQADgBADgCQACgCAAgEQgBgDgBgCQgCgDgDgBIgHgBIgOAAg");
	this.shape_3.setTransform(70.9,0.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgSAjQgEAAgCgCQgCgCAAgFIAAgzIAAgGQABAAAAgBQAAAAABAAQAAgBABAAQAAAAAAAAIAFgBIAlAAQADAAACABQAAABABAAQAAAAAAABQABABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAQgBABAAAAQgCACgDAAIgeAAIAAARIAbAAQADAAADACQAAAAAAABQAAAAABAAQAAABAAABQAAAAAAABQAAAAAAAAQAAAAAAAAQgBABAAAAQAAAAAAABQgCABgEAAIgbAAIAAAVIAfAAQADAAACABQABABAAAAQAAABABAAQAAABAAAAQAAABAAABQAAAAAAABQAAAAAAABQgBAAAAABQAAAAgBABQgCABgDAAg");
	this.shape_4.setTransform(64,0.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgQAhQgFgDgDgFQgDgFAAgEQAAgBAAgBQAAAAABgBQAAAAAAgBQAAAAABgBQACgBADgBIADABQACACABADIADAGIAFAEQACABAEAAQAGAAAEgDQAEgDAAgEQAAgEgCgCQgDgCgDgBIgHgDIgNgEQgFgBgDgEQgEgEAAgHQAAgFAEgFQADgFAGgCQAGgCAHgBQAGAAAFACQAFACADADIAEAFIACAGQAAADgCACQgCACgDAAQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAAAAAAAIgDgFQgCgDgDgDQgDgCgEAAQgFAAgEACQgDADAAADQAAABAAAAQAAABAAAAQAAABABAAQAAABAAAAIADADIAEABIAFACIALAEQAFABAEACQADABACAEQACADAAAGQAAAHgDAFQgEAFgGADQgHADgIgBQgJAAgHgDg");
	this.shape_5.setTransform(57.2,0.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgSAjQgEAAgCgCQgCgCAAgFIAAgzIAAgGQABAAAAgBQAAAAABAAQAAgBABAAQAAAAABAAIAEgBIAlAAQADAAACABQABABAAAAQAAAAABABQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAQAAABgBAAQgCACgDAAIgeAAIAAARIAbAAQADAAADACQAAAAAAABQAAAAABAAQAAABAAABQAAAAAAABQAAAAAAAAQAAAAAAAAQgBABAAAAQAAAAAAABQgCABgEAAIgbAAIAAAVIAfAAQADAAACABQABABAAAAQAAABABAAQAAABAAAAQAAABAAABQAAAAAAABQAAAAAAABQgBAAAAABQAAAAgBABQgCABgDAAg");
	this.shape_6.setTransform(50.7,0.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AASAjIgCgDIgEgFIgFgKIgHgIIgCgEIgHgBIgFAAIAAAXQAAAFgCACQgCACgDAAQgDAAgCgCQgCgDAAgEIAAg1QgBgFADgCQACgCAFAAIAVAAIAIABQAEAAADABIAGAEQADADAAADQACAEAAAEQAAAIgEAFQgFACgJACQADACAEAEIAHAJIAEAIIABAFIgBADIgCACIgDABIgFgBgAgOgEIANAAIAHgBQAEgBABgCQADgCAAgEQAAgDgCgCQgCgDgDgBIgHgBIgOAAg");
	this.shape_7.setTransform(43.8,0.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgQAhQgFgDgDgFQgDgFAAgEQAAgBAAgBQAAAAABgBQAAAAAAgBQAAAAABgBQACgBADgBIADABQACACABADIADAGIAFAEQACABAEAAQAGAAAEgDQAEgDAAgEQAAgEgCgCQgDgCgDgBIgHgDIgNgEQgFgBgDgEQgEgEAAgHQAAgFAEgFQADgFAGgCQAGgCAHgBQAGAAAFACQAFACADADIAEAFIACAGQAAADgCACQgCACgDAAQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAAAAAAAIgDgFQgCgDgDgDQgDgCgEAAQgFAAgEACQgDADAAADQAAABAAAAQAAABAAAAQAAABABAAQAAABAAAAIADADIAEABIAFACIALAEQAFABAEACQADABACAEQACADAAAGQAAAHgDAFQgEAFgGADQgHADgIgBQgJAAgHgDg");
	this.shape_8.setTransform(34.2,0.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgEAiQgCgCAAgFIAAgyIgQAAQgDAAgCgBQgBgBAAAAQAAgBAAAAQgBgBAAgBQAAAAAAgBQAAgBAAAAQAAgBABAAQAAgBAAAAQABgBAAAAQACgCADAAIAtAAQADAAACACQABAAAAABQAAAAAAABQABAAAAABQAAAAAAABQAAABAAAAQAAABgBABQAAAAAAABQAAAAgBABQgCABgDAAIgQAAIAAAyQAAAFgCACQgCACgDAAQgCAAgCgCg");
	this.shape_9.setTransform(27.7,0.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AARAiQgCgCAAgEIAAgYIgdAAIAAAYQAAAEgCACQgCACgEAAQgCAAgCgCQgDgCAAgEIAAg3QAAgEADgCQACgCACgBQAEABACACQACACAAAEIAAAVIAdAAIAAgVQAAgEACgCQACgCADgBQADABADACQABACABAEIAAA3QgBAEgBACQgDACgDAAQgDAAgCgCg");
	this.shape_10.setTransform(20.9,0.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgLAiQgHgDgFgEQgFgFgCgHQgCgHgBgIQABgGACgIQACgHAFgFQAFgEAHgDQAHgDAGAAQAIAAAGACQAFADAEADQADACABADQACAEABACQAAABgBABQAAAAAAABQAAAAgBABQAAAAgBABQgCACgCAAIgEAAIgCgCIgEgHQgCgCgEgCQgCgBgGAAQgCAAgFABQgEADgCACQgDAEgCAFQgBAFAAAEQAAAMAGAGQAFAIAJAAQAFgBAEgBIAJgEIAAgLIgLAAQgEAAgCgCQAAAAgBAAQAAAAAAgBQgBAAAAgBQAAgBAAAAQAAgBAAgBQAAAAAAgBQABAAAAgBQAAAAAAAAQACAAAEAAIAQAAIAFAAQABAAAAAAQAAAAABAAQAAAAABAAQAAABABAAIABAGIAAANIgBAFIgCACIgEADQgGADgGACQgGACgHgBQgGABgHgDg");
	this.shape_11.setTransform(13.1,0.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgEAiQgCgCAAgEIAAg3QAAgEACgCQACgCACgBQADABACACQACACAAAEIAAA3QAAAEgCACQgCACgDAAQgCAAgCgCg");
	this.shape_12.setTransform(7.6,0.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AASAjIgDgDIgDgFIgGgKIgFgIIgEgEIgGgBIgFAAIAAAXQAAAFgCACQgCACgDAAQgEAAgCgCQgCgDAAgEIAAg1QABgFACgCQACgCAEAAIAWAAIAJABQADAAADABIAFAEQADADABADQACAEAAAEQAAAIgFAFQgEACgJACQAEACADAEIAGAJIAFAIIACAFIgBADIgDACIgEABIgEgBgAgOgEIANAAIAHgBQAEgBACgCQABgCAAgEQAAgDgBgCQgBgDgEgBIgIgBIgNAAg");
	this.shape_13.setTransform(2.7,0.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgPAkQgFAAgCgCQgCgCAAgFIAAg1QAAgEACgCQACgDADAAQADAAADADQACACAAAEIAAAyIAbAAQAEAAACACQAAAAAAABQAAAAABABQAAAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQgBABAAAAQAAABAAAAQgCACgEAAg");
	this.shape_14.setTransform(-6.3,0.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgPAkQgFAAgCgCQgCgCAAgFIAAg1QAAgEACgCQACgDADAAQAEAAACADQABACAAAEIAAAyIAcAAQADAAACACQABAAAAABQAAAAABABQAAAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQgBABAAAAQAAABgBAAQgCACgDAAg");
	this.shape_15.setTransform(-12.3,0.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAXAkIgCgCIgCgCIgCgFIgDgJIgbAAIgEAJIgDAIQgBACgEgBQAAAAgBAAQgBAAAAAAQgBAAAAgBQgBAAAAgBQgDgCAAgCIABgDIACgEIASgsIACgGIACgEIADgDQACgBACgBQACABACABIAEADIACAEIACAFIATAtIACAHQAAABAAAAQAAABgBAAQAAABAAAAQgBABAAAAQgCACgDAAIgDAAgAAKAHIgKgbIgJAbIATAAg");
	this.shape_16.setTransform(-19.2,0.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgLAhQgCgBAAgFIACgIIAEgNIAHgNIAJgQIgYAAQgEAAgCgCQgBAAAAAAQgBgBAAAAQAAgBAAgBQAAAAAAgBQAAgBAAgBQAAAAAAgBQAAAAABgBQAAAAABgBIAGgBIAeAAQAFABACABQACABAAAEQAAACgCAEIgGAHIgGAKQgEAFgCAHIgCAHIgBAHIgBAGQAAAFgBACQgCACgDgBQgBAAgBAAQAAAAgBAAQAAAAgBgBQAAAAgBgBg");
	this.shape_17.setTransform(-27.9,0.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAGAiQgCgCgBgDIAAgrQgJAJgFAAQgBAAAAAAQAAAAgBAAQAAAAgBAAQAAgBgBAAIgBgEQAAgBAAAAQAAgBAAAAQABgBAAAAQAAAAAAgBIAGgCIAJgHIAFgHIADgEIADgBQABAAABAAQAAAAABAAQAAABABAAQAAAAABABQABACAAADIAAA3QAAAJgHAAQgCAAgCgCg");
	this.shape_18.setTransform(-34.6,0.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgMAgQgFgFgEgGIgBgJIgBgLIABgMIACgKQADgGAFgFQAGgDAGAAQAEAAAFACQAEABADADQADAEACAEQAEAIgBANIgBANQAAAHgDAEQgDAGgFADQgGADgGAAQgFAAgHgEgAgHgTQgDAHAAAMIABAOQABAGADADQADADACAAQAEAAACgDQAEgDABgGIABgOQgBgIgBgGQgBgFgDgEQgCgCgEAAQgFAAgCAGg");
	this.shape_19.setTransform(-40,0.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgQAjQgDAAgCgBQgDgCAAgEIACgEIADgFIALgLIAIgHIAFgDIADgGIACgGQAAgDgCgCQgBgDgCgBQgDgBgCgBQgFABgEAFIgCAEIgDAFQAAAAAAABQgBAAAAAAQgBABAAAAQgBAAgBAAQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAgBAAAAQgBAAAAgBQgBAAAAgBQAAAAAAgBQgBAAAAgBIACgHQABgEAEgDQADgDAFgCQAEgCAFAAQAHABAFACIAGAEIAEAHQABADABAEQAAAGgEAFQgDADgCACIgLAJIgJAKIgCADIAYAAQAEAAACACQAAAAAAAAQABABAAAAQAAABAAABQABAAAAABIgCAEQgCACgDgBg");
	this.shape_20.setTransform(-45.8,0.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgMAjQgFgCgFgEQgDgEgCgFQgCgGAAgIIAAghQABgEACgCQACgCACgBQAEABACACQACACAAAEIAAAiQAAAFABAFQABAEAEACQADACAFAAQAIAAADgFQAEgEAAgJIAAgiQAAgEACgCQACgCADgBQAEABACACQABACAAAEIAAAhQABAIgCAGQgCAFgEAFQgEADgGACQgFACgGgBQgHABgGgCg");
	this.shape_21.setTransform(-55.1,0.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgPAkQgFAAgCgCQgCgCAAgFIAAg1QAAgEACgCQACgDADAAQAEAAACADQACACAAAEIAAAyIAbAAQAEAAACACQAAAAAAABQAAAAABABQAAAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQgBABAAAAQAAABAAAAQgCACgEAAg");
	this.shape_22.setTransform(-61.1,0.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AASAkIgDgCIgDgCIgCgEIgZgnIAAAnQAAAFgCABQAAABgBAAQAAABgBAAQAAAAgBAAQgBAAgBAAQgDAAgBgCQgCgBAAgFIAAg1IABgFQAAgBAAAAQAAgBABAAQAAgBAAAAQABgBAAAAQABAAABgBQAAAAABAAQAAAAABAAQAAAAABgBIADABIADACIACADIACADIAaApIAAgpQAAgEACgCQABgCAEgBQADABABACQACACAAAEIAAA2QAAAKgIgBIgDAAg");
	this.shape_23.setTransform(-70.6,0.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AAXAkIgCgCIgCgCIgCgFIgDgJIgbAAIgEAJIgDAIQgBACgEgBQAAAAgBAAQgBAAAAAAQgBAAAAgBQgBAAAAgBQgDgCAAgCIABgDIACgEIASgsIACgGIACgEIADgDQACgBACgBQACABACABIAEADIACAEIACAFIATAtIACAHQAAABAAAAQAAABgBAAQAAABAAAAQgBABAAAAQgCACgDAAIgDAAgAAKAHIgKgbIgJAbIATAAg");
	this.shape_24.setTransform(-78,0.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgLAjQgHgCgDgEQgEgEgCgFQgCgGABgIIAAghQAAgEABgCQACgCAEgBQADABACACQACACAAAEIAAAiQAAAFACAFQAAAEAEACQAEACAEAAQAIAAAEgFQADgEAAgJIAAgiQAAgEACgCQACgCAEgBQACABACACQACACABAEIAAAhQAAAIgCAGQgBAFgFAFQgEADgFACQgGACgHgBQgFABgGgCg");
	this.shape_25.setTransform(-84.8,0.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgEAiQgCgCAAgEIAAgXIgRgZIgEgGIgBgDQAAgBAAAAQABgBAAAAQAAgBAAAAQABgBAAgBQACgCADAAQABAAABABQAAAAABAAQAAAAABABQAAAAABAAIAEAHIAMAWIANgWIACgDIACgDIACgCIADgBQABAAAAABQABAAABAAQAAAAABABQAAAAABAAQAAABABAAQAAABAAABQABAAAAABQAAAAAAABIgBADIgEAGIgRAZIAAAXQAAAEgDACQgCACgCAAQgCAAgCgCg");
	this.shape_26.setTransform(-91.8,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-97,-7.7,194,15.6);


(lib.btn_play = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFD25A").s().p("AgLBTQgFgFAAgLIAAg3Igqg/IgIgNQgCgFAAgEQAAgGAEgEQAFgEAHAAQAHAAAEAEIALAQIAeA0IAgg0IAFgIIAFgGIAFgFQADgBAEAAQAHAAAEAEQAEAEAAAGQAAAEgCAFIgHANIgrA/IAAA3QAAALgFAFQgFAFgHAAQgHAAgEgFg");
	this.shape.setTransform(43.8,6.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFD25A").s().p("AA3BXIgFgEIgEgIIgEgJIgIgWIhEAAIgIAWQgFANgEAFQgDAEgIAAQgGAAgFgFQgFgEAAgHIABgHIAEgKIAshuIAEgLIAGgMQADgEAFgDQAFgCAGAAQAGAAAFACQAFADADAEIAFAKIAFANIAtBtQAFANAAAFQAAAGgFAFQgFAFgHAAQgEAAgDgBgAAYASIgYhFIgZBFIAxAAg");
	this.shape_1.setTransform(29.2,6.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFD25A").s().p("AgmBXQgMAAgFgFQgFgFAAgMIAAiCQAAgKAFgGQAFgFAHAAQAIAAAFAFQAFAFAAALIAAB7IBFAAQAIAAAEAEQAFAEAAAHQAAAGgFAEQgEAEgIAAg");
	this.shape_2.setTransform(14.4,6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFD25A").s().p("Ag8BSQgEgGAAgKIAAiDQAAgLAFgFQAGgFALAAIArAAQATAAALADQALADAHAHQAIAHAEAJQAEALAAAMQAAAagRAMQgQANgfAAIgfAAIAAAxQAAAKgEAGQgGAFgHAAQgIAAgFgFgAgegHIAYAAQALAAAHgDQAJgDAEgFQAEgGAAgJQAAgMgGgHQgIgIgVABIgYAAg");
	this.shape_3.setTransform(-1.1,6.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFD25A").s().p("AhgBhQgpgoAAg5QAAg4ApgoQAogpA4AAQA5AAAoApQApAoAAA4QAAA5gpAoQgoApg5AAQg4AAgogpg");
	this.shape_4.setTransform(-45.1,-2.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AnUEbQh0AAhRhVQhShUAAhyQAAh0BShTQBThTBzAAQBGAABAAlQA8AiAnA4IL8AAQBaAABABBQBABBAABYQAABahABBQhABBhaAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-74.8,-28.3,149.6,56.7);


(lib.btn_more = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFD43F").s().p("AgoBVQgKAAgFgFQgFgGAAgKIAAh/QAAgHADgFQABgEAFgDQAEgCAHAAIBTAAQAIAAADADQAEAEAAAGQAAAGgEAEQgDADgIAAIhGAAIAAArIBAAAQAIAAADADQAEAFAAAFQAAADgEAEQgDAEgIAAIhAAAIAAAxIBIAAQAIAAAEAEQAEAEAAAGQAAAGgEAEQgEADgIAAg");
	this.shape.setTransform(49,6.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFD43F").s().p("AApBUIgGgHIgUgkIgNgTQgEgHgFgCQgGgDgIAAIgLAAIAAA4QAAALgFAFQgEAFgHAAQgIAAgEgGQgEgFAAgKIAAiDQAAgLAEgFQAFgFAKAAIAyAAIATABQAHABAHADQAHADAGAHQAGAHADAIQADAIAAAJQAAATgKAMQgLAKgUAEQAJAFAIAKIAOAUIAJAUIADAMQAAADgCAEQgBADgEACQgDACgFAAQgFAAgEgDgAgggNIAcAAQALAAAHgCQAIgCAEgFQAEgFAAgJQAAgIgDgFQgDgFgHgDQgGgDgOAAIgdAAg");
	this.shape_1.setTransform(33.5,6.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFD43F").s().p("AggBSQgPgHgJgMQgJgLgGgRQgFgTAAgQQAAgSAGgRQAFgRAJgLQALgMANgGQAPgGARAAQAYAAARAKQATAMAIATQAJAVAAAZQAAAUgFAPQgEAQgLANQgKAMgOAGQgNAGgUAAQgRAAgPgGgAgQg4QgJAEgGAIQgFAHgEAMQgEALABAOQgBAPAEAKQAEAMAFAIQAIAJAHADQAIAEAIAAQAMAAAKgHQALgHAFgOQAGgNABgUQAAgTgGgNQgFgNgLgIQgLgHgMAAQgIAAgIAEg");
	this.shape_2.setTransform(16.5,6.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFD43F").s().p("AAyBSQgEgFAAgKIAAh1IgdB8QgCAEgEAFQgFAEgGAAQgEAAgEgDQgEgDgCgEQgCgDgCgGIgbh2IAAB1QAAAKgFAFQgDAFgHAAQgHAAgEgFQgEgEAAgLIAAiGQAAgLAFgEQAGgEAJAAIAKAAQAJAAAEACQAEABACAFQACAFACAKIAWBcIAbhrQACgFAEgBQAEgCAJAAIAKAAQAJAAAFAEQAGAEAAALIAACGQAAAKgEAFQgEAFgHAAQgGAAgFgFg");
	this.shape_3.setTransform(-1.5,6.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFD25A").s().p("AhgBhQgpgoAAg5QAAg4ApgoQAogpA4AAQA5AAAoApQApAoAAA4QAAA5gpAoQgoApg5AAQg4AAgogpg");
	this.shape_4.setTransform(-45.1,-2.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AnUEbQh0AAhRhVQhShUAAhyQAAh0BShTQBThTBzAAQBGAABAAlQA8AiAnA4IL8AAQBaAABABBQBABBAABYQAABahABBQhABBhaAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-74.8,-28.3,149.6,56.7);


(lib.ball = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgeBSQgQgHgOgOQgMgMgIgSQgJgVADgOQACgOAGgJQAGgKAMgMQAcgcArgIQAtgJAUAUQATATgKAxQgLAugcAcQgKALgJAEQgGACgPADIgHABQgOAAgPgHg");
	this.shape.setTransform(-0.1,1,1.142,1.142,0,-50.5,-39.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10,-10,20.1,20);


(lib.score = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.egg50 = new lib.egg_sm();
	this.egg50.setTransform(72.3,1.1,1,1,0,0,0,-0.4,0.8);

	this.egg30 = new lib.egg_sm();
	this.egg30.setTransform(50.3,1.1,1,1,0,0,0,-0.4,0.8);

	this.egg20 = new lib.egg_sm();
	this.egg20.setTransform(28.5,1.1,1,1,0,0,0,-0.4,0.8);

	this.egg10 = new lib.egg_sm();
	this.egg10.setTransform(6.5,1.1,1,1,0,0,0,-0.4,0.8);

	this.egg5 = new lib.egg_sm();
	this.egg5.setTransform(-15.5,1.1,1,1,0,0,0,-0.4,0.8);

	this.egg1 = new lib.egg_sm();
	this.egg1.setTransform(-37.3,1.1,1,1,0,0,0,-0.4,0.8);

	this.txt_pt = new cjs.Text("20", "20px 'Arial Rounded MT Bold'", "#FFD25A");
	this.txt_pt.name = "txt_pt";
	this.txt_pt.textAlign = "center";
	this.txt_pt.lineHeight = 27;
	this.txt_pt.setTransform(-74.6,-11.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("At/B6QgqAAgdgdQgegeAAgpIAAgrQAAgpAegeQAdgdAqAAIcAAAQApAAAdAdQAeAeAAApIAAArQAAAqgeAdQgdAdgpAAg");
	this.shape.setTransform(0,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.txt_pt},{t:this.egg1},{t:this.egg5},{t:this.egg10},{t:this.egg20},{t:this.egg30},{t:this.egg50}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-99.7,-12.4,199.5,28);


(lib.rooster = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hair
	this.instance = new lib.hair();
	this.instance.setTransform(-2.9,-28.9,1,1,0,0,0,-4.5,7.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleY:0.7,y:-37.9},4).to({scaleY:1,y:-28.9},5).wait(1));

	// wing-rgt
	this.instance_1 = new lib.wingrgt();
	this.instance_1.setTransform(46,20,1,1,-20,0,0,-19.8,13.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:20,y:15},4).to({rotation:-20,y:20},5).wait(1));

	// wing-lft
	this.instance_2 = new lib.winglft();
	this.instance_2.setTransform(-45.9,22,1,1,20,0,0,20.3,15.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regX:20.2,rotation:-20,x:-46,y:17.1},4).to({regX:20.3,rotation:20,x:-45.9,y:22},5).wait(1));

	// body
	this.instance_3 = new lib.body();
	this.instance_3.setTransform(1,-36,1,1,0,0,0,-0.1,-52.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({scaleY:0.96,y:-41},4).to({scaleY:1,y:-36},5).wait(1));

	// legs
	this.instance_4 = new lib.legs();
	this.instance_4.setTransform(2.1,65,1,1,0,0,0,0.1,-4.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({scaleY:0.65,y:56},4).to({scaleY:1,y:65},5).wait(1));

	// heart
	this.instance_5 = new lib.heart();
	this.instance_5.setTransform(47.3,-48.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({y:-57.9},4).to({y:-48.9},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-87.7,-44.7,170.6,119.5);


(lib.logo_circle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Tween7("synched",0);
	this.instance.setTransform(-2.4,-1.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.5,scaleY:0.5,guide:{path:[-2.5,-1.5,-4.7,-2.5,-7.3,-2.5,-11.9,-2.5,-15.3,0.9,-18.8,4.3,-18.8,8.9,-18.8,13.8,-15.3,17.2,-13.9,18.5,-12.3,19.4]}},14).to({guide:{path:[-12.3,19.4,-10,20.6,-7.1,20.6,-4.1,20.6,-1.6,19.2]}},5).to({scaleX:1,scaleY:1,guide:{path:[-1.3,19.1,0,18.4,1.2,17.2,4.4,13.8,4.4,9.2,4.4,4.4,1.2,1,0.5,0.3,-0.2,-0.2]}},10).wait(16));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.3,-8.5,13.8,13.9);


(lib.eggs = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_14 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(14).call(this.frame_14).wait(1));

	// eggs6
	this.instance = new lib.eggs6();
	this.instance.setTransform(133.1,-39.7,1,1,0,0,0,0,-0.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(5).to({y:-21.7},4).to({x:133.4,y:-159},5).wait(1));

	// eggs5
	this.instance_1 = new lib.eggs5();
	this.instance_1.setTransform(94.8,-0.2,1,1,0,0,0,0,-0.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(4).to({y:17.8},4).to({x:95.1,y:-198.4},5).wait(2));

	// eggs4
	this.instance_2 = new lib.eggs4();
	this.instance_2.setTransform(34.2,-19.7,1,1,0,0,0,0,-0.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(3).to({y:-1.7},4).to({x:34.5,y:-178.9},5).wait(3));

	// eggs3
	this.instance_3 = new lib.eggs3();
	this.instance_3.setTransform(-25.4,-32.2,1,1,0,0,0,-0.1,-0.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(2).to({y:-14.2},4).to({x:-25.1,y:-166.5},5).wait(4));

	// eggs2
	this.instance_4 = new lib.eggs2();
	this.instance_4.setTransform(-79.3,-16.7,1,1,0,0,0,0,-0.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({y:1.3},4).to({x:-79,y:-182},5).wait(5));

	// eggs1
	this.instance_5 = new lib.eggs1();
	this.instance_5.setTransform(-132.7,-33.1,1,1,0,0,0,0,-0.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({y:-15.1},4).to({x:-133,y:-165.6},5).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-155.3,-108.7,310.7,216.9);


(lib.btns = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_14 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(14).call(this.frame_14).wait(1));

	// copyright
	this.instance = new lib.copyright();
	this.instance.setTransform(0,91.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({alpha:0},5).wait(1));

	// btn_play
	this.btn_play = new lib.btn_play();
	this.btn_play.setTransform(-43,-70.7,1,1,0,0,0,-43,-0.4);
	new cjs.ButtonHelper(this.btn_play, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.btn_play).to({x:-28},4).to({x:-280,y:-70.6},5).wait(6));

	// btn_more
	this.btn_more = new lib.btn_more();
	this.btn_more.setTransform(0,9);
	new cjs.ButtonHelper(this.btn_more, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.btn_more).wait(1).to({x:15},4).to({x:-237,y:8.8},5).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-97,-98.6,194,197.5);


(lib.scr_play = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.bar = new lib.score();
	this.bar.setTransform(-18.8,-259.7);

	this.timeline.addTween(cjs.Tween.get(this.bar).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-118.5,-272.1,199.5,28);


(lib.scr_over = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.copyright();
	this.instance.setTransform(0,255.9);

	this.btn_play = new lib.btn_play();
	this.btn_play.setTransform(-43,94.1,1,1,0,0,0,-43,-0.4);
	new cjs.ButtonHelper(this.btn_play, 0, 1, 1);

	this.btn_more = new lib.btn_more();
	this.btn_more.setTransform(0,173.8);
	new cjs.ButtonHelper(this.btn_more, 0, 1, 1);

	this.instance_1 = new lib.rooster();
	this.instance_1.setTransform(0,-114.9,0.714,0.714,0,0,0,-0.1,0.3);

	this.txt_pt = new cjs.Text("250", "50px 'Arial Rounded MT Bold'", "#FFFFFF");
	this.txt_pt.name = "txt_pt";
	this.txt_pt.textAlign = "center";
	this.txt_pt.lineHeight = 68;
	this.txt_pt.setTransform(-2,-8.6);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgHAoQgDgDAAgGQAAgFADgDQADgEAEAAQAEAAAEAEQADADAAAFQAAAGgDADQgEADgEAAQgDAAgEgDgAgHgWQgDgEAAgEQAAgFADgDQADgEAEAAQAEAAAEAEQADADAAAFQAAAEgEAEQgDADgEABQgEgBgDgDg");
	this.shape.setTransform(90.2,-28.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgHA2QgDgDAAgHIAAhSIgaAAQgGAAgCgCQgDgDAAgEQAAgFADgCQADgDAFAAIBIAAQAGAAADADQADADAAAEQAAAEgDADQgDACgGAAIgZAAIAABSQAAAHgDADQgEAEgEAAQgEAAgDgEg");
	this.shape_1.setTransform(82.7,-29.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgWA2QgLgEgHgIQgHgIgEgLQgEgLAAgMQAAgMAEgLQAEgLAHgIQAHgIALgEQAKgEAMAAQARAAANAIQANAHAGANQAHANAAARQAAANgEAKQgEALgHAIQgHAIgKAEQgLAFgNAAQgMAAgKgFgAgMglQgGADgEAFQgEAFgDAIQgCAHAAAJQAAAJACAIQADAIAEAFQAFAFAGADQAGACAFAAQAIAAAIgEQAHgFAFgJQAEgJAAgNQAAgLgEgKQgEgJgIgFQgHgEgJAAQgGAAgGACg");
	this.shape_2.setTransform(71.3,-29.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgTA3QgKgEgIgIQgIgIgEgLQgEgLAAgNQAAgMAEgLQAEgLAIgIQAHgIAMgEQALgEAMAAQALAAAJADQAJADAGAFQAFAFADAFQACAFABAEQAAAFgEADQgDADgEAAIgFgBQgDgBgBgDIgHgKQgDgDgFgCQgFgDgIAAQgHAAgFADQgHADgEAFQgFAFgCAIQgCAIAAAIQAAATAJALQAJALAPAAQAIAAAGgCQAIgCAHgEIAAgTIgSAAQgHAAgDgCQgDgCAAgFQAAgDADgCQADgBAEAAIAaAAIAIAAQAEABACABQACADAAAGIAAAWIgBAHIgDAFIgGAEQgKAGgKACQgKADgKAAQgMAAgLgEg");
	this.shape_3.setTransform(58.6,-29.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgTA4QgKgDgGgGQgGgGgDgJQgDgKAAgNIAAg1QAAgHAEgDQADgEAFAAQAFAAADAEQAEADAAAHIAAA3QAAAJACAHQACAGAFAEQAGADAIAAQANAAAGgHQAGgHAAgPIAAg3QAAgHADgDQADgEAFAAQAFAAAEAEQADADAAAHIAAA1QAAAOgDAJQgCAJgIAHQgGAFgIADQgJADgLAAQgLAAgJgDg");
	this.shape_4.setTransform(42.3,-29.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgWA2QgLgEgHgIQgHgIgEgLQgEgLAAgMQAAgMAEgLQAEgLAHgIQAHgIALgEQAKgEAMAAQARAAANAIQANAHAGANQAHANAAARQAAANgEAKQgEALgHAIQgHAIgKAEQgLAFgNAAQgMAAgKgFgAgMglQgGADgEAFQgEAFgDAIQgCAHAAAJQAAAJACAIQADAIAEAFQAFAFAGADQAGACAFAAQAIAAAIgEQAHgFAFgJQAEgJAAgNQAAgLgEgKQgEgJgIgFQgHgEgJAAQgGAAgGACg");
	this.shape_5.setTransform(29.9,-29.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgHA3QgEgDABgHIAAglIgcgpIgGgJIgBgGQAAgEADgDQADgDAEAAQAFAAADADIAHALIAUAiIAVgiIAEgGIACgEIAEgDIAFgBQAEAAADADQADADAAAEIgCAGIgEAIIgdAqIAAAlQAAAHgDADQgEAEgEAAQgEAAgDgEg");
	this.shape_6.setTransform(18.6,-29.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgHA4QgDgEAAgFQAAgFADgDQADgEAEAAQAEAAAEAEQADADAAAFQAAAFgDADQgEAEgEAAQgDAAgEgDgAgFASIgCgLIgDgjIAAgQQAAgGADgEQADgEAEAAQAHAAACAFQACAFAAAIIAAALIgEAkQAAAHgCAEQgCAEgDAAQgDAAgCgEg");
	this.shape_7.setTransform(6.9,-29.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgSA2QgDgDAAgHIACgOQACgIAFgMQAFgKAHgNQAFgMAKgNIgoAAQgGAAgEgCQgDgDAAgFQAAgFAEgCQADgBAGAAIAyAAQAIAAADACQADADAAAFQAAADgDAGIgJAMQgGAGgFAKQgGAJgEAMIgDALIgCAKIgBAKQAAAIgDADQgDADgEAAQgGAAgCgDg");
	this.shape_8.setTransform(-0.1,-29.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAJA3QgDgDAAgGIAAhGQgRAPgHAAQgEAAgCgCQgDgDAAgDQAAgEADgCIAJgFQAJgFAGgFQADgEAFgGIAGgIQABgBAEAAQAEAAACADQADADAAAGIAABXQAAAQgLAAQgFAAgDgDg");
	this.shape_9.setTransform(-10.9,-29.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgUAzQgJgGgFgMIgEgPIAAgRQgBgJACgKQABgJACgHQAGgLAIgGQAJgGALAAQAHAAAHADQAGACAFAFQAFAFADAIQAHAMAAAWQgBANgBAJQgBAJgFAIQgFAJgJAFQgIAFgKAAQgKAAgKgHgAgNgfQgEALAAAUQAAAOABAJQADAKADAEQAEAFAGAAQAHAAAEgFQAEgFABgJQACgJAAgOQAAgOgCgJQgCgJgDgFQgFgEgGAAQgJAAgEAKg");
	this.shape_10.setTransform(-19.5,-29.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgaA5QgGAAgEgDQgDgEAAgEIACgHQACgFADgCIATgTQAIgIAEgCIAIgHIAHgJQACgGAAgEQAAgFgCgEQgDgEgEgCQgEgCgDAAQgKAAgGAJIgDAGQgBAFgCADQgDADgFAAQgDAAgDgDQgCgDgBgDQABgGACgGQADgGAEgFQAFgFAHgDQAIgCAJAAQAKAAAJADQAGADAEAEQAEAFACAFQADAHAAAGQAAAJgFAIQgFAGgFAFIgRANQgKAKgEAFIgEAGIAnAAQAGAAAEACQADADAAAEQgBADgCADQgDADgEAAg");
	this.shape_11.setTransform(-28.8,-29.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgHA3QgEgDABgHIAAglIgcgpIgGgJIgBgGQAAgEADgDQADgDAEAAQAFAAADADIAHALIAUAiIAVgiIAEgGIACgEIAEgDIAFgBQAEAAADADQADADAAAEIgCAGIgFAIIgcAqIAAAlQAAAHgDADQgEAEgEAAQgEAAgDgEg");
	this.shape_12.setTransform(-42.7,-29.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgnA2QgDgDAAgHIAAhXQAAgHADgDQAEgEAHAAIAcAAQANAAAIACQAHACAFAFQAFAEACAHQADAGAAAJQAAARgLAHQgKAJgWAAIgTAAIAAAhQAAAHgDADQgEAEgFAAQgFAAgDgEgAgTgEIAQAAQAGAAAFgCQAGgCADgEQADgEAAgGQAAgIgFgEQgFgFgNAAIgQAAg");
	this.shape_13.setTransform(-52.8,-29.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgnA2QgDgDAAgHIAAhXQAAgHADgDQAEgEAHAAIAcAAQANAAAIACQAHACAFAFQAFAEACAHQADAGAAAJQAAARgLAHQgKAJgWAAIgTAAIAAAhQAAAHgDADQgEAEgFAAQgFAAgDgEgAgTgEIAQAAQAGAAAFgCQAGgCADgEQADgEAAgGQAAgIgFgEQgFgFgNAAIgQAAg");
	this.shape_14.setTransform(-63.4,-29.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAkA6IgCgDIgEgFIgCgGIgGgPIgsAAIgFAPIgGAMQgDADgFAAQgEAAgEgDQgDgEAAgEIABgFIACgHIAehIIADgIIAEgHQABgDAEgCQADgCAEAAQAEAAADACQADACACADIAEAGIADAJIAeBIQADAIABAEQAAAEgEADQgDAEgFAAIgFgBgAAQAMIgQgtIgQAtIAgAAg");
	this.shape_15.setTransform(-74.8,-29.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAcA3QgDgDAAgHIAAgnIgwAAIAAAnQAAAHgEADQgDAEgFAAQgFAAgDgEQgEgDAAgHIAAhZQAAgHAEgDQADgEAFAAQAFAAADAEQAEADAAAHIAAAhIAwAAIAAghQAAgHADgDQADgEAFAAQAFAAAEAEQADADAAAHIAABZQAAAHgDADQgEAEgFAAQgFAAgDgEg");
	this.shape_16.setTransform(-86.6,-29.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.txt_pt},{t:this.instance_1},{t:this.btn_more},{t:this.btn_play},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-97,-150.1,194,413.8);


(lib.logo_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.logo_circle();
	this.instance.setTransform(-27.6,0.4);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgmBLIgJgDQgEgCgCgEQgDgEgBgEQgBgEABgFQABgEADgEIAyhEIgbgCQgKgBgGgHQgGgHABgJQABgKAGgGQAHgGAKABIBBAFQAJAAAGAHQAGAHAAAKQgBAHgEAFIhGBjQgCAEgEACQgEADgEAAIgEABIgEgBg");
	this.shape.setTransform(83.7,-6.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAEA5QgIAAgGgHQgGgHABgKIADgjQAAAAAAAAQgBAAAAgBQAAAAAAAAQgBAAAAAAIgEgBIgGgBQAAAAgBAAQgBAAAAAAQgBAAAAgBQAAAAgBgBQgGgIACgGQACgGAIgHIAUgRQAFgGAJAAQAJABAHAIQACADACAEQACAEgBAFIgFBFQgBAJgHAGQgGAGgIAAIgCgBg");
	this.shape_1.setTransform(73.9,-8.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("ACODYQgNgBgNgKQgMgKgBgOQgWAMgfAGQgcAFgdgDQgqgDglgVQgjgSgcghQgagggMgnQgNgoAFgpQAEgrAUgkQAUglAfgZQAfgaAogNQApgNAoAFQAwAEAnAZQAnAaAZAlQAHAKAEAMQAEAKgBANQgCAOgFAJQgGAMgJAHQgLAJgLADQgLADgNgBQgNgBgJgFQgMgHgHgJIgGgIQgKgNgRgNQgPgMgUgCQgRgCgPAGQgPAFgNALQgMAKgJAQQgIAQgCARQgBAPAFAQQAFARAKAMQALANAOAIQAQAJAOABQAHABAGgBIANgCQgNgDgIgPQgIgPABgOQACgPALgFQALgGAPACIBzALQAPACAJALQAJALgBAPIgMB/QgCAPgIAKQgGAIgNAAIgEAAg");
	this.shape_2.setTransform(49.2,6.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AiODOQgTgQgDgbIgakfQgCgLgEgMQgEgNABgJQAAgJAHgHQAIgHAVgCIAdgDQAPAAAMAFQAOAGALALICOCQIgLhxQgBgJgEgPQgFgMAAgKQAAgKAIgHQAIgHAVgCIAdgDQALgBAMAEQAMAEAKAIQAKAIAFAKQAHAMABAMIAaEcQACAOgDAOQgDAOgKAMQgJAKgLAGQgMAFgMAAQgMABgLgEQgLgEgLgJIiTiWIALB4QADAbgQAUQgQATgaACIgIABQgWAAgRgOg");
	this.shape_3.setTransform(8.1,5.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhQDBQgngQgcgdQgcgcgRgnQgRgmAAgrQAAgqARgmQARgmAcgdQAcgcAngRQAngQApAAQArAAAmAQQAnARAcAcQAcAdARAmQARAmAAAqQAAArgRAmQgSAngbAcQgcAdgnAQQglAQgsAAQgrAAglgQg");
	this.shape_4.setTransform(-32.7,5.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AiHDlQgcgEgRgXQgQgWAFgcIAwk5IABgaQgCgLADgMQADgKAJgGQAKgEAXADICGAVQAkAGAgATQAeATAVAdQAVAcAJAjQAJAjgFAkQgGAlgUAfQgSAegdAVQgdAVgjAIQgiAJgkgFIgmgGIgEAZQgEAdgXAQQgRANgVAAIgMgBgAghAPIAkAFQATACAPgKQAPgKADgRQADgUgLgQQgLgRgTgEIgkgHg");
	this.shape_5.setTransform(-74,5.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-93.3,-28.3,186.7,56.6);


(lib.logo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_14 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(14).call(this.frame_14).wait(1));

	// logo
	this.instance = new lib.logo_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.87,scaleY:0.87,rotation:120,guide:{path:[0.3,0,1,-11.1,2.2,-24.9,4.6,-53.7,9,-79.8]}},4).to({scaleX:0.71,scaleY:0.71,rotation:240,guide:{path:[9.2,-80,11.9,-96.2,15.3,-111.3,23.6,-149,35.4,-175.6]}},5).to({scaleX:0.54,scaleY:0.54,rotation:360,guide:{path:[35.6,-175.7,41.1,-188,47.3,-198,71.8,-237.4,106.5,-237.4]}},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-93.3,-28.3,186.7,56.6);


// stage content:



(lib.ly_an_pong = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var gs = this;
		var width = stage.canvas.width;
		var height = stage.canvas.height;
		
		var gamestate = 'start';
		var eggs = [];
		eggs.push(gs.scr_play.bar.egg1, gs.scr_play.bar.egg5,
				  gs.scr_play.bar.egg10, gs.scr_play.bar.egg20,
				  gs.scr_play.bar.egg30, gs.scr_play.bar.egg50);
		var eggs2 = [1, 5, 10, 20, 30, 50];
		var ball = {};
		var player = {};
		var r, min, max, point;
		var score = gs.scr_play.bar.txt_pt;
		
		gs.scr_play.alpha = 0;
		gs.scr_over.alpha = 0;
		
		createjs.Ticker.on('tick', handleTick);
		
		function handleTick() {
			if (gamestate == 'playing') {
				fadeout(gs.scr_over);
				fadein(gs.scr_play);
				r += 30;
				if (player != '') player.x = stage.mouseX;
				if (ball != '') moveBall();
			}
			if (gamestate == 'over') {
				fadeout(gs.scr_play);
				fadein(gs.scr_over);
			}
		}
		
		// functions
		function drawBall() {
			ball = new lib.ball();
			ball.x = width / 2;
			ball.y = height / 3;
			ball.xdir = 0;
			ball.ydir = max;
			gs.addChild(ball);
		}
		function drawPlayer() {
			player = new lib.player();
			player.x = width / 2;
			player.y = height - 5;
			gs.addChild(player);
		}
		function moveBall() {
			ball.rotation = r;
			ball.x += ball.xdir;
			ball.y += ball.ydir;
			if (ball.y > height - 15) {
				if ((ball.x >= player.x && ball.x - player.x <= 35) || (ball.x < player.x && player.x - ball.x < 35)) {
					ball.ydir = newDirY('up');
					ball.xdir = newDirX();
					point++;
					updateScore();
					if (min <= 10) {
						min += 1;
						max += 1;
					}
				/* hittest somehow not accurate
				var pt = player.globalToLocal(ball.x, ball.y);
				if (ball.hitTest(pt.x, pt.y)) {
					ball.ydir = newDirY('up');
					ball.xdir = newDirX();
					point++;
					updateScore();
				*/
				} else gameOver();
			}
		    if (ball.y < 40) {
				ball.ydir = newDirY('down');
				ball.xdir = newDirX();
		    }
		    if (ball.x > width) ball.xdir = (max + min) / 2 * -1;
			if (ball.x < 0) ball.xdir = (max + min) / 2;
		}
		function updateScore() {
			score.text = point;
			for (var i = 0; i < eggs.length; i++) {
				if (point >= eggs2[i]) {
					for (var j = 0; j <= i; j++) {
						eggs[j].gotoAndStop(0);
					}
				}
			}
		}
		function gameOver() {
			clearStage();
			gamestate = 'over';
			gs.scr_over.txt_pt.text = point;
		}
		function newGame() {
			clearStage();
			gamestate = 'playing';
			for (var i = 0; i < eggs.length; i++) {
				eggs[i].gotoAndStop(1);
			}
			max = 15;
			min = 5;
			point = r = 0;
			drawPlayer();
			drawBall();
			updateScore();
		}
		function link() {
			window.open('https://jsmania.wordpress.com');
		}
		function clearStage() {
			if (player != '') gs.removeChild(player);
			if (ball != '') gs.removeChild(ball);
		}
		
		// eventlisteners
		gs.btns.btn_play.on('click', function() {
			gs.eggs.play();
			gs.logo.play();
			gs.btns.play();
			newGame();
		});
		gs.btns.btn_more.on('click', link);
		gs.scr_over.btn_play.on('click', newGame);
		gs.scr_over.btn_more.on('click', link);
		
		// general functions
		function newDirX() {
			var d = random(0, 10);
			if (d < 5) return random(min, max);
			else return random(max * -1, min * -1);
		}
		function newDirY(dir) {
			if (dir == 'up') return random(max * -1, min * -1);
			else return random(min, max);
		}
		function fadein(obj) {
			if (obj.alpha < 1) obj.alpha += 0.05;
		}
		function fadeout(obj) {
			if (obj.alpha > 0) obj.alpha -= 0.05;
		}
		function random(min, max) {
			return Math.floor((Math.random() * (max - min)) + min);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// over
	this.scr_over = new lib.scr_over();
	this.scr_over.setTransform(120,210.7,0.75,0.75);

	this.timeline.addTween(cjs.Tween.get(this.scr_over).wait(1));

	// play
	this.scr_play = new lib.scr_play();
	this.scr_play.setTransform(97.4,215.2,0.75,0.75,0,0,0,0.4,0.2);

	this.timeline.addTween(cjs.Tween.get(this.scr_play).wait(1));

	// start
	this.btns = new lib.btns();
	this.btns.setTransform(120,333.9,0.75,0.75);

	this.eggs = new lib.eggs();
	this.eggs.setTransform(120,66,0.75,0.75,0,0,0,0,-0.2);

	this.logo = new lib.logo();
	this.logo.setTransform(120,196,0.75,0.75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo},{t:this.eggs},{t:this.btns}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(123.6,194.6,233,423.9);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;