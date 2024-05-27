<script>
	import qbittorrent from '$lib/assets/New_qBittorrent_Logo.svg';
	import emby from '$lib/assets/emby.png';
	import jellyfin from '$lib/assets/jellyfin.png';
	import lidarr from '$lib/assets/lidarr.png';
	import radarr from '$lib/assets/radarr.svg';
	import sonarr from '$lib/assets/sonarr.svg';
	import * as Card from '$lib/components/ui/card/index';
	import * as Carousel from '$lib/components/ui/carousel/index';

	const carousel = [
		{
			name: 'Lidarr',
			url: 'https://svip.sytes.net/lidarr',
			image: lidarr
		},
		{
			name: 'Radarr',
			url: 'https://svip.sytes.net/radarr',
			image: radarr
		},
		{
			name: 'Emby',
			url: 'https://svip.sytes.net/emby',
			image: emby
		},
		{
			name: 'Jellyseerr',
			url: 'http://svip.sytes.net:5055/login',
			image: 'https://cdn.discordapp.com/emojis/1229927921066442833.webp?size=80&quality=lossless'
		},
		{
			name: 'qBittorrent',
			url: 'http://svip.sytes.net:8080',
			image: qbittorrent
		},
		{
			name: 'Jellyfin',
			url: 'https://svip.sytes.net:9443',
			image: jellyfin
		},
		{
			name: 'Sonarr',
			url: 'http://svip.sytes.net:5055/login',
			image: sonarr
		}
	];
</script>

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
									<img src={item.image} alt="logo" />
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
