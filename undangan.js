import './undangan.css';
import utama from './img/utama.jpg';
export default function undangan(){
	const lebarLayar = window.innerWidth;
	
	return(
	
		<>
		<p>{lebarLayar}</p>
       <div className='kotak_belakang'>
			<div className='cover'>
				
				<nav>
					<a href={'#'}>Profil</a>
					<a href={'#'}>Galeries</a>
					<p className='inisial_pasangan'>S/R</p>
						
					<a href={'#'}>Location</a>
					<a href={'#'}>Wishes</a>
				</nav>
				<div className='nama_pasangan_waktu'>

					<p className='nama_pasangan'>Steve & Regina</p>
					<div className='waktu'>
						<div className='sisa_hari'>
							<p>Remaining days</p>	
							<p>7 Days 07:07:07</p>
						</div>
						<div className='tanggal_nikah'>
							<p>Wedding Date</p>
							<p>15.11.22</p>
						</div>
					</div>
				</div>
				<div className='img_utama'>
					<img src={utama} />
				</div>
			</div>
            
		</div>
		</>
	)       
}

//export default undangan;
