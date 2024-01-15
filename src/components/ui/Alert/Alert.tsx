import { ReactNode } from 'react';
import './index.scss'
import {X} from 'lucide-react';
import { AlertTypes } from '../../../types';

interface IProps{
	type:AlertTypes
	icon:ReactNode
	title:string
	descrption?:string
	children?:ReactNode
}

const Alert=({type="alert-danger",icon,title,descrption,children}:IProps)=>{
	return (
		<div className={type}>
			<div className='alert-header'>
				<div className='title'><span>{icon}</span><h4 style={{marginLeft:10}}>{title}</h4></div>
			 <X className='close' />
				 </div>
			<div>
				{children?children:<p>{descrption}</p>}
			</div>
				
			
			
		</div>
	)
}
export default Alert;