<template>
    <div class="component-container">
      <section class="score-total-wrapper">
        <p>You've got...</p>
        <h3>3500 points!</h3>
        <p>Currently you're on Xth place</p>
        <hr/>
        <p>X points to move up a position</p>
        <hr/>
        <p>Y points to the top</p>
        <hr/>
        <p>Matt is trying to catch up with you, he's only Z points behind</p>
        <hr/>
        <a>Add new exercises</a>
      </section>

    </div>
</template>

<script>
  export default {
    name: "personal-score"
  }
</script>

<style scoped lang="scss">
  .score-total-wrapper {
    width: 30%;
    text-align: center;
    border: crimson dashed thin;
    
    p {
      margin: 0px 0px;
    }
    
    hr {
        border: 0;
        height: 1px;
        background-image: linear-gradient(to right, rgba(248, 12, 58, 0), rgba(248, 12, 58, 1), rgba(248, 12, 58, 0));
    }
  }
</style>
