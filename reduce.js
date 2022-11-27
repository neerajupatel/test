const users = [
                   {firstname:"neeraj1",lastname:"patel1",age:26},
                   {firstname:"neeraj2",lastname:"patel2",age:75},
                   {firstname:"neeraj3",lastname:"patel3",age:58},
                   {firstname:"neeraj4",lastname:"patel4",age:26},
                ];

                acc = {26:1,75:1,58:1}

const output = users.reduce(function(acc,curr){
    //console.log(acc);
   // console.log(curr.age);
    if(acc[curr.age]){
        acc[curr.age] = ++acc[curr.age];
    } else{
        acc[curr.age] = 1;
    }

   return acc;
},{});

console.log(output);
//--------------------------------------------------
const output1 = users.filter((value)=>value.age>30).map((val,key) =>{return val.firstname+' '+val.lastname})

console.log(output1);

//------------------------------------------
var userName = [];
const output2 = users.reduce(function(acc,curr){
   if(curr.age>30){
        userName.push(curr.firstname);
    }
    return userName;
},acc)
console.log(output2);
