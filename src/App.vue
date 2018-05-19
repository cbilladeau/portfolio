<template>
    <v-app>
        <v-toolbar fixed class="elevation-6">
            <v-toolbar-title v-text="title"></v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items>
                    <v-btn flat @click="$vuetify.goTo(target, options)">Works</v-btn>
                    <v-btn flat>About</v-btn>
                    <v-btn flat>Contact</v-btn>
                </v-toolbar-items>
        </v-toolbar>

        <v-content>
            <hero></hero>

            <section id="intro">
                <v-layout column align-center>
                    <v-flex xs12 sm4>
                        <div class="text-xs-center">
                            <h2 class="header-type light display-1">Hi, I'm Cour!</h2>
                            <span class="subheading">
                                I'm making & breaking stuff in Chicago, IL.
                            </span>
                        </div>
                    </v-flex>
                </v-layout>
            </section>

            <section id="skills">
                <v-layout column align-center>
                    <v-flex xs12>
                        <v-container grid-list-xl>
                            <v-layout row wrap>
                                <v-flex xs12 md4>
                                    <v-card class="elevation-4">
                                        <v-card-title primary-title class="layout justify-center">
                                            <div class="text-xs-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" class="skill-icon">
                                                    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="./public/code.svg#icon"></use>
                                                </svg>
                                                <h3 class="header-type headline">Frontend Development</h3>
                                                <div class="subheading">I prioritize writing accessible, optimized code for fast load times & accessibility for all users.</div>
                                            </div>
                                        </v-card-title>
                                        <v-card-text>
                                            <div class="title">Languages</div>
                                            <div>HTML5, CSS, Sass, Less, Stylus, JS, jQuery, VueJS, PHP</div>
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
                                <v-flex xs12 md4>
                                    <v-card class="elevation-4">
                                        <v-card-title primary-title class="layout justify-center">
                                            <div class="text-xs-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" class="skill-icon">
                                                    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="./public/pencil-ruler.svg#icon"></use>
                                                </svg>
                                                <h3 class="header-type headline">UI Design</h3>
                                                <div class="subheading">I design dynamic, responsive-first web apps that put the user experience front & center.</div>
                                            </div>
                                        </v-card-title>
                                        <v-card-text>
                                            <div class="title">Design</div>
                                            <div>UX, UI, Wireframing, Mockups, Web, Mobile, Apps, Icons & Logos</div>
                                        </v-card-text>
                                        <v-card-text>
                                            <div class="title">Tools</div>
                                            <div>UXPin, Axure, Photoshop, Illustrator, InDesign</div>
                                        </v-card-text>
                                    </v-card>
                                </v-flex>
                                <v-flex xs12 md4>
                                    <v-card class="elevation-4">
                                        <v-card-title primary-title class="layout justify-center">
                                            <div class="text-xs-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" class="skill-icon">
                                                    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="./public/joystick.svg#icon"></use>
                                                </svg>
                                                <h3 class="header-type headline">Game Development</h3>
                                                <div class="subheading">I'm an <a href="http://billet-deaux.com/" target="_blank" ref="noopener">award-winning illustrator</a> making narrative-based games, too!</div>
                                            </div>
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
                                    <v-card-title primary-title class="layout justify-center py-5">
                                        <div class="text-xs-center">
                                            <h2 class="headline">About</h2>
                                            <em>Lorem ipsum dolor sit amet, consectetur adipiscing elit</em>
                                        </div>
                                    </v-card-title>
                                    <v-card-text>
                                        <v-container grid-list-lg>
                                            <v-layout row class="py-3">
                                                <v-flex xs6 class="text-xs-center">
                                                    <img src="public/v.png" alt="Vuetify.js">
                                                    <h4 class="headline">owo who's this?</h4>
                                                    <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit amet nunc vel lacus elementum molestie sit amet sed elit.</div>
                                                </v-flex>
                                                <v-flex xs6 class="mx-auto">
                                                    <bar-chart style="max-height: 250px;"></bar-chart>
                                                </v-flex>
                                            </v-layout>
                                            <v-layout row class="py-3">
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
                <v-container grid-list-xl>
                    <v-layout row wrap justify-center class="my-5">
                        <v-flex xs12 sm4>
                            <v-card class="elevation-0 transparent">
                                <v-card-title primary-title class="layout justify-center">
                                    <div class="headline">Company info</div>
                                </v-card-title>
                                <v-card-text>
                                    Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare. 
                                    Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
                                    Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse potenti. 
                                </v-card-text>
                            </v-card>
                        </v-flex>
                        <v-flex xs12 sm4 offset-sm1>
                            <v-card class="elevation-0 transparent">
                                <v-card-title primary-title class="layout justify-center">
                                    <div class="headline">Contact us</div>
                                </v-card-title>
                                <v-card-text>
                                    Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare.
                                </v-card-text>
                                <v-list class="transparent">
                                    <v-list-tile>
                                        <v-list-tile-action>
                                            <v-icon class="text--lighten-2">phone</v-icon>
                                        </v-list-tile-action>
                                        <v-list-tile-content>
                                            <v-list-tile-title>777-867-5309</v-list-tile-title>
                                        </v-list-tile-content>
                                    </v-list-tile>
                                    <v-list-tile>
                                        <v-list-tile-action>
                                            <v-icon class="text--lighten-2">place</v-icon>
                                        </v-list-tile-action>
                                        <v-list-tile-content>
                                            <v-list-tile-title>Chicago, US</v-list-tile-title>
                                        </v-list-tile-content>
                                    </v-list-tile>
                                    <v-list-tile>
                                        <v-list-tile-action>
                                            <v-icon class="text--lighten-2">email</v-icon>
                                        </v-list-tile-action>
                                        <v-list-tile-content>
                                            <v-list-tile-title>john@vuetifyjs.com</v-list-tile-title>
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
                            Made with <a href="https://vuejs.org" target="_blank">VueJS</a> & <a href="https://vuetifyjs.com" target="_blank">Vuetify</a>
                        </div>
                    </v-flex>
                </v-layout>
            </v-footer>
        </v-content>
    </v-app>
</template>

<script>
    import * as easings from 'vuetify/es5/util/easing-patterns'
    import PieChart from './assets/PieChart.js'
    import BarChart from './assets/BarChart.js'
    require('chartjs-plugin-datalabels/dist/chartjs-plugin-datalabels.js')

    export default {
        name: 'app',
        components: {
            PieChart,
            BarChart,
        },
        data () {
            return {
                title: 'c.billadeau',
                type: 'selector',
                selector: '#intro',
                easings: Object.keys(easings),
                hero: Hero
            }
        },
        computed: {
            target () {
                return this[this.type]
            },
            options () {
                return {
                    duration: 600,
                    offset: 200,
                    easing: 'easeInOutCubic'
                }
            },
        }
    }
</script>
