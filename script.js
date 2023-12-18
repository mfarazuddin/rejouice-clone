
function cursorEffect () {
     var page1Content = document.querySelector("#page1_content")
     var cursor = document.querySelector("#cursor")

     page1Content.addEventListener("mousemove", function(details) {
          // cursor.style.left = details.x+"px"
          // cursor.style.top = details.y+"px"
          gsap.to(cursor, {
               x: details.x,
               y: details.y,
          })
     })

     page1Content.addEventListener("mouseenter", function() {
          gsap.to(cursor, {
               scale: 1,
               opacity: 1
          })     
     })

     page1Content.addEventListener("mouseleave", function() {
          gsap.to(cursor, {
               scale: 0,
               opacity: 0
          })
     })
}
cursorEffect()

var swiper = new Swiper(".mySwiper", {
     slidesPerView: 1,
     spaceBetween: 30,
     loop: true,
     autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
});

var tl = gsap.timeline()
tl.from("#page1_content #h1tag p", {
     y: 200,
     stagger: .04,
     duration: .5
})
tl.from("#top h5", {
     y: 120,
     duration: .7,
     scrollTrigger: {
          trigger: "#page2",
          scroller: "body",
          // markers: true,
          start: "top 70%",
          end: "top 10%",                
          scrub: 2,
     }
})
tl.from("#bottom h3", {
     y: 120,
     stagger: 0.07,
     duration: .4,
     scrollTrigger: {
          trigger: "#page2",
          scroller: "body",
          // markers: true,
          start: "top 70%",
          end: "top 10%",                
          scrub: 2,
     }
})
tl.from("#page3_top h4", {
     y: 100,
     duration: .1,
     scrollTrigger: {
          trigger: "#page3_top",
          scroller: "body",
          // markers: true,   
          start: "top 90%",           
          end: "top 80%",           
          scrub: 1,
     }
})
tl.from("#page3_top h2", {
     y: 100,
     duration: .5,
     stagger: .04,
     scrollTrigger: {
          trigger: "#page3_top",
          scroller: "body",
          // markers: true,   
          start: "top 80%",           
          end: "top 30%",           
          scrub: 1,
     }
})
tl.from("#page3_elm .box", {
     y: 200,
     duration: 1,
     stagger: .3,
     scrollTrigger: {
          trigger: "#page3_elm",
          scroller: "body",
          // markers: true,   
          start: "top 70%",           
          end: "top 10%",           
          scrub: 1,
     }
})
tl.from("#page4 h4", {
     y: 200,
     duration: 1,
     scrollTrigger: {
          trigger: "#page4",
          scroller: "body",
          // markers: true,   
          start: "top 70%",           
          end: "top 10%",           
          scrub: 1,
     }
})
tl.from("#page4 h2", {
     y: 200,
     duration: 1.6,
     stagger: .4, 
     scrollTrigger: {
          trigger: "#page4",
          scroller: "body",
          // markers: true,   
          start: "top 70%",           
          end: "top 10%",           
          scrub: 1,
     }
})
tl.from("#page6 #border", {
     width: 0,
     duration: 1.6,
     stagger: .4, 
     scrollTrigger: {
          trigger: "#page6",
          scroller: "body",
          // markers: true,   
          start: "top 80%",           
          end: "top 60%",           
          scrub: 1,
     }
})
tl.from("#page6  h2", {
     y: 200,
     duration: 1.6,
     stagger: .4, 
     scrollTrigger: {
          trigger: "#page6",
          scroller: "body",
          // markers: true,   
          start: "top 70%",           
          end: "top 10%",           
          scrub: 1,
     }
})
tl.from("#page8  h4", {
     y: 200,
     duration: 1.6,
     stagger: .4, 
     scrollTrigger: {
          trigger: "#page8",
          scroller: "body",
          // markers: true,   
          start: "top 70%",           
          end: "top 10%",           
          scrub: 1,
     }
})
tl.from("#page8  h1", {
     y: 200,
     duration: 1.6,
     stagger: .4, 
     scrollTrigger: {
          trigger: "#page8",
          scroller: "body",
          // markers: true,   
          start: "top 70%",           
          end: "top 10%",           
          scrub: 1,
     }
})
tl.from("#page9 #top1,#top2,#top3", {
     y: 200,
     duration: 1,
     stagger: .3, 
     scrollTrigger: {
          trigger: "#page9",
          scroller: "body",
          // markers: true,   
          start: "top 80%",           
          end: "top 10%",           
          scrub: 1,
     }
})
tl.from("#page9 #center1,#center2,#center3", {
     y: 200,
     duration: 1,
     stagger: .3, 
     scrollTrigger: {
          trigger: "#page9",
          scroller: "body",
          // markers: true,   
          start: "top 80%",           
          end: "top 10%",           
          scrub: 1,
     }
})
tl.from("#page9  h1", {
     y: -350,
     duration: 4,
     stagger: .2, 
     delay: 1,
     ease: "slow(0.1,0.1,false)",
     scrollTrigger: {
          trigger: "#page9",
          scroller: "body",
          // markers: true,   
          start: "top 60%",           
          end: "top 0%",           
          scrub: 1,
     }
})


