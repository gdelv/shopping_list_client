import React from 'react'
// import { Flex } from '../layout'
import { Button } from '../components/shared/Button'

const Home = (props) => {
	const { history } = props
	return (
		<div className='home'>
			{/* <Flex className='col'> */}
				<h1>Shopping List App!</h1>
				<h3>See All the Posts!</h3>
				<Button
					title='View Posts'
					variant='primary'
					onClick={() => history.push('/post')}
				/>
			{/* </Flex> */}
		</div>
	)
}
export default Home