import{A as t}from"./apexcharts.common-CHTSBbUw.js";import"./_commonjsHelpers-BosuxZz1.js";var e=["#1c84ee"],a={series:[{data:[{x:"New Delhi",y:218},{x:"Kolkata",y:149},{x:"Mumbai",y:184},{x:"Ahmedabad",y:55},{x:"Bangaluru",y:84},{x:"Pune",y:31},{x:"Chennai",y:70},{x:"Jaipur",y:30},{x:"Surat",y:44},{x:"Hyderabad",y:68},{x:"Lucknow",y:28},{x:"Indore",y:19},{x:"Kanpur",y:29}]}],colors:e,legend:{show:!1},chart:{toolbar:{show:!1},height:350,type:"treemap"},title:{text:"Basic Treemap",align:"center"}},r=new t(document.querySelector("#basic-treemap"),a);r.render();var e=["#f9b931","#22c55e"],a={series:[{name:"Desktops",data:[{x:"ABC",y:10},{x:"DEF",y:60},{x:"XYZ",y:41}]},{name:"Mobile",data:[{x:"ABCD",y:10},{x:"DEFG",y:20},{x:"WXYZ",y:51},{x:"PQR",y:30},{x:"MNO",y:20},{x:"CDE",y:30}]}],legend:{show:!1},chart:{toolbar:{show:!1},height:350,type:"treemap"},colors:e,title:{text:"Multi-dimensional Treemap",align:"center"}},r=new t(document.querySelector("#multiple-treemap"),a);r.render();var e=["#1c84ee","#ff6c2f","#f9b931"],a={series:[{data:[{x:"New Delhi",y:218},{x:"Kolkata",y:149},{x:"Mumbai",y:184},{x:"Ahmedabad",y:55},{x:"Bangaluru",y:84},{x:"Pune",y:31},{x:"Chennai",y:70},{x:"Jaipur",y:30},{x:"Surat",y:44},{x:"Hyderabad",y:68},{x:"Lucknow",y:28},{x:"Indore",y:19},{x:"Kanpur",y:29}]}],legend:{show:!1},chart:{toolbar:{show:!1},height:350,type:"treemap"},title:{text:"Distibuted Treemap (different color for each cell)",align:"center"},colors:e,plotOptions:{treemap:{distributed:!0,enableShades:!1}}},r=new t(document.querySelector("#distributed-treemap"),a);r.render();var e=["#1c84ee","#4ecac2"],a={series:[{data:[{x:"INTC",y:1.2},{x:"GS",y:.4},{x:"CVX",y:-1.4},{x:"GE",y:2.7},{x:"CAT",y:-.3},{x:"RTX",y:5.1},{x:"CSCO",y:-2.3},{x:"JNJ",y:2.1},{x:"PG",y:.3},{x:"TRV",y:.12},{x:"MMM",y:-2.31},{x:"NKE",y:3.98},{x:"IYT",y:1.67}]}],legend:{show:!1},chart:{toolbar:{show:!1},height:350,type:"treemap"},title:{text:"Treemap with Color scale",align:"center"},dataLabels:{enabled:!0,style:{fontSize:"12px"},formatter:function(o,l){return[o,l.value]},offsetY:-4},plotOptions:{treemap:{enableShades:!0,shadeIntensity:.5,reverseNegativeShade:!0,colorScale:{ranges:[{from:-6,to:0,color:e[0]},{from:.001,to:6,color:e[1]}]}}}},r=new t(document.querySelector("#color-range-treemap"),a);r.render();
