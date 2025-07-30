let quant=[
    {
    name:"harsh",
    count:12
    },
    {
        name:"bhagat",
        count:12
    }
]
let maxroom=0;
quant.map(({name,count})=>{
    console.log(name);
    if(name==="harsh"){
       maxroom=count;
    }
    })
console.log(maxroom)