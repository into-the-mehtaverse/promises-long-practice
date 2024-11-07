/* ============================== Phase 1 ============================== */
/* -------------------------- exploring async -------------------------- */

function num1 () {
    return 1;
}

async function num2 () {
    return 2;
}

// console.log(num1());
// num2().then(res => console.log(res));

/* ============================== Phase 2 ============================== */
/* -------------------------- exploring await -------------------------- */

async function waiting () {
    const value = await num2();
    console.log('waiting', value);
}

// waiting()

/* ============================== Phase 3 ============================== */
/* --------------------- creating a custom Promise --------------------- */

async function waitForPromise() {
    const promise = new Promise((resolve) => {
        setTimeout(() => {
            resolve('done!!!')
        }, 1000)
    })

    const result = await promise;
    console.log('my promise is', result);
}

// waitForPromise();



/* ============================== Phase 4 ============================== */
/* -------------------------- exploring then --------------------------- */

async function alternateThen () {
    const promise = new Promise ((resolve) => {
        setTimeout(() => {
            resolve('done!!!')
        }, 1000)
    })
        .then(result => console.log('my promise is', result));

}

// alternateThen()


/* ============================== Phase 5 ============================== */
/* ------------------- turn setTimeout into a Promise ------------------ */

function wait(ms) {
    return new Promise(resolve => setTimeout
        (resolve, ms)
    )
}

async function waitTester () {
    await wait(2000);
    console.log("test successful");
}

// waitTester();

/* ============================== Phase 6 ============================== */
/* -------------------- exploring reject and .catch -------------------- */

const tryRandomPromise = (random) => new Promise
((resolve, reject) => {
    if (random > 0.5) {
        resolve('success!!!');
        console.log('success!!!');
    } else {
        reject('random error')
    }
});

// tryRandomPromise(1)
// .then(res => {
//     console.log(res)
//     return tryRandomPromise(0)
// })
// .then(res => console.log(res))
// .catch(err => console.log(err));



/* ============================== Phase 7 ============================== */
/* ---------------- exploring async/await and try/catch ---------------- */

async function dursh () {
    try {
        await wait(2000);
        await tryRandomPromise(1);
        await tryRandomPromise(0);
    } catch (err) {
        console.log(err);
    }
}

// dursh();

/* ============================== Phase 8 ============================== */
/* -------------------- Promises are asynchronous! --------------------- */
