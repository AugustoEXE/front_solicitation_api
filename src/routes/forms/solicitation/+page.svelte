<script lang="ts">
	import { onMount } from 'svelte';
	import '../../../app.css';
	import Input from '../../../components/form/input.svelte';
	let tipoSubistituicao: string

	function handleRadio(event: any){
		tipoSubistituicao = event.value
	}
	console.info('ta aqui');
</script>

<div class="m-auto w-3/4 text-center h-screen text-neutral-300 mb-5">
	<h1 class="text-5xl font-ancient mb-10 mt-5">Cadastro de solicitações</h1>

	<form action="">
		<fieldset class="border border-solid border-violet-500 p-3 rounded-lg grid grid-cols-4 gap-2">
			<legend class="mx-3 px-2">Dados Basicos</legend>

			<div class="col-span-4 grid">
				<Input name="Solicitante" />
			</div>

			<div class="col-span-4 grid">
				<Input name="Disciplina" />
			</div>

			<div class="col-span-2 grid">
				<Input name="Curso/Turma" />
			</div>

			<div class="col-span-1 grid">
				<Input name="Data" type="date" />
			</div>

			<div class="col-span-1 grid">
				<Input name="Horário" type="time" />
			</div>

			<div class="col-span-4 grid">
				<label for="" class=" text-left">Justificativa: </label>
				<textarea class=" h-20 bg-neutral-700 rounded p-2 border-2 border-zinc-900 text-zinc-400" />
			</div>

			

			<div class="col-span-4 my-5 grid grid-cols-2 text-xl">
				<label for="">
					<input type="radio" on:change={handleRadio} bind:group={tipoSubistituicao} value="troca" name="tipoSubistituicao" class=""> Troca de aulas
				</label>
				<label for="">
					<input type="radio" on:change={handleRadio} bind:group={tipoSubistituicao} value="aplica" name="tipoSubistituicao" class=""> Aplicação de atividade
				</label>
			</div>

			{#if tipoSubistituicao === "troca"}
			<div class="col-span-2 grid">
				<Input name="Professor Subistituto" />
			</div>

			<div class="col-span-2 grid">
				<Input name="Data/Assinatura" />
			</div>
			<div class="col-span-2 grid">
				<Input name="Disciplina substituição" />
			</div>
			<div class="col-span-2 grid">
				<Input name="Devolução em" type="datetime-local" />
			</div>
			{:else if  tipoSubistituicao ==="aplica"}
			<div class="col-span-2 grid">
				<Input name="Professor Subistituto" />
			</div>
			<div class="col-span-2 grid">
				<Input name="Data/Assinatura" />
			</div>
			{/if}

			<button class="col-start-2 col-end-4 text-center bg-violet-500 p-2 rounded mt-1"
				>Enviar</button
			>
		</fieldset>
	</form>
</div>
