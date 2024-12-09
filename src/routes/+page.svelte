<script>
  let data;
  let userNum;
  let canGamba = true;
  async function testApi() {
    if (!canGamba) return;
    canGamba = false;
    const resp = await fetch("/api/test");
    let num = await resp.json();
    data = num + " - " + (num == userNum ? "Vyhral jsi!" : "Prohral jsi")
    canGamba = true;
  }
</script>

<h1 class="text-3xl font-bold">INFIS Gamba</h1>
<input bind:value={userNum} type="number" max="100" min="0" placeholder="Tipni si číslo od 0 do 100! (2 desetinná místa)" class="min-w-min bg-slate-900 border-slate-600 border-solid border-2" style="width: 40ch">
Vysledek: {data}
<button on:click={testApi} class="hover:text-cyan-300 px-3 py-2 bg-cyan-900 font-semibold m-3">&rightarrow; GAMBA &leftarrow;</button>