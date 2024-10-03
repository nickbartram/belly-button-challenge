// Build the metadata panel
function buildMetadata(sample) {
  d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {

    // get the metadata field
    let metadata = data.metadata;

    // Filter the metadata for the object with the desired sample number
    const matchID = obj => obj.id === sample;

    // Filter method requires a function
    // matchID is an arrow function defined above.
    let filterData = metadata.filter(matchID);

    // Use d3 to select the panel with id of `#sample-metadata`
    let panel = d3.select("#sample-metadata");

    // Use `.html("") to clear any existing metadata
    panel.html("");

    // Inside a loop, you will need to use d3 to append new
    // tags for each key-value in the filtered metadata.
    Object.entries(filterData[0]).forEach(([key, value]) => {
      panel.append("h6").text(`${key}: ${value}`);
    });
  });
}

// function to build both charts
function buildCharts(sample) {
  d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {

    // Get the samples field
    let samples = data.samples;

    // Filter the samples for the object with the desired sample number
    const sampleID = obj => obj.id === sample;
    
    let filterSample = samples.filter(sampleID)[0];

    // Get the otu_ids, otu_labels, and sample_values
    let otu_ids = filterSample.otu_ids;
    let otu_labels = filterSample.otu_labels;
    let sample_values = filterSample.sample_values;

    // Build a Bubble Chart
    let trace1 = {
      x: otu_ids,
      y: sample_values,
      mode: 'markers',
      marker: {
        size: sample_values,
        color: otu_ids
      },
      text: otu_labels
    };

    let data1 = [trace1];

    let layout = {
      title: "Test"
    };
  
    // Render the Bubble Chart
    Plotly.newPlot("bubble", data1, layout);

    // For the Bar Chart, map the otu_ids to a list of strings for your yticks
    let otuidNames = [otu_ids];

    // Build a Bar Chart
    // Don't forget to slice and reverse the input data appropriately
    let trace2 = {
      x: sample_values.slice(0, 10).reverse(),
      y: otu_ids.slice(0,10).map(otuID => `OTU ${otuID}`).reverse(),
      type: "bar",
      orientation: "h"
    }

    let data2 = [trace2];

    let layout2 = {
      title: "Top 10 OTU"
    };


    // Render the Bar Chart
    Plotly.newPlot("bar", data2, trace2);
  });
}


// Function to run on page load
function init() {
  d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {

    // Get the names field


    // Use d3 to select the dropdown with id of `#selDataset`
    let dropdown = d3.select("#selDataset");

    // Use the list of sample names to populate the select options
    // Hint: Inside a loop, you will need to use d3 to append a new
    // option for each sample name.
    data.names.forEach((sample) => {
      dropdown.append("option").text(sample).property("value", sample);
    });

    // Get the first sample from the list
    let firstSample = data.names[0];

    // Build charts and metadata panel with the first sample
    
    buildCharts(firstSample);
    buildMetadata(firstSample);
  });
}

// Function for event listener
function optionChanged(newSample) {
  // Build charts and metadata panel each time a new sample is selected
  buildCharts(newSample);
  buildMetadata(newSample);
}

// Initialize the dashboard
init();
