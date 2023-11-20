<template>
<div class="min-h-screen flex flex-col justify-center items-center gap-5 p-5">
      <div class="flex flex-col justify-center items-center gap-3">
        <h1 class="text-5xl md:text-6xl lg:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-zinc-600 to-zinc-950 dark:from-white dark:to-gray-400">Welcome</h1>
        <p class="md:w-1/2 text-center">
          I'm a 20-years-old computer science student with a passion for all things related to computers. Let's connect and explore the possibilities of working together to bring your ideas to life. Get in touch and let's create something amazing!
        </p>
      </div>
      <div class="flex flex-col lg:flex-row gap-5 items-center justify-center">
        <LinkBotton href="https://instagram.com/immnl.shn" class="bg-red-500/90 hover:bg-red-600">
          <Icon name="uil:instagram" size="1.75rem"/>
          Instagram
        </LinkBotton>
        <LinkBotton href="https://discord.com/users/299225879039442944  " class="bg-blue-500/90 hover:bg-blue-600">
          <Icon name="bi:discord" size="1.75rem"/>
          Discord
        </LinkBotton>
        <LinkBotton href="https://github.com/immnlshn" class="bg-zinc-500/90 hover:bg-zinc-600">
          <Icon name="uil:github" size="1.75rem"/>
          Github
        </LinkBotton>
        <LinkBotton href="mailto:me@manu.cologne" class="bg-green-600/90 hover:bg-green-700">
          <Icon name="uil:envelope" size="1.75rem"/>
          Mail
        </LinkBotton>
      </div>
    </div>

</template>