
/**
 * 非同期通信確認1
 */
let func1 = () => {
  let promList = [
    new Promise((resolve) => {
      console.log('prom1 START');
      setTimeout(() => {
        console.log('prom1 END')
        resolve('prom1 Display');
      }, 3000);
    }),
    new Promise((resolve) => {
      console.log('prom2 START');
      setTimeout(() => {
        console.log('prom2 END')
        resolve('prom2 Display');
      }, 2000);
    }),
  ];
  // 全てのプロミスが履行された時の処理
  Promise.all(promList).then((data) => {
    $('#textarea').text(data.join('\n'));
    console.log('all: OK');
  }).catch(function (error) {
    console.log('all: NG');
  });
}

/**
 * 非同期通信確認2
 */
function promFunc() {
  return new Promise((resolve) => {
    console.log('prom1 START');
    setTimeout(() => {
      console.log('prom1 END')
      resolve('prom1 Display');
    }, 5000);
  });
}

let promList = [
  promFunc,
  () => {
    return new Promise((resolve) => {
      console.log('prom2 START');
      setTimeout(() => {
        console.log('prom2 END')
        resolve('prom2 Display');
      }, 5000);
    })},
  () => {
    return new Promise((resolve) => {
      console.log('prom3 START');
      setTimeout(() => {
        console.log('prom3 END')
        resolve('prom3 Display');
      }, 2000);
    })},
  () => {
    return new Promise((resolve) => {
      console.log('prom4 START');
      setTimeout(() => {
        console.log('prom4 END')
        resolve('prom4 Display');
      }, 2000);
    })},
];

/**
 * async / await の確認
 */
async function func2 () {
  let p1 = promList[0]();
  let p2 = promList[1]();
  // await を用いると、プロミスが決定（つまり、履行または拒否）されるまで、その周囲にある async 関数の実行が一時的に停止される。
  let p3 = await promList[2]();
  let p4 = promList[3]();
  let pList = [
    `p1 = ${p1}`, // -> p1 = [object Promise]
    `p2 = ${p2}`, // -> p2 = [object Promise]
    `p3 = ${p3}`, // -> p3 = prom3 Display
    `p4 = ${p4}`  // -> p4 = [object Promise]
  ];
  pList.forEach(item => {
    console.log(item);
  });
  $('#textarea').text(pList.join('\n'));
}