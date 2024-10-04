<script lang="ts">
    import '../../app.css'
	import Eye from 'svelte-material-icons/Eye.svelte';
    import Contract from '$lib/assets/contract.svg';

</script>

<div class="m-auto w-3/4 text-center h-screen overflow-hidden">
	<h1 class=" text-6xl mb-10 mt-5">Olá professor, o que deseja fazer?</h1>

	<div class="w-full grid grid-cols-2 place-items-center">
		<div class="flex justify-evenly flex-row">
			<div class="inline hover:scale-105 hover:transition">
				<a href="/forms/solicitation" class="hover:scale-150 hover:transition inline">
					<div
						class="max-w-sm rounded overflow-hidden shadow-lg bg-gradient-to-b from-neutral-900 via-neutral-800 to-violet-500 w-80 h-[28rem]"
					>
						<img class="w-full scale-90" src="{Contract}" />
						<div class="px-6 py-4">
							<div class=" text-5xl mb-2">Criar solicitação</div>
						</div>
					</div></a
				>
			</div>
		</div>
		<div class="flex justify-evenly flex-row">
			<div class="inline hover:scale-105 hover:transition">
				<a href="/lists/solicitations" class="hover:scale-150 hover:transition inline">
					<div
						class="max-w-sm rounded overflow-hidden shadow-lg bg-gradient-to-b from-neutral-900 via-neutral-800 to-purple-500 w-80 h-[28rem]"
					>
                    <div class="w-full grid place-items-center">
                        <Eye size="300"  ></Eye>
                    </div>
                    <div class="px-6 py-4">
							<div class=" text-5xl mb-2">Ver solicitações</div>
						</div>
					</div></a
				>
			</div>
		</div>
	</div>
</div>