// 5 = 5 4 3 2 1
export function factorial(x:number)
{
    var k=1;
 for(var i=1;i<=x;i++){
    k=k*i;
 }
  console.log("Factorial of "+x+" is :"+k );
}