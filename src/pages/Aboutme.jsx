import React from 'react'
import img from "../assets/MK.jpg"
import "./Aboutme.css"
function Aboutme() {
  return (
		<div className="aboutMeContainer">
			<section>
				<img src={img} className="bioImg" alt="about me image" />
			</section>
			<section>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
					ipsa nostrum magnam sint, ea doloribus, blanditiis molestias modi
					dolorum consequuntur illum? Autem laudantium eum similique temporibus,
					porro magnam omnis msu!Lorem ipsum dolor amet mustache knausgaard +1,
					blue bottle waistcoat tbh semiotics artisan synth stumptown gastropub
					cornhole celiac swag. Brunch raclette vexillologist post-ironic
					glossier ennui XOXO mlkshk godard pour-over blog tumblr humblebrag.
					Blue bottle put a bird on it twee prism biodiesel brooklyn. Blue
					bottle ennui tbh succulents.Zombie ipsum reversus ab viral inferno,
					nam rick grimes malum cerebro. De carne lumbering animata corpora
					quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi
					gorger omero undead survivor dictum mauris. Hi mindless mortuis
					soulless creaturas, imo evil stalking monstra adventus resi dentevil
					vultus comedat cerebella viventium.Bacon ipsum dolor amet short ribs
					brisket venison rump drumstick pig sausage prosciutto chicken spare
					ribs salami picanha doner. Kevin capicola sausage, buffalo bresaola
					venison turkey shoulder picanha ham pork tri-tip meatball meatloaf
					ribeye. Doner spare ribs andouille bacon sausage. Ground round jerky
					brisket pastrami shank.
				</p>
			</section>
		</div>
	);
}

export default Aboutme