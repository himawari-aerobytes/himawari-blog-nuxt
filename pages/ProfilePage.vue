<template>
    <v-container fluid class="box-border">
        <div class="pb-3 mb-5 border-b-2">
            <v-row class="ml-1">
                <v-avatar class="my-auto" size="64">
                    <img src="/img/TTStsY9S_400x400.jpg" alt="Avatar" />
                </v-avatar>
                <v-col>
                    <v-card-title class="headline">羽ばたくエンジニア</v-card-title>
                    <v-card-subtitle>職業：ITコンサルタント</v-card-subtitle>
                </v-col>
            </v-row>
        </div>

        <div>
            <h1 class="tracking-widest text-3xl mb-5">Profile</h1>
            <v-row>
                <v-col>
                    <!--職歴欄-->
                    <v-card class="min-w-[300px]">
                        <img class="object-cover w-full h-[100px]" src="/img/job.jpeg" />
                        <v-card-title>
                            職歴･学歴
                        </v-card-title>

                        <v-card-subtitle>
                            History
                        </v-card-subtitle>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn :icon="isHistoryShow ? 'mdi-chevron-up' : 'mdi-chevron-down'"
                                @click="isHistoryShow = !isHistoryShow"></v-btn>
                        </v-card-actions>
                        <v-expand-transition>
                            <div v-show="isHistoryShow">
                                <v-divider></v-divider>

                                <v-card-text>
                                    <v-list lines="two">
                                        <v-list-item title="U株式会社" subtitle="大手キャリアのオンラインショップ刷新プロジェクトに参画"></v-list-item>
                                        <v-list-item title="U株式会社" subtitle="大手証券会社向けミドルシステム刷新プロジェクトに参画"></v-list-item>
                                        <v-list-item title="H大学情報メディア教育研究センター（在学中）"
                                            subtitle="大学教育と情報システムについて研究"></v-list-item>
                                        <v-list-item title="H大学･理工学部(在学中)"
                                            subtitle="情報系学科で、アルゴリズムやデータ分析を主として研究"></v-list-item>

                                    </v-list>
                                </v-card-text>
                            </div>
                        </v-expand-transition>
                    </v-card>

                </v-col>
                <v-col>
                    <!--資格欄-->
                    <v-card class="min-w-[300px]">
                        <img class="object-cover w-full h-[100px]" src="/img/license.jpeg">
                        <v-card-title>
                            資格
                        </v-card-title>

                        <v-card-subtitle>
                            License
                        </v-card-subtitle>

                        <v-card-actions>

                            <v-spacer></v-spacer>

                            <v-btn :icon="isLicenseShow ? 'mdi-chevron-up' : 'mdi-chevron-down'"
                                @click="isLicenseShow = !isLicenseShow"></v-btn>
                        </v-card-actions>

                        <v-expand-transition>
                            <div v-show="isLicenseShow">
                                <v-divider></v-divider>

                                <v-card-text>
                                    <v-list lines="one">
                                        <v-list-item title="AWS認定 Solution Architect Associate"></v-list-item>
                                        <v-list-item title="基本情報技術者試験合格"></v-list-item>
                                        <v-list-item title="普通運転免許(AT限定)"></v-list-item>
                                        <v-list-item title="ITパスポート試験合格"></v-list-item>
                                    </v-list>
                                </v-card-text>
                            </div>
                        </v-expand-transition>
                    </v-card>
                </v-col>
                <v-col>
                    <!--趣味欄-->
                    <v-card class="min-w-[300px]">
                        <img class="object-cover w-full h-[100px]" src="/img/hobby.jpeg" />
                        <v-card-title>
                            趣味
                        </v-card-title>

                        <v-card-subtitle>
                            Hobbies
                        </v-card-subtitle>

                        <v-card-actions>

                            <v-spacer></v-spacer>

                            <v-btn :icon="isHobbiesShow ? 'mdi-chevron-up' : 'mdi-chevron-down'"
                                @click="isHobbiesShow = !isHobbiesShow"></v-btn>
                        </v-card-actions>

                        <v-expand-transition>
                            <div v-show="isHobbiesShow">
                                <v-divider></v-divider>

                                <v-card-text>
                                    <v-list lines="three">
                                        <v-list-item title="動画編集"
                                            subtitle="高校時代放送部で、全国大会優秀賞を受賞。現在も、細々とYouTubeに動画を掲載している"></v-list-item>
                                        <v-list-item title="写真･動画撮影" subtitle="α6700で、旅行の記録などをつけている"></v-list-item>
                                        <v-list-item title="航空機" subtitle="航空機に乗る･操縦する･撮影する･無線を聞くことが好き"></v-list-item>
                                        <v-list-item title="プログラミング" subtitle="休日は必ずコードを書く。ものづくりが大好き"></v-list-item>
                                    </v-list>
                                </v-card-text>
                            </div>
                        </v-expand-transition>
                    </v-card>
                </v-col>
                <v-col>
                    <!--ひとりごと欄-->
                    <v-card class="min-w-[300px]">
                        <img class="object-cover w-full h-[100px]" src="/img/Monologue.jpeg" />
                        <v-card-title>
                            ひとりごと
                        </v-card-title>

                        <v-card-subtitle>
                            monologue
                        </v-card-subtitle>

                        <v-card-actions>

                            <v-spacer></v-spacer>

                            <v-btn :icon="isMonologueShow ? 'mdi-chevron-up' : 'mdi-chevron-down'"
                                @click="isMonologueShow = !isMonologueShow"></v-btn>
                        </v-card-actions>

                        <v-expand-transition>
                            <div v-show="isMonologueShow">
                                <v-divider></v-divider>

                                <v-card-text>
                                    ｢It's a piece of cake!｣（楽勝だよ！）の精神を大切にしてます（笑）
                                    漫画あんまり読まないんですが、BookOFFで宇宙兄弟の漫画を大人買いしたので、休日にゆっくり読みたいと思います。
                                </v-card-text>
                            </div>
                        </v-expand-transition>
                    </v-card>

                </v-col>
            </v-row>
        </div>
        <h1 class="tracking-widest text-3xl mb-5">YouTube活動</h1>
        <h2 class="text-2xl">フライト体験動画</h2>
        <iframe class="mt-5" src="https://www.youtube.com/embed/Pl58HnModJc?si=V3EsuVMvOOpGSh5p"
            title="YouTube video player" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen></iframe>



    </v-container>
</template>

<script lang="ts">
export default {
    data: function () {
        return {
            isHistoryShow: true,
            isLicenseShow: true,
            isHobbiesShow: true,
            isMonologueShow: true,
            post: <ContentType>new Object()
        }
    }
};
</script>
<style scoped lang="scss">
.v-list-item-title {
    overflow: "" !important;
    white-space: "normal" !important;
}
</style>