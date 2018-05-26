// Dataset we will be using to set the height of our rectangles
var booksReadThisYear = [17, 23, 20, 34];

// Setting variable for height and width for ease of calculations
var svgHeight = 500;
var svgWidth = 520

// Append an SVG wrapper to the page and set a variable equal to a reference to it
let svg = d3.select("#svg-area")
  .append("svg")
  .attr("height", svgHeight)
  .attr("width", svgWidth)
  .classed("halfcourt", true);

// Vertical Bar Chart
// Selects all rectangles currently on the page - which is none - and binds our dataset to them. If there are no rectangles, it will append one for each piece of data.
let midrange = svg.append("rect")
  .attr("x", 10)
  .attr("y", 10)
  .attr("width", 500)
  .attr("height", 470)
  .style("stroke", "black")
  .style("fill", "green")
  .style("stroke-width", 2)
  .classed("midrange", true);

let leftcorner = svg.append("rect")
  .attr("x", 10)
  .attr("y", 10)
  .attr("width", 30)
  .attr("height", 140)
  .style("stroke", "black")
  .style("fill", "grey")
  .style("stroke-width", 2)
  .classed("leftcorner", true);

let rightcorner = svg.append("rect")
  .attr("x", 480)
  .attr("y", 10)
  .attr("width", 30)
  .attr("height", 140)
  .style("stroke", "black")
  .style("fill", "red")
  .style("stroke-width", 2)
  .classed("rightcorner", true);

let paint1 = svg.append("rect")
  .attr("x", 180)
  .attr("y", 10)
  .attr("width", 160)
  .attr("height", 190)
  .style("stroke", "black")
  .style("fill", "yellow")
  .style("stroke-width", 2)
  .classed("paint", true);

let paint2 = svg.append("rect")
  .attr("x", 200)
  .attr("y", 10)
  .attr("width", 120)
  .attr("height", 190)
  .style("stroke", "black")
  .style("fill", "yellow")
  .style("stroke-width", 2)
  .classed("paint", true)

let paint3 = svg.append('circle')
  .attr("cx", 260)
  .attr("cy", 200)
  .attr("r", 60)
  .style("stroke", "black")
  .style("fill", "yellow")
  .style("stroke-width", 2)
  .classed("paint", true);

let ft = svg.append('path')
  .attr('d', "M200 200L320 200")
  .style("stroke", "black")
  .style("stroke-width", 2)
  .classed("ft", true);

let restricted = svg.append('path')
  .attr('d', "M225 10 L225 70 A 10 10 0 0 0 295 70 L295 10 Z")
  .style("stroke", "black")
  .style("stroke-width", 2)
  .style("fill", "pink")
  .classed("restricted", true);

let atb = svg.append('path')
  .attr('d', "M10 150 L10 480 L510 480 L510 150 L480 150 A 200 140 0 1 1 40 150 Z")
  .style("stroke", "black")
  .style("stroke-width", 2)
  .style("fill", "blue")
  .classed("atb", true);

let backboard = svg.append('path')
  .attr('d', "M230 50L290 50")
  .style("stroke", "black")
  .style("stroke-width", 2)
  .classed("backboard", true);

let rim = svg.append('circle')
  .attr("cx", 260)
  .attr("cy", 65)
  .attr("r", 15)
  .style("stroke", "black")
  .style("stroke-width", 2)
  .style("fill", "none")
  .classed("rim", true);


