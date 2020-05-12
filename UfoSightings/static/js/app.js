// from data.js
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");

// Console.log the weather data from data.js
console.log(data);
populateData(tableData);


// populate tableData into table stucture
function populateData(inputTable){
    
    d3.select("tbody").html("");
    inputTable.forEach((inputTable) => {
    var row = tbody.append("tr");
    Object.entries(inputTable).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
    });
    });
};

// select input for and submit button and run dataEnter()
var button = d3.select("#filter-btn")
var form = d3.select("#form")
button.on("click",dataEnter)
form.on("submit",dataEnter)

// 
function dataEnter() {
    // Stop page from refreshing
    d3.event.preventDefault()

    var inputElement = d3.select("#datetime")
    var inputDate = inputElement.property("value")

    console.log(inputDate)

    d3.select("#dateDisplay").text(inputDate);

    var filteredSightings = tableData.filter( sighting => sighting.datetime === inputDate )

    populateData(filteredSightings)
    console.log(filteredSightings)
    console.log("end of dataEnter")
}

