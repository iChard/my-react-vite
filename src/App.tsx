import React, { useState } from 'react';

import classes, { themeColor } from './Comp.module.scss';
import data from './data.json';
import logo from './logo.svg?url';

function App() {
	const [count, setCount] = useState(0)
	function printModules() {
		const modules  = import.meta.glob('./modules/*.ts')
		console.log('modules:', modules);

		for(const path in modules) {
			modules[path]().then(mod => {
				console.log('path:', path, '-mod:', mod);
			})
		}
	}
	function printModulesEager() {
		const modulesEager  = import.meta.globEager('./modules/*.ts')
		console.log('modulesEage1r:',modulesEager);
		// for(const path in modulesEager) {
		// 	modulesEager[path]().then(mod => {
		// 		console.log('path:', path, '-mod:', mod);
		// 	})
		// }
		
		console.log(data);
	}
	return (
		<div className={classes.app}>
			<header className={classes.appHeader}>
				<img src={logo} className={classes.appLogo} alt="logo" />
				<p>Hello Vite + React!</p>
				<p>
					<button onClick={() => setCount((count) => count + 1)}>
						count is: {count}11
					</button>1
				</p>
				<p>
					Edit <code>App.tsx</code> and save to test HMR updates.
        		</p>
				<p>
					<a
						className={classes.appLink}
						href="https://reactjs.org"
						target="_blank"
						rel="noopener noreferrer"
					>
						Learn React452
          			</a>
					{'  | '}
					<a
						className={classes.appLink}
						href="https://vitejs.dev/guide/features.html"
						target="_blank"
						rel="noopener noreferrer"
					>
						Vite Docs
          			</a>
				</p>
				<button onClick={printModules}>Print Modules glob</button>
				<button onClick={printModulesEager}>Print Modules globEager</button>
				<div className={themeColor}>1</div>
			</header>
		</div>
	)
}

export default App
