export const getNumberWithThreeDigitsComma = (number: string | number) => {
    if (!number) return number
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

}