// sabse phle mai gsap ka cdn lgana chata hun


//ye suru page hai jo sirf grey color ka bg hai vo by default ye gsap ki from condition hai jha se start hga animation and hame to wala btana hai ki kha tak animate krnege

// gsap.to(".imagecontainer") sbse phle mai image container ko animate kr rha hun
let p=document.querySelectorAll(".imagecontainer");

// p me sare image container hai
gsap.to(p,{
width:"100%",
ease:Expo.easeInOut,
duration:2, 
stagger:2,

})

gsap.to(".text h1",{
  
    ease:Expo.easeInOut,
    // if you are giving stagger then display will not work

    stagger:2  ,
    // basically ham ise top pe lana chahte hain
    top:0,
  
    })

    // ye niche wala delay rkhega 2 sec ka
    //ye par wala jo hai turant suru hga
    //to phla bnda jab turnt ayega to uske 2 sec bad dusra bnda ayega

    gsap.to(".text h1",{
     delay:2,

        ease:Expo.easeInOut,
        // if you are giving stagger then display will not work
    
        stagger:2   ,
        // basically ham ise top pe lana chahte hain
        top:"-100%",
      
        })

        // ham chahte hai ki akhri wala h1 text stay kre jaise image stay kr rhi hai

    
