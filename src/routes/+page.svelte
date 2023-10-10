<script lang="ts">
	import '../app.css';
	import Contract from '$lib/assets/contract.svg';
</script>

<div class="grid grid-cols-2">
	<div class="bg-gradient-to-r from-violet-900 to-transparent min-h-screen max-h-max">
		<div>
			<h1 class="text-center text-5xl my-auto font-extrabold pt-56">Q-SUBSTITUIÇÕES</h1>
			<p class="text-center text-2xl mt-3">
				Bem vindo ao melhor sistema de solicitação de substiuições
			</p>

			<p class="text-center text-4xl mt-6">Clique no contrato para começar</p>
		</div>
	</div>

	<div class="grid place-items-center">
		<div
			class="transition bg-violet-900 to-transparent w-4/6 grid place-content-center rounded-full p-10 mb-20 hover:scale-105"
		>
			<a href="/login" class="grid place-items-center">
				<img src={Contract} alt="" class="scale-75" />
			</a>
		</div>
	</div>
</div>
