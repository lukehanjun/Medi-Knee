import React from 'react'
import './MeniscusResultsCoronal.css'
import ImgAsset from '../public'
import {Link} from 'react-router-dom'
export default function MeniscusResultsCoronal () {
	return (
		<div className='MeniscusResultsCoronal_MeniscusResultsCoronal'>
			<img className='background' src = {ImgAsset.InputScreen_background} />
			<img className='logo' src = {ImgAsset.LoadingScreen_logo} />
			<div className='Coronal'>
				<img className='Rectangle1' src = {ImgAsset.MeniscusResultsCoronal_Rectangle1} />
				<span className='GradCAM'>Grad-CAM</span>
			</div>
			<div className='OuterButtons'>
				<Link to='/abnormalresultscoronal'>
					<div className='Axial'>
						<img className='Rectangle1_1' src = {ImgAsset.MeniscusResultsCoronal_Rectangle1_1} />
						<span className='Abnormal'>Abnormal</span>
					</div>
				</Link>
				<Link to='/aclresultscoronal'>
					<div className='ACLButton'>
						<img className='Rectangle1_2' src = {ImgAsset.MeniscusResultsCoronal_Rectangle1_2} />
						<span className='ACL'>ACL</span>
					</div>
				</Link>
				<div className='MeniscusButton'>
					<img className='Rectangle1_3' src = {ImgAsset.MeniscusResultsCoronal_Rectangle1_3} />
					<span className='Meniscus'>Meniscus</span>
				</div>
				<Link to='/totalresults'>
					<div className='TotalButton'>
						<img className='Rectangle1_4' src = {ImgAsset.MeniscusResultsCoronal_Rectangle1_4} />
						<span className='Total'>Total</span>
					</div>
				</Link>
			</div>
			<img className='Overlay' src = {ImgAsset.MeniscusResultsCoronal_Overlay} />
			<img className='PlayButton' src = {ImgAsset.MeniscusResultsCoronal_PlayButton} />
			<div className='PauseButton'>
				<div className='Rectangle6'/>
				<div className='Rectangle7'/>
			</div>
			<span className='ImageText'>Image # 37</span>
			<div className='GradCamButton'>
				<img className='Rectangle1_5' src = {ImgAsset.MeniscusResultsCoronal_Rectangle1_5} />
				<span className='GradCAM_1'>Grad-CAM</span>
			</div>
			<div className='InnerButtons'>
				<div className='CoronalButton'>
					<img className='Rectangle1_6' src = {ImgAsset.MeniscusResultsCoronal_Rectangle1_6} />
					<span className='Coronal_1'>Coronal</span>
				</div>
				<Link to='/meniscusresultsaxial'>
					<div className='AxialButton'>
						<img className='Rectangle1_7' src = {ImgAsset.MeniscusResultsCoronal_Rectangle1_7} />
						<span className='Axial_1'>Axial</span>
					</div>
				</Link>
				<Link to='/meniscusresultssagittal'>
					<div className='SagittalButton'>
						<img className='Rectangle1_8' src = {ImgAsset.MeniscusResultsCoronal_Rectangle1_8} />
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