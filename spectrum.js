//debugging function for test purposes - setting 'verbose' variable enables or disables console logging globally
var verbose = true;
const dB = (str) => {
    if (verbose) {
        console.log(str)
    }
}
//actual production data below
let wavelengths = []
for (let i = 300; i <= 1100; i = i + 5) {
    wavelengths.push(i);
}
let datasetTEST = [
    ["1", "1", "1", "1", "2", "2", "2", "2", "4", "4", "4", "4", "8", "8", "8", "8", "10", "10", "12", "12", "10", "10", "8", "8", "8", "8", "4", "4", "4", "4", "2", "2", "2", "1", "1", "1", "1", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
    ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "1", "1", "1", "1", "2", "2", "2", "2", "4", "4", "4", "4", "8", "8", "8", "8", "10", "10", "12", "12", "10", "10", "8", "8", "8", "8", "4", "4", "4", "4", "2", "2", "2", "1", "1", "1", "1", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
    ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "1", "1", "1", "1", "2", "2", "2", "2", "4", "4", "4", "4", "8", "8", "8", "8", "10", "10", "12", "12", "10", "10", "8", "8", "8", "8", "4", "4", "4", "4", "2", "2", "2", "1", "1", "1", "1", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
    ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "1", "1", "1", "1", "2", "2", "2", "2", "4", "4", "4", "4", "8", "8", "8", "8", "10", "10", "12", "12", "10", "10", "8", "8", "8", "8", "4", "4", "4", "4", "2", "2", "2", "1", "1", "1", "1", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0"]
]

const dataSetObject = {
    wavelengths: wavelengths,
    channels: [{
            name: 'channel 1',
            channelColor: '#F2F200',
            values: datasetTEST[0]
        },
        {
            name: 'channel 2',
            channelColor: '#F2F200',
            values: datasetTEST[1]
        },
        {
            name: 'channel 3',
            channelColor: '#F2F200',
            values: datasetTEST[2]
        },
        {
            name: 'channel 4',
            channelColor: '#F2F200',
            values: datasetTEST[3]
        }

    ]
}

//BEGIN TEST DATA


let channelNames = ['ch1', 'ch2', 'ch3', 'ch4'];
let factors = [10, 10, 10, 10];

//END TEST DATA





const buildDisplayDataObject = (fS) => {
    let displayDataObject = [];
    dataSetObject.wavelengths.forEach((v, i) => {
        displayDataObject.push({
            pX: v,
            pY: fS[i]
        });
    });
    return displayDataObject;
}
//UI FUNCTIONS

//initialize UI using values from dataset
const buildUI = () => {
    dataSetObject.channels.forEach((obj, index) => {
        d3.select('#spectrum-controls').insert("div").html(`<label for="ch${index}">${obj.name}</label>
        <input type="range" name="ch${index}" id="ch${index}" data-channel="${index}" min="0" max="10" value="10" onchange="updateRebuild()">`);
        dB(`item at index ${index} equals ${obj}`)
    })
}
//load all multiplier values from form elements
const getFactors = () => {
    for (let i = 0; i < 4; i++) {
        factors[i] = document.getElementById(`ch${i}`).value;
    }
}



//Build the UI before initializing D3
buildUI();


// set the dimensions and margins of the graph
var margin = {
        top: 30,
        right: 30,
        bottom: 30,
        left: 50
    },
    width = 500,
    height = 300;

// width = document.getElementById('spectrum-canvas').clientWidth - margin.left - margin.right,
// height = document.getElementById('spectrum-controls').clientHeight - margin.top - margin.bottom;

// append the svg object to the body of the page
var svg = d3.select("#spectrum-canvas")
    .append("svg")
    .attr("viewBox", "0 0 580 380")
    .attr("preserveAspectRatio", "xMidYMid meet")
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



// weight the values
const weightValues = (weights) => {
    return dataSetObject.channels.map((channelData, index) => {
        //process each channel data
        dB(`processing index ${index} : ${channelData}`)

        return channelData.values.map((item) => {
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



//a simple function to smooth out the line, by averaging each element with the two nearest it
const smoothValues = (arr) => {
    return arr.map((val, ind, arr2) => {
        coll = [val];
        coll.push(val);
        coll.push(val);
        dB(`main value: ${val}`);
        if (typeof arr2[ind - 1] === 'number') {
            coll.push(arr2[ind - 1])
        } else {
            coll.push(0)
        };
        dB(`previous: ${arr2[ind - 1]}`);
        if (typeof arr2[ind + 1] === 'number') {
            coll.push(arr2[ind + 1])
        } else {
            coll.push(0)
        };;
        if (typeof arr2[ind + 2] === 'number') {
            coll.push(arr2[ind + 2])
        } else {
            coll.push(0)
        };;
        if (typeof arr2[ind - 2] === 'number') {
            coll.push(arr2[ind - 2])
        } else {
            coll.push(0)
        };;
        if (typeof arr2[ind + 3] === 'number') {
            coll.push(arr2[ind + 3])
        } else {
            coll.push(0)
        };;
        if (typeof arr2[ind - 3] === 'number') {
            coll.push(arr2[ind - 3])
        } else {
            coll.push(0)
        };;
        dB(`next: ${arr2[ind + 1]}`);
        dB(`array: ${coll}`);


        let sum = coll.reduce((a, b) => {
            return a + b
        }, 0);
        let avg = sum / coll.length;
        dB(sum);
        dB(avg);
        return avg;

    })
}


// test functions
let DS1 = weightValues( factors);
let DS2 = sumValues(DS1);
let DS2Smooth = smoothValues(DS2);
DS2Smooth[0] = 0;
DS2Smooth[DS2Smooth.length] = 0;
let DS3Smooth = buildDisplayDataObject(DS2Smooth);
update(DS3Smooth);



//production update functions

const rebuildData = () => {
    let DS1 = weightValues(factors);
    let DS2 = sumValues(DS1);
    let DS2Smooth = smoothValues(DS2);
    DS2Smooth[0] = 0;
    DS2Smooth[DS2Smooth.length] = 0;

    let DS3Smooth = buildDisplayDataObject(DS2Smooth);
    update(DS3Smooth, 1000);
}



//function for event handler - reads multiplier data from the UI, rebuilds the dataset, and updates the graph.
const updateRebuild = () => {
    getFactors();
    rebuildData();
}

const resizeD3 = () => {
    margin = {
        top: 30,
        right: 30,
        bottom: 30,
        left: 50
    };
    width = document.getElementById('spectrum-canvas').clientWidth - margin.left - margin.right;
    height = document.getElementById('spectrum-controls').clientHeight - margin.top - margin.bottom;

    svg.attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom);

}