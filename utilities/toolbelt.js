function cloneObject(originalObject) {
    return JSON.parse(JSON.stringify(originalObject))
}

export {cloneObject}