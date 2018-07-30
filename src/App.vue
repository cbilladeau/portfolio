<template>
    <v-app>
        <v-toolbar fixed class="elevation-6">
            <v-toolbar-title v-text="title"></v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items>
                <v-btn v-for="nav in navs" :key="nav.index" flat ripple :href="nav.target">{{ nav.name }}</v-btn>
            </v-toolbar-items>
        </v-toolbar>

        <v-content>
            <parallax id="hero" />

            <section id="intro">
                <v-layout column align-center>
                    <v-flex xs12 sm4>
                        <div class="text-xs-center">
                            <h2 class="header-type light display-1">Hi, I'm Cour!</h2>
                            <span class="headline">
                                I'm making & breaking stuff in Chicago, IL.
                            </span>
                        </div>
                    </v-flex>
                </v-layout>
            </section>

            <section id="skills">
                <v-layout column align-center>
                    <v-flex xs12 class="skills-container">
                        <v-container grid-list-xl>
                            <v-layout row wrap>
                                <v-flex xs12 sm6 md4>
                                    <v-card class="elevation-4">
                                        <v-card-title primary-title class="layout justify-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="skill-icon">
                                                <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="./public/code.svg#icon"></use>
                                            </svg>
                                            <v-card-text class="text-xs-center">
                                                <h3 class="header-type headline">Frontend Development</h3>
                                                <div>I prioritize writing accessible, optimized code for fast load times & accessibility for all users.</div>
                                            </v-card-text>
                                        </v-card-title>
                                        <v-card-text>
                                            <div class="title title-type">Languages</div>
                                            <div>HTML5, CSS, Sass, Less, Stylus, JS, jQuery, VueJS, PHP</div>
                                        </v-card-text>
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
                                <v-flex xs12 sm6 md4>
                                    <v-card class="elevation-4">
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
                                            <div class="title title-type">Design</div>
                                            <div>UX, UI, Wireframing, Mockups, Web, Mobile, Apps, Icons & Logos</div>
                                        </v-card-text>
                                        <v-card-text>
                                            <div class="title title-type">Tools</div>
                                            <div>UXPin, Axure, Photoshop, Illustrator, InDesign</div>
                                        </v-card-text>
                                    </v-card>
                                </v-flex>
                                <v-flex xs12 sm12 md4>
                                    <v-card class="elevation-4">
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
            </section>

            <section id="about">
                <v-parallax src="">
                    <v-container name="about">
                        <v-layout row class="my-5">
                            <v-flex xs12>
                                <v-card class="elevation-4">
                                    <v-card-title primary-title class="layout justify-center pt-5">
                                        <div class="text-xs-center">
                                            <h2 class="header-type display-1">About</h2>
                                            <em class="subheading">Lorem ipsum dolor sit amet, consectetur adipiscing elit</em>
                                        </div>
                                    </v-card-title>
                                    <v-card-text>
                                        <v-container grid-list-lg>
                                            <v-layout row>
                                                <v-flex xs6 class="text-xs-center">
                                                    <h4 class="headline">owo who's this?</h4>
                                                    <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit amet nunc vel lacus elementum molestie sit amet sed elit.</div>
                                                </v-flex>
                                                <v-flex xs6 class="mx-auto">
                                                    <bar-chart style="max-height: 250px;"></bar-chart>
                                                </v-flex>
                                            </v-layout>
                                            <v-layout row>
                                                <v-flex xs3 class="text-xs-center">
                                                    <h4 class="headline">Part Designer</h4>
                                                    <ul>
                                                        <li>UX design</li>
                                                        <li>UI design</li>
                                                        <li>Interaction design</li>
                                                        <li>Research</li>
                                                        <li>Making it 'pop'</li>
                                                    </ul>
                                                    <h4 class="headline">Part Coder</h4>
                                                    <ul>
                                                        <li>Frontend development</li>
                                                        <li>HTML / CSS</li>
                                                        <li>JavaScript</li>
                                                        <li>Eating pizza</li>
                                                        <li>Swearing at computer</li>
                                                    </ul>
                                                </v-flex>
                                                <v-flex xs6>
                                                    <pie-chart></pie-chart>
                                                </v-flex>
                                                <v-flex xs3 class="text-xs-center">
                                                    text
                                                </v-flex>
                                            </v-layout>
                                        </v-container>
                                    </v-card-text>
                                </v-card>
                            </v-flex>
                        </v-layout>
                    </v-container>
                </v-parallax>
            </section>

            <section id="works">
                <v-container>
                    <v-layout row class="my-5">
                        <v-flex xs12>
                            <div class="text-xs-center">
                                <h2 class="header-type light display-1">Works</h2>
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

            <section id="contact">
                <v-container grid-list-xl>
                    <v-layout row wrap justify-center class="my-5">
                        <v-flex xs12>
                            <v-card class="elevation-0 transparent">
                                <v-card-title primary-title class="layout justify-center">
                                    <div class="header-type display-1">Contact</div>
                                </v-card-title>
                                <v-card-text>
                                    This portfolio is under development.  For resume & other inquires:
                                </v-card-text>
                                <v-list light class="transparent">
                                    <v-list-tile>
                                        <v-list-tile-action>
                                            <v-icon light>email</v-icon>
                                        </v-list-tile-action>
                                        <v-list-tile-content>
                                            <v-list-tile-title>hello@billet-deaux.com</v-list-tile-title>
                                        </v-list-tile-content>
                                    </v-list-tile>
                                </v-list>
                            </v-card>
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
    import PieChart from './assets/PieChart.js'
    import BarChart from './assets/BarChart.js'
    import Parallax from './assets/Parallax.vue'
    import Lightbox from './assets/Lightbox.vue'
    require('chartjs-plugin-datalabels/dist/chartjs-plugin-datalabels.js')

    export default {
        name: 'app',
        components: {
            PieChart,
            BarChart,
            Parallax,
            Lightbox
        },
        data () {
            return {
                title: 'c.billadeau',
                images: '',
                navs: [
                {
                    name: 'Works',
                    target: '#works'
                },
                {
                    name: 'About',
                    target: '#about'
                },
                {
                    name: 'Contact',
                    target: '#contact'
                }
                ]
            }
        }
    }
</script>
