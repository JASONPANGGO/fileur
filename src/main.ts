import { stdout } from 'process';

export default class Fileur {

    #id: NodeJS.Timer;
    #stream = stdout
    #frames: string[] = ['-', '\\', '|', '/'];
    #reverse: boolean = false;
    #interval: number = 80;

    constructor(options) {
        if (options) {
            if (options.stream) {
                this.#stream = options.stream;
            }

            if (options.frames) {
                this.#frames = options.frames;
            }

            if (options.interval) {
                this.#interval = options.interval;
            }

            if (options.reverse) {
                this.#reverse = options.reverse;
            }
        }
    }

    render() {
        if (this.#id) {
            clearInterval(this.#id);
        }

        if (this.#reverse){
            this.#frames = this.#frames.concat(this.#frames.reverse().slice(1));
        }

        let i = 0;

        this.#id = setInterval(() => {
            this.#stream.write(`\r${this.#frames[i = ++i % this.#frames.length]}`);
        }, this.#interval);
    }

    stop() {
        clearInterval(this.#id);
        this.#stream.write('\r');
    }
}

