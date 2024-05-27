<script>
	import lebotv from '$lib/assets/lebotv.png';
</script>

<div id="home">
	<header>
		<a class="logo" href="/"><img src={lebotv} alt="logo" width="64" height="64" /></a>
		<nav>
			<ul class="nav__links">
				<li><a href="/">home</a></li>
				<li><a href="games">Games</a></li>
			</ul>
		</nav>
		<input type="checkbox" id="hi" />
		<label class="menu" for="hi">
			<div class="bar"></div>
			<div class="bar"></div>
			<div class="bar"></div>
		</label>
	</header>
	<div class="overlay">
		<a class="close" href="/">&times;</a>
		<div class="overlay__content">
			<a href="index">Home</a>
			<a href="games">Games</a>
		</div>
	</div>
</div>
