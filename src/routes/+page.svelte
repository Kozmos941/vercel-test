<script lang="ts">
  import './styles.postcss'
  import Sider from '$comp/Sider.svelte'
  import Modal from '$comp/Modal.svelte'
  import Button from '$comp/Button.svelte'
  import GitHub from '$comp/GitHub.svelte'
  import Table from '$comp/Table.svelte'
  import Footer from '$comp/Footer.svelte'
  import { mainWidth, tHeadHeight, imageForage } from '$lib/store'
  import { Download } from '$lib/Download'

  import { onMount } from 'svelte'

  /* Download */
  let ModalVisibility: boolean
  let table: HTMLTableElement

  onMount(async () => {
    const dl = new Download(table)
    if (!localStorage.getItem('size')) {
      const { scale, type, quality } = image
      const download = new Download(table, { scale, type, quality })
      Object.entries(download.options).forEach(([key, value]) =>
        imageForage.setItem(key, value)
      )
      const dataURL = await download.dataURL
      const sizeMB = ((3 / 4) * dataURL.length) / Math.pow(2, 20)
      image.size = sizeMB.toFixed(2)
      imageForage.setItem('dataURL', dataURL)
      imageForage.setItem('length', dataURL.length)
      localStorage.setItem('size', image.size)
    } else {
      image.size = localStorage.getItem('size') as string
    }
  })
</script>

<!-- {@debug table} -->

<Sider />

<Modal bind:ModalVisibility />

<main bind:offsetWidth={$mainWidth}>
  <Button bind:ModalVisibility />
  <GitHub />
  <Table
    bind:table
    bind:offsetHeight={$tHeadHeight}
  />
  <Footer />
</main>

<style>
  main {
    width: max-content;
    position: relative;
    margin: 0 auto;
    background-color: transparent;
  }
</style>
