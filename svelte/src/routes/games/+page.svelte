<script>
	import BeamNG from '$lib/assets/beamNG.png';
	import mc from '$lib/assets/minecraft.png';
	import pz from '$lib/assets/pz.png';
	import terraria from '$lib/assets/terraria.png';
	import * as Card from '$lib/components/ui/card/index';

	const games = [
		{
			name: 'BeamNG',
			url: 'https://svip.sytes.net/lidarr',
			image: BeamNG,
			Port: 'Port : 30814/default'
		},
		{
			name: 'Project Zomboid',
			url: 'https://svip.sytes.net/radarr',
			image: pz,
			Port: 'Port : 16262/default'
		},
		{
			name: 'Terraria',
			url: 'https://svip.sytes.net/emby',
			image: terraria,
			Port: 'Port : 7777/default'
		},
		{
			name: 'Minecraft',
			url: 'http://svip.sytes.net:5055/login',
			image: mc,
			Port: 'Port : 25565/default'
		}
	];
</script>

<div class="container flex min-h-screen flex-col items-center justify-center">
	<div class="pb-5 text-4xl font-bold">
		<h1>Select your Game server you want to Join!</h1>
	</div>
	<div class="flex w-[75%]">
		{#each games as game}
			<div class="h-[100%] w-[100%] pl-5">
				<Card.Root class="h-[15%] w-[100%] items-center ">
					<Card.Header class="flex items-center justify-between">
						<Card.Title>{game.name}</Card.Title>
						<img src={game.image} alt="logo" width="64" height="64" class="h-[64px] w-[64px]" />
					</Card.Header>
					<Card.Content>
						<div class="flex items-center justify-center">
							<p>svip.sytes.net</p>
						</div>
						<div class="flex items-center justify-center">
							<p>{game.Port}</p>
						</div>
					</Card.Content>
				</Card.Root>
			</div>
		{/each}
	</div>
</div>
