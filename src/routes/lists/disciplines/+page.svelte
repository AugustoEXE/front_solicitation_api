<script lang="ts">
	import '../../../app.css';
	import TrashCan from 'svelte-material-icons/TrashCan.svelte';
	import Pencil from 'svelte-material-icons/Pencil.svelte';
	import Plus from 'svelte-material-icons/Plus.svelte';
	import Input from '../../../components/form/input.svelte';
	import ArrowLeft from 'svelte-material-icons/ArrowLeft.svelte'

	let disciplinas = [
		{
			id: 1,
			name: 'discipline',
		},
		{
			id: 2,
			name: 'discipline2',
		},
		{
			id: 3,
			name: 'discipline3',
		}
	];
		let name:any, discipline:any
		
	function handleSubmmit(){
		console.log([name, discipline])
		disciplinas = [...disciplinas, {id: 1, name}]
	}
</script>

<div class="m-auto w-3/4 text-center h-screen text-neutral-300 mb-5">
	<h1 class="text-5xl mb-10 mt-5">Listagem de disciplinas</h1>

    
	<div class="flex items-center">
		<button class="btn bg-violet-500 mr-4 w-32" onclick="my_modal_4.showModal()"><Plus /></button>
		<dialog id="my_modal_4" class="modal bg-transparent backdrop-blur transition duration-150">
			<div class="modal-box w-11/12 max-w-5xl bg-zinc-900 rounded-xl">
				<h3 class="font-bold text-lg">Cadastre uma Disciplina!</h3>

				<div class="" on:submit={handleSubmmit}>
					<form method="dialog" class="grid grid-cols-4 gap-2 w-11/12">
						<div class="col-span-4 grid m-5 w-full">
							<Input name="Nome" bind:value={name}/>
						</div>
						<div class="col-span-1 grid m-5 w-full">
							<button class="btn bg-red-500">Cancelar</button>
						</div>
						<div class="col-span-1 col-start-4 1 grid m-5 w-full">
							<input class="btn bg-blue-500" type="submit" value="Salvar">
						</div>
					</form>
				</div>
			</div>
		</dialog>
		<p>Adicionar nova disciplina</p>
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
						<th>Açoes</th>
					</tr>
				</thead>
				<tbody>
					{#each disciplinas as disciplina}
						<tr class="border-b border-zinc-500 even:bg-zinc-900">
							<th>{disciplina.id}</th>
							<td>{disciplina.name}</td>
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
