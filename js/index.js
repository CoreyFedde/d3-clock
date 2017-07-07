
// Making sure js sheet is connected properly
$('#first').on("click", function(){ console.log('clicked') })

// Creates a new date every second so there is a "current time"
let fields = function() {
  let currentTime
  let hour
  let minute
  let second
  currentTime = new Date()
  second = currentTime.getSeconds()
  minute = currentTime.getMinutes()
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

// Creating the chart
let width = 400
let height = 200
let offSetX = 150
let offSetY = 100

// Setting scale functions *no idea what this does
const pi = Math.PI
let scaleSecs = d3.scaleLinear().domain([0, 59 + 999/1000]).range([0, 2 * pi])
let scaleMins = d3.scaleLinear().domain([0, 59 + 59/60]).range([0, 2 * pi])
let scaleHours = d3.scaleLinear().domain([0, 11 + 59/60]).range([0, 2 * pi])

// laying down svg
let vis = d3.selectAll('.chart')
.append("svg:svg")
.attr("width", width)
.attr("height", height);

let clockGroup = vis.append("svg:g")
  .attr("transform", "translate(" + offSetX + "," + offSetY + ")");
clockGroup.append("svg:circle")
  .attr("r", 80).attr("fill", "none")
  .attr("class", "clock outercircle")
  .attr("stroke", "black")
  .attr("stroke-width", 2);
clockGroup.append("svg:circle")
  .attr("r", 4)
  .attr("fill", "black")
  .attr("class", "clock innercircle");

  // time for some hands
  let render = function(data) {
    clockGroup.selectAll(".clockhand").remove()

    let secondArc = d3.arc()
    .innerRadius(0)
    .outerRadius(70)
    .startAngle(function(d) {
    return scaleSecs(d.numeric)
  })
    .endAngle(function(d) {
    return scaleSecs(d.numeric)
  })

  let minuteArc = d3.arc()
    .innerRadius(0)
    .outerRadius(70)
    .startAngle(function(d) {
    return scaleMins(d.numeric)
  })
    .endAngle(function(d) {
    return scaleMins(d.numeric)
  })

  let hourArc = d3.arc()
    .innerRadius(0)
    .outerRadius(50)
    .startAngle(function(d) {
    return scaleHours(d.numeric % 12)
  })
    .endAngle(function(d) {
    return scaleHours(d.numeric % 12)
  })

  clockGroup.selectAll(".clockhand")
    .data(data)
    .enter()
    .append("svg:path")
    .attr("d", function(d) {
      if (d.unit === "seconds") {
        return secondArc(d);
      } else if (d.unit === "minutes") {
        return minuteArc(d);
      } else if (d.unit === "hours") {
        return hourArc(d);
      }
    })
    .attr("class", "clockhand")
    .attr("stroke", "black")
    .attr("stroke-width", function(d) {
      if (d.unit === "seconds") {
        return 2;
      } else if (d.unit === "minutes") {
        return 3;
      } else if (d.unit === "hours") {
        return 3;
      }
    })
    .attr("fill", "none")
  }

  setInterval(function() {
  var data;
  data = fields();
  return render(data);
}, 1000);
