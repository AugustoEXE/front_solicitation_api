<script lang="ts">
	import '../../../app.css';
	import TrashCan from 'svelte-material-icons/TrashCan.svelte';
	import Pencil from 'svelte-material-icons/Pencil.svelte';
	import Plus from 'svelte-material-icons/Plus.svelte';
	import Input from '../../../components/form/input.svelte';
	import ArrowLeft from 'svelte-material-icons/ArrowLeft.svelte';
	import { onMount } from 'svelte';
	import axios from 'axios';
	import moment from 'moment'

	let cycles: any,
		year: any,
		semester: string,
		start: any,
		end: any,
		loading: boolean = true;

	onMount(() => {
		getData();
	});

	function getData() {
		axios.get('http://127.0.0.1:3000/ciclos-letivos').then((res) => {
			cycles = res.data;
			loading = false;
		});
	}

	function handleSubmmit() {
		loading = true;
		const data = {
			ano: year,
			semestre: parseInt(semester),
			inicio: new Date(start + 'T10:00:00Z'),
			fim: new Date(end + 'T10:00:00Z'),
		};
		axios.post('http://127.0.0.1:3000/ciclo-letivo', { data }).then((res) => {
			cycles = [...cycles, res.data];
			loading = false;
		});
	}

	function deleteItem(id: number) {
		loading = true;
		axios.delete(`http://127.0.0.1:3000/ciclo-letivo/${id}`).then(() => {
			cycles = cycles.filter((item) => item.id !== id);
			loading = false;
		});
	}
</script>

<div class="m-auto w-3/4 text-center h-screen text-neutral-300 mb-5">
	<h1 class="text-5xl mb-10 mt-5">Listagem de ciclos letivos</h1>
{#if loading}
	 <!-- content here -->
{:else}
	 <!-- else content here -->
	<div class="flex items-center">
		<button class="btn bg-violet-500 mr-4 w-32" onclick="my_modal_4.showModal()"><Plus /></button>
		<dialog id="my_modal_4" class="modal bg-transparent backdrop-blur transition duration-150">
			<div class="modal-box w-11/12 max-w-5xl bg-zinc-900 rounded-xl">
				<h3 class="font-bold text-lg">Cadastre um ciclo letivo!</h3>

				<div class="" on:submit={handleSubmmit}>
					<form method="dialog" class="grid grid-cols-4 gap-2 w-11/12">
						<div class="col-span-2 grid m-5 w-full">
							<Input name="Ano" type="number" bind:value={year} />
						</div>
						<div class="col-span-2 grid m-5 w-full">
							<Input name="semestre" type='number' bind:value={semester} />
						</div>
						<div class="col-span-2 grid m-5 w-full">
							<Input name="Inicio" type="date" bind:value={start} />
						</div>
						<div class="col-span-2 grid m-5 w-full">
							<Input name="Fim" type="date" bind:value={end} />
						</div>
						<div class="col-span-1 grid m-5 w-full">
							<button class="btn bg-red-500">Cancelar</button>
						</div>
						<div class="col-span-1 col-start-4 1 grid m-5 w-full">
							<input class="btn bg-blue-500" type="submit" value="Salvar" />
						</div>
					</form>
				</div>
			</div>
		</dialog>
		<p>Adicionar novo ciclo letivo</p>
	</div>

	<div class="overflow-x-auto">
		<fieldset class="border border-solid border-violet-500 p-3 rounded-lg">
			<legend class="mx-3 px-2">Listagem</legend>

			<table class="table table-zebra rounded-lg text-neutral-300">
				<!-- head -->
				<thead>
					<tr>
						<th>ID</th>
						<th>Ano</th>
						<th>semestre</th>
						<th>inicio</th>
						<th>fim</th>
						<th>Açoes</th>
					</tr>
				</thead>
				<tbody>
					{#each cycles as cycle}
						<tr class="border-b border-zinc-500 even:bg-zinc-900">
							<th>{cycle.id}</th>
							<td>{cycle.ano}</td>
							<td>{cycle.semestre}</td>
							<td>{moment(new Date(cycle.inicio)).format('DD/MM/YYYY')}</td>
							<td>{moment(new Date(cycle.fim)).format('DD/MM/YYYY')}</td>
							<td>
								<button class="btn bg-red-500 my-2" on:click={deleteItem(cycle.id)}><TrashCan /></button>
							</td>
						</tr>
					{/each}
				</tbody>
			</table>
		</fieldset>
	</div>
	<a href="/admin">
		<button class="flex place-items-center justify-center btn bg-violet-500 mt-5">
			<ArrowLeft /> Voltar
		</button>
	</a>
{/if}

</div>
