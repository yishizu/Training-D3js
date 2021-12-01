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