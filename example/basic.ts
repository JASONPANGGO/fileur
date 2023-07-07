import Fileur from "../src/main";

const f = new Fileur({
    interval: 100,
    frames: ['.','..','...', '....'],
    reverse: true
});

f.render();

setTimeout(() => {
    f.stop();
}, 1000);