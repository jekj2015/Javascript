var years = [1986,1990,2000,1955];
var ages = [];

for(var i=0; i< 4; i++)
    {
        
        ages[i] = prompt("Enter ages");
        
    }


for(var j = 0; j < ages.length; j++)
    {
        
        if(ages[j] < 18)
             console.log("Teenager");
        
        else
            console.log("Man")
        
    }



console.log(printFullAge(years));


function printFullAge(years)
{
    
    var result = [];
    
    
    
    for(var i = 0 ; i < years.length; i++)
        {
            
            if((2018 - years[i]) <= 18)
                {
                    result.push(false);
                    
                }
            
            else
                result.push(true);
            
            
            
            
            
        }
    
    
    return result;
    
}