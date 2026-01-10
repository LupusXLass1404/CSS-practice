module.exports = {
    plugins: ['stylelint-order'],
    rules: {
        'order/properties-order': [
            [
                {
                    groupName: 'Positioning',
                    emptyLineBefore: 'always',
                    properties: [
                        'position',
                        'top',
                        'right',
                        'bottom',
                        'left',
                        'z-index'
                    ]
                },
                {
                    groupName: 'Layout',
                    emptyLineBefore: 'always',
                    properties: [
                        'display',
                        'flex',
                        'flex-direction',
                        'justify-content',
                        'align-items',
                        'box-sizing'
                    ]
                },
                {
                    groupName: 'Box Model',
                    emptyLineBefore: 'always',
                    properties: [
                        'width',
                        'height',
                        'margin',
                        'padding',
                        'border',
                        'border-radius'
                    ]
                },
                {
                    groupName: 'Typography',
                    emptyLineBefore: 'always',
                    properties: [
                        'font',
                        'font-size',
                        'font-weight',
                        'line-height',
                        'text-align',
                        'color'
                    ]
                },
                {
                    groupName: 'Visual',
                    emptyLineBefore: 'always',
                    properties: [
                        'background',
                        'background-color'
                    ]
                }
            ],
            { unspecified: 'bottom' }
        ]
    }
}
