// function reverse_a_text(T)
// {
//     T = T + "";
//     return T.split("").reverse().join("");
// }
// console.log(reverse_a_text("poiuytrewq!"));

function reverse_a_text(T)
{
    
    return String(T).split("").reverse().join("");
}
console.log(reverse_a_text("poiuytrewq!"));

function reverse_a_text(T)
{
    T = T + "";
    return T.toString().split("").reverse().join("");
}
console.log(reverse_a_text("poiuytrewq!"));
