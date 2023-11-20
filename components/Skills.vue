<template>
    <div class="min-h-screen flex flex-col justify-center items-center gap-5">
        <h2 class="text-5xl md:text-6xl lg:text-7xl font-bold bg-clip-text 
            text-transparent bg-gradient-to-r from-zinc-600 to-zinc-950
            dark:from-white dark:to-gray-400">
                Skills & Experiences
        </h2>
        <p>Over the past few years, I dived in technologies and frameworks of various kinds. These are the technologies I love and use the most:</p>
        <div class="flex flex-col justify-center items-center gap-5 w-2/3 md:w-1/4">
            <SkillProgress name="Java" icon="bxl:java" progress="90"/>
            <SkillProgress name="Python" icon="bxl:python" progress="70"/>
            <SkillProgress name="HTML" icon="bxl:html5" progress="85"/>
            <SkillProgress name="CSS" icon="bxl:css3" progress="70"/>
            <SkillProgress name="JavaScript" icon="bxl:javascript" progress="30"/>
            <SkillProgress name="Vue.JS" icon="bxl:vuejs" progress="60"/>
            <SkillProgress name="React" icon="bxl:react" progress="30"/>
            <SkillProgress name="Docker" icon="bxl:docker" progress="60"/>
            <SkillProgress name="Databases" icon="uil:database" progress="70"/>
        </div>
    </div>
</template>