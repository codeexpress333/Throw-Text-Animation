//Get All Value
var container = {};
container.opacityIn = [0, 1];
container.scaleIn = [0.2, 1];
container.scaleOut = 3;
container.durationIn = 800;
container.durationOut = 600;
container.delay = 500;


//Now Start Animation
anime.timeline({ loop: true })
    .add({
        targets: '.container .letters-1',
        opacity: container.opacityIn,
        scale: container.scaleIn,
        duration: container.durationIn
    }).add({
        targets: '.container .letters-1',
        opacity: 0,
        scale: container.scaleOut,
        duration: container.durationOut,
        easing: "easeInExpo",
        delay: container.delay
    }).add({
        targets: '.container .letters-2',
        opacity: container.opacityIn,
        scale: container.scaleIn,
        duration: container.durationIn
    }).add({
        targets: '.container .letters-2',
        opacity: 0,
        scale: container.scaleOut,
        duration: container.durationOut,
        easing: "easeInExpo",
        delay: container.delay
    }).add({
        targets: '.container .letters-3',
        opacity: container.opacityIn,
        scale: container.scaleIn,
        duration: container.durationIn
    }).add({
        targets: '.container .letters-3',
        opacity: 0,
        scale: container.scaleOut,
        duration: container.durationOut,
        easing: "easeInExpo",
        delay: container.delay
    }).add({
        targets: '.container',
        opacity: 0,
        duration: 500,
        delay: 500
    });

