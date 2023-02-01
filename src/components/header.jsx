export const Header = (props) => {
	return (
		<header id='header'>
			<div className='intro'>
				<div className='overlay'>
					<div className='container'>
						<div className='row'>
							<div className='col-md-8 col-md-offset-2 intro-text'>
								<h3>
									{props.data ? props.data.title : 'Loading'}
									<span></span>
								</h3>
								<a
									target='_blank'
									rel='noopener noreferrer'
									href='/'
									className='btn btn-custom btn-lg page-scroll'
									onClick={(e) => e.preventDefault()}>
									<img
										src='img/playstore.png'
										style={{
											width: '2rem',
											height: '2rem',
											marginRight: '1rem'
										}}
										alt=''
									/>
									Download
								</a>{' '}
							</div>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
};
