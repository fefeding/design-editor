const resolve = require('@rollup/plugin-node-resolve');
const babel = require('rollup-plugin-babel');
//const sourcemaps = require('rollup-plugin-sourcemaps');
const commonjs = require('@rollup/plugin-commonjs');
const typescript = require('rollup-plugin-typescript2');

module.exports = {
    input: './src/index.ts',
    output: {
      file: 'dist/index.es.js',
      /**
       * amd – 异步模块定义，用于像RequireJS这样的模块加载器
      cjs – CommonJS，适用于 Node 和 Browserify/Webpack
      esm – 将软件包保存为 ES 模块文件，在现代浏览器中可以通过 <script type=module> 标签引入
      iife – 一个自动执行的功能，适合作为<script>标签。（如果要为应用程序创建一个捆绑包，您可能想要使用它，因为它会使文件大小变小。）
      umd – 通用模块定义，以amd，cjs 和 iife 为一体
      system - SystemJS 加载器格式
       */
      format: 'es'
    },
    watch: {
      include: 'src/**' // 只编译我们的源代码
    },
    plugins: [
      //sourcemaps(),
      resolve({
        browser: true,
        preferBuiltins: false
      }),
      typescript({
        tsconfig: './tsconfig.json',
        tsconfigOverride: {
          files: null,
          compilerOptions: {
            module: 'ESNext',
            declaration: true,
          },
        },
      }),
      commonjs(),
      /*babel({
        presets: ['@babel/preset-env'],  
        exclude: 'node_modules/**' // 只编译我们的源代码
      }),*/
    ]
  };