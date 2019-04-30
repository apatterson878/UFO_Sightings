// from data.js
// var tableData = data;

const submit = d3.select("#filter-btn")

submit.on("click", function() {
    // Prevent the page from refreshing 
    d3.event.preventDefault()

    // Select the input element and get the raw HTML node
    const inputElement = d3.select("#datetime")
    
    // Get the value property of the input element
    const inputValue = inputElement.property("value") //not sure about the value thing 
    console.log(inputValue)
    console.log(data)

    const filteredData = data.filter(date => date.datetime === inputValue)
    
    console.log(filteredData);
    
    
    const dayTime = filteredData.map(date => date.datetime)
    const city = filteredData.map(date => date.city);
    const state = filteredData.map(date => date.state);
    const shape = filteredData.map(date => date.shape);
    const durationMinutes = filteredData.map(date => date.durationMinutes);
    const comments = filteredData.map(date => date.comments);

    var rows = tbody.selectAll("tr")
        .data(data)
        .enter()
        .append("tr");


    d3.select(".table-striped")
        .append("tr").text(`${dayTime}`)
        .append("tr").text(`${city}`)
        .append("").text(`${state}`)
    // d3.select(".City")
    //     .append("li").text(`${city}`)
   
});
