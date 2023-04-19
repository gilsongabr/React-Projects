export const VerificarTipo = (tipo) => {
    if (tipo && tipo === 'number')
        return 'number'
    if (tipo && tipo === 'date')
        return 'date'
    return 'text'
}