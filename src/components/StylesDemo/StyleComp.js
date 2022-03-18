//can be styles in multiple ways 
//1.CSS StyleSheets
//2.Inline Styling
//3.CSS Modules - available above major version 2
//4.CSS in JS libs
//for using multiple class for a tag, className={ "classname1 classname2"}
import React from 'react'
import './styles.css'
import ModuleStyles from './styles.module.css'

//1.CSS StyleSheets
//CSS StylesSheets way
// function StyleComp() {
// 	return (
// 		<div>
// 			<h1 className={"colors sizes"}>this is for styling demo</h1>
// 		</div>
// 	)
// }

// export default StyleComp


//2.Inline Styling
//inline styling
// const style = {
// 	color: "red",
// 	fontStyle: "italic"
// }

// function StyleComp() {
// 	return (
// 		<div>
// 			<h1 style={style}>this is for styling demo</h1>
// 		</div>
// 	)
// }

// export default StyleComp


//3.CSS Modules - available above major version 2, the modules are globally scoped
function StyleComp() {
	return (
		<div>
			<h1 className={ModuleStyles.colors}>this is for styling demo</h1>
		</div>
	)
}

export default StyleComp


