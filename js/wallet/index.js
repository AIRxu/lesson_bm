// js es6 class 关键字 面向对象
const UUID = require('uuid') //引入第三方库，
class Wallet {
  // 属性和方法
  constructor() {//构造函数里声明
    this._id = UUID.v1().replace(/-/g,''); //命名规则来约定 _变量 表示私有
    // 创建时间 不能改
    this._createTime = + new Date(); //类型转换
    // 余额怎么设计?
    this._balance = 0;

    // console.log(this._id);
    // console.log('欢迎使用支付宝钱包')

    // 设计支付宝用的钱包，几十亿人都在用的
    // 19979113182
    // 数字货币的概念 比特币
    // 1. 唯一 id aotoincremnet Node 绝对不会重复
  }

  increaseBalance(increasedAmount) {
    console.log('多了' + increasedAmount);
    this._balance += increasedAmount
  }

  decreaseBalance(decreasedAmount) {
    console.log('少了' + decreasedAmount);
    this._balance -= decreasedAmount
  }

  getBalance() {
    return this._balance;
  }

  getCreateTime() { //public
    return this._createTime;
  }

  getId() {
    return this._id;
  }

  setId() {
    // console.log('1111')
    throw new Error('私有属性_id 不可以修改');
  }
}

const zzwWallet = new Wallet(); //实例化

console.log(zzwWallet.getId());
// console.log(zzwWallet.setId());

// console.log(this._id);

console.log(zzwWallet._createTime);

// console.log(zzwWallet.getBalance());
// zzwWallet.increaseBalance(10.0);
// zzwWallet.decreaseBalance(8.1);
// console.log(zzwWallet.getBalance().toFixed(2));

// zzwWallet.id = '112233'; //id 属性只读, 但不能修改
// console.log(zzwWallet._id); //id 是zzwWallet 的public属性