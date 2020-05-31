module.exports = {
    extends: ['./rules/stylelint.js', './rules/standard.js'],
    plugins: ['stylelint-order'],
    rules: {
        'at-rule-name-space-after': 'always',
        'block-closing-brace-newline-before': 'always',
        'block-opening-brace-newline-after': 'always',
        'color-named': 'never',
        'declaration-block-no-redundant-longhand-properties': true,
        'declaration-colon-space-after': 'always-single-line',
        'font-family-no-missing-generic-family-keyword': null,
        'function-max-empty-lines': 0,
        'function-url-quotes': 'always',
        indentation: 4,
        'max-empty-lines': 1,
        'max-line-length': 150,
        'max-nesting-depth': 10,
        'media-query-list-comma-space-after': 'always',
        'no-descending-specificity': null,
        'no-duplicate-at-import-rules': null,
        'order/order': ['custom-properties', 'dollar-variables', 'at-variables', 'less-mixins', 'declarations', 'at-rules', 'rules'],
        'order/properties-alphabetical-order': true,
        'selector-attribute-quotes': 'always',
        'selector-no-qualifying-type': true,
        'selector-pseudo-class-no-unknown': [
            true,
            {
                ignorePseudoClasses: ['global', 'export', 'import', 'local'],
            },
        ],
        'selector-pseudo-class-parentheses-space-inside': 'never',
        'selector-pseudo-element-no-unknown': [
            true,
            {
                ignorePseudoElements: ['global', 'export', 'import', 'local'],
            },
        ],
        'shorthand-property-no-redundant-values': true,
        'string-quotes': 'single',
        'unit-blacklist': ['pt'],

        'value-keyword-case': 'lower',
    },
};
