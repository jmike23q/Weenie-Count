
var width = window.innerWidth;
var height = window.innerHeight;
var svg = d3.select('body').append('svg');
svg.attr('width', width);
svg.attr('height', height);

var ox = width/3; //x offset
var oy = height/12; //y offset
var s = .75; //scale


var max_x_boundary = (750*s)+ox
var min_x_boundary = (150*s)+ox
var max_y_boundary = (276*s)+oy
var min_y_boundary = (108*s)+oy

var regions = [
              [{ "x": 200, "y": 108},
              { "x": 456,  "y": 139}],

              [{ "x": 536, "y": 108},
              { "x": 705,  "y": 139}],

              [{ "x": 636,  "y": 183},
              { "x": 800,  "y": 276}],

              [{ "x": 323,  "y": 236},
              { "x": 538,  "y": 276}],
              
              [{ "x": 119,  "y": 200},
              { "x": 193,  "y": 276}],

              [{ "x": 270,  "y": 139},
              { "x": 692, "y": 236}]
              ]

//This is the accessor function we talked about above
var lineFunction = d3.line()
  .x(function(d) { return ((d.x)*s)+ox; })
  .y(function(d) { return ((d.y)*s)+oy; })
  .curve(d3.curveLinear);

var defs = svg.append("defs");

var gradient = defs.append("linearGradient")
   .attr("id", "svgGradient")
   .attr("x1", "0%")
   .attr("x2", "0%")
   .attr("y1", "0%")
   .attr("y2", "100%");

gradient.append("stop")
   .attr('class', 'start')
   .attr("offset", "30%")
   .attr("stop-color", "#90B77E")
   .attr("stop-opacity", 1);

gradient.append("stop")
   .attr('class', 'end')
   .attr("offset", "100%")
   .attr("stop-color", "rgba(234,240,243,1)")
   .attr("stop-opacity", 1);

//The data for our line
var floorplan = [ { "x": 200,   "y": 108},  { "x": 456,  "y": 108},
                 { "x": 456,  "y": 139}, { "x": 545,  "y": 139},
                 { "x": 536,  "y": 108},  { "x": 700, "y": 108},
                 { "x": 728,  "y": 139},  { "x": 663, "y": 139},
                 { "x": 692,  "y": 183},  { "x": 766, "y": 183},
                 { "x": 847,  "y": 276},  { "x": 654, "y": 276},
                 { "x": 636,  "y": 236},  { "x": 530, "y": 236},
                 { "x": 538,  "y": 276},  { "x": 311, "y": 276},
                 { "x": 323,  "y": 236},  { "x": 215, "y": 236},
                 { "x": 193,  "y": 276},  { "x": 54, "y": 276},
                 { "x": 119,  "y": 200},  { "x": 235, "y": 200},
                 { "x": 270,  "y": 139},  { "x": 172, "y": 139},
                 { "x": 200,   "y": 108}];
  
//The line SVG Path we draw
var lineGraph = svg.append("path")
  .attr("d", lineFunction(floorplan))
  .attr("stroke-width", 2)
  .attr("fill", "#D8D8D8")
  .attr("fill-opacity", 0);

lineGraph.transition()
	.duration(200)
	.attr("transform","translate(0,20)")
	.transition()
	.ease(d3.easeQuadInOut)
	.delay(50)
	.duration(400)
	.attr("transform","translate(0,-50)")
	.attr("fill-opacity", .2)
	.transition()
	.ease(d3.easeSin)
	.delay(50)
	.duration(600)
	.attr("transform", "translate(0,0)")
	.attr("fill-opacity", 1);  


var myText =  svg.append("text")
   .attr("y", 80)
   .attr("x", 100)
   .attr('text-anchor', 'left')
   .attr("class", "myLabel")//easy to style with CSS
   .text("Big Title")
   .attr("fill-opacity", 0);

