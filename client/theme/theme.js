// 1. import `extendTheme` function
import { extendTheme } from '@chakra-ui/react'

const config = {
    initialColorMode: 'system',
    useSystemColorMode: true
}

const colors = {
    brand: {
        100: "#f7fafc",
        // ...
        900: "#00ff00",
    },
}

// 3. extend the theme
const theme = extendTheme({ config, colors })

export default theme