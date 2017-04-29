export default function bindf(funcs) {
    funcs.forEach(f => this[f] = this[f].bind(this));
}