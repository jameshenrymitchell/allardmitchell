<script>
  import content from '../../../../content.json'
  import { page } from '$app/stores'
  import Saos from 'saos'

  // Route to location

  function route(location) {
    window.location.href = '/james/project/' + location
  }

  // Get adjacent projects

  let l = content.length
  let i

  content.filter(function(e, index) {
    if (e.id === $page.params.id) {
      i = index
    }
  })

  let prev = content[(i+l-1)%l]
  let item = content[i]
  let next = content[(i+1)%l]
</script>

<svelte:head>
  <title>James Mitchell — {item.residence}</title>
</svelte:head>

<Saos animation={'fade 1s ease-in-out both'}>
<section id="intro">
  <div class="text-group">
    <h1>{item.residence}</h1>
    <p>{item.tenure}</p>
    <p>{@html item.desc}</p>
  </div>
  <div class="text-group">
    <h3>Achievements</h3>
    <ul>
      {#each item.achievements as achievement}
        <li>{achievement}</li>
      {/each}
    </ul>
  </div>
</section>
</Saos>

<Saos animation={'fade 1s ease-in-out both'}>
<section id="project">
  <div class="text-group">
    <h3>Project</h3>
    <h1>{item.project.title.replace( /(<([^>]+)>)/ig, '')}</h1>
    <p>{@html item.project.desc}</p>
  </div>
  {#each item.project.img as img, i}
    {#if item.id !== "bt"}
      <img src={'/james/project/' + item.id + i + '.png'} alt={item.project.img[i].title}>
    {/if}
    <div class="text-group">
      <h2>{item.project.img[i].title}</h2>
      <p>{@html item.project.img[i].desc}</p>
    </div>
  {/each}
</section>
</Saos>

<Saos animation={'fade 1s ease-in-out both'}>
<section id="pagination">
  <div on:click={() => route(prev.id)} on:keypress={() => route(prev.id)}>
    <h4>← Prev</h4>
  </div>
  <div on:click={() => route(next.id)} on:keypress={() => route(next.id)}>
    <h4>Next →</h4>
  </div>
</section>
</Saos>

<style lang="scss" scoped>
  .text-group {
    max-width: 50rem;

    @include tablet {
      max-width: 44rem;
    }
  }

  #intro {
    margin-bottom: 12rem;

    @include tablet {
      margin-bottom: 6rem;
    }

    .text-group:first-of-type p:first-of-type {
      color: $color-black-040;
      margin-bottom: 3rem;
    }

    h3:first-of-type {
      margin-bottom: 1.5rem;
    }
  }

  #project {
    h2 {
      margin-bottom: 1.5rem;
    }

    img {
      border-radius: $border-radius;
      margin-bottom: 6rem;
      width: 100%;

      @include tablet {
        border-radius: 0;
        margin-bottom: 3rem;
      }
    }
  }

  #pagination {
    border-radius: $border-radius;
    box-shadow: 0 0 1.5rem 0 $color-black-010;
    display: flex;
    margin-bottom: 6rem;
    overflow: hidden;

    @include tablet {
      border-radius: 0;
    }

    div {
      cursor: pointer;
      padding: 2rem 0;
      transition: all .5s ease;
      width: 50%;

      &:hover {
        background: $color-black-003;
      }

      &:first-of-type {
        padding-left: 3rem;
      }

      &:nth-of-type(2) {
        border-left: 1px solid $color-black-010;
        padding-right: 3rem;
        text-align: right;
      }
    }

    h4 {
      margin-bottom: 0;
    }
  }
</style>