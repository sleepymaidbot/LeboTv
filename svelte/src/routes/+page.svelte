<script>
	import * as Card from '$lib/components/ui/card/index';
	import * as Carousel from '$lib/components/ui/carousel/index';
	import lidarr from '$static/img/lidarr.png';

	const carousel = [
		{
			name: 'Lidarr',
			url: 'https://svip.sytes.net/lidarr',
			image: lidarr
		},
		{
			name: 'Radarr',
			url: 'https://svip.sytes.net/radarr',
			image: '$/static/img/radarr.svg'
		},
		{
			name: 'Emby',
			url: 'https://svip.sytes.net/emby',
			image: '$/static/img/notificationicon.png'
		},
		{
			name: 'Jellyseerr',
			url: 'http://svip.sytes.net:5055/login',
			image: 'https://cdn.discordapp.com/emojis/1229927921066442833.webp?size=80&quality=lossless'
		},
		{
			name: 'qBittorrent',
			url: 'http://svip.sytes.net:8080',
			image: '$/static/img/New_qBittorrent_Logo.svg'
		},
		{
			name: 'Jellyfin',
			url: 'https://svip.sytes.net:9443',
			image: '$/static/img/jellyfin.png'
		},
		{
			name: 'Sonarr',
			url: 'http://svip.sytes.net:5055/login',
			image: '$/static/img/sonarr.svg'
		}
	];
</script>

<div id="home">
	<header>
		<a class="logo" href="/"
			><img src="$/static/img/lebotv.png" alt="logo" width="64" height="64" /></a
		>
		<nav>
			<ul class="nav__links">
				<li><a href="index">home</a></li>
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
<main>
	<section>
		<div class="carousel__wrapper">
			<h1 class="carousel__header">Select your Service</h1>
		</div>
		<Carousel.Root
			opts={{
				align: 'start'
			}}
			class="w-full max-w-sm"
		>
			<Carousel.Content>
				{#each carousel as item}
					<Carousel.Item class="md:basis-1/2 lg:basis-1/3">
						<div class="p-1">
							<Card.Root>
								<Card.Content class="flex aspect-square items-center justify-center p-6">
									<span class="text-3xl font-semibold">{item.name}</span>
									<img src={item.image} alt="logo" width="64" height="64" />
								</Card.Content>
							</Card.Root>
						</div>
					</Carousel.Item>
				{/each}
			</Carousel.Content>
			<Carousel.Previous />
			<Carousel.Next />
		</Carousel.Root>
	</section>
</main>
