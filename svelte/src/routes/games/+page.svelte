<script>
  import BeamNG from '$lib/assets/beamNG.png';
  import mc from '$lib/assets/minecraft.png';
  import pz from '$lib/assets/pz.png';
  import terraria from '$lib/assets/terraria.png';
  import * as Card from "$lib/components/ui/card/index";

  const games = [
    {
			name: 'BeamNG',
			url: 'https://svip.sytes.net/lidarr',
			image: BeamNG
		},
		{
			name: 'Project Zomboid',
			url: 'https://svip.sytes.net/radarr',
			image: pz
		},
		{
			name: 'Terraria',
			url: 'https://svip.sytes.net/emby',
			image: terraria
		},
		{
			name: 'Minecraft',
			url: 'http://svip.sytes.net:5055/login',
			image: mc
		}
  ];
</script>

<div class="pt-20">
	<h1>Select your Game server you want to Join!</h1>
	{#each games as game}
		<Card.Root class="items-center w-[25%]">
			<Card.Header class="flex items-center justify-between">
				<Card.Title>{game.name}</Card.Title>
				<img src={game.image} alt="logo" width="64" height="64" />
			</Card.Header>
			<Card.Content>
				<p>Card Content</p>
			</Card.Content>
		</Card.Root>
	{/each}
</div>
