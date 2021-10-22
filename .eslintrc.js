module.exports = {
	'root': true,
	'env': {
		'browser': true,
		'es6': true
	},
	'extends': [
		'eslint:recommended',
		'plugin:vue/essential'
	],
	'globals': {
		'Atomics': 'readonly',
		'SharedArrayBuffer': 'readonly',
		'window': true,
		'document': true,
		'App': true,
		'Page': true,
		'Component': true,
		'Behavior': true,
		'wx': true,
		'getCurrentPages': true,
		'TcPlayer': true
	},
	'parserOptions': {
		'ecmaVersion': 2018,
		'sourceType': 'module'
	},
	'plugins': [
		'vue'
	],
	'rules': {
		'id-match': 2, // 命名检测
		'no-prototype-builtins': 0,
		'no-eval': 2, // 禁止使用eval
		'max-depth': [0, 4], // 嵌套块深度
		'prefer-spread': 2, // 首选展开运算
		'no-console': 0, // 禁止使用console
		'no-undef': 0, // 禁止使用未定义变量
		'no-empty': 2, // 禁止块语句中空内容
		'quotes': [2, 'single'], // 引号类型
		'no-extra-semi': 2, // 禁止多余的冒号
		'no-redeclare': 2, // 禁止重复声明变量
		'no-dupe-args': 2, // 禁止函数参数重复
		'no-multi-spaces': 2, // 禁止多余的空格
		'no-dupe-keys': 2, // 禁止创建对象键重复
		'vars-on-top': 0, // var必须放在作用域顶部
		'no-extra-parens': 2, // 禁止非必要的括号
		'no-func-assign': 2, // 禁止重复的函数声明
		'consistent-this': [2, 'that'], // this别名
		'no-unreachable': 2, // 不能有无法执行的代码
		'no-unneeded-ternary': 2, // 禁止不必要的嵌套
		'linebreak-style': [0, 'windows'], // 换行风格
		'no-invalid-regexp': 2, // 禁止无效的正则表达式
		'no-alert': 2, // 禁止使用alert/confirm/prompt
		'no-unused-expressions': 2, // 禁止无用的表达式
		'no-const-assign': 2, // 禁止修改const声明的变量
		'no-constant-condition': 2, // 禁止在条件中使用常量表达式
		'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off', // allow debugger during development
		'array-bracket-spacing': [2, 'never'], //是否允许非空数组里面有多余的空格
		'quote-props': [0, 'always'], //对象字面量中的属性名是否强制双引号
		'indent': [2, 'tab'], // 缩进风格
		'no-else-return': 2, // 禁止 if 语句中 return 语句之后有 else 块
		'prefer-arrow-callback': 2, // 要求回调函数使用箭头函数
		'semi': [2, 'never'], // 是否使用分号, 默认true
		"sort-vars": 2, // 变量声明时排序
		'vue/name-property-casing': [2, 'PascalCase'], // 组件name属性强制驼峰命名
		'accessor-pairs': 2, // 创建一个只有属性 setter 的对象是一个常见的错误
		'block-spacing': [2, 'always'], // 代码块空格
		'comma-dangle': [2, 'never'], // 对象最后一个属性逗号
		'comma-style': [2, 'last'], // 逗号风格
		'dot-location': [2, 'property'], // 属性点的位置
		'eol-last': 2, // 非空文件的末尾至少执行一个换行符
		"semi-spacing": 2, // 分号前后空格
		'new-parens': 2, // new 实例不允许省略括号
		'no-class-assign': 2, // 不允许修改class变量
		'no-cond-assign': 2, // 条件语句中不允许使用赋值
		'no-dupe-class-members': 2, // 类成员中有不允许相同名称
		'no-duplicate-case': 2, // 不允许在switch case子句中重复的表达式
		'no-empty-character-class': 2, // 不允许在正则表达式中使用空字符类
		'no-ex-assign': 2, // 不允许在catch子句中重新分配
		'no-extra-bind': 2, // 避免不必要的使用bind()
		'no-extra-boolean-cast': 2, // 禁止不必要的布尔转换
		'no-fallthrough': 2, // 避免switch语句中丢失break
		'no-floating-decimal': 2, // 避免小数前面缺少数字
		'no-implied-eval': 2, // 避免函数与字符串一起用作参数
		'no-invalid-this': 2, // 包含this关键字的函数是构造函数还是方法
		'no-label-var': 2, // 禁止创建与范围内的变量共享名称
		'no-lonely-if': 2, // 不允许将if语句作为else块中的唯一语句
		'no-mixed-spaces-and-tabs': 2, // 不允许使用混合空格和制表符进行缩进
		'no-multi-str': 2, // 避免使用多行字符串
		'no-global-assign': 2, // 不允许修改只读全局变量
		'no-negated-in-lhs': 2, // 不允许否定in表达式中的左操作数
		'no-new-object': 2, // 不允许使用Object构造函数
		'no-new-require': 2, // 避免new require()表达的使用
		'no-new-symbol': 2, // 防止Symbol与new操作员的意外呼叫
		'no-new-wrappers': 2, // 杜绝使用String，Number以及Boolean与new操作
		"no-new-func": 1, // 禁止使用new Function
		'no-obj-calls': 2, // 不允许调用Math，JSON和Reflect对象作为功能
		'no-octal': 2, // 不允许使用八进制文字
		'no-octal-escape': 2, // 不允许字符串文字中的八进制转义序列
		'no-regex-spaces': 2, // 正则表达式文字中不允许有多个空格
		'no-return-assign': [2, 'except-parens'], // return语句中不能有赋值表达式
		'no-self-assign': 2, // 避免自我分配
		'no-self-compare': 2, // 几乎没有任何情况需要将某些事情与自身进行比较
		'no-sequences': 2, // 禁止使用逗号运算符
		'no-shadow-restricted-names': 2, // 相同范围内使用的任何代码都不会得到全局的undefined
		'no-spaced-func': 2, // 不允许功能标识符与其应用程序之间的间距
		'no-sparse-arrays': 2, // 不允许稀疏数组文字，它们在逗号前没有元素
		'no-this-before-super': 2, // 检查this/ super关键字在构造函数，然后报告那些之前super()
		'no-throw-literal': 2, // 不允许抛出不可能是Error对象的文字
		'no-trailing-spaces': 2, // 不允许在行尾添加尾随空白
		'no-undef-init': 2, // 避免初始化为的变量声明undefined
		'no-unexpected-multiline': 2, // 不允许混淆多行表达式
		'no-unmodified-loop-condition': 2, // 避免循环中的变量修改
		'no-unsafe-finally': 2, // 不允许语句finally块它允许间接使用
		'no-useless-computed-key': 2, // 禁止不必要地使用计算属性键
		'no-useless-constructor': 2, // 不改变类的工作方式的情况下安全地移除的类构造函数
		'no-whitespace-before-property': 2, // 不允许围绕点或在开头括号之前留出空白
		'no-array-constructor': 2, // 禁止使用数组构造器
		"no-caller": 2, // 禁止使用arguments.caller或arguments.callee
		"no-control-regex": 2, // 禁止在正则表达式中使用控制字符
		"no-irregular-whitespace": 2, // 不能有不规则的空格
		"no-lone-blocks": 2, // 禁止不必要的嵌套块
		"no-useless-call": 2, // 禁止不必要的call和apply
		"space-in-parens": [2, "never"], // 小括号里面要不要有空格
		"complexity": [0, 5], // 循环复杂度
		"object-shorthand": 2, // 强制对象字面量缩写语法
		'space-before-blocks': [2, 'always'], // 强化块之前的间距一致性
		'space-infix-ops': 2, // 确保中缀操作员周围有空间
		"spaced-comment": 2, // 注释风格要不要有空格什么的
		'use-isnan': 2, // 不允许比较NaN
		'yoda': [2, 'never'], // 强制执行一种将变量与文字值进行比较的一致条件样式
		'valid-typeof': 2, // 强制将typeof表达式与有效的字符串文字进行比较
		'template-curly-spacing': [2, 'never'], // 保持模板文字内部空间的一致性
		'wrap-iife': [2, 'any'], // 要求所有立即调用的函数表达式都包含在圆括号中
		'object-curly-spacing': [2, 'always', { // 对象文字的大括号内执行一致的间距
			objectsInObjects: false
		}],
		'no-unused-vars': [2, {
			'vars': 'all',
			'args': 'after-used'
		}], // 禁止声明后未使用的变量或参数
		'func-call-spacing': [ // @fixable 函数名和执行它的括号之间禁止有空格
			'error',
			'never'
		],
		'comma-spacing': [2, { // 对象属性前后空格
			'before': false,
			'after': true
		}],
		'arrow-spacing': [2, { // 箭头函数前后空格
			'before': true,
			'after': true
		}],
		'brace-style': [2, '1tbs', { // if else 风格
			'allowSingleLine': true
		}],
		'key-spacing': [2, { // key冒号后面空格
			'beforeColon': false,
			'afterColon': true
		}],
		'keyword-spacing': [2, { // 关键词前后空格
			'before': true,
			'after': true
		}],
		'new-cap': [2, { // 实例对象必须new并且首字母大写
			'newIsCap': true,
			'capIsNew': false
		}],
		'space-unary-ops': [2, { // 强化了words一元运算符之后和一元运算符之后的空间的一致性
			'words': true,
			'nonwords': false
		}],
		'no-multiple-empty-lines': [2, { // 避免超过最大空行数量
			'max': 1
		}],
		'no-labels': [2, { // 标签的语句以及每次break或continue使用标签时
			'allowLoop': false,
			'allowSwitch': false
		}],
		'operator-linebreak': [2, 'after', { // 实施一致的换行样式
			'overrides': {
			  '?': 'before',
			  ':': 'before'
			}
		}]
	}
};
