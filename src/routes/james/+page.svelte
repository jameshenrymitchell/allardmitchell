<script>
  import content from '../../content.json'
  import Saos from 'saos'

  // Route to location

  function route(location) {
    window.location.href = '/james/project/' + location
  }

  // Iterate through phrases

  let phrases = ["solves problems", "defines meaning", "creates moments", "shapes experience"]
  let phrase = phrases[0]

  const sleep = (time) => {
    return new Promise((resolve) => setTimeout(resolve, time))
  }

  const updatePhrase = async () => {
    for (let i = 1; i < phrases.length; i++) {
      await sleep(1500)
      phrase = phrases[i]
    }
  }

  updatePhrase()
</script>

<svelte:head>
  <title>James Mitchell — Experience Designer</title>
</svelte:head>

<Saos animation={'fade 1s ease-in-out both'}>
<section id="hero">
  <img src="/james/profile.png" alt="James Mitchell">
  <h2>James <span>{phrase}</span>.</h2>
  <h3>Bath, United Kingdom</h3>
</section>
</Saos>

<Saos animation={'fade 1s ease-in-out both'}>
<section id="experience">
  {#each content as item}
    <div on:click={() => route(item.id)} on:keypress={() => route(item.id)} class="card invert" style="background: {item.color};">
      <h4>{item.residence}</h4>
      <h4>{@html item.project.title}</h4>
    </div>
  {/each}
</section>
</Saos>

<Saos animation={'fade 1s ease-in-out both'}>
<section id="expertise">
  <div>
    <img src="/james/brand-evolution.svg" alt="Brand Evolution">
    <h4>Brand Evolution</h4>
    <p>Becoming a more <br>authentic presence in <br>the marketplace.</p>
  </div>
  <div>
    <img src="/james/digital-products.svg" alt="Digital Products">
    <h4>Digital Products</h4>
    <p>Obsessing over <br>the interactions that <br>deliver meaning.</p>
  </div>
  <div>
    <img src="/james/service-design.svg" alt="Service Design">
    <h4>Service Design</h4>
    <p>Optimising value <br>across customer and <br>employee needs.</p>
  </div>
</section>
</Saos>

<Saos animation={'fade 1s ease-in-out both'}>
<section id="bio">
  <div>
    <h2>Giving form to ideas.</h2>
    <h2>Shaping existence itself.</h2>
    <h2>A privileged responsibility.</h2>
    <p>I design experiences with imagination, care, and hope. Trusting in the act of collaboration and pushing for excellence, as if necessity.<br><br>Over the past 10 years, I’ve worked in many sectors, striving to solve new challenges at each and every turn. The result is a versatile skillset, with no area of design unexplored.</p>
  </div>
  <div>
    <h4>Quick facts</h4>
    <p>👨🏼‍💻 First experimented in code and design at the age of twelve.</p>
    <p>📚 Skipped university to focus on my own syllabus of learning.</p>
    <p>🤔 Maverick approach towards innovation and problem-solving.</p>
    <p>🔥 Mastery of design systems, typography, strategic planning.</p>
  </div>
</section>
</Saos>

<style lang="scss" scoped>
  #hero {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 12rem;
    text-align: center;

    @include phone {
      margin-bottom: 6rem;
    }

    img {
      margin-bottom: 3rem;
      max-width: 30rem;
      width: calc(100% + 6rem);
    }

    h2 {
      margin-bottom: 1.5rem;
    }
  }

  #experience {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 0 auto 12rem auto;

    @include phone {
      flex-direction: column;
    }

    .card {
      border-radius: $border-radius;
      cursor: pointer;
      display: flex;
      flex-direction: column;
      height: 12.5rem;
      padding: 3rem;
      transition: all .5s ease;
      width: calc((100% - 3rem) / 3);

      @include tablet {
        width: calc((100% - 1.5rem) / 2);
      }

      @include phone {
        width: 100%;
      }

      &:hover {
        transform: scale(1.025);
      }

      &:nth-of-type(1),
      &:nth-of-type(2),
      &:nth-of-type(3) {
        margin-bottom: 1.5rem;
      }

      &:nth-of-type(4),
      &:nth-of-type(5) {
        @include phone {
          margin-bottom: 1.5rem;
        }
      }

      h4:first-of-type {
        color: $color-white-060;
      }
    }
  }

  #expertise {
    display: flex;
    justify-content: space-between;
    margin-bottom: 6rem;
    text-align: center;

    @include tablet {
      flex-direction: column;
    }

    div {
      width: calc((100% - 6rem) / 3);

      @include tablet {
        margin-bottom: 3rem;
        width: 100%;

        &:last-of-type {
          margin-bottom: 0;
        }
      }

      img {
        height: 4rem;
        margin-bottom: 3rem;
        width: 4rem;

        @include tablet {
          margin-bottom: 2rem;
        }
      }
    }
  }

  #bio {
    align-items: center;
    background: url('/james/blobs.svg') center right no-repeat;
    background-size: contain;
    display: flex;
    justify-content: space-between;
    padding: 6rem 0;

    @include tablet {
      background-position: bottom center;
      background-size: 24rem;
      flex-direction: column;
    }

    @include phone {
      background: none;
    }

    >div {
      &:first-of-type {
        max-width: 24rem;

        @include tablet {
          margin-bottom: 6rem;
          text-align: center;
        }

        h2 {
          &:first-of-type {
            color: $color-black-040;
          }

          &:first-of-type,
          &:nth-of-type(2) {
            margin-bottom: .25rem;
          }

          &:nth-of-type(2) {
            color: $color-black-060;
          }
        }
      }

      &:nth-of-type(2) {
        background: $color-white-060;
        border-radius: $border-radius;
        box-shadow: 0 0 3rem 0 $color-black-010;
        max-width: 17.5rem;

        @include phone {
          max-width: none;
          width: 100%;
        }

        h4 {
          padding: 1.125rem 1.5rem 1.5rem 1.5rem;
        }

        h4,
        p {
          margin-bottom: 0;
        }

        p {
          border-bottom: 1px solid $color-black-010;
          font-size: 1rem;
          padding: 1.125rem 1.5rem;

          &:first-of-type {
            padding-top: 0;
          }

          &:last-of-type {
            border: 0;
          }
        }
      }
    }
  }
</style>