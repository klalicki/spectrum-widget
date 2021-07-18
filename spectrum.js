let dataset = [
    ["1","1","1","1","2","2","2","2","4","4","4","4","8","8","8","8","10","10","12","12","10","10","8","8","8","8","4","4","4","4","2","2","2","1","1","1","1","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0"],
    ["0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","1","1","1","1","2","2","2","2","4","4","4","4","8","8","8","8","10","10","12","12","10","10","8","8","8","8","4","4","4","4","2","2","2","1","1","1","1","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0"],
    ["0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","1","1","1","1","2","2","2","2","4","4","4","4","8","8","8","8","10","10","12","12","10","10","8","8","8","8","4","4","4","4","2","2","2","1","1","1","1","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0"],
    ["0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","1","1","1","1","2","2","2","2","4","4","4","4","8","8","8","8","10","10","12","12","10","10","8","8","8","8","4","4","4","4","2","2","2","1","1","1","1","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0"]
]

let wavelengths = []
for (let i = 300; i <= 1100; i = i + 5) {
    wavelengths.push(i);
}
let freqSample = [];
let freqSample2 = []
wavelengths.forEach((val) => {
    let wv = (Math.floor((Math.random() * val * .25 + val) / 100));
    freqSample.push(wv);
    let wv2 = (Math.floor((Math.random() * val * .25 + val) / 100));
    freqSample2.push(wv2);

})

const buildDataObject = (fS) => {
    let dataObject = [];
    wavelengths.forEach((v, i) => {
        dataObject.push({
            pX: v,
            pY: fS[i]
        });
    });
    return dataObject;
}


freqSample[160] = 0;
freqSample[0] = 0;
freqSample2[160] = 0;
freqSample2[0] = 0;
let dO = buildDataObject(freqSample);
let dO2 = buildDataObject(freqSample2);


console.log(wavelengths);

// set the dimensions and margins of the graph
var margin = {
        top: 30,
        right: 30,
        bottom: 30,
        left: 50
    },
    width = document.getElementById('spectrum-canvas').clientWidth - margin.left - margin.right,
    height = document.getElementById('spectrum-controls').clientHeight - margin.top - margin.bottom;

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
const rainbowOpacity = 0.3
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
    .attr("stop-color", "violet")
    .attr("stop-opacity", rainbowOpacity);
rainbowGradient.append('stop')
    .attr("class", "start")
    .attr("offset", "20%")
    .attr("stop-color", "blue")
    .attr("stop-opacity", rainbowOpacity);
rainbowGradient.append('stop')
    .attr("class", "start")
    .attr("offset", "30%")
    .attr("stop-color", "green")
    .attr("stop-opacity", rainbowOpacity);
rainbowGradient.append('stop')
    .attr("class", "start")
    .attr("offset", "35%")
    .attr("stop-color", "yellow")
    .attr("stop-opacity", rainbowOpacity);
rainbowGradient.append('stop')
    .attr("class", "start")
    .attr("offset", "40%")
    .attr("stop-color", "orange")
    .attr("stop-opacity", rainbowOpacity);
rainbowGradient.append('stop')
    .attr("class", "start")
    .attr("offset", "50%")
    .attr("stop-color", "red")
    .attr("stop-opacity", rainbowOpacity);
rainbowGradient.append('stop')
    .attr("class", "start")
    .attr("offset", "100%")
    .attr("stop-color", "black")
    .attr("stop-opacity", rainbowOpacity);



// Create a function that takes a dataset as input and update the plot:
function update(data, time) {

    // Create the X axis:
    x.domain([300, 1100]);
    svg.selectAll(".myXaxis")
        .transition()
        .duration(time)
        .call(xAxis);

    // create the Y axis
    y.domain([0, d3.max(data, function (d) {
        return d.pY
    })]);
    svg.selectAll(".myYaxis")
        .transition()
        .duration(time)
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
        .duration(time)
        .attr("d", d3.line()
            .x(function (d) {
                return x(d.pX);
            })
            .y(function (d) {
                return y(d.pY);
            })
            .curve(d3.curveBasis)
        )
        //.curve()
        .attr("fill", "url(#rainbowGradient")
        .attr("stroke", "white")
        .attr("stroke-width", 1)

}
//kernel density info


// At the beginning, I run the update function on the first dataset:
update(dO, 0)
// 
let sampleData = {
    spectra: [
        [1, 2, 3],
        [1, 1, 1],
        [2, 4, 4]
    ],
    weights: [2, 3, 1]
}



// weight the values
const weightValues = (spectrumDataset, weights) => {
    return spectrumDataset.map((channelData, index) => {
        //process each channel data
        dB(`processing index ${index} : ${channelData}`)

        return channelData.map((item) => {
                //multiply each value within the array by the weight for it
                dB(`processing item ${item} within channel ${index}`)
                dB(item * weights[index])

                return item * weights[index];
            }

        )
    })

}
const sumValues = (spectrumDataset) => {
    return spectrumDataset.reduce((acc, cur) => {
        //iterate through array of spectrum values
        return acc.map((a, b) => {
            return a + cur[b]
        })
    })
}

//debugging function for test purposes - setting 'verbose' variable enables or disables console logging globally
var verbose = true;

const dB = (str) => {
    if (verbose) {
        console.log(str)
    }
}