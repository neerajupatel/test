console.log(" Create a function Remove all duplicate values from array const");

const students = [
    {id: 1, name: 'Cal', location: 'McHale' },
    {id: 2, name: 'Courtney', location: 'Sydney Hall' },
    {id: 1, name: 'Cal', location: 'Syndey hall' }
]
console.log(students)
let a =[]
let b =[]
let c =[]
   
students.find((val,key) => {
     //console.log(val[key]);
     if(a.indexOf(val.id)<0){
         a.push(val.id);
         b.push(val);
        
     }     
})
console.log(a) 
console.log(b) 

//============================================

console.log("Create a function that returns all the ID's from the below arrayvar council")

var council = [
    { id: 2100, name: 'President Jacqueline' },
    { id: 2114, name: 'Vice-president James' },
    { id: 3016, name: 'House-captain Otis' },
    { id: 4818, name: 'Prefect Finneas' }
  ];

console.log(council);

let ids=[];
ids = council.map((val,key) =>{
    return val.id;
})
console.log(ids);
//=================================

console.log("create a function which returns the sum of total experience of permanent employees. also find out the all array index of the permanent employee")

var members =
[{id:111,name:"Chelsea Foster",workExp:7,deptExp:6,isPermanent:true},
{id:102,name:"Aggie Sparling",workExp:13,deptExp:10,isPermanent:false},
{id:123,name:"Timmy Matthews",workExp:23,deptExp:15,isPermanent:false},
{id:66,name:"Emmet Foster",workExp:22,deptExp:9,isPermanent:true},
{id:89,name:"Brent Dolan",workExp:16,deptExp:12,isPermanent:true}];

console.log(members);

let sum = 0;
sum = members.reduce(function(accumulator,currentValue){
    console.log(currentValue.isPermanent);
    //console.log(currentValue);
   Totalexp =   currentValue.isPermanent?(currentValue.workExp+ currentValue.deptExp):0
    
        return  accumulator+ Totalexp;
   
},0);
console.log( sum);

//===============================================================
console.log("Create a prototype function which will return the total experience form the user id")

