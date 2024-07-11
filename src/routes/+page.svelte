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

<div class="container flex min-h-screen flex-col items-center justify-center">
	<h1 class="pb-5 text-4xl font-bold">Select your Service</h1>

	<Carousel.Root
		opts={{
			align: 'center'
		}}
		class="w-full max-w-sm"
	>
		<Carousel.Content>
			{#each carousel as item}
				<Carousel.Item class=" md:basis-1/2 lg:basis-1/3">
					<div class="">
						<Card.Root>
							<a href={item.url} target="_blank" rel="noopener noreferrer">
								<Card.Header>
									<Card.Title>{item.name}</Card.Title>
								</Card.Header>
								<Card.Content class="">
									<img src={item.image} alt="logo" class="h-[64px] w-[64px]" />
								</Card.Content>
							</a>
						</Card.Root>
					</div>
				</Carousel.Item>
			{/each}
		</Carousel.Content>
		<Carousel.Previous />
		<Carousel.Next />
	</Carousel.Root>
</div>
