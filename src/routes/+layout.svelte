<script lang="ts">
  import {
    title,
    scrollY,
    innerWidth,
    innerHeight,
    imageForage,
  } from '$lib/store'
  import { onMount } from 'svelte'
  // export const isMobile =F
  // navigator.userAgentData?.mobile ?? !!navigator.userAgent.match(/Mobile/i)
  onMount(() => {
    if (localStorage.getItem('LastUpdate') !== __LAST_UPDATE__) {
      localStorage.clear()
      sessionStorage.clear()
      imageForage.clear()
      localStorage.setItem('LastUpdate', __LAST_UPDATE__)
    }
  })
</script>

<!-- https://svelte.dev/tutorial/svelte-window-bindings -->
<svelte:window
  bind:scrollY={$scrollY}
  bind:innerWidth={$innerWidth}
  bind:innerHeight={$innerHeight}
/>

<svelte:head>
  <title>{$title}</title>
</svelte:head>

<slot />
