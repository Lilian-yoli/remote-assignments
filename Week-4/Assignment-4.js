//Promise
function delayedResultPromise(n1, n2, delayTime) {
// your code here ...
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(n1 + n2), delayTime)
    });
}
//delayedResultPromise(4, 5 , 3000).then(console.log // 9 (4+5) will be shown in the console after 3 seconds

//Async/Await
async function main() {
    // your code here, you should call delayedResultPromise here and get the result using async/await.
    let result = await delayedResultPromise(4, 5 , 3000)
    console.log(result);
}
main() // result will be shown in the console after <delayTime> seconds