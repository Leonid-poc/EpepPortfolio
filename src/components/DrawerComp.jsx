import { useState } from 'react'
import {MenuOutlined} from '@ant-design/icons';
import { Drawer } from 'antd';
import './drawerComp.scss';

const DrawerComp = () => {
	const [open, setOpen] = useState(false);
	const showDrawer = () => {
		setOpen(true);
	};
  	const onClose = () => {
		setOpen(false);
	};
	return (
		<>
			<MenuOutlined className='MenuIcon' onClick={showDrawer}/>
			<Drawer onClose={onClose}  open={open} placement='left' style={{backgroundColor: "#FF0000"}}>
				<ul className="drawer">
                    <li><a href="#">home</a></li>
                    <li><a href="#about">about</a></li>
                    <li><a href="#tokenomics">tokenomics</a></li>
                    <li><a href="#roadmap">roadmap</a></li>
                    <li><a href="#buy" className='linkBut'>buy now</a></li>
                </ul>
			</Drawer>
		</>
	)
}

export default DrawerComp;