<template>
    <v-app>
        <v-navigation-drawer
            fixed
            :mini-variant="miniVariant"
            :clipped="clipped"
            v-model="drawer"
            app
        >
            <v-list>
                <v-list-tile 
                    value="true"
                    v-for="(item, i) in items"
                    :key="i"
                >
                    <v-list-tile-action>
                        <v-icon v-html="item.icon"></v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title v-text="item.title"></v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
            </v-list>
        </v-navigation-drawer>
        <v-toolbar fixed app :clipped-left="clipped">
            <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
            <v-btn icon @click.stop="miniVariant = !miniVariant">
                <v-icon v-html="miniVariant ? 'chevron_right' : 'chevron_left'"></v-icon>
            </v-btn>
            <v-btn icon @click.stop="clipped = !clipped">
                <v-icon>web</v-icon>
            </v-btn>
            <v-btn icon @click.stop="fixed = !fixed">
                <v-icon>remove</v-icon>
            </v-btn>
            <v-toolbar-title v-text="title"></v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn icon @click.stop="rightDrawer = !rightDrawer">
                <v-icon>menu</v-icon>
            </v-btn>
        </v-toolbar>
        <v-content>
            <v-container fluid>
                <v-slide-y-transition mode="out-in">
                    <section>
                        <v-parallax src="/public/hero.jpg">
                            <v-layout column align-center justify-center>
                                <img src="/public/v.png" alt="Vuetify.js" class="mb-5" />
                                <blockquote>
                                    &#8220;First, solve the problem. Then, write the code.&#8221;
                                    <footer>
                                        <small>
                                            <em>&mdash;John Johnson</em>
                                        </small>
                                    </footer>
                                </blockquote>
                            </v-layout>
                        </v-parallax>
                    </section>
                    <section>
                        <v-container fluid grid-list-md>
                            <v-layout row align-center>
                                <v-flex v-for="i in 3" :key="`4${i}`" xs4>
                                    <v-card dark color="primary">
                                        <v-card-text class="px-0">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut commodo vitae enim et hendrerit. Sed lorem augue, congue at porttitor eu, auctor at ipsum. Morbi iaculis, massa eget posuere luctus, purus augue hendrerit tortor, ut ornare nibh risus sit amet ex. Nulla vulputate ultrices nunc, sed commodo ante finibus sed. Donec ac varius turpis, a volutpat ex. Nullam rhoncus vel est quis blandit. Maecenas rhoncus tristique nisl vel dictum. Cras id volutpat leo. Etiam bibendum neque nisi. Duis in lectus vel neque hendrerit pellentesque.
                                        </v-card-text>
                                        <v-card-text class="px-0">
                                            Nam pellentesque convallis risus fringilla rutrum. Donec condimentum justo eu rhoncus sagittis. Phasellus vulputate, ante nec accumsan volutpat, erat mauris ornare elit, ut lacinia nulla lorem vitae lectus. Etiam faucibus faucibus interdum. Morbi augue ante, tincidunt eu mauris non, lobortis dapibus mi. Ut eu dolor eu dolor venenatis feugiat. Etiam interdum porttitor urna, et accumsan ante dapibus sit amet.
                                        </v-card-text>
                                        <v-card-text class="px-0">
                                            Quisque varius auctor tortor at vestibulum. Vivamus finibus gravida magna, ac hendrerit purus posuere ac. Vivamus dignissim ipsum a neque auctor tincidunt. Nullam eu libero eget dui congue porttitor. Sed pellentesque mauris vel nunc bibendum pretium. Nulla non ante in tortor mattis faucibus ac in velit. Cras a tempus erat. Curabitur sed mattis augue, et auctor lorem. Etiam non ipsum porta, cursus massa ut, vestibulum dui. Pellentesque suscipit non mi vel lobortis. Sed id fermentum turpis. Nam lacinia consequat consectetur. Donec elementum facilisis purus, at laoreet quam.
                                        </v-card-text>
                                    </v-card>
                                </v-flex>
                            </v-layout>
                        </v-container>
                    </section>
                </v-slide-y-transition>
            </v-container>
        </v-content>
        <v-navigation-drawer
            temporary
            :right="right"
            v-model="rightDrawer"
            fixed
        >
            <v-list>
                <v-list-tile @click.native="right = !right">
                    <v-list-tile-action>
                        <v-icon>compare_arrows</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-title>Switch drawer (click me)</v-list-tile-title>
                </v-list-tile>
            </v-list>
        </v-navigation-drawer>
        <v-footer :fixed="fixed" app>
            <span>&copy; 2018</span>
        </v-footer>
    </v-app>
</template>

<script>
    export default {
        data () {
            return {
                clipped: false,
                drawer: false,
                fixed: false,
                items: [
                    { icon: 'bubble_chart', title: 'Inspire' }
                ],
                miniVariant: false,
                right: true,
                rightDrawer: false,
                title: 'c.billadeau'
            }
        }
    }
</script>
