import React from 'react';
import './privacy.css';

function ShippingPolicy(props) {
	return (
		<div class='page'>
			<div class='header'>
				<div class='container'>
					<p class='title'>Shipping policy</p>
				</div>
			</div>
			<div class='translations-content-container'>
				<div class='container'>
					<div
						class='tab-content translations-content-item en visible'
						id='en'>
						<p>
                            As all courses offered on our app are digital products delivered 
                            electronically, there is no physical shipping involved. Upon successful 
                            purchase, you will receive immediate access to your chosen course(s) contents 
                            via Caco2 mobile applicatiob by logging into your registered account.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ShippingPolicy;