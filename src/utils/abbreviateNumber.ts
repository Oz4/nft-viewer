
export const abbreviateNumber = (value: number | string | null = 0) => {

    if (!value) return value

    if (typeof value === "string") value = parseFloat(value)

    return Intl.NumberFormat('en', { notation: 'compact' }).format(value)

}