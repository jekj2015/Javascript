var person = [];


var detail= {name:"John",
age: 8,
height:50
}


person.push(detail);

detail= {name:"smith",
age: 9,
height:50
}


person.push(detail);

var big = person[0].name;
var score = person[0].height + (person[0].age*5);

console.log("Initial  " + big + score);

for(var i=0 ; i< person.length; i++)
    {
        
        if((person[i].height + (person[i].age*5)) > score)
             { big = person[i].name;
              score = person[i].height + (person[i].age*5);
             }
        
    }

console.log("Winner is :  " + big + "with score ---" + score );


        
    