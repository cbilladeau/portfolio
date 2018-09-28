<template>
    <v-app dark>
        
        <v-content>
            <!-- <navigation id="navigation" /> -->
            <parallax id="hero" />

            <section id="intro">
                <v-layout column align-center>
                    <v-flex xs12>
                        <div class="text-xs-center">
                            <h3 class="display-2 light">What I Do</h3>
                            <div class="headline">I make & break stuff from my studio in Chicago, IL.</div>
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
                                    <v-flex xs12 md6>
                                        <v-card light class="elevation-8">
                                            <v-card-title primary-title class="layout justify-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" class="skill-icon">
                                                    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="./public/code.svg#icon"></use>
                                                </svg>
                                                <v-card-text class="text-xs-center">
                                                    <h4 class="display-1">Frontend Development</h4>
                                                    <div>I prioritize writing accessible, optimized code for fast load times & accessibility for all users.</div>
                                                </v-card-text>
                                            </v-card-title>
                                            <v-card-text>
                                                <!-- <div class="title">Languages</div> -->
                                                <code-bar-chart class="code-bar-chart" />
                                                <ul class="code-bar-chart-legend">
                                                    <li class="color-secondary"># of Years</li>
                                                    <li class="color-accent"># of Projects</li>
                                                </ul>
                                            </v-card-text>
                                            <v-card-text>
                                                <div class="title">CMS & Frameworks</div>
                                                <div>Wordpress, Bootstrap, Material Design</div>
                                            </v-card-text>
                                            <v-card-text>
                                                <div class="title">Tools</div>
                                                <div>WGAC/W3C, Git, Github, Terminal, Homebrew, npm & Yarn, Grunt & Gulp, Webpack & Encore, Agile Development, JIRA, Confluence</div>
                                            </v-card-text>
                                        </v-card>
                                    </v-flex>
                                    <v-flex xs12 md6>
                                        <v-flex xs12>
                                            <v-card light class="elevation-8">
                                                <v-card-title primary-title class="layout justify-center">
                                                    <svg xmlns="http://www.w3.org/2000/svg" class="skill-icon">
                                                        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="./public/pencil-ruler.svg#icon"></use>
                                                    </svg>
                                                    <v-card-text class="text-xs-center">
                                                        <h4 class="display-1">UI Design</h4>
                                                        <div>I design dynamic, responsive-first web apps that put the user experience front & center.</div>
                                                    </v-card-text>
                                                </v-card-title>
                                                <v-card-text>
                                                    <div class="title">Skills</div>
                                                    <div>UX, UI, Wireframing, Mockups, Web, Mobile, Apps, Illustration, Icons & Logos</div>
                                                </v-card-text>
                                                <v-card-text>
                                                    <div class="title">Tools</div>
                                                    <div>UXPin, Axure, Photoshop, Illustrator, InDesign</div>
                                                </v-card-text>
                                            </v-card>
                                        </v-flex>
                                        <v-flex xs12>
                                            <v-card light class="elevation-8">
                                                <v-card-title primary-title class="layout justify-center">
                                                    <svg xmlns="http://www.w3.org/2000/svg" class="skill-icon">
                                                        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="./public/joystick.svg#icon"></use>
                                                    </svg>
                                                    <v-card-text class="text-xs-center">
                                                        <h4 class="display-1">Game Development</h4>
                                                        <div>I'm an <a href="http://billet-deaux.com/" target="_blank" rel="noopener">award-winning illustrator</a> making narrative-based games, too!</div>
                                                    </v-card-text>
                                                </v-card-title>
                                                <v-card-text>
                                                    <div class="title">Design</div>
                                                    <div>UI, UX, 2D Assets, Concept & Environmental Art, Art Direction, Narrative Design</div>
                                                </v-card-text>
                                                <v-card-text>
                                                    <div class="title">Languages & Tools</div>
                                                    <div>JS, Unity, Ink, Twine</div>
                                                </v-card-text>
                                            </v-card>
                                        </v-flex>
                                    </v-flex>
                                </v-layout>
                            </v-container>
                        </v-flex>
                    </v-layout>
                </v-parallax>
            </section>

            <section id="works">
                <v-container name="works">
                    <v-layout row wrap class="my-5">
                        <v-flex xs12>
                            <div class="text-xs-center">
                                <h3 class="display-2 light">I Make Stuff</h3>
                                <div class="subheading light">Cras facilisis mi vitae nunc lobortis pharetra</div>
                            </div>
                        </v-flex>
                    </v-layout>
                    <v-layout row>
                        <gallery />
                    </v-layout>
                </v-container>
            </section>

            <section id="about">
                <v-card light>
                    <v-container name="about">
                        <v-layout light row wrap class="my-5">
                            <v-flex xs12>
                                <div class="text-xs-center">
                                    <h3 class="display-2">Who I Am</h3>
                                    <!-- <div class="subheading">Lorem ipsum dolor sit amet, consectetur adipiscing elit</div> -->
                                </div>
                            </v-flex>
                            <v-flex xs12 md4 class="my-4">
                                <radar-chart :height="175" />
                            </v-flex>
                            <v-flex xs12 md8 class="my-4">
                                <div class="pb-1">Developer & designer by day, illustrator & powerlifter by night.  I'm currently the frontend developer & UI designer at an international nonprofit, working primarily in Wordpress & frameworks like VueJS.</div>
                                <div class="py-1">When I was a kid, I wanted to be an astronomer when I grew up, until I realized how much math was involved.  So I went to art school.  Then got into programming.  Go figure.</div>
                                <div class="pt-3"><em>This portfolio is a work in progress. For resume, samples & more information, contact me:</em></div>
                                <v-list two-line light class="transparent">
                                    <v-list-tile>
                                        <v-list-tile-action>
                                            <v-icon light>email</v-icon>
                                        </v-list-tile-action>
                                        <v-list-tile-content>
                                            <v-list-tile-title>hello@billet-deaux.com</v-list-tile-title>
                                        </v-list-tile-content>
                                    </v-list-tile>
                                </v-list>
                            </v-flex>
                        </v-layout>
                    </v-container>
                </v-card>
            </section>

            <v-footer light>
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
    //import PieChart from './assets/components/PieChart.js'
    import CodeBarChart from './assets/components/CodeBarChart.js'
    //import DesignBarChart from './assets/components/DesignBarChart.js'
    import RadarChart from './assets/components/RadarChart.js'
    import Parallax from './assets/components/Parallax.vue'
    import Gallery from './assets/components/Gallery.vue'

    export default {
        name: 'app',
        components: {
            Navigation,
            //PieChart,
            CodeBarChart,
            //DesignBarChart,
            RadarChart,
            Parallax,
            Gallery
        },
        data () {
            return {
                options: {
                    //licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE'
                }
            }
        }
    }
</script>
