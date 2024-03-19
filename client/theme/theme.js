// 1. import `extendTheme` function
import { extendTheme } from '@chakra-ui/react'

import { mode } from '@chakra-ui/theme-tools'

const styles = {
    global: (props) => ({
        body: {
            fontFamily: 'body',
            color: mode('gray.800', 'whiteAlpha.900')(props),
            bg: mode(colors.light, colors.dark)(props),
            lineHeight: 'base',
        },
        '*::placeholder': {
            color: mode('gray.400', 'whiteAlpha.400')(props),
        },
        '*, *::before, &::after': {
            borderColor: mode('gray.200', 'whiteAlpha.300')(props),
            wordWrap: 'break-word',
        },
    }),
}

const colors = {
    light: '#F7FAFC',
    dark: '#1A202C',
    white: '#ffffff',
    customYellow: '#fcb42c',
    customOrange: "#f26635",
}

const config = {
    initialColorMode: 'system',
    useSystemColorMode: true
}

// 3. extend the theme
const theme = extendTheme({ config, colors, styles })

export default theme