function buildMetadata(sample) {

  d3.json(`/metadata/${sample}`).then((metaData) => {
  
    var selection = d3.select('#sample-metadata');

    selection.html("");

    Object.entries(metaData).forEach(([key, value]) => selection.append().html(`${key}: ${value}<br>`));

    buildGauge(metaData.WFREQ);
  });
};


function buildCharts(sample) {

  // @TODO: Use `d3.json` to fetch the sample data for the plots
  
  d3.json(`/samples/${sample}`).then((chartData) => {
    let pieData = [{
        values: chartData.sample_values.slice(0,10),
        labels: chartData.otu_ids.slice(0,10),
        hovertext: chartData.otu_labels.slice(0,10),
        type: 'pie'
      }];  

    let layout = {
      autosize: true
    };

    Plotly.newPlot("pie", pieData, layout);

    let bubbleData = [{
      y: chartData.sample_values,
      x: chartData.otu_ids,
      mode: 'markers',
      marker: {
        color: chartData.otu_ids,
        size: chartData.sample_values
      },
      text: chartData.otu_labels
    }];

    let layout2 = {
      title: `OTU ID ${sample}`,
      autosize: true,
      showlegend: false

    };
    d3.select('#bubble').html('')
    Plotly.newPlot('bubble', bubbleData, layout2);
  
  });
}

function init() {
  // Grab a reference to the dropdown select element
  var selector = d3.select("#selDataset");

  // Use the list of sample names to populate the select options
  d3.json("/names").then((sampleNames) => {
    sampleNames.forEach((sample) => {
      selector
        .append("option")
        .text(sample)
        .property("value", sample);
    });

    // Use the first sample from the list to build the initial plots
    const firstSample = sampleNames[0];
    buildCharts(firstSample);
    buildMetadata(firstSample);
  });
}

function optionChanged(newSample) {
  // Fetch new data each time a new sample is selected
  buildCharts(newSample);
  buildMetadata(newSample);
}

// Initialize the dashboard
init();
