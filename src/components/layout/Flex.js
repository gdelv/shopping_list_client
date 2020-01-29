import React from 'react'
import './styles/Flex.css'
export const Flex = ({ className, children }) => (
	<div className={`flex ${className}`}>{children}</div>
)