const controller = new ScrollMagic.Controller();
const tl  = new TimelineMax();

tl.staggerFrom(".box__styles",1.5, {
    scale: 0,
    cycle: {
        y:[-50, 50]
    },
    ease: Elastic.easeOut,
    stagger: {
        from: "center",
        amount: 0.25
    }
})

const scene = new ScrollMagic.Scene({
    triggerElement: ".stage",
    triggerHook: 0.25,
    duration: "50%"
})
    .addIndicators({
    colorTrigger: "white",
    colorStart : "white",
    colorEnd: 'white',
    indent: 5
    })
    .setTween(tl)
    .addTo(controller)


console.log(scene)