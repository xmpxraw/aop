Function.prototype.before = function (fn) {
  var _self = this;
  return function () {
    //this指向了调用的函数
    if (fn.apply(this, arguments) == false) {
      return false;
    }
    return _self.apply(_self, arguments);
  };
};

Function.prototype.after = function (fn) {
  //after先执行本身this在执行回调
  var _self = this;
  return function () {
    var result = _self.apply(_self, arguments);
    if (result == false) return false;
    fn.apply(this, arguments);
    return result;
  };
};

// test.before(function() {
//     console.log(1)
// }).after(function () {
//     console.log(3)
// })()

for (let i in window) {
  if (typeof window[i] == "function") {
    window[i] = window[i]
      .before(function () { 
        // console.log(i);
        console.log(1);
      })
      .after(function () {
        console.log(3);
      });
  }
}

document.addEventListener("click", click);
function click() {
  console.log("33333222");
}

function test() {
  console.log(2);
}

function aa() {
  let a = {
    b: 3,
  };
  console.log(a);
}
test();

// aa()
