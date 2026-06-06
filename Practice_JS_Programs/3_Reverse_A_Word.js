function reverse_a_text(T)
{
    T = T + " ";
    return T.split(" ").reverse().join(" ");
}
console.log(reverse_a_text("Reverse this text!"));

function reverse_a_word(W)
{
    return W.toString().split(" ").reverse().join(" ");
}
console.log(reverse_a_word("This is a test case for reversing the words in javascript!"));
