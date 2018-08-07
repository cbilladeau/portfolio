<template>
    <v-app>
        
        <v-content>
            <!-- <navigation id="navigation" /> -->
            <parallax id="hero" />

            <section id="intro">
                <v-layout column align-center>
                    <v-flex xs12>
                        <div class="text-xs-center">
                            <h2 class="header-type light display-1">What I Do</h2>
                            <span class="headline">
                                I make & break stuff from my studio in Chicago, IL.
                            </span>
                        </div>
                    </v-flex>
                </v-layout>
            </section>

            <section id="skills">
                <v-parallax src="./public/floral-hero.png">
                    <v-layout column align-center>
                        <v-flex xs12 class="skills-container">
                            <v-container grid-list-xl>
                                <v-layout row wrap>
                                    <v-flex xs12 md6 lg4>
                                        <v-card class="elevation-8">
                                            <v-card-title primary-title class="layout justify-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" class="skill-icon">
                                                    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="./public/code.svg#icon"></use>
                                                </svg>
                                                <v-card-text class="text-xs-center">
                                                    <h3 class="header-type headline">Frontend Development</h3>
                                                    <div>I prioritize writing accessible, optimized code for fast load times & accessibility for all users.</div>
                                                </v-card-text>
                                            </v-card-title>
                                            <div class="title title-type">Languages</div>
                                            <code-bar-chart class="code-bar-chart" :width="250" :height="250" />
                                            <v-card-text>
                                                <div class="title title-type">CMS & Frameworks</div>
                                                <div>Wordpress, Bootstrap, Material Design</div>
                                            </v-card-text>
                                            <v-card-text>
                                                <div class="title title-type">Tools</div>
                                                <div>WGAC/W3C, Git, Github, Terminal, Homebrew, npm & Yarn, Grunt & Gulp, Webpack & Encore, Agile Development, JIRA, Confluence</div>
                                            </v-card-text>
                                        </v-card>
                                    </v-flex>
                                    <v-flex xs12 md6 lg4>
                                        <v-card class="elevation-8">
                                            <v-card-title primary-title class="layout justify-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" class="skill-icon">
                                                    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="./public/pencil-ruler.svg#icon"></use>
                                                </svg>
                                                <v-card-text class="text-xs-center">
                                                    <h3 class="header-type headline">UI Design</h3>
                                                    <div>I design dynamic, responsive-first web apps that put the user experience front & center.</div>
                                                </v-card-text>
                                            </v-card-title>
                                            <v-card-text>
                                                <div class="title title-type">Skills</div>
                                                <div>UX, UI, Wireframing, Mockups, Web, Mobile, Apps, Icons & Logos</div>
                                            </v-card-text>
                                            <v-card-text>
                                                <div class="title title-type">Tools</div>
                                                <div>UXPin, Axure, Photoshop, Illustrator, InDesign</div>
                                            </v-card-text>
                                        </v-card>
                                    </v-flex>
                                    <v-flex xs12 lg4>
                                        <v-card class="elevation-8">
                                            <v-card-title primary-title class="layout justify-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" class="skill-icon">
                                                    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="./public/joystick.svg#icon"></use>
                                                </svg>
                                                <v-card-text class="text-xs-center">
                                                    <h3 class="header-type headline">Game Development</h3>
                                                    <div>I'm an <a href="http://billet-deaux.com/" target="_blank" rel="noopener">award-winning illustrator</a> making narrative-based games, too!</div>
                                                </v-card-text>
                                            </v-card-title>
                                            <v-card-text>
                                                <div class="title title-type">Design</div>
                                                <div>UI, UX, 2D Assets, Concept & Environmental Art, Art Direction, Narrative Design</div>
                                            </v-card-text>
                                            <v-card-text>
                                                <div class="title title-type">Languages & Tools</div>
                                                <div>JS, Unity, Ink, Twine</div>
                                            </v-card-text>
                                        </v-card>
                                    </v-flex>
                                </v-layout>
                            </v-container>
                        </v-flex>
                    </v-layout>
                </v-parallax>
            </section>

            <section id="works">
                <v-container>
                    <v-layout row class="my-5">
                        <v-flex xs12>
                            <div class="text-xs-center">
                                <h2 class="header-type light display-1">I Make Stuff</h2>
                                <em class="subheading">
                                    Cras facilisis mi vitae nunc lobortis pharetra 
                                </em>
                            </div>
                        </v-flex>
                    </v-layout>
                    <v-layout row>
                        <lightbox
                            :images="images">
                        </lightbox>
                    </v-layout>
                </v-container>
            </section>

            <section id="about">
                <v-container name="about">
                    <v-layout row wrap class="my-5">
                        <v-flex xs12>
                            <div class="layout justify-center pt-5">
                                <div class="text-xs-center">
                                    <h2 class="header-type display-1 my-2">Who I Am</h2>
                                    <!-- <em class="subheading">Lorem ipsum dolor sit amet, consectetur adipiscing elit</em> -->
                                </div>
                            </div>
                        </v-flex>
                        <v-flex xs12 md4 class="mb-4">
                            <radar-chart :height="175" />
                        </v-flex>
                        <v-flex xs12 md8>
                            <div class="pb-1">Developer & designer by day, illustrator & powerlifter by night.  I'm currently the UI developer & designer at an international non-profit, working primarily in Wordpress & frameworks like VueJS.</div>
                            <div class="py-1">When I was a kid, I wanted to be an astronomer when I grew up, until I realized how much math was involved.  So I went to art school.  Then got into programming.  Go figure.</div>
                            <div class="pt-3"><em>This portfolio is a work in progress. For samples & more information, contact me:</em></div>
                            <v-list two-line light class="transparent">
                                <v-list-tile>
                                    <v-list-tile-action>
                                        <v-icon light>email</v-icon>
                                    </v-list-tile-action>
                                    <v-list-tile-content>
                                        <!-- <h4 class="headline">Have a cool project?  Let's talk:</h4> -->
                                        <v-list-tile-title>hello@billet-deaux.com</v-list-tile-title>
                                    </v-list-tile-content>
                                </v-list-tile>
                            </v-list>
                        </v-flex>
                    </v-layout>
                </v-container>
            </section>

            <v-footer>
                <v-layout row wrap align-center>
                    <v-flex xs12>
                        <div class="ml-3">
                            &copy; 2018
                        </div>
                    </v-flex>
                </v-layout>
            </v-footer>
        </v-content>
    </v-app>
</template>

<script>
    import Navigation from './assets/components/Navigation.vue'
    import PieChart from './assets/components/PieChart.js'
    import CodeBarChart from './assets/components/CodeBarChart.js'
    import DesignBarChart from './assets/components/DesignBarChart.js'
    import RadarChart from './assets/components/RadarChart.js'
    import Parallax from './assets/components/Parallax.vue'
    import Lightbox from './assets/components/Lightbox.vue'
    require('chartjs-plugin-datalabels/dist/chartjs-plugin-datalabels.js')

    export default {
        name: 'app',
        components: {
            Navigation,
            PieChart,
            CodeBarChart,
            DesignBarChart,
            RadarChart,
            Parallax,
            Lightbox
        },
        data () {
            return {
                options: {
                    //licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE'
                },
                images: ''
            }
        }
    }
</script>
