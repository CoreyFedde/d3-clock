
$('#first').on("click", function(){ console.log('clicked') })

// let bodySelection = d3.select("body");
// let svgSelection = bodySelection.append("svg")
//      .attr("width", 50)
//      .attr("height", 50);
// let circleSelection = svgSelection.append("circle")
//      .attr("cx", 25)
//      .attr("cy", 25)
//      .attr("r", 25)
//      .style("fill", "purple");

let fields = function() {
  let currentTime
  let hour
  let minute
  let second
  currentTime = new Date()
  second = currentTime.getSeconds()
  minute = currentTime.getMinute()
  hour = currentTime.getHours() + minute / 60
  return data = [
    {
      "unit": "seconds",
      "numeric": second
    },
    {
      "unit": "minutes",
      "numeric": minute
    },
    {
      "unit": "hours",
      "numeric": hour
    }
  ]

}
