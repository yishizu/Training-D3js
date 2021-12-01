const DUMMY_DATA =[
    {id:'d1',value:10,region:'USA'},
    {id:'d2',value:1,region:'Japan'},
    {id:'d3',value:5,region:'USA'},
    {id:'d4',value:15,region:'India'},
    {id:'d5',value:20,region:'Germany'},
];

d3.select('#myfirstdata')
.selectAll('p')
.data(DUMMY_DATA)
.enter()
.append('p')
.text(data => data.region);

const container = d3.select('.chart')
.classed('container',true)
.style('border','1px solid red');

container.selectAll('.bar')
.data(DUMMY_DATA)
.enter()
.append('div')
.classed('bar',true)
.style('width','50px')
.style('height',data=>data.value*15+'px');

const xScale = d3.scaleBand().domain(DUMMY_DATA.map((dataPoint)=>dataPoint.id)).rangeRound([0,350]).padding(0.5);
const yScale = d3.scaleLinear().domain([0,20]).range([200,0]);

const container2 = d3.select('svg')
.classed('container',true)
.style('border','1px solid red');

const bars = container2.selectAll('.bar2')
.data(DUMMY_DATA)
.enter()
.append('rect')
.classed('bar2',true)
.attr('width',xScale.bandwidth())
.attr('height',data=>200-yScale(data.value))
.attr('x',data=>xScale(data.id))
.attr('y',data=>yScale(data.value));

setTimeout(()=>{
    bars.data(DUMMY_DATA.slice(0,2)).exit().remove();
},2000);
