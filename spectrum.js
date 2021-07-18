var data1 = [{
        pX: 450,
        pY: 0
    },
    {
        pX: 475,
        pY: 13
    },
    {
        pX: 500,
        pY: 3
    },
    {
        pX: 670,
        pY: 7
    },
    {
        pX: 720,
        pY: 9
    },
    {
        pX: 750,
        pY: 0
    },

];

var data2 = [{
        pX: 450,
        pY: 10
    },
    {
        pX: 500,
        pY: 15
    },
    {
        pX: 550,
        pY: 9
    },
    {
        pX: 750,
        pY: 2
    }
];

// set the dimensions and margins of the graph
var margin = {
        top: 10,
        right: 30,
        bottom: 30,
        left: 50
    },
    width = 460 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom;

// append the svg object to the body of the page
var svg = d3.select("#spectrum-canvas")
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform",
        "translate(" + margin.left + "," + margin.top + ")");

// Initialise a X axis:
var x = d3.scaleLinear().range([0, width]);
var xAxis = d3.axisBottom().scale(x);
svg.append("g")
    .attr("transform", "translate(0," + height + ")")
    .attr("class", "myXaxis")

// Initialize an Y axis
var y = d3.scaleLinear().range([height, 0]);
var yAxis = d3.axisLeft().scale(y);
svg.append("g")
    .attr("class", "myYaxis")
// add defs for gradient

var defs = svg.append('defs');
var rainbowGradient = defs.append('linearGradient')
    .attr('id', 'rainbowGradient')
    .attr('x1', '0%')
    .attr('x2', '100%')
    .attr('y1', '0%')
    .attr('y2', '0%')
rainbowGradient.append('stop')
    .attr("class", "start")
    .attr("offset", "0%")
    .attr("stop-color", "red")
    .attr("stop-opacity", 1);
rainbowGradient.append('stop')
    .attr("class", "start")
    .attr("offset", "100%")
    .attr("stop-color", "blue")
    .attr("stop-opacity", 1);
// Create a function that takes a dataset as input and update the plot:
function update(data) {

    // Create the X axis:
    x.domain([440, 760]);
    svg.selectAll(".myXaxis").transition()
        .duration(3000)
        .call(xAxis);

    // create the Y axis
    y.domain([0, d3.max(data, function (d) {
        return d.pY
    })]);
    svg.selectAll(".myYaxis")
        .transition()
        .duration(3000)
        .call(yAxis);

    // Create a update selection: bind to the new data
    var u = svg.selectAll(".userSpecLine")
        .data([data], function (d) {
            return d.pX
        });

    // Updata the line
    u
        .enter()
        .append("path")
        .attr("class", "userSpecLine")
        .merge(u)
        .transition()
        .duration(3000)
        .attr("d", d3.line()
            .x(function (d) {
                return x(d.pX);
            })
            .y(function (d) {
                return y(d.pY);
            })
            .curve(d3.curveCatmullRom.alpha(0.5))
        )
        //.curve()
        .attr("fill", "url(#rainbowGradient")
    //  .attr("stroke", "steelblue")
    // .attr("stroke-width", 2.5)

}
//kernel density info
function kde(kernel, thresholds, data) {
    return thresholds.map(t => [t, d3.mean(data, d => kernel(t - d))]);
}

function epanechnikov(bandwidth) {
    return x => Math.abs(x /= bandwidth) <= 1 ? 0.75 * (1 - x * x) / bandwidth : 0;
}


// At the beginning, I run the update function on the first dataset:
update(data1)