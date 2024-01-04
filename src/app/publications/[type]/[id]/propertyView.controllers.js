import { usePathname } from "next/navigation"

export const propertyViewControllers = () => {
    const path = usePathname()

    const isRent = path.includes('alquiler')
    const isSale = path.includes('venta')
    const isTemporal = path.includes('temporal')

    return {
        isRent,
        isSale,
        isTemporal
    }
}