<script lang="ts">
	import '../../../app.css';
	import TrashCan from 'svelte-material-icons/TrashCan.svelte';
	import Pencil from 'svelte-material-icons/Pencil.svelte';
	import Plus from 'svelte-material-icons/Plus.svelte';
	import Input from '../../../components/form/input.svelte';
	import ArrowLeft from 'svelte-material-icons/ArrowLeft.svelte'

	let docentes = [
		{
			id: 1,
			name: 'docente',
			siape: 234629,
			user_id: 2
		},
		{
			id: 1,
			name: 'docente',
			siape: 234629,
			user_id: 2
		},
		{
			id: 1,
			name: 'docente',
			siape: 234629,
			user_id: 2
		},
		
	];
		let name:string, siape:number, user_id:number

</script>

<div class="m-auto w-3/4 text-center h-screen text-neutral-300 mb-5">
	<h1 class="text-5xl mb-10 mt-5">Listagem de docentes</h1>

    
	<div class="flex items-center">
		<a href="/lists/users" class="flex justify-center items-center">
			<button class="btn bg-violet-500 mr-4 w-32" ><Plus /></button>
			<p>Adicionar novo Docente</p>
		</a>
	</div>

	<div class="overflow-x-auto">
		<fieldset class="border border-solid border-violet-500 p-3 rounded-lg">
			<legend class="mx-3 px-2">Listagem</legend>

			<table class="table table-zebra rounded-lg text-neutral-300">
				<!-- head -->
				<thead>
					<tr>
						<th>ID</th>
						<th>Nome</th>
						<th>Siape</th>
						<th>Usuario</th>
						<th>Açoes</th>
					</tr>
				</thead>
				<tbody>
					{#each docentes as docente}
						<tr class="border-b border-zinc-500 even:bg-zinc-900">
							<th>{docente.id}</th>
							<td>{docente.name}</td>
							<td>{docente.siape}</td>
							<td>{docente.user_id}</td>
							<td>
								<button class="btn bg-red-500 my-2"><TrashCan /></button>
								<button class="btn bg-blue-500 my-2"><Pencil /></button>
							</td>
						</tr>
					{/each}
				</tbody>
			</table>
		</fieldset>
	</div>
	<a href="/admin">
		<button class="flex place-items-center justify-center btn bg-violet-500 mt-5">
			<ArrowLeft/> Voltar
		</button>
	</a>
</div>
