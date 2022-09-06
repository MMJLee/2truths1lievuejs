<script>
</script>
<template>
  <div id="q-app">
    <div class="about-me">
      <div class="about-me-text">
        <p align="left">
          Hi, my name is MyungJae Lee and I am an aspiring software engineer. My
          background is in mechanical engineering (minor in math, many clases in
          CS), but I've always had an interest in math and computer science. I
          currently work as a project manager, but I've recently realized
          computer science is where my passion lies and I have been educating
          myself to become a full-stack developer.
        </p>
        <p align="left">
          I don't have any professional experience yet, and I know that's
          crucial for many employers. However, I need to start somewhere. I
          understand what it is to work with a team and have great communication
          skills. I believe that I can be a great addition to your team with a
          bit of guidance and time.
        </p>
        <q-btn
          class="about-me-buttons"
          color="primary"
          href="https://linkedin.com/in/matthewmjlee"
          label="LinkedIn"
        ></q-btn>
        <q-btn
          class="about-me-buttons"
          color="primary"
          href="https://github.com/mmjlee"
          label="Github"
        ></q-btn>
        <q-btn
          class="about-me-buttons"
          color="primary"
          href="mailto:matthewmjlee@gmail.com"
          icon="mail"
        ></q-btn>
      </div>
      <div class="about-me-resume">
        <embed
          src="https://drive.google.com/file/d/1rCzJlppHZDF6kH27JYh-xX5KivUu6FOR/preview#toolbar=0&navpanes=0&scrollbar=0"
          type="application/pdf"
          width="100%"
          height="100%"
          frameBorder="0"
        />
      </div>
    </div>
  </div>
</template>
<style scoped>
.about-me {
  display: flex;
  align-items: top;
  justify-content: center;
  flex-direction: row;
  height: 100vh;
}
.about-me-text {
  font-size: 20px;
  margin: 100px 50px 0;
  width: 40%;
}
.about-me-resume {
  width: 44%;
  height: 100%;
}
.about-me-buttons {
  margin-right: 10px;
}
</style>