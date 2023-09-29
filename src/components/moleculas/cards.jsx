import React from 'react'
import Cards from '../atomos/card'
import styled from 'styled-components'
function cards() {
  return (
	<>
	<Cartas>
		
	<Cards
	id="1"
	title="fortnite"
	img="https://th.bing.com/th/id/OIP.NKG8hq_8k2mAjKi3FAsBygHaK8?pid=ImgDet&rs=1"
	precio="gratis"
	/>
	
	<Cards
	id="2"
	title="gears"
	img="https://th.bing.com/th/id/R.e780d02b2cebc9292f36b134a57dcb47?rik=MhNH8NgSBAFKug&riu=http%3a%2f%2fwww.hdwallpapers.in%2fwalls%2f2011_gears_of_war_3-wide.jpg&ehk=yPDxmhVrqEzI8Wz55alrF6%2bbaNtNyMvgyPwDLWcT1%2fA%3d&risl=&pid=ImgRaw&r=0"
	precio="gratis"
	/>
	
	<Cards
	id="3"
	title="halo"
	img="https://th.bing.com/th/id/OIP.KVtUDLoX1DgAzxGOGRa34gHaEK?pid=ImgDet&rs=1"
	precio="gratis"
	/>
	
	<Cards
	id="4"
	title="minecraft"
	img="https://th.bing.com/th/id/OIP.kn1AlgKn-uqCGShSwRbwNwHaDj?pid=ImgDet&rs=1"
	precio="$500"
	/>
	<Cards
	id="5"
	title="cs:go"
	img="https://th.bing.com/th/id/R.2ed31021e54a7309fcb8608f2e84c056?rik=mdcN4WJMT%2fDiOg&pid=ImgRaw&r=0'"
	precio="gratis"
	/>
	<Cards
	id="5"
	title="cs:go"
	img="https://th.bing.com/th/id/R.2ed31021e54a7309fcb8608f2e84c056?rik=mdcN4WJMT%2fDiOg&pid=ImgRaw&r=0'"
	precio="gratis"
	/>
	<Cards
	id="5"
	title="cs:go"
	img="https://th.bing.com/th/id/R.2ed31021e54a7309fcb8608f2e84c056?rik=mdcN4WJMT%2fDiOg&pid=ImgRaw&r=0'"
	precio="gratis"
	/>
	</Cartas>

	
	
	
	</>
  )
}

export default cards

const Cartas =styled.div`

display: flex;
flex-wrap: wrap;
position: absolute;

`;