
const rollup = require('rollup');
const rollupOptions = require('./rollup.config.js');

/**
 * format
	amd – 异步模块定义，用于像RequireJS这样的模块加载器
	cjs – CommonJS，适用于 Node 和 Browserify/Webpack
	esm – 将软件包保存为 ES 模块文件，在现代浏览器中可以通过 <script type=module> 标签引入
	iife – 一个自动执行的功能，适合作为<script>标签。（如果要为应用程序创建一个捆绑包，您可能想要使用它，因为它会使文件大小变小。）
	umd – 通用模块定义，以amd，cjs 和 iife 为一体
	system - SystemJS 加载器格式
*/
async function build(format = 'es') {
	
	const outputOptions = Object.assign(rollupOptions.output, {
		file: `./dist/index.${format}.js`,
		format
	});

	const bundle = await rollup.rollup({
		...rollupOptions,
		output: outputOptions
	});

	const { code, map } = await bundle.generate(rollupOptions.output);

	await bundle.write(outputOptions);
}

async function watch(format = 'es') {
	const outputOptions = Object.assign(rollupOptions.output, {
		file: `./dist/index.${format}.js`,
		format
	});
	
	const watcher = await rollup.watch({
		...rollupOptions,
		output: outputOptions
	});

	// 这将确保在每次运行后正确关闭打包
	watcher.on('event', (event) => {
		console.log('event', event);
		if (event.result) {
			event.result.close();
		}
	});
	
	// 此外，你可以挂钩以下内容。
	// 同样，返回 Promise 以使 Rollup 在该阶段等待：
	watcher.on('change', (id, { event }) => { 
		console.log('change', id, event);
		build(format);
	 })
	watcher.on('restart', () => { 
		
	})
	watcher.on('close', () => { 
		
	 })
}
	
build('es');

module.exports = {
	watch
}