<script lang="ts">
  export let ModalVisibility = false

  let size = 1
</script>

<button on:click={() => (ModalVisibility = true)}>
  Save As Image
  <div>{size} MB</div>
</button>

<style lang="postcss">
  button {
    cursor: pointer;
    /* Box */
    position: absolute;
    top: 0;
    left: 0;
    width: 5rem;
    height: 5rem;
    margin: 0;
    border: none;
    /* Font */
    font-family: 'Poppins';
    font-weight: 800;
    font-size: 0.875rem;
    color: var(--color-dark);
    background-color: var(--color-light);
    /* To avoid be covered by caption */
    z-index: var(--zindex);
    /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */
    user-select: none;
  }
</style>
