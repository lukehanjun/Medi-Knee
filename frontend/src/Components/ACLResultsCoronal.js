import React from 'react'
import './ACLResultsCoronal.css'
import ImgAsset from '../public'
import {Link} from 'react-router-dom'
export default function ACLResultsCoronal () {
	return (
		<div className='ACLResultsCoronal_ACLResultsCoronal'>
			<img className='background' src = {ImgAsset.background} />
			<img className='logo' src = {ImgAsset.logo} />
			{/* <div className='Coronal'>
				<img className='Rectangle1' src = {ImgAsset.ACLResultsCoronal_Rectangle1} />
				<span className='GradCAM'>Grad-CAM</span>
			</div> */}
			<div className='OuterButtons'>
				<Link to='/abnormalresultscoronal'>
					<div className='AbnormalButton'>
						<img className='Rectangle1_1' src = {ImgAsset.whiterectangle} />
						<span className='Abnormal'>Abnormal</span>
					</div>
				</Link>
				<div className='ACLButton'>
					<img className='Rectangle1_2' src = {ImgAsset.blackrectangle} />
					<span className='ACL'>ACL</span>
				</div>
				<Link to='/meniscusresultscoronal'>
					<div className='MeniscusButton'>
						<img className='Rectangle1_3' src = {ImgAsset.whiterectangle} />
						<span className='Meniscus'>Meniscus</span>
					</div>
				</Link>
				<Link to='/totalresults'>
					<div className='TotalButton'>
						<img className='Rectangle1_4' src = {ImgAsset.whiterectangle} />
						<span className='Total'>Total</span>
					</div>
				</Link>
			</div>
			<img className='Overlay' src = {ImgAsset.overlay2} />
			<img className='PlayButton' src = {ImgAsset.playbutton} />
			<div className='PauseButton'>
				<div className='Rectangle6'/>
				<div className='Rectangle7'/>
			</div>
			<span className='ImageText'>Image # 37</span>
			<div className='GradCamButton'>
				<img className='Rectangle1_5' src = {ImgAsset.blackrectangle} />
				<span className='GradCAM_1'>Grad-CAM</span>
			</div>
			<div className='InnerButtons'>
				<div className='CoronalButton'>
					<img className='Rectangle1_6' src = {ImgAsset.blackrectangle} />
					<span className='Coronal_1'>Coronal</span>
				</div>
				<Link to='/aclresultsaxial'>
					<div className='AxialButton'>
						<img className='Rectangle1_7' src = {ImgAsset.whiterectangle} />
						<span className='Axial'>Axial</span>
					</div>
				</Link>
				<Link to='/aclresultssagittal'>
					<div className='SagittalButton'>
						<img className='Rectangle1_8' src = {ImgAsset.whiterectangle} />
						<span className='Sagittal'>Sagittal</span>
					</div>
				</Link>
			</div>
			<div className='Slider'>
				<div className='SliderBox'/>
				<span className='Slidergoeshere'>Slider goes here</span>
			</div>
			<div className='Graph'>
				<div className='GraphBox'/>
				<span className='Graphgoeshere'>Graph goes here</span>
			</div>
			<div className='Image'>
				<div className='Imagebox'/>
				<span className='ImageText_1'>Image goes here</span>
			</div>
		</div>
	)
}