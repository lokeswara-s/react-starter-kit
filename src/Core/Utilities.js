class Utilities{
    static getKeyByValue(obj, val) {
        return Object.entries(obj).find(i => i[1] === val);
    }
}

export default Utilities;