var myText1 =  svg.append("text")
   .attr("y", 180)
   .attr("x", 100)
   .attr('text-anchor', 'left')
   .attr("class", "myLabel1")//easy to style with CSS
   .text("Big Title")
   .attr("fill-opacity", 0);

var myText2 =  svg.append("text")
   .attr("y", 280)
   .attr("x", 100)
   .attr('text-anchor', 'left')
   .attr("class", "myLabel2")//easy to style with CSS
   .text("Big Title")
   .attr("fill-opacity", 0);

  myText.transition()
 //   	.duration(200)
	// .attr("x",100)
	// .attr("y",100)
	// .transition()
	.ease(d3.easeQuadInOut)
	.delay(50)
	.duration(400)
	.attr("x",100)
	.attr("y",70)
	.attr("fill-opacity", .2)
	.transition()
	.ease(d3.easeSin)
	.delay(50)
	.duration(600)
	.attr("x",100)
	.attr("y",80)
	.attr("fill-opacity", 1);

  myText1.transition()
  	.delay(150)
  	.transition()
	.ease(d3.easeQuadInOut)
	.delay(50)
	.duration(400)
	.attr("x",100)
	.attr("y",170)
	.attr("fill-opacity", .2)
	.transition()
	.ease(d3.easeSin)
	.delay(50)
	.duration(600)
	.attr("x",100)
	.attr("y",180)
	.attr("fill-opacity", 1);

  myText2.transition()
  	.delay(250)
  	.transition()
	.ease(d3.easeQuadInOut)
	.delay(50)
	.duration(400)
	.attr("x",100)
	.attr("y",270)
	.attr("fill-opacity", .2)
	.transition()
	.ease(d3.easeSin)
	.delay(50)
	.duration(600)
	.attr("x",100)
	.attr("y",280)
	.attr("fill-opacity", 1);






    // .attr("stroke", "lightgrey")
    // .attr("stroke-width", 0.5);
    //.style("filter", "url(#drop-shadow)");

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var publicSpreadsheetUrl = "https://docs.google.com/spreadsheets/d/10Wbbx6IyPvH4xmyFBafGNDxaFweQRcTR0HMsYbLaHJk/edit?usp=sharing"


function init() {
  Tabletop.init( { key: publicSpreadsheetUrl,
                   callback: drawInfo,
                   simpleSheet: true } )
}

