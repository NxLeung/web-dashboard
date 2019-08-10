function buildGauge (sample){

    var data = [{domain: {x: [0, 1], y: [0, 1]}, 
    value: sample, 
    title: {text: "Belly Button Washing Frequency"},
    type: "indicator", 
    mode: "gauge+number", 
    gauge:
        {axis: {range: [0, 10], tickwidth: 1, tickcolor: "darkblue"}, 
    steps: [{range: [0, 0.5], color: "seashell"},
        {range: [0.5, 1.5], color: "lightyellow"}, 
        {range: [1.5, 2.5], color: "papayawhip"},
        {range: [2.5, 3.5], color: "wheat"},
        {range: [3.5, 4.5], color: "darkkhaki"},
        {range: [4.5, 5.5], color: "yellowgreen"},
        {range: [5.5, 6.5], color: "mediumseagreen"},
        {range: [6.5, 7.5], color: "olivedrab"},
        {range: [7.5, 8.5], color: "darkolivegreen"},
        {range: [8.5, 9.5], color: "green"},
        {range: [9.5, 10], color: "darkgreen"}], 
    bar: {color: 'gray'},
    line: {color: 'black'}
}}];

    var layout = {
        autosize: true,
        margin: {t: 0, b: 0}};

    Plotly.newPlot('gauge',data,layout);

};
