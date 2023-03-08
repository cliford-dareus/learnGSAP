const controller = new ScrollMagic.Controller();
const tl = new TimelineMax();

tl.from(
    '.inside',
    0.25,
    {scaleX: 0}
)

tl.from(
    '.inside', 
    0.65, 
    { ypercent: 100, ease: Back.easeOut }
)

tl.fromTo(
    'section.panel.turquoise',
    1,
    {xPercent: 100},
    {xPercent: 0, ease: Linear.easeNone},
    '+=1'
)


tl.fromTo(
    'section.panel.bordeaux',
    1,
    {yPercent: 100 },
    {yPercent: 0, ease: Linear.easeNone, rotation: 360, duration: 5},
    '+=1'
)

tl.fromTo(
    'section.panel.yellow',
    1,
    {xPercent:-100},
    {xPercent: 0, ease: Linear.easeNone }
)

new ScrollMagic.Scene({
    triggerElement: '.pinMaster',
    triggerHook: 'onLeave',
    duration: '500%'
})
    .setPin('.pinMaster')
    .setTween(tl)
    .addIndicators({
        colorTrigger: "white",
        colorStart : "white",
        colorEnd: 'white',
        indent: 40
    })
    .addTo(controller)