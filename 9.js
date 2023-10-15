window.addEventListener("mousemove",function(dets){
    var xval=gsap.utils.mapRange(0,window.innerWidth,10,window.innerWidth-10,dets.clientX)
    var yval=gsap.utils.mapRange(0,window.innerHeight,10,window.innerHeight-10,dets.clientY)  
  gsap.to(".container",{
        left:xval+"px",
        top:yval+"px",
        ease:Circ,
       
    });
});



// window.addEventListener("mousemove",function(dets){
//     var rect=this.document.querySelector(".container")
//       var xval=gsap.utils.mapRange(0,window.innerWidth,100+rect.getBoundingClientRect().width/2,window.innerWidth-(100+rect.getBoundingClientRect().width/2),dets.clientX)
//       var yval=gsap.utils.mapRange(0,window.innerHeight,100+rect.getBoundingClientRect().height/2,window.innerHeight-(100+rect.getBoundingClientRect().height/2),dets.clientY)
    
    
    
//       gsap.to(".container",{
//           left:xval+"px",
//           top:yval+"px",
//           ease:Power3
          
//       });
//   });


// var str="Abhi is a good boy"
// var save=str.split(" ").map(function(word){
//     return word.split("").reverse().join("")
// })
// console.log(save.join(" "))

// var a=12;
// if(a%1 === 0){
//  console.log("yes")}else{console.log("no")}

// function array(a){
//     return a instanceof Array
// }
// console.log(array([1,2]))

// var a=[1,2,3]
// Array.isArray(a)

// function is_array(a){
//     return Array.isArray(a)
// }
// console.log(is_array('w3resource'));
// console.log(is_array([1,2,4,0]));


// function clone(a){
//     var b=[1,2,3,...a]
//     return b
// }
// console.log(clone([1,2,3,4]))
// console.log(clone([6,7.8,-1]))

// function arr(a,get=1){
//     var b=[]
//     for(var i=0;i<get;i++){
//         b.push(a[i])
//     }
//     return b

// }
// console.log(arr([1,2,3,4,5,6,7,8],2))
  
// function a(inp){
//     return inp.join("")
// }
// console.log(a([1,2,3]))


// function ab(inp){
//    return function(in2){
//     return inp+in2;
//    }
// }

// console.log(ab(10)(20))

//  var a=[2,'2','3','2']
// sum=0;
// a.forEach(function(inp){
//     if(typeof inp === "number"){
//         sum=sum+inp;
        
//     }
//     else{
//         console.log("not number")
//     }
   
// })
// console.log(sum)

// var a=[]

// for(let i=0;i<10;i++){
//     a.push(function(){
//         setTimeout(function(){
//             console.log(i)
//         },2000)
//     })
// }
// for(var i=0;i<10;i++){
//     a[i]()
// }

// var a=[1,2,3,4]   map functionality
// var b=[]
// a.forEach(function(val){
//     b.push(val*2)
// })
// console.log(b)


// var a=[1,2,3,4]
// var b=a.map(function(val){
//     return val *5 ;
// })


// var a=["hello","hi","abhil","aksha","prajwal","byeee"]
// var ans=a.map(function(val){
//     if(val.length === 5) return `<p>${val}<p>`
//     else return `<span>${val}<span>`
// })

// var a=[{name:"abhi",age:"20"},{name:"sam",age:"20"},{name:"bham",age:"20"}]
// var ans=a.map(function(val){
//     return {name:val.name};
// })
// console.log(ans);

// var a=[1,2,3]
// var ans=a.filter(function(val){
//     if(val>=3){
//         return false;}
//     else{return true}
//     }
// )
// console.log(ans)


// var a=[1,2,3,4,5,6]
// var ans=a.filter(function(val){
//     if(val%2==0){return true}else{return false}
// })
// console.log(ans) 


// var a =["abhi","amith","bhalu","cam","damn","egg"]
// var ans=a.filter(function(val){
//     return val.includes("a")? false:true
// })

// var a =["abhilash","akshay","prajwal","chandu","manju","egg"]
// var ans=a.filter(function(val){
//      if(val.split("a").length <= 2)return true
// })
// console.log(ans)


// var resultant=new Promise(function(res,rej){
//      if(true) return res();
//      else return rej();
// })
// resultant.then(function(){
//      console.log("hi")
// }).catch(function(){
//      console.log('bye')
// })


// var a=new Promise(function(res,rej){
//      return rej("hi")
// })
// var b=a.then(function(data){
//     return new Promise((res, rej) => {
//         if(true){ console.log(data)
//          return res("hello")}else return rej("fail")
//     })
// })
// b.then(function(data){
//      console.log(data)
// }).catch(function(data){
//      console.log(data)
// })

// var a=new Promise(function(res,rej){
//      var ans=Math.floor(Math.random()*10)
//      if(ans<5)return res()
//      else return rej()
// })

// a.then(function(){
//      console.log("resolved")
// }).catch(function(){console.log("rejected")})


