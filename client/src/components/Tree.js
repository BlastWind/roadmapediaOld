import React, { Component } from "react";
import * as d3 from "d3";
import { hierarchy, tree } from "d3-hierarchy";

import "../Tree.css";

//import "./Tree.css";
class Tree extends Component {
  constructor(props) {
    super(props);
    this.state = { collapse: false, text: "hi", visible: true };

    //this.toggle = this.toggle.bind(this);
  }

  handleChange = d => {
    this.props.on_click_change(d);
  };

  componentDidMount() {
    var that = this;
    var treeData = this.props.roadmapData;
    // Set the dimensions and margins of the diagramS
    var height1 = window.innerHeight;

    var margin = { top: 0, right: 0, bottom: 0, left: 0 },
      width = 1080 - margin.left - margin.right,
      height = 500 - margin.top - margin.bottom;

    // append the svg object to the body of the page
    // appends a 'group' element to 'svg'
    // moves the 'group' element to the top left margin

    var svg = d3
      .select("li")

      .append("svg")
      .attr("class", "tree")

      .call(
        d3.zoom().on("zoom", function() {
          svg.attr("transform", d3.event.transform);
        })
      )
      .attr("width", 1000 - margin.right - margin.left)
      .attr("height", 600 - margin.top - margin.bottom)
      .append("g")
      .attr("transform", "translate(" + +"," + margin.top + ")");

    var i = 0,
      duration = 500,
      root;

    var treemap = d3.tree().size([window.innerHeight, window.innerWidth]);

    root = d3.hierarchy(treeData, function(d) {
      return d.children;
    });
    root.x0 = height / 2;
    root.y0 = 0;

    update(root);

    function collapse(d) {
      if (d.children) {
        d._children = d.children;
        d._children.forEach(collapse);
        d.children = null;
      }
    }

    function update(source) {
      var hehe = that.props.roadmapData;

      var treeData = treemap(root);

      // Compute the new tree layout.
      var nodes = treeData.descendants(),
        links = treeData.descendants().slice(1),
        more_button = treeData.descendants();

      // Normalize for fixed-depth.
      nodes.forEach(function(d) {
        d.y = d.depth * 180;
      });

      // ****************** Nodes section ***************************

      // Update the nodes...
      var node = svg.selectAll("g.node").data(nodes, function(d) {
        return d.id || (d.id = ++i);
      });

      // Enter any new modes at the parent's previous position.
      var nodeEnter = node
        .enter()
        .append("g")
        .attr("class", "node")

        //if deleted, bubbles come from the very top, is weird
        .attr("transform", function(d) {
          return "translate(" + source.y0 + "," + source.x0 + ")";
        });

      // Add Circle for the nodes
      nodeEnter
        .append("circle")
        .attr("class", "node")
        .attr("r", 1e-6)
        .style("fill", function(d) {
          return d._children ? "lightsteelblue" : "#fff";
        });

      /*
// Add labels for the nodes
      nodeEnter
        .append("text")
        .attr("dy", 0)
        .attr("x", function(d) {
          return d.children || d._children ? -13 : 13;
        })
        .attr("text-anchor", function(d) {
          return d.children || d._children ? "end" : "start";
        })
        .text(function(d) {
          return d.data.name;
        });
*/

      var diameter = 30;
      nodeEnter
        .append("image")
        .on("click", click)
        .attr("xlink:href", function(d) {
          return d.data.website_image;
        })
        .attr("height", diameter * 2)
        .attr("transform", "translate(-30," + -diameter + ")");

      nodeEnter

        .append("circle")
        .attr("class", "extra_info")
        .attr("fill", "url(#gradient)")
        .on("click", function(d) {
          if (gToolTip.style("visibility") === "visible") {
            return gToolTip.style("visibility", "hidden");
          } else {
            return gToolTip.style("visibility", "visible");
          }
        })
        .on("mouseover", function(d) {
          return gToolTip.style("visibility", "visible");
        })
        .on("mouseout", function(d) {
          return gToolTip.style("visibility", "hidden");
        })
        .attr("cy", function(d) {
          if (d.parent != null) {
            d.x_pos = d.x;
            d.parent_x_pos = d.parent.x;
          }
          if (d.parent_x_pos != null) {
            return (d.x_pos + d.parent_x_pos) / 2 - d.x_pos;
          }
        })
        .attr("cx", -90)
        .attr("r", function(d) {
          if (
            d.data.extra_info === "" ||
            d.data.extra_info === " " ||
            d.parent === null ||
            d.data.extra_info === undefined
          )
            return 0;
          else return 17;
        });

      // Circle with Gradient
      var gradient2 = svg
        .append("svg:defs")
        .append("svg:linearGradient")
        .attr("id", "gradient2")
        .attr("x1", "0%")
        .attr("y1", "0%")
        .attr("x2", "100%")
        .attr("y2", "100%")
        .attr("spreadMethod", "pad");

      gradient2
        .append("svg:stop")
        .attr("offset", "0%")
        .attr("stop-color", "#ed21e6")
        .attr("stop-opacity", 1);

      gradient2
        .append("svg:stop")
        .attr("offset", "100%")
        .attr("stop-color", "white")
        .attr("stop-opacity", 1);

      var gradient = svg
        .append("svg:defs")
        .append("svg:linearGradient")
        .attr("id", "gradient")
        .attr("x1", "0%")
        .attr("y1", "0%")
        .attr("x2", "100%")
        .attr("y2", "100%")
        .attr("spreadMethod", "pad");

      gradient
        .append("svg:stop")
        .attr("offset", "0%")
        .attr("stop-color", "#f5f8c6")
        .attr("stop-opacity", 1);

      gradient
        .append("svg:stop")
        .attr("offset", "100%")
        .attr("stop-color", "#3bddd2")
        .attr("stop-opacity", 1);

      var nodeUpdate = nodeEnter.merge(node);

      // Transition to the proper position for the node
      nodeUpdate
        .transition()
        .duration(duration)
        .attr("transform", function(d) {
          return "translate(" + d.y + "," + d.x + ")";
        });

      // Update the node attributes and style
      nodeUpdate
        .select("circle.node")
        .attr("r", diameter)

        .style("fill", function(d) {
          return "#81dafb";
        })
        .attr("cursor", "pointer");

      nodeUpdate
        .append("circle")
        .on("click", click2)
        .attr("fill", "url(#gradient2)")

        .attr("additional", "extra_circle")
        .attr("r", function(d) {
          return 10;
        })
        .attr("transform", "translate(0," + -40 + ")");

      var gToolTip = nodeEnter
        .append("g")

        .style("visibility", "hidden");

      var rectToolTip = gToolTip.append("rect");

      //  .style("visibility", "hidden")

      var textToolTip = gToolTip
        .append("text")

        .attr("id", "toUse")
        .attr("class", "textToolTip")
        .text(function(d) {
          return d.data.extra_info;
        })
        .each(function(d) {
          d.textWidth = this.getBBox().width;
        })
        .attr("y", function(d) {
          if (d.parent != null) {
            d.x_pos = d.x;
            d.parent_x_pos = d.parent.x;
          }
          if (d.parent_x_pos != null) {
            return (d.x_pos + d.parent_x_pos) / 2 - d.x_pos - 25;
          }
        })
        .attr("x", function(d) {
          return -90 - d.textWidth / 2;
        });

      var polyTip = gToolTip

        .append("polygon")
        .attr("points", function(d) {
          if (d.parent === null || d.textWidth === 0) {
            return null;
          } else {
            return "-7,20 7,20 0,30";
          }
        })
        .style("fill", "black")
        .style("stroke", "black")
        //first para is x, second para is y, we are moving x by -90 and y by the d.x+d.x/2 whatever

        .attr("transform", function(d) {
          var y = (d.x_pos + d.parent_x_pos) / 2 - d.x_pos - 43;
          var x = -90;
          // "translate(" + x + "," + y + ")";
          return "translate(" + x + "," + y + ")";
        });

      rectToolTip.attr("width", function(d) {
        if (d.textWidth === 0 || d.parent == null || d.parent == undefined) {
          return null;
        } else return d.textWidth + 10;
      });
      rectToolTip
        .attr("height", 20)
        .attr("y", function(d) {
          if (d.parent != null) {
            d.x_pos = d.x;
            d.parent_x_pos = d.parent.x;
          }
          if (d.parent_x_pos != null) {
            return (d.x_pos + d.parent_x_pos) / 2 - d.x_pos - 40;
          }
        })
        .attr("x", function(d) {
          if (d.textWidth === 0 && d.parent != null) {
            return -100;
          } else return -(90 + d.textWidth / 2) - 5;
        })

        .attr("rx", 5)
        .attr("ry", 5);

      // Remove any exiting nodes
      var nodeExit = node
        .exit()
        .transition()
        .duration(duration)
        .attr("transform", function(d) {
          return "translate(" + source.y + "," + source.x + ")";
        })
        .remove();

      // On exit reduce the node circles size to 0
      nodeExit.select("circle").attr("r", 1e-6);

      // On exit reduce the opacity of text labels
      nodeExit.select("text").style("fill-opacity", 1e-6);

      // ****************** links section ***************************

      // Update the links...
      var link = svg.selectAll("path.link").data(links, function(d) {
        return d.id;
      });

      // Enter any new links at the parent's previous position.
      var linkEnter = link
        .enter()
        .insert("path", "g")

        .attr("class", "link")
        .attr("d", function(d) {
          var o = { x: source.x0, y: source.y0 };
          return diagonal(o, o);
        });

      // UPDATE
      var linkUpdate = linkEnter.merge(link);

      // Transition back to the parent element position
      linkUpdate

        .transition()
        .duration(duration)

        .attr("d", function(d) {
          return diagonal(d, d.parent);
        });

      // Remove any exiting links
      var linkExit = link
        .exit()
        .transition()
        .duration(duration)
        .attr("d", function(d) {
          var o = { x: source.x, y: source.y };
          return diagonal(o, o);
        })
        .remove();

      // Store the old positions for transition.
      nodes.forEach(function(d) {
        d.x0 = d.x;
        d.y0 = d.y;
      });

      // Creates a curved (diagonal) path from parent to the child nodes
      function diagonal(s, d) {
        var path = `M ${s.y} ${s.x}
            C ${(s.y + d.y) / 2} ${s.x},
              ${(s.y + d.y) / 2} ${d.x},
              ${d.y} ${d.x}`;

        return path;
      }

      // Toggle children on click.
      function click(d) {
        if (d.children) {
          d._children = d.children;
          d.children = null;
        } else {
          d.children = d._children;
          d._children = null;
        }
        update(d);
      }
      function click2(d) {
        that.setState({ text: d.data.details });
        that.handleChange(d);
      }
    }
  }

  render() {
    return null;
  }
}

export default Tree;
