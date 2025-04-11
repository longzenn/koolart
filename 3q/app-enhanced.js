// app-enhanced.js
const nodes = window.nodes;
const links = window.links;

const width = window.innerWidth;
const height = window.innerHeight;

d3.select("body").style("margin", 0).style("overflow", "hidden");

const color = d3.scaleOrdinal(d3.schemeCategory10);

const svg = d3.select("body")
  .append("svg")
  .attr("width", width)
  .attr("height", height);

const container = svg.append("g");

svg.call(d3.zoom().on("zoom", function (event) {
  container.attr("transform", event.transform);
}));

const link = container.append("g")
  .attr("stroke", "#999")
  .attr("stroke-opacity", 0.6)
  .selectAll("line")
  .data(links)
  .join("line")
  .attr("stroke-width", 2)
  .attr("stroke", d => d.type === "enemy" ? "#e74c3c" : d.type === "ally" ? "#2ecc71" : d.type === "mentor" ? "#3498db" : "#f39c12");

const tooltip = d3.select("body")
  .append("div")
  .attr("class", "tooltip")
  .style("opacity", 0);

const simulation = d3.forceSimulation(nodes)
  .force("link", d3.forceLink(links).id(d => d.id).distance(120))
  .force("charge", d3.forceManyBody().strength(-200))
  .force("center", d3.forceCenter(width / 2, height / 2))
  .force("collision", d3.forceCollide().radius(30))
  .on("tick", ticked);

const node = container.append("g")
  .attr("stroke", "#fff")
  .attr("stroke-width", 1.5)
  .selectAll("circle")
  .data(nodes)
  .join("circle")
  .attr("r", 20)
  .attr("fill", d => color(d.group))
  .call(drag(simulation));

node.on("mouseover", (event, d) => {
  tooltip.transition().duration(200).style("opacity", .9);
  tooltip.html(`
    <strong>${d.id}</strong><br/>
    <img src="${d.avatar}" width="80" /><br/>
    <em>${d.group}</em><br/>
    ${d.bio}
  `)
    .style("left", (event.pageX + 10) + "px")
    .style("top", (event.pageY - 28) + "px");
})
.on("mouseout", () => {
  tooltip.transition().duration(500).style("opacity", 0);
});

const label = container.append("g")
  .selectAll("text")
  .data(nodes)
  .join("text")
  .text(d => d.id)
  .attr("x", 6)
  .attr("y", 3)
  .style("font-size", "12px")
  .style("pointer-events", "none");

function ticked() {
  link
    .attr("x1", d => d.source.x)
    .attr("y1", d => d.source.y)
    .attr("x2", d => d.target.x)
    .attr("y2", d => d.target.y);

  node
    .attr("cx", d => d.x)
    .attr("cy", d => d.y);

  label
    .attr("x", d => d.x + 25)
    .attr("y", d => d.y);
}

function drag(simulation) {
  function dragstarted(event, d) {
    if (!event.active) simulation.alphaTarget(0.3).restart();
    d.fx = d.x;
    d.fy = d.y;
  }

  function dragged(event, d) {
    d.fx = event.x;
    d.fy = event.y;
  }

  function dragended(event, d) {
    if (!event.active) simulation.alphaTarget(0);
    d.fx = null;
    d.fy = null;
  }

  return d3.drag()
    .on("start", dragstarted)
    .on("drag", dragged)
    .on("end", dragended);
}

// Style for tooltip
d3.select("head")
  .append("style")
  .html(`
    .tooltip {
      position: absolute;
      text-align: left;
      width: 220px;
      padding: 10px;
      font: 12px sans-serif;
      background: rgba(0,0,0,0.7);
      color: #fff;
      border: 0px;
      border-radius: 8px;
      pointer-events: none;
    }
  `);
