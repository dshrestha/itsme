import Component from '@glimmer/component';
import SunBurstDataNode from "itsme/interfaces/sun-burst-data-node";
import {action} from "@ember/object";
declare var d3: any;
interface D3SunBurstArgs {
  data: Array<SunBurstDataNode>;
}

export default class D3SunBurst extends Component<D3SunBurstArgs> {

  @action
  draw(element: HTMLElement) {
    var color = d3.scale.category20c(),
      t = function (n, e) {
        return n === e ? !0 : n.children ? n.children.some(function (n) {
          return t(n, e)
        }) : !1
      }, n = function (t) {
        if (t.children) {
          var e = t.children.map(n),
            r = d3.hsl(e[0]),
            a = d3.hsl(e[1]);
          return d3.hsl((r.h + a.h) / 2, 1.2 * r.s, r.l / 1.2)
        }
        return t.colour || "#fff"
      }, e = function (t) {
        var n = r(t),
          e = d3.interpolate(d.domain(), [t.x, t.x + t.dx]),
          a = d3.interpolate(u.domain(), [t.y, n]),
          i = d3.interpolate(u.range(), [t.y ? 20 : 0, o]);
        return function (t) {
          return function (n) {
            return d.domain(e(n)), u.domain(a(n)).range(i(n)), arc(t)
          }
        }
      }, r = function (t) {
        return t.children ? Math.max.apply(Math, t.children.map(r)) : t.y + t.dy
      }, a = function (t) {
        return .299 * t.r + .587 * t.g + .114 * t.b
      };

    let i:number = (+document.getElementById("moose-container").offsetWidth) * .75,
      l = i,
      o = i / 2,
      d = d3.scale.linear().range([0, 2 * Math.PI]),
      u = d3.scale.pow().exponent(1.3).domain([0, 1]).range([0, o]),
      c = 5,
      s = 1e3,
      partition = d3.layout.partition().sort(null).value(function (t) {
        return 5.8 - t.depth;
      }),
      data = this.args.data,
      partitionedData = partition.nodes({
        children: data
      }),
      path = null,
      text = null,
      container = d3.select(element),
      onClick = function (n) {
        path
          .transition()
          .duration(s)
          .attrTween("d", e(n));

        text
          .style("visibility", function (e) {
            return t(n, e) ? null : d3.select(this).style("visibility")
          })
          .transition()
          .duration(s)
          .attrTween("text-anchor", function (t) {
            return function () {
              return d(t.x + t.dx / 2) > Math.PI ? "end" : "start";
            }
          })
          .attrTween("transform", function (t) {
            var n = (t.name || "").split(" ").length > 1;
            return function () {
              var e = 180 * d(t.x + t.dx / 2) / Math.PI - 90,
                r = e + (n ? -.5 : 0);
              return "rotate(" + r + ")translate(" + (u(t.y) + c) + ")rotate(" + (e > 90 ? -180 : 0) + ")";
            }
          })
          .style("fill-opacity", function (e) {
            return t(n, e) ? 1 : 1e-6;
          })
          .each("end", function (e) {
            d3.select(this).style("visibility", t(n, e) ? null : "hidden");
          })
      },
      arc = d3.svg.arc().startAngle(function (t) {
        return Math.max(0, Math.min(2 * Math.PI, d(t.x)))
      }).endAngle(function (t) {
        return Math.max(0, Math.min(2 * Math.PI, d(t.x + t.dx)))
      }).innerRadius(function (t) {
        return Math.max(0, t.y ? u(t.y) : t.y)
      }).outerRadius(function (t) {
        return Math.max(0, u(t.y + t.dy))
      });

    var group = container.append("svg")
      .attr("width", i + 2 * c)
      .attr("height", l + 2 * c)
      .append("g")
      .attr("transform", "translate(" + [o + c, o + c] + ")");

    container
      .append("p")
      .attr("id", "intro")
      .text("Click to zoom!");

    path = group
      .selectAll("path")
      .data(partitionedData)
      .enter()
      .append("path")
      .attr({
        "id": function (t, n) {
          return "path-" + n
        }, "d": arc,
        "fill-rule": "evenodd"
      })
      .style("fill", function (d) {
        return color((d.children ? d : d.parent).name);
      })
      .on("click", onClick);

    text = group
      .selectAll("text")
      .data(partitionedData)
      .enter()
      .append("text")
      .style({
        "fill-opacity": 1,
        "font-size": "15px",
        "fill": function (t) {
          return a(d3.rgb(n(t))) < 125 ? "#eee" : "#000"
        }
      }).attr("text-anchor", function (t) {
        return d(t.x + t.dx / 2) > Math.PI ? "end" : "start"
      }).attr("dy", ".2em").attr("transform", function (t) {
        var n = (t.name || "").split(" ").length > 1,
          e = 180 * d(t.x + t.dx / 2) / Math.PI - 90,
          r = e + (n ? -.5 : 0);
        return "rotate(" + r + ")translate(" + (u(t.y) + c) + ")rotate(" + (e > 90 ? -180 : 0) + ")"
      }).on("click", onClick);

    text.append("tspan").attr("x", 0).text(function (t) {
      return t.depth ? t.name.split(" ")[0] : ""
    });

    text.append("tspan").attr("x", 0).attr("dy", "1em").text(function (t) {
      return t.depth ? t.name.split(" ")[1] || "" : ""
    });
  }
}
