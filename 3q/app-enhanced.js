// app-enhanced.js (sửa lỗi: không hiển thị node/link ban đầu và resolve source/target)

const width = window.innerWidth;
const height = window.innerHeight;

const color = d3.scaleOrdinal(d3.schemeCategory10);

const svg = d3.select("body")
  .append("svg")
  .attr("width", width)
  .attr("height", height);

const container = svg.append("g");

svg.call(d3.zoom().on("zoom", function (event) {
  container.attr("transform", event.transform);
}));

const tooltip = d3.select("body")
  .append("div")
  .attr("class", "tooltip")
  .style("opacity", 0);

let currentLinks = [...window.links];
let currentNodes = [...window.nodes];

let link = container.append("g").attr("stroke-opacity", 0.6).selectAll("line");
let node = container.append("g").selectAll("circle");
let label = container.append("g").selectAll("text");

function updateGraph() {
  // resolve source/target objects
  const nodeById = Object.fromEntries(currentNodes.map(n => [n.id, n]));
  const resolvedLinks = currentLinks.map(l => ({
    ...l,
    source: nodeById[l.source] || l.source,
    target: nodeById[l.target] || l.target
  }));

  simulation.nodes(currentNodes);
  simulation.force("link").links(resolvedLinks);
  simulation.alpha(1).restart();

  link = link.data(resolvedLinks, d => d.source.id + "-" + d.target.id);
  link.exit().remove();
  const newLinks = link.enter().append("line")
    .attr("stroke-width", 2)
    .attr("stroke", d => d.type === "enemy" ? "#e74c3c" : d.type === "ally" ? "#2ecc71" : d.type === "mentor" ? "#3498db" : "#f39c12");
  link = newLinks.merge(link);

  node = node.data(currentNodes, d => d.id);
  node.exit().remove();
  const newNodes = node.enter().append("circle")
    .attr("r", 20)
    .attr("fill", d => color(d.group))
    .call(drag(simulation))
    .on("mouseover", (event, d) => {
      tooltip.transition().duration(200).style("opacity", .9);
      tooltip.html(`
        <strong>${d.id}</strong><br/>
        <img src="${d.avatar}" width="80" /><br/>
        <em>${d.group}</em><br/>
        ${d.bio || "Không rõ"}
      `)
        .style("left", (event.pageX + 10) + "px")
        .style("top", (event.pageY - 28) + "px");
    })
    .on("mouseout", () => tooltip.transition().duration(500).style("opacity", 0));
  node = newNodes.merge(node);

  label = label.data(currentNodes, d => d.id);
  label.exit().remove();
  const newLabels = label.enter().append("text")
    .text(d => d.id)
    .attr("x", 6).attr("y", 3)
    .style("font-size", "12px")
    .style("pointer-events", "none");
  label = newLabels.merge(label);
}

const simulation = d3.forceSimulation(currentNodes)
  .force("link", d3.forceLink().id(d => d.id).distance(120))
  .force("charge", d3.forceManyBody().strength(-200))
  .force("center", d3.forceCenter(width / 2, height / 2))
  .force("collision", d3.forceCollide().radius(30))
  .on("tick", ticked);

function ticked() {
  link.attr("x1", d => d.source.x).attr("y1", d => d.source.y)
      .attr("x2", d => d.target.x).attr("y2", d => d.target.y);
  node.attr("cx", d => d.x).attr("cy", d => d.y);
  label.attr("x", d => d.x + 25).attr("y", d => d.y);
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
  return d3.drag().on("start", dragstarted).on("drag", dragged).on("end", dragended);
}

// Bộ lọc
const nodeList = window.nodes;
const linkList = window.links;

document.getElementById("factionSelect").addEventListener("change", e => {
  const group = e.target.value;
  currentNodes = group === "all" ? [...nodeList] : nodeList.filter(n => n.group === group);
  const ids = new Set(currentNodes.map(n => n.id));
  currentLinks = linkList.filter(l => ids.has(l.source) && ids.has(l.target));
  updateGraph();
});

document.getElementById("characterSelect").addEventListener("change", e => {
  const selected = e.target.value;
  if (selected === "all") {
    currentNodes = [...nodeList];
    currentLinks = [...linkList];
  } else {
    const related = linkList.filter(l => l.source === selected || l.target === selected);
    const relatedIds = new Set([selected, ...related.map(l => l.source), ...related.map(l => l.target)]);
    currentNodes = nodeList.filter(n => relatedIds.has(n.id));
    currentLinks = related;
  }
  updateGraph();
});

document.getElementById("battleSelect").addEventListener("change", e => {
  const selected = e.target.value;
  if (selected === "all") {
    currentNodes = [...nodeList];
    currentLinks = [...linkList];
  } else {
    const related = linkList.filter(l => l.source === selected || l.target === selected);
    const relatedIds = new Set([selected, ...related.map(l => l.source), ...related.map(l => l.target)]);
    currentNodes = nodeList.filter(n => relatedIds.has(n.id));
    currentLinks = related;
  }
  updateGraph();
});

// Tooltip CSS
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

// Hiển thị mặc định
updateGraph();
