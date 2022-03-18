import React from 'react'


//if the list item is complicated then it can be considered as a different comp and then the data can be passed as props to it
//each item in a list must have a unique "key prop", it can be id of the item from DB or can be anything which is unique for each items
//key prop is reserved, it is used for effecient rendering of list, cannot be passed on to child comp
//key place a crucial rule in modification of list, instead of re rendering the entire list, it update the list if there is any change
//react matches the key of original list with children in a new tree
//key should be unique
//using index can sometimes could be an issue, index can be used if your  
//1.list dont have an unique id,
//2.list is static list and will not change
//3. list will never be recorded or filtered 
function ListComp() {
	const lstItems = [100,200,90,34]
	const renderLst = lstItems.map((ele, index) => <li key={index}>{ele}</li>)
	return (
		<div>
			<ul>{renderLst}</ul>
		</div>
	)
}

export default ListComp