// var a=new Promise(function(res,rej){
//    return res("1")
// })
// var b=a.then(function(data){
//      console.log(data);
//      return new Promise(function(res,rej){
//           return res("2");
//      })
// })
// var c=b.then(function(data){
//      console.log(data)
//      return new Promise((resolve, reject) => {
//           return resolve("3")
//      })
// })
// c.then(function(data){console.log(data)})


// class bottle{
//      constructor(radius,height,brand){
//           this.radius=radius;
//           this.height=height;
//           this.brand=brand;
//      }

// }
// var bt1=new bottle(2,3,"bisleri");
// var bt2=new bottle(3,5,"kenel");

// frequency of an items in an given array
// var a=["abhi","1","2",3,"3",2,1,"s"]
// var obj={}
// a.forEach(function(elem){
//     obj.hasOwnProperty(elem)? obj[elem]++:obj[elem]=1
// })

// to find duplicate values form given array
// var a=[1,2,3,4,5,1,2,3,4,5,6,7,2,4,5]
// var obj={}
// a.forEach(function(elem){
//      obj.hasOwnProperty(elem)?obj[elem]++:obj[elem]=1;
// })

// for(var i in obj){
//      if(obj[i]>1){
//           console.log(i)
//      }
// }


// if a=12463786 where ever we find 2even no then palce "-" between them like 1234-656-8
// var a=12346578043
// var n=a.toString();
// for(var i=1;i<n.length;i++){
//      if(Number(n[i-1])%2 === 0 && Number(n[i])%2 === 0){
//           n=n.substring(0,i)+'-'+n.substring(i,n.length)
//      }
// }



// function str(elem){
//      var element=elem.split("").map(function(c){
//           if(c.charCodeAt()>90){
//                return c.toUpperCase();
//           }
//           else return c.toLowerCase();
//      }).join("")
//      console.log(element)
// }
// str("Quick Brown Fox Jumps Over Lazy Dog")



// function str(elem){
//      var b=elem.split("").map(function(e){
//           if(e.charCodeAt()>90){
//                return e.toUpperCase();
//           }
//           else return e.toLowerCase();
//      }).join("")
//      console.log(b)
// }
// str("aBHILASH iS a vERY gOOD bOY")


// function str(elem){
//     var b=elem.split("").map(function(val){
//         var n=Math.random()*10
//         if(n>5) return val.toUpperCase();
//         else return val.toLowerCase();
//     })
//     console.log(b)
// }
// str("he is a good boy")


// var a=[[1,2,3,4],[5,6,7,8],[9,10,11,12]]
// for(var i=0;i<a.length;i++){
//     console.log(`this is ${i+1} array`)
//     for(var j=0;j<a[i].length;j++){
//         console.log(a[i][j])
//     }
// }elements print



// binary search

// var a=[1,2,3,4,5,6,7]
// var search=4
// var s=0;
// var e=a.length-1;
// var m=(s+e)/2;
// while(s<=e){
//    if(a[m] === search)
//    {
//     console.log("mid") 
//     break;
//    }
//    else if(a[m]<search){
//     m=m+1
//     console.log("greater")
//     break
//    }
//    else{ m=m-1
// console.log("smaller")
// break}
// }


// var a=[1,4,78,8]
// var b=[1,4,98,765]
// for(var i=0;i<b.length;i++){
//     console.log(a[i]+b[i])
// }



// var as=[[1,2,3],["A","b","C","dE"]]
// for(var i=0;i<as.length;i++){
//     for(var j=0;j<as[i].length;j++){
//         if(typeof as[i][j] === 'number'){
//             console.log(as[i][j])
//         }
//         else{
//             console.log(as[i][j].toUpperCase());
//         }
//     }
// }




// var a=[[1,2,3,"a","b","C"],["A","c","is"]]
// for(var i=0;i<a.length;i++){
//     console.log(`this is ${i} array`)
//     for(var j=0;j<a[i].length;j++){
//         if(typeof a[i][j] === 'number'){
//             console.log(a[i][j])
//         }
//         else{
//             console.log(a[i][j].toLowerCase())
//         }
//     }
//  }

// var num = prompt("enter the number");
// if(num>10){console.log("hello")}
// else{console.log("hey")}


// var a=prompt("enter a number");
// var b=Number(a)+10
//     if(b>20){
//         console.log("hey")

//     }
//     else{
//         console.log("hello")
//     }


// var a=Number(prompt("enter first number"));
// var b=Number(prompt("enter second number"));
// var add=a+b;
// if((b%10)<add){
//     console.log("hey")
// }
// else{
//     console.log("hello")
// }



// var pas1=prompt("enter the password")
// var pas2=prompt("re-enter the password")
// if(pas1 === pas2){
//     console.log("login succ")
// }
// else{
//     console.log("login fail")
// }
                              



// even or odd
// var a=prompt("enter the number")
// if(a%2 === 0){
//     console.log("even")
// }
// else{
//     console.log("odd")
// }






















