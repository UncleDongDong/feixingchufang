//home.js
//获取应用实例
const app = getApp()

Page({
  data: {
    exsitAddress:0,//是否存在收货地址  0 不存在   1 存在
    key: 0,
    day:[
      { time:"2018-09-01",
        week:"周六",
        calendar:'9月1日',
        sellout:0,//是否售罄   0 未售罄   1 部分售罄  2售罄
        recess:0,//是否放假 0正常上班   1 放假 
        //早餐
        breakfast:[
           {
            foodName:"皮蛋瘦肉粥",
            foodImg:"../static/image/food.png",
            foodPrice:"25.00",
            foodTitle1:"精选上乘五花肉，配以松花蛋",
            foodTitle2: "精选上乘五花肉，配以松花蛋",
            foodTitle3: "",
            cook:{
              cookId: 12, cookImg:"../static/image/cooker.png",
              cookName:"王守义",
              slogan:"天下第一神厨",        
            },
            foodNum:20,
            purchaseNum:1,//购买数量
           },
          {
            foodName: "皮蛋瘦肉粥",
            foodImg: "../static/image/food.png",
             foodPrice: "25.00",
             foodTitle1: "精选上乘五花肉，配以松花蛋",
             foodTitle2: "精选上乘五花肉，配以松花蛋",
             foodTitle3: "精选上乘五花肉，配以松花蛋",
             cook: {
               cookId: 12, cookImg: "../static/image/cooker.png",
               cookName: "王守义",
               slogan: "天下第一神厨",
             },
             foodNum: 0,
            purchaseNum: 0,//购买数量
           },
          {
            foodName: "皮蛋瘦肉粥",
            foodImg: "../static/image/food.png",
            foodPrice: "25.00",
            foodTitle1: "精选上乘五花肉，配以松花蛋",
            foodTitle2: "精选上乘五花肉，配以松花蛋",
            foodTitle3: "精选上乘五花肉，配以松花蛋",
            cook: {
              cookId: 12, cookImg: "../static/image/cooker.png",
              cookName: "王守义",
              slogan: "天下第一神厨",
            },
            foodNum: 20,
            purchaseNum: 0,//购买数量
          }
        ],
         //中餐
         lunch:[
           {
             foodName: "皮蛋瘦肉粥",
             foodImg: "../static/image/food.png",
             foodPrice: "25.00",
             foodTitle1: "精选上乘五花肉，配以松花蛋",
             foodTitle2: "精选上乘五花肉，配以松花蛋",
             foodTitle3: "精选上乘五花肉，配以松花蛋",
             cook: {
               cookId: 12, cookImg: "../static/image/cooker.png",
               cookName: "王守义",
               slogan: "天下第一神厨",
             },
             foodNum: 20,
             purchaseNum: 0,//购买数量
           }
        ],
         //晚餐
         dinner:[
           {
             foodName: "皮蛋瘦肉粥",
             foodImg: "../static/image/food.png",
             foodPrice: "25.00",
             foodTitle1: "精选上乘五花肉，配以松花蛋",
             foodTitle2: "精选上乘五花肉，配以松花蛋",
             foodTitle3: "精选上乘五花肉，配以松花蛋",
             cook: {
               cookId: 12, cookImg: "../static/image/cooker.png",
               cookName: "王守义",
               slogan: "天下第一神厨",
             },
             foodNum: 20,
             purchaseNum: 0,//购买数量
           }
        ],
      },
      {
        time: "2018-09-02",
        week: "周日",
        calendar: '9月2日',
        sellout: 0,//是否售罄   0 未售罄   1 部分售罄  2售罄
        recess: 0,//是否放假 0正常上班   1 放假 
        //早餐
        breakfast: [
          {
            foodName: "皮蛋瘦肉粥",
            foodImg: "../static/image/food.png",
            foodPrice: "25.00",
            foodTitle1: "精选上乘五花肉，配以松花蛋",
            foodTitle2: "精选上乘五花肉，配以松花蛋",
            foodTitle3: "精选上乘五花肉，配以松花蛋",
            cook: {
              cookId: 12, cookImg: "../static/image/cooker.png",
              cookName: "王守义",
              slogan: "天下第一神厨",
            },
            foodNum: 20,
            purchaseNum: 0,//购买数量
          }
        ],
        //中餐
        lunch: [
          {
            foodName: "皮蛋瘦肉粥",
            foodImg: "../static/image/food.png",
            foodPrice: "25.00",
            foodTitle1: "精选上乘五花肉，配以松花蛋",
            foodTitle2: "精选上乘五花肉，配以松花蛋",
            foodTitle3: "精选上乘五花肉，配以松花蛋",
            cook: {
              cookId: 12, cookImg: "../static/image/cooker.png",
              cookName: "王守义",
              slogan: "天下第一神厨",
            },
            foodNum: 20,
            purchaseNum: 0,//购买数量
          }
        ],
        //晚餐
        dinner: [
          
          {
            foodName: "皮蛋瘦肉粥",
            foodImg: "../static/image/food.png",
            foodPrice: "25.00",
            foodTitle1: "精选上乘五花肉，配以松花蛋",
            foodTitle2: "精选上乘五花肉，配以松花蛋",
            foodTitle3: "精选上乘五花肉，配以松花蛋",
            cook: {
              cookId: 12, cookImg: "../static/image/cooker.png",
              cookName: "王守义",
              slogan: "天下第一神厨",
            },
            foodNum: 20,
            purchaseNum: 0,//购买数量
          }
        ],
      },
      {
        time: "2018-09-03",
        week: "周一",
        calendar: '9月3日',
        sellout: 0,//是否售罄   0 未售罄   1 部分售罄  2售罄
        recess: 0,//是否放假 0正常上班   1 放假 
        //早餐
        breakfast: [
          
          {
            foodName: "皮蛋瘦肉粥",
            foodImg: "../static/image/food.png",
            foodPrice: "25.00",
            foodTitle1: "精选上乘五花肉，配以松花蛋",
            foodTitle2: "精选上乘五花肉，配以松花蛋",
            foodTitle3: "精选上乘五花肉，配以松花蛋",
            cook: {
              cookId: 12, cookImg: "../static/image/cooker.png",
              cookName: "王守义",
              slogan: "天下第一神厨",
            },
            foodNum: 0,
            purchaseNum: 0,//购买数量
          },
          
        ],
        //中餐
        lunch: [
          {
            foodName: "皮蛋瘦肉粥",
            foodImg: "../static/image/food.png",
            foodPrice: "25.00",
            foodTitle1: "精选上乘五花肉，配以松花蛋",
            foodTitle2: "精选上乘五花肉，配以松花蛋",
            foodTitle3: "精选上乘五花肉，配以松花蛋",
            cook: {
              cookId: 12, cookImg: "../static/image/cooker.png",
              cookName: "王守义",
              slogan: "天下第一神厨",
            },
            foodNum: 20,
            purchaseNum: 0,//购买数量
          }
        ],
        //晚餐
        dinner: [
          
        ],
      },
      {
        time: "2018-09-04",
        week: "周二",
        calendar: '9月4日',
        sellout: 0,//是否售罄   0 未售罄   1 部分售罄  2售罄
        recess: 0,//是否放假 0正常上班   1 放假 
        //早餐
        breakfast: [
          {
            foodName: "皮蛋瘦肉粥",
            foodImg: "../static/image/food.png",
            foodPrice: "25.00",
            foodTitle1: "精选上乘五花肉，配以松花蛋",
            foodTitle2: "精选上乘五花肉，配以松花蛋",
            foodTitle3: "精选上乘五花肉，配以松花蛋",
            cook: {
              cookId: 12, cookImg: "../static/image/cooker.png",
              cookName: "王守义",
              slogan: "天下第一神厨",
            },
            foodNum: 0,
            purchaseNum: 0,//购买数量
          }
        ],
        //中餐
        lunch: [
          
        ],
        //晚餐
        dinner: [
          {
            foodName: "皮蛋瘦肉粥",
            foodImg: "../static/image/food.png",
            foodPrice: "25.00",
            foodTitle1: "精选上乘五花肉，配以松花蛋",
            foodTitle2: "精选上乘五花肉，配以松花蛋",
            foodTitle3: "精选上乘五花肉，配以松花蛋",
            cook: {
              cookId: 12, cookImg: "../static/image/cooker.png",
              cookName: "王守义",
              slogan: "天下第一神厨",
            },
            foodNum: 20,
            purchaseNum: 0,//购买数量
          }
        ],
      },
      {
        time: "2018-09-05",
        week: "周三",
        calendar: '9月5日',
        sellout: 0,//是否售罄   0 未售罄   1 部分售罄  2售罄
        recess: 0,//是否放假 0正常上班   1 放假 
        //早餐
        breakfast: [
          
        ],
        //中餐
        lunch: [
          {
            foodName: "皮蛋瘦肉粥",
            foodImg: "../static/image/food.png",
            foodPrice: "25.00",
            foodTitle1: "精选上乘五花肉，配以松花蛋",
            foodTitle2: "精选上乘五花肉，配以松花蛋",
            foodTitle3: "精选上乘五花肉，配以松花蛋",
            cook: {
              cookId: 12, cookImg: "../static/image/cooker.png",
              cookName: "王守义",
              slogan: "天下第一神厨",
            },
            foodNum: 20,
            purchaseNum: 0,//购买数量
          }
        ],
        //晚餐
        dinner: [
          {
            foodName: "皮蛋瘦肉粥",
            foodImg: "../static/image/food.png",
            foodPrice: "25.00",
            foodTitle1: "精选上乘五花肉，配以松花蛋",
            foodTitle2: "精选上乘五花肉，配以松花蛋",
            foodTitle3: "精选上乘五花肉，配以松花蛋",
            cook: {
              cookId: 12, cookImg: "../static/image/cooker.png",
              cookName: "王守义",
              slogan: "天下第一神厨",
            },
            foodNum: 20,
            purchaseNum: 0,//购买数量
          }
        ],
      },
    ], 
    
  },

 //页面加载时触发
  onLoad: function () {
    //获取当前日期
    


  },
  //页面显示/切入前台时触发
  onShow:function(){

  },
  onReady:function(){

  },
  //页面隐藏/切入后台时触发
  onHide:function(){

  },
  //页面卸载时触发
  onUnload:function(){

  },

  //改变日期
  changeDay:function(e){
    console.log(e.target.dataset.key)
     this.setData({
       key:e.target.dataset.key
     })
  },

  

// 购物车 减
sub:function(e){
  var key = this.data.key
  var index = e.currentTarget.dataset.key
  var purchase;
  var purchasenum ;
  var food;
  var foodNum;
  if (e.currentTarget.dataset.slot == "0") {
    purchase = "day[" + key + "].breakfast[" + index + "].purchaseNum";
    purchasenum = this.data.day[key].breakfast[index].purchaseNum;
    food = "day[" + key + "].breakfast[" + index + "].foodNum";
    foodNum = this.data.day[key].breakfast[index].foodNum ;
  } else if (e.currentTarget.dataset.slot == "1") {
    purchase = "day[" + key + "].lunch[" + index + "].purchaseNum";
    purchasenum = this.data.day[key].lunch[index].purchaseNum ;
    food = "day[" + key + "].lunch[" + index + "].foodNum";
    foodNum = this.data.day[key].lunch[index].foodNum ;
  } else {
    purchase = "day[" + key + "].dinner[" + index + "].purchaseNum";
    purchasenum = this.data.day[key].dinner[index].purchaseNum ;
    food = "day[" + key + "].dinner[" + index + "].foodNum";
    foodNum = this.data.day[key].dinner[index].foodNum ;
  }
  this.setData({
    [purchase]: purchasenum-1,
    [food]:foodNum+1,
  })
},
  // 购物车 加
  add: function (e) {
    var key = this.data.key
    var index = e.currentTarget.dataset.key
    var purchase;
    var purchasenum;
    var food;
    var foodNum;
    if (e.currentTarget.dataset.slot == "0") {
      purchase = "day[" + key + "].breakfast[" + index + "].purchaseNum";
      purchasenum = this.data.day[key].breakfast[index].purchaseNum;
      food = "day[" + key + "].breakfast[" + index + "].foodNum";
      foodNum = this.data.day[key].breakfast[index].foodNum;
    } else if (e.currentTarget.dataset.slot == "1") {
      purchase = "day[" + key + "].lunch[" + index + "].purchaseNum";
      purchasenum = this.data.day[key].lunch[index].purchaseNum;
      food = "day[" + key + "].lunch[" + index + "].foodNum";
      foodNum = this.data.day[key].lunch[index].foodNum;
    } else {
      purchase = "day[" + key + "].dinner[" + index + "].purchaseNum";
      purchasenum = this.data.day[key].dinner[index].purchaseNum;
      food = "day[" + key + "].dinner[" + index + "].foodNum";
      foodNum = this.data.day[key].dinner[index].foodNum;
    }
    if(foodNum!=0){
      this.setData({
        [purchase]: purchasenum + 1,
        [food]: foodNum - 1,
      })
    }
  },



  
})
