
function reverse_a_number(a) 
{
    a = a + "";
    return a.split("").reverse().join("");
}
console.log(Number(reverse_a_number(987654321)));
