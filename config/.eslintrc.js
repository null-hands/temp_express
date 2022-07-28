module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
    node: true
  },
  globals: {
    AMap: true,
    Cesium: true,
    layer: true,
    $: true,
    turf: true
  },
  extends: [
    "plugin:vue/essential", //继承 vue 的标准特性
    "eslint:recommended",
    "plugin:prettier/recommended" //避免与prettier冲突 recommended 推荐；
  ],
  parserOptions: {
    ecmaVersion: 2016,
    sourceType: "module",
    parser: "babel-eslint"
  },
  rules: {
    "vue/max-attributes-per-line": [
      2,
      {
        singleline: { max: 5 },
        multiline: { max: 5 }
      }
    ],
    "vue/singleline-html-element-content-newline": 0,
    "vue/multiline-html-element-content-newline": 0,
    "vue/name-property-casing": ["error", "PascalCase"],
    "vue/multi-word-component-names": 0, //组件名多个单词
    "vue/no-v-html": "off", // 禁用v-html
    "accessor-pairs": 2,
    "arrow-spacing": 2,
    "block-spacing": [2, "always"],
    camelcase: 0, // 强制使用骆驼拼写法命名约定
    semi: [2, "always"], //末尾加分号
    quotes: [
      0,
      "single",
      {
        avoidEscape: true
      }
    ],
    "no-debugger": 0,
    // 禁止没使用的变量
    "no-unused-vars": 2,
    // 避免使用不必要的括号
    "no-extra-parens": 1,
    // 禁用行尾分号
    "no-extra-semi": 2,
    // 禁用行尾空格
    "no-trailing-spaces": 2,
    // 对象中禁止出现重复的key
    "no-dupe-keys": 2,
    // 强制对象赋值引用使用点形式
    "dot-notation": 2,
    // 禁止对 String，Number 和 Boolean 使用 new 操作符
    "no-new-wrappers": 2,
    // 自我赋值
    "no-self-assign": 1,
    // 数组使用一致的空格
    "array-bracket-spacing": 1,
    // 强制把变量的使用限制在其定义的作用域范围内
    "block-scoped-var": 2,
    // 强制使用let或const 不能使用var
    "no-var": 2,
    // 要求对象字面量简写语法
    "object-shorthand": 1,
    // 强制一行的最大长度
    "max-len": [0, 100],
    // 强制 function 块最多允许的的语句数量
    "max-statements": [1, 200],
    // 强制回调函数最大嵌套深度 5层
    "max-nested-callbacks": [1, 5],
    // 控制逗号前后的空格
    "comma-spacing": [
      "error",
      {
        before: false,
        after: true
      }
    ],
    "arrow-body-style": 0,
    // 要求箭头函数的参数使用圆括号
    "arrow-parens": [0, "as-needed"], //always | as-needed(可以省略的地方强制不使用)
    // 禁止重新声明变量
    "no-redeclare": 2,
    // if return之后没必要使用else
    "no-else-return": 1,
    // 禁止使用弱等于
    eqeqeq: 0,
    // 'comma-dangle': ['error', 'always'],
    // 花开括号样式
    "brace-style": [
      "error",
      "1tbs",
      {
        allowSingleLine: true
      }
    ],
    "callback-return": 2,
    "computed-property-spacing": [2, "never"],
    "dot-location": [2, "property"],
    // 此处关闭prettier的规则提示
    // prettier 主要用于格式化，无需给出提示，否则在规则与eslint冲突情况下无法处理
    "prettier/prettier": "off"
  }
};
