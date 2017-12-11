const n = parseInt(prompt('please, enter the Fibonachi number to count'));

document.write('1.by the first way:'+fib(n)+'<br>'+
               '2.by the second way:'+fib2(n)+'<br>'+
               '3.by the third way:'+fib3(n));

function fib(n) {
    if (n===1) {
        return 1
    } else if (n===2) {
        return 1
      } else
         return fib(n-1)+fib(n-2);
}

function fib2(n) {
    let prePrev = 1;
    let prev = 1;
    let next = 0;
    let i=3; 
        do {
            next = prePrev + prev;
            prev = prePrev;
            next = prev;
            i++;
        } while (i<=n);
return prev;
}

function fib3(n) {
    let nums = [1,1];
    for (let i=2; i<n; i++) {
        nums[i]=nums[i-1]+nums[i-2];
    }
    return nums[n-1];
}