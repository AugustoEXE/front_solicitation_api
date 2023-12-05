<script lang="ts">
    import '../../app.css'
	import Card from '../../components/Card.svelte';
    import contract from '$lib/assets/contract.png'
    import cap from '$lib/assets/cap.png'
    import user from '$lib/assets/user.png'
    import classe from '$lib/assets/classe.png'
    </script>
    
    <div class="w-[98%] m-auto grid grid-cols-5 gap-5 pb-10">
        <div class="col-span-5">
            <p class=" text-center font-ancient text-6xl mt-5 p-0 mb-0">O que deseja fazer?</p>
        </div>
        <Card img={contract} legend="Solicitações" route={''}></Card>
        <Card img={classe} legend="Cursos" route={'/lists/courses'}></Card>
        <Card img={classe} legend="Turmas" route={'/lists/classes'}></Card>
        <Card img={classe} legend="Ciclos Letivos" route={'/lists/cycles'}></Card>
        <Card img={classe} legend="Disciplinas" route={''}></Card>
        <Card img={user} legend="Usuarios" route={'/lists/users'}></Card>
        <Card img={cap} legend="Coordenadores" route={''}></Card>
        <Card img={cap} legend="Docentes" route={''}></Card>
        <Card img={cap} legend="Docentes e Ciclo letivos" route={''}></Card>
        <Card img={classe} legend="Ofertas" route={''}></Card>        
    </div>