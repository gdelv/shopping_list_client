import React from 'react'
import { NavLink } from 'react-router-dom'
// import { Flex } from './layout'
const Nav = () => {
	return (
		<nav>
			<h2>Shopping List App</h2>
			{/* <Flex className='row center'> */}
				<NavLink exact to='/' activeClassName='active'>
					Home
				</NavLink>
				<NavLink exact to='/post' activeClassName='active'>
					Posts
				</NavLink>
				<NavLink exact to='/post/create' activeClassName='active'>
					Add A Post
				</NavLink>
			{/* </Flex> */}
		</nav>
	)
}

export default Nav