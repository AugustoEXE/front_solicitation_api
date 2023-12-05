<script lang="ts">
	import '../../app.css';

	export let name: string;
	export let placeholder: string = `${name}...`;
	export let type: string = 'text';
	export let value:any  = ""

	function typeAction(node: any) {
		node.type = type;
	}
</script>

<label for="" class=" text-left">{name}: </label>
<input
	use:typeAction
	class=" h-10 bg-neutral-700  rounded p-2 border-2 border-zinc-900 text-zinc-400"
	name={name.split(' ')[0].toLowerCase()}
	bind:value
	{placeholder}
	
/>
