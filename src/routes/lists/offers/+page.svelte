<script lang="ts">
	import '../../../app.css';
	import TrashCan from 'svelte-material-icons/TrashCan.svelte';
	import Pencil from 'svelte-material-icons/Pencil.svelte';
	import Plus from 'svelte-material-icons/Plus.svelte';
	import Input from '../../../components/form/input.svelte';
	import ArrowLeft from 'svelte-material-icons/ArrowLeft.svelte'

	let offers = [
		{
			cycle_id: 1,
			professor_id: 2,
			class_id: 3,
			discipline_id: 4,
		},
		{
			cycle_id: 1,
			professor_id: 2,
			class_id: 3,
			discipline_id: 4,
		},
		
	
	];
		let cycle_id: number, professor_id:number, class_id:number, discipline_id:number

	function handleSubmmit(){
		offers = [...offers, { cycle_id, professor_id, class_id, discipline_id }]
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
						<div class="col-span-2 grid m-5 w-full">
							<label for="" class=" text-left">Professor: </label>
							<select
								class="h-10 text-stone-200 bg-neutral-700 rounded p-2 border-2 border-zinc-900"
								name="tipo"
								bind:value={professor_id}
							>
								<select />
								<option value="-1">Selecione...</option>
								<option value="1">Superior</option>
								<option value="2">Médio</option>
							</select>
						</div>
						<div class="col-span-2 grid m-5 w-full">
							<label for="" class=" text-left">Ciclo Letivo: </label>
							<select
								class="h-10 text-stone-200 bg-neutral-700 rounded p-2 border-2 border-zinc-900"
								name="tipo"
								bind:value={cycle_id}
							>
								<select />
								<option value="-1">Selecione...</option>
								<option value="1">Superior</option>
								<option value="2">Médio</option>
							</select>
						</div>
						<div class="col-span-4 grid m-5 w-full">
							<label for="" class=" text-left">Nível: </label>
							<select
								class="h-10 text-stone-200 bg-neutral-700 rounded p-2 border-2 border-zinc-900"
								name="tipo"
								bind:value={class_id}
							>
								<select />
								<option value="-1">Selecione...</option>
								<option value="superior">Superior</option>
								<option value="medio">Médio</option>
							</select>
						</div>
						<div class="col-span-4 grid m-5 w-full">
							<label for="" class=" text-left">Nível: </label>
							<select
								class="h-10 text-stone-200 bg-neutral-700 rounded p-2 border-2 border-zinc-900"
								name="tipo"
								bind:value={discipline_id}
							>
								<select />
								<option value="-1">Selecione...</option>
								<option value="superior">Superior</option>
								<option value="medio">Médio</option>
							</select>
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
						<th>professor</th>
						<th>Ciclo</th>
						<th>Turma</th>
						<th>Disciplina</th>
						<th>Açoes</th>
					</tr>
				</thead>
				<tbody>
					{#each offers as offer}
						<tr class="border-b border-zinc-500 even:bg-zinc-900">
							<td>{offer.professor_id}</td>
							<td>{offer.cycle_id}</td>
							<td>{offer.class_id}</td>
							<td>{offer.discipline_id}</td>
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
