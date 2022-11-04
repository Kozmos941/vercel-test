<script lang="ts">
  import './styles.css'
  import Table from './Table.svelte'

  const TABLE_CAPTION = `原神抗性表 v${__APP_VERSION__}`
</script>

<svelte:head>
  <title>{TABLE_CAPTION}</title>
</svelte:head>

<aside>
  <!--  -->
</aside>

<main>
  <Table caption={TABLE_CAPTION} />
  <footer>
    <!-- <p>visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to learn SvelteKit</p> -->
  </footer>
</main>

<style>
  main {
    width: max-content;
    position: relative;
    margin: 0 auto;
    background-color: transparent;
  }
</style>
