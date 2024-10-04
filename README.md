# README for Module 14 Challenge (belly-button-challenge)

## Introduction

This challenge creates an interactive dashboard using `JavaScript` and `d3` and `Leaflet` libraries. The challenge examines a "Belly Button Biodiversity" dataset, looking specifically at common microbial species.

## Data

The data consists a `JSON` file (samples.json). This file is located in the main directory in this repository (belly-button-challenge). However, the `JSON` is retrieved from a API or URL: ("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json"). The `JSON` object contains numerous fields, but most notably for this challenge are the `metadata` field, and the `samples` field. These fields contain the relavent information for this challenge.

## Methodology

To create the interactive dashboard, first the `d3` and `Leaflet` libraries are imported. Then the `JSON` file is read using `d3.json` commands. Then `JavaScript` functionalities are used to filter the data. Next `Leaflet` is used to plot the data. Finally a dropdown menu is selected from the `index.html` file and populated using  the  `forEach` function.

## Results

The results show a complicated mix of microbes across many different metadata fields. Further research may be required to see summary statistics or a distribution of specific microbes. However, at a glance this is a create visualization for looking at the top ten microbes in any given sample.

## Conclusion

The data was sucessfully represented in an interactive dashboard complete with a dropdown menu, a metadata panel, a bar chart, and a bubble chart. The data shows a wide range of results that could be further explored.

## References

Class materials were used extensively for this assignment, as well as:

* stackoverflow.com
* Xpert Learning Assistant
* ChatGPT.com

## Usage

The `index.html` file can be opened using your default browser. This Github repository has been published to Github Pages. You can access the live site [here.](https://nickbartram.github.io/belly-button-challenge/)
