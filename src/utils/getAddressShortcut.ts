
/**
 * @description convert an address to the first 6 Hex values of the address
 * @example 0x123456ebcd... -> 123456
 * @param address hex address
 */
export const getAddressShortcut = (address: string): string => {
    if(!address) return address
    return address.slice(2, 8)
}