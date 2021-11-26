export class Result {
    constructor (text, value) {
        this.text = text;
        this.value = value;
    }

    check(value) {
        if(this.value <= value) {
            return true;
        } else {
            return false;
        }
    }
}