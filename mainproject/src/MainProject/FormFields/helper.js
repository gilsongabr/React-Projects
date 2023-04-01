export const disableForm = () => {
    return true
}
export const fieldTypeIsNumber = (verify) => {
    if (verify || verify === undefined){
        return 'number'
    }
    return false
}

export const fieldDisabled = (verify) => {
    if (verify || verify === undefined){
        return 'disabled'
    }
    return false
}

export const teste = () => {
    console.log('teste')
}