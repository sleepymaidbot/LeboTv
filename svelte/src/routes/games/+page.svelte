<script>
  import BeamNG from '$lib/assets/beamNG.png';
	import pz from '$lib/assets/pz.png';
	import terraria from '$lib/assets/terraria.png';
	import mc from '$lib/assets/minecraft.png';
  import { Button } from "$lib/components/ui/button/index";
  import * as Card from "$lib/components/ui/card/index";
  import * as Select from "$lib/components/ui/select/index";
  import { Input } from "$lib/components/ui/input/index";
  import { Label } from "$lib/components/ui/label/index";
 
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


<h1>Select your Game server you want to Join!</h1>   
  <Card.Root class="w-[350px]">
    <Card.Header>
      <Card.Title>Create project</Card.Title>
      <Card.Description>Deploy your new project in one-click.</Card.Description>
    </Card.Header>
    <Card.Content>
            <Select.Root>
              
              <Select.Content>
                {#each games as game}
                  <Select.Item value={game.name} label={game.name}
                    >{game.name}</Select.Item
                  >
                {/each}
              </Select.Content>
            </Select.Root>
    </Card.Content>
    <Card.Footer class="flex justify-between">
      <Button variant="outline">Cancel</Button>
      <Button>Deploy</Button>
    </Card.Footer>
  </Card.Root>
  
