var maintl;!function(){maintl=new TimelineMax,TweenMax.to(".frame2",0,{autoAlpha:0}),maintl.add("frame0",0).to(".stage",.05,{autoAlpha:1}).add("frame1","+=3").to(".frame1",1.5,{autoAlpha:0},"frame1").to(".frame2",1.5,{autoAlpha:1},"frame1").add("frame2","+=3.5").to(".frame1",1.5,{autoAlpha:1},"frame2").to(".frame2",1.5,{autoAlpha:0},"frame2").add("frame3","+=3.45").to(".frame1",1.5,{autoAlpha:0},"frame3").to(".frame2",1.5,{autoAlpha:1},"frame3")}(),document.querySelector(".cta-button").addEventListener("mouseover",function(){TweenMax.to(".cta-glare",.4,{x:260,ease:Power2.easeOut})}),document.querySelector(".cta-button").addEventListener("mouseout",function(){TweenMax.to(".cta-glare",.4,{x:0,ease:Power2.easeOut})});