function drawInfo(data, tabletop) {

  var width_rect = 150;
  var total_years = data.length + 1951;
  var height_rect = 1800/data.length;
  var y_start = 510;
  var x_start = 1900;


  

  function circle_destroy(){
    var circles = svg.selectAll("circle").remove();

  }

  function circle_generator(year_data){
    var num_artworks = parseInt(year_data)-1951+66;
    var circle_data = [];
    var x = 0;
    var y = 0;
    var region = 0;
    //console.log(regions[1][1].x);
    for (i=0; i < data[num_artworks].numartists; i++){
      //draw circle

      region = getRandomInt(0, 5);
      x = getRandomInt(regions[region][0].x, regions[region][1].x);
      y = getRandomInt(regions[region][0].y, regions[region][1].y);
      x = x*s+ox;
      y = y*s+oy;
      //console.log(x);
      circle_data.push({ "x_axis": x, "y_axis": y}); //"name": "desc"});
    }

    var circles = svg.selectAll("circle")
                            .data(circle_data)
                            .enter()
                            .append("circle");

    var circleAttributes = circles
                            .attr("cx", function(d){ return d.x_axis})
                            .attr("cy", function(d){ return d.y_axis})
                            .attr("r", 3)
                            .attr("fill", function(d){ return "#90B77E";})
  }
  

  var rects = svg.selectAll("rect")
                            .data(data)
                            .enter()
                            .append("rect");

  function xoffset(year) {
    var offset;
    var yearnum = year-1951;
    offset = yearnum - yearnum%10;
    return offset;
  }

  

  var rectAttributes = rects
                         .attr("y", function(d) {
                           var returny;
                           if (d.genderartist === "1") { returny = y_start- (width_rect*(d.percentartist/100));
                           } 
                           else { returny = y_start-width_rect;
                           } 
                           return returny; })

                         .attr("x", function (d) { return x_start-((total_years-d.year)*height_rect) + (xoffset(d.year))*1.5; })

                         .attr("height", function (d) { return 0; } )

                         .attr("width", height_rect)
                         .attr("stroke", "#F9F9FD")
                         .attr("fill", function(d) {
                           var returnfill;
                           if (d.genderartist === "1") { returnfill = "url(#svgGradient)";
                           } 
                           else { returnfill = "rgba(234,240,243,1)";

                           } 
                           return returnfill; });       

rects.transition()

	.delay(function(d,i){
		return i*8;
	})
	.duration(40)
	.attr("y", function (d){
		var returny;
                           if (d.genderartist === "1") { returny = y_start- (width_rect*(d.percentartist/100));
                           } 
                           else { returny = y_start-width_rect;
                           } 
                           return returny;
	})
	.attr("height", function(d){
		return width_rect*(d.percentartist/100);
	});


rects.on('mouseover', function(d) {
         circle_destroy();
         d3.select(rects._groups[0][parseInt(d.year)-1951]).style("fill", "#F7D94C");
         d3.select(rects._groups[0][parseInt(d.year)-1951+66]).style("fill", "#F7D94C");
         circle_generator(d.year);

      })
     .on('mouseout', function(d) {

        d3.select(rects._groups[0][parseInt(d.year)-1951])
            .style("fill", function(d) {
                           var returnfill;
                           if (d.genderartist === "1") { returnfill = "url(#svgGradient)";
                           } 
                           else { returnfill = "rgba(234,240,243,1)";

                           } 
                           return returnfill; })
        d3.select(rects._groups[0][parseInt(d.year)-1951+66])
            .style("fill", function(d) {
                             var returnfill;
                             if (d.genderartist === "1") { returnfill = "url(#svgGradient)";
                             } 
                             else { returnfill = "rgba(234,240,243,1)";

                             }})
          
     })
     .on('click', function(d) {});

     // draw a rectangle
var event = svg.append("a")
    .attr("xlink:href", "http://en.wikipedia.org/wiki/")
    .append("rect")  
    .attr("x", 100)
    .attr("y", 540)
    .attr("height", 70)
    .attr("width", 160)
    .style("fill", "white")
    .attr("rx", 10)
    .attr("ry", 10)
    .attr("stroke", "lightgrey")
    .attr("stroke-width", 0.5);

var event2 = svg.append("a")
    .attr("xlink:href", "http://en.wikipedia.org/wiki/")
    .append("rect")  
    .attr("x", 300)
    .attr("y", 540)
    .attr("height", 70)
    .attr("width", 160)
    .style("fill", "white")
    .attr("rx", 10)
    .attr("ry", 10)
    .attr("stroke", "lightgrey")
    .attr("stroke-width", 0.5);

var event3 = svg.append("a")
    .attr("xlink:href", "http://en.wikipedia.org/wiki/")
    .append("rect")  
    .attr("x", 500)
    .attr("y", 540)
    .attr("height", 70)
    .attr("width", 160)
    .style("fill", "white")
    .attr("rx", 10)
    .attr("ry", 10)
    .attr("stroke", "lightgrey")
    .attr("stroke-width", 0.5);

var event4 = svg.append("a")
    .attr("xlink:href", "http://en.wikipedia.org/wiki/")
    .append("rect")  
    .attr("x", 700)
    .attr("y", 540)
    .attr("height", 70)
    .attr("width", 160)
    .style("fill", "white")
    .attr("rx", 10)
    .attr("ry", 10)
    .attr("stroke", "lightgrey")
    .attr("stroke-width", 0.5);




}

window.addEventListener('DOMContentLoaded', init)




