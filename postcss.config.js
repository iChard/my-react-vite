module.exports = (ctx) => {
    return /**@type {import('postcss').ProcessOptions} */({
        plugins: {
            'postcss-sorting': {
                'order': [
                    'custom-properties',
                    'dollar-variables',
                    'declarations',
                    'at-rules',
                    'rules'
                ],
                'properties-order': 'alphabetical',
                'unspecified-properties-position': 'bottom'
            }
        }
    })
}