<script lang="ts">
	import '../../../app.css';
	import TrashCan from 'svelte-material-icons/TrashCan.svelte';
	import Pencil from 'svelte-material-icons/Pencil.svelte';
	import Plus from 'svelte-material-icons/Plus.svelte';
	import Input from '../../../components/form/input.svelte';
	import ArrowLeft from 'svelte-material-icons/ArrowLeft.svelte';
	import { onMount } from 'svelte';
	import axios from 'axios';
	
		onMount(() => {
			getData();
		});

	let turmas: any,
		nome: any,
		cursoId: number,
		turma: any,
		cursos: any =[] ,
		loading: boolean = true;

	function getData() {
		axios.get('http://127.0.0.1:3000/turmas').then((res) => {
			turmas = res.data;
		});
		axios.get('http://127.0.0.1:3000/cursos').then((res) => {
			cursos = res.data;
			loading = false;
		});
	}

	function handleSubmmit() {
		loading = true;
		const data = {
			nome: nome,
			cursoId: cursoId
		};
		axios.post('http://127.0.0.1:3000/turma', { data }).then((res) => {
			turmas = [...turmas, res.data];
			loading = false;
		});
	}

	function deleteItem(id: number) {
		loading = true;
		axios.delete(`http://127.0.0.1:3000/turma/${id}`).then(() => {
			turmas = turmas.filter((item) => item.id !== id);
			loading = false;
		});
	}
</script>

<div class="m-auto w-3/4 text-center h-screen text-neutral-300 mb-5">
	<h1 class="text-5xl mb-10 mt-5">Listagem de Turmas</h1>
	{#if loading}
		loading
	{:else}
		<!-- else content here -->
		<div class="flex items-center">
			<button class="btn bg-violet-500 mr-4 w-32" onclick="my_modal_4.showModal()"><Plus /></button>
			<dialog id="my_modal_4" class="modal bg-transparent backdrop-blur transition duration-150">
				<div class="modal-box w-11/12 max-w-5xl bg-zinc-900 rounded-xl">
					<h3 class="font-bold text-lg">Cadastre uma Turma!</h3>

					<div class="" on:submit={handleSubmmit}>
						<form method="dialog" class="grid grid-cols-4 gap-2 w-11/12">
							<div class="col-span-2 grid m-5 w-full">
								<Input name="name" bind:value={nome} />
							</div>
							<div class="col-span-2 grid m-5 w-full">
								<label for="" class=" text-left">Curso: </label>
								<select
									class="h-10 text-stone-200 bg-neutral-700 rounded p-2 border-2 border-zinc-900"
									name="tipo"
									bind:value={cursoId}
								>
									<select />
									<option value="-1">Selecione...</option>
									{#each cursos as curso}
										<option value={curso.id}>{curso.nome}</option>
									{/each}
								</select>
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
			<p>Adicionar novo turma</p>
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
							<th>curso</th>
							<th>Açoes</th>
						</tr>
					</thead>
					<tbody>
						{#each turmas as turma}
							<tr class="border-b border-zinc-500 even:bg-zinc-900">
								<th>{turma.id}</th>
								<td>{turma.nome}</td>
								<td>{turma.curso.nome}</td>
								<td>
									<button class="btn bg-red-500 my-2" on:click={deleteItem(turma.id)}><TrashCan /></button>
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
