const x = 5;
let result = 0;

for (let i = 1; i <= x; i++)
    result += i

console.log('Wynik z pętli for: ' + result)    

result = 0;
let i = 1;
while (i <= x)
{
    result += i
    i++
}
console.log('Wynik z pętli while: ' + result)