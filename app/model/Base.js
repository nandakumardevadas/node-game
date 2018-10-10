class Base {
    
    generateId(length) {
        return Math.random().toString(36).substring(length)
    }

    capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    
}

module.exports = Base;