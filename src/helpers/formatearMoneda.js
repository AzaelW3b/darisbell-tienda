export const formatearMoneda = (moneda) => {
    const monedaFormat = new Intl.NumberFormat('en-US', {
        style: "currency",
        currency: "USD"
    })

    return monedaFormat.format(moneda)
}