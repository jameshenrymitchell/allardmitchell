<script>
  import content from '../../content.json'
  import { page } from '$app/stores'
  import Saos from 'saos'

  // Route to location

  function route(location) {
    window.location.href = location
  }

  /*
  // Smooth scroll to location

  function scroll(location) {
    document.querySelector(location).scrollIntoView({
			behavior: 'smooth'
		})
  }
  */

  // Get project-specific color

  let color

  if ($page.route.id === "/james/project/[id=id]") {
    color = content.filter(s => s.id === $page.params.id)[0].color
  }

  // Get current year

  const d = new Date()
  let year = d.getFullYear()
</script>

<div id="border" style={$page.route.id === "/james/project/[id=id]" ? "background: " + color + ";" : ""}></div>

<Saos animation={'fade 1s ease-in-out both'}>
<header class="text-group">
  <img on:click={() => route("/james")} on:keypress={() => route("/james")} src="/logo.svg" alt="Allard Mitchell">
  <p><a href="mailto:james@allardmitchell.com">Contact</a></p>
</header>
</Saos>

<main style={$page.route.id === "/james/project/[id=id]" ? "width: 100%;" : ""}>
  <slot></slot>
</main>

<Saos animation={'fade 1s ease-in-out both'}>
<footer class="text-group">
  <p>&copy; {year}</p>
  <p>Built with <a href="https://svelte.dev" target="_blank" rel="noreferrer">Svelte</a>.</p>
</footer>
</Saos>

<style lang="scss" scoped>
  #border {
    background: linear-gradient(hsl(245, 70%, 70%), hsl(245, 70%, 60%));
    display: none;
    height: 1rem;
    width: 100%;
  }

  header.text-group {
    align-items: center;
    display: flex;
    padding-top: 6rem;

    @include tablet {
      margin-bottom: 6rem;
      padding-top: 3rem;
    }

    img {
      cursor: pointer;
      height: 1.35rem;
      transition: all .5s ease;

      &:hover {
        transform: scale(1.05);
      }
    }

    p {
      font-size: 1rem;
      margin-left: auto;

      a {
        background: $color-white-060;
        border-radius: 3rem;
        box-shadow: 0 0 1.5rem 0 $color-black-010;
        padding: .75rem 1.25rem;
      }
    }
  }

  main {
    margin: 0 auto;
    max-width: 58rem;
    width: calc(100% - 12rem);

    @include tablet {
      width: calc(100% - 6rem);
    }
  }

  footer.text-group {
    display: flex;
    margin-top: 6rem;

    @include tablet {
      margin-bottom: 3rem;
      margin-top: 0;
    }

    p {
      color: $color-black-040;
      font-size: 1rem;

      &:first-of-type {
        margin-bottom: 0;
      }

      &:nth-of-type(2) {
        margin-left: auto;
      }
    }
  }
</style>