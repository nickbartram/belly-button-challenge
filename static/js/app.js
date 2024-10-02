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
    for 

  });
}

// function to build both charts
function buildCharts(sample) {
  d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {

    // Get the samples field
    let sample = data.samples;

    // Filter the samples for the object with the desired sample number
    const sampleID = obj => obj.id === sample;
    
    let filterSample = samples.filter(sampleID);

    // Get the otu_ids, otu_labels, and sample_values
    let otu_ids = sample.samples.otu_ids;
    let otu_labels = sample.samples.otu_labels;
    let sample_values = sample.samples.sample_values;

    // Build a Bubble Chart
    let trace1 = {
      x: otu_ids,
      y: sample_values,
      colors: otu_ids,
      text: otu_labels
    };

    let data = [trace1];

    let layout = {
      title: "Test"
    };
  

    Plotly.newPlot("plot", data, layout);
  
    // Render the Bubble Chart
    buildCharts(sample);

    // For the Bar Chart, map the otu_ids to a list of strings for your yticks


    // Build a Bar Chart
    // Don't forget to slice and reverse the input data appropriately


    // Render the Bar Chart

 


// Function to run on page load
function init() {
  d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {

    // Get the names field


    // Use d3 to select the dropdown with id of `#selDataset`


    // Use the list of sample names to populate the select options
    // Hint: Inside a loop, you will need to use d3 to append a new
    // option for each sample name.


    // Get the first sample from the list


    // Build charts and metadata panel with the first sample

  });
}

// Function for event listener
function optionChanged(newSample) {
  // Build charts and metadata panel each time a new sample is selected

}

// Initialize the dashboard
init();
