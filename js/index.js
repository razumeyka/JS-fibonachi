const n = parseInt(prompt('please, enter the Fibonachi number to count'));

document.write('1.by the first way:'+fibRecurs(n)+'<br>'+
               '2.by the second way:'+fibCircle(n)+'<br>'+
               '3.by the third way:'+fibArr(n));

function fibRecurs(n) {
    if n<=2 ? 1 : fib(n-1)+fib(n-2);
}

function fibCircle(n) {
    let prePrev = 1;
    let prev = 1;
    let next = 0;
    for (let i=3; i<=n; i++;) {
        next = prePrev + prev;
        prePrev = prev;
        prev = next;
        } 
return prev;
}

function fibArr(n) {
    let nums = [1,1];
    for (let i=2; i<n; i++) {
        nums[i]=nums[i-1]+nums[i-2];
    }
    return nums[n-1];
}