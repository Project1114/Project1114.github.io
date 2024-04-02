class Header extends HTMLElement {
	constructor() {
	  super();
	}

	connectedCallback() {
		this.innerHTML = `
			<style>
				a.head:link {
					color: white;
				}
				a.head:visited {
					color: white;
				}
				a.head:hover {
					color: white;
				}
				a.head:active {
					color: white;
				}
				
				ul.head {
					list-style-type: none;
					display: inline-block;
					margin: 0;
					padding: 0;
					overflow: hidden;
					border-radius: 10px;
					background-color: rgba(0,18,36,1);
				}
				
				li.head {
					float: left;
				}
				
				li a.head, .dropbtn {
					display: inline-block;
					color: white;
					text-align: center;
					padding: 14px 16px;
					text-decoration: none;
				}
				
				li a.head:hover, .dropdown:hover .dropbtn {
					background-color: rgba(0,54,108,1);
				}
				
				li.dropdown {
					display: inline-block;
					float: left;
				}
				
				.dropdown-content {
					display: none;
					position: absolute;
					background-color: rgba(0,54,108,0.8);
					min-width: 160px;
					box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
					z-index: 1;
				}
				
				.dropdown-content a {
					color: white;
					padding: 12px 16px;
					text-decoration: none;
					display: block;
					text-align: left;
				}
				
				.dropdown-content a:hover {background-color: rgba(0,127,255,0.5);}
				
				.dropdown:hover .dropdown-content {
					display: block;
				}
			
			</style>
			
			<header>
			<img 
				src="/banner.png"
				alt="Banner"
				style="width:100%;max-width:1024px;border-radius: 25px;"
				class="center"
			>
			
			<div style="text-align: center; margin: 1em 1em">
				<ul class="head">
					<li class="head"><a class="head" href="/about.html">About</a></li>
					<li class="dropdown">
						<a class="head" href="javascript:void(0)" class="dropbtn">ROM Hacks</a>
						<div class="dropdown-content">
							<a href="/romhacks/sid-1.html">South Island Definitive</a>
							<a href="/romhacks/shima-1.html">Isle of Magnetic Artifacts</a>
							<a href="/romhacks/sng-1.html">Next Genesis</a>
							<a href="/romhacks/vts1-1.html">VTuber in Sonic 1</a>
							<a href="/romhacks/other-1.html">Others</a>
						</div>
					</li>
					<li class="dropdown">
						<a class="head" href="javascript:void(0)" class="dropbtn">Music</a>
						<div class="dropdown-content">
							<a href="/music/originals-1.html">Originals</a>
							<a href="/music/soundtracks-1.html">Soundtracks</a>
							<a href="/music/remixes-1.html">Remixes</a>
						</div>
					</li>
					<li class="dropdown">
						<a class="head" href="javascript:void(0)" class="dropbtn">Art</a>
						<div class="dropdown-content">
							<a href="#3-static-1">Static</a>
							<a href="#3-motion-1">Motion</a>
						</div>
					</li>
					<li class="dropdown">
						<a class="head" href="javascript:void(0)" class="dropbtn">Engineering</a>
						<div class="dropdown-content">
							<a href="#4-synth-1">Analog Synthesizer</a>
						</div>
					</li>
					<li class="dropdown">
						<a class="head" href="javascript:void(0)" class="dropbtn">Other</a>
						<div class="dropdown-content">
							<a href="/other/8bdmskin.html">Mega Man 8-Bit Deathmatch Skin</a>
							<a href="#5-hackdatabase-1">Sonic Hack Database</a>
							<a href="#5-samplesource-1">Sample Source Spreadsheet</a>
						</div>
					</li>
					<li class="dropdown">
						<a class="head" href="javascript:void(0)" class="dropbtn">Links</a>
						<div class="dropdown-content">
							<a href="https://bandcamp.com/project1114">Bandcamp</a>
							<a href="https://bsky.app/profile/projectfm.bsky.social">BlueSky</a>
							<!--<a href="https://www.patreon.com/projectfm">Patreon</a>-->
							<a href="https://www.reddit.com/user/Project1114">Reddit</a>
							<a href="https://soundcloud.com/felix-morrissey">Soundcloud</a>
							<a href="https://twitter.com/Pr0jectFM">Twitter</a>
							<a href="https://youtube.com/@Pr0jectFM?si=hetxh9MKy3JqHtcS">YouTube</a>
						</div>
					</li>
				</ul>
			</div>
			</header>
		`;
	}
}

customElements.define('header-component', Header);