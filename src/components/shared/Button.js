import React from 'react'
import '../layout/styles/Button.css'
export const Button = ({ onClick, className, color, title, variant }) => (
	<button
		onClick={onClick}
		className={`button ${className} ${variant} ${color}`}>
		{title}
	</button>
)