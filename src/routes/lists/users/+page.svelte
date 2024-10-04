<script lang="ts">
	import '../../../app.css';
	import TrashCan from 'svelte-material-icons/TrashCan.svelte';
	import Pencil from 'svelte-material-icons/Pencil.svelte';
	import Plus from 'svelte-material-icons/Plus.svelte';
	import Input from '../../../components/form/input.svelte';
	import ArrowLeft from 'svelte-material-icons/ArrowLeft.svelte'
	import { onMount } from 'svelte';
	import axios from 'axios';

	let users:any = [], docente:any;
	let nome: string,
		senha: string,
		chefia: boolean,
		login: string,
		siape: number,
		chefStart: string,
		chefEnd: string,
		level: string,
		loading: boolean = true,
		admin:number,
        role: string;

	function handleRadio(event: any) {
		chefia = event.value;
	}

	onMount(() => {
		getData();
	});

	function getData() {
		axios.get('http://127.0.0.1:3000/users').then((res) => {
			users = res.data;
		});

	}

	function handleSubmmit() {
		loading = true;
		//@ts-ignore
		const papel = role == 1 ? 'admin' : 'professor'
		const dataUser = {
			nome: nome,
			siape: siape,
			usuario:{
				create:{
					login:login,
					senha:senha,
					papel:papel
				}
			}
		};
		axios.post('http://127.0.0.1:3000/user', { dataUser }).then((res) => {
			users = [...users, res.data];
			loading = false;
		});
	}

	function deleteItem(id: number) {
		loading = true;
		axios.delete(`http://127.0.0.1:3000/turma/${id}`).then(() => {
			users = users.filter((item) => item.id !== id);
			loading = false;
		});
	}

// 	function handleSubmmit() {
//         role = chefia ? "chefia" : "docente"
//         const userData = {
//             login, password, role
//         }

//         const docenteData = {
//             name, siape
//         }

//         const chefData = {
//             chefStart, chefEnd, level
//         }
//         if(chefia){
//             console.log(chefData)
//         }
//         usr = [...userData, ...docenteData, ...chefData]
// }
</script>

<div class="m-auto w-3/4 text-center h-screen text-neutral-300 mb-5">
	<h1 class="text-5xl mb-10 mt-5">Listagem de Usuarios</h1>

	<div class="flex items-center">
		<button class="btn bg-violet-500 mr-4 w-32" onclick="my_modal_4.showModal()"><Plus /></button>
		<dialog id="my_modal_4" class="modal bg-transparent backdrop-blur transition duration-150">
			<div class="modal-box w-11/12 max-w-5xl bg-zinc-900 rounded-xl">
				<h3 class="font-bold text-lg">Cadastre um usuario!</h3>

				<div class="" on:submit={handleSubmmit}>
					<form method="dialog" class="grid grid-cols-4 gap-2 w-11/12">
						<div class="col-span-2 grid m-5 w-full">
							<Input name="Login" bind:value={login} />
						</div>
						<div class="col-span-2 grid m-5 w-full">
						<Input name="Senha" type="password" bind:value={senha} />
						</div>
						<div class="col-span-2 grid m-5 w-full">
							<Input name="Nome" bind:value={nome} />
						</div>
						<div class="col-span-2 grid m-5 w-full">
							<Input name="Siape" bind:value={siape} type="number" />
						</div>
						<div class="col-span-4 grid m-5 w-full">
							<label for="" class=" text-left">Administrador: </label>
							<select
								class="h-10 text-stone-200 bg-neutral-700 rounded p-2 border-2 border-zinc-900"
								name="tipo"
								bind:value={admin}
							>
								<select />
								<option value="-1">Selecione...</option>
								<option value="1">sim</option>
								<option value="0">não</option>
							</select>
						</div>
						<div class="col-span-2 grid m-5 w-full">
							<p>Docente é chefia?</p>
						</div>

						<div class="col-span-2 my-5 grid grid-cols-2 text-xl">
							<label for="">
								<input
									type="radio"
									on:change={handleRadio}
									bind:group={chefia}
									value={true}
									name="chefia"
									class=""
								/> Sim
							</label>
							<label for="">
								<input
									type="radio"
									on:change={handleRadio}
									bind:group={chefia}
									value={false}
									name="chefia"
									class=""
								/> Não
							</label>
						</div>
						{#if chefia}
							<div class="col-span-2 grid m-5 w-full">
								<Input name="Início" bind:value={chefStart} type="date" />
							</div>
							<div class="col-span-2 grid m-5 w-full">
								<Input name="Fim" bind:value={chefEnd} type="date" />
							</div>
							<div class="col-span-4 grid m-5 w-full">
								<label for="" class=" text-left">Nível de ensino: </label>
								<select
									class="h-10 text-stone-200 bg-neutral-700 rounded p-2 border-2 border-zinc-900"
									name="tipo"
									bind:value={level}
								>
									<select />
									<option value="-1">Selecione...</option>
									<option value="1">Superior</option>
									<option value="2">Médio</option>
								</select>
							</div>
						{/if}
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
		<p>Adicionar novo usuario</p>
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
						<th>login</th>
						<th>Siape</th>
						<th>Inicio de chefia</th>
						<th>Fim de chefia</th>
						<th>Nível de chefia</th>
					</tr>
				</thead>
				<tbody>
					{#each users as user}
						<tr class="border-b border-zinc-500 even:bg-zinc-900">
							<th>{user.id}</th>
							<td>{user.name}</td>
							<td>{user.curso_id}</td>
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
