function isPalindrome(str)
{
    let Len = str.length;
    for(i=0; i < Len/2; i++);
    { 
    if (str[i]!== str[Len - 1 - i]){
        return false;
    }
    }
    return true;
}

let str1 = "MadaM";
let str2 = "OppO";
let str3 = "Hellp";

console.log(isPalindrome(str1));
console.log(isPalindrome(str2));
console.log(isPalindrome(str3));