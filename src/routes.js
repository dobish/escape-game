import WelcomeScreen from "@/components/WelcomeScreen";
import Stage_1 from "@/components/Stage_1";
import Stage_2 from "@/components/Stage_2";
import Stage_2b from "@/components/Stage_2b";
import Stage_3 from "@/components/Stage_3";
import Final from "@/components/Final";


export default [
    { path: '/', component: WelcomeScreen },
    { path: '/stage1', component: Stage_1 },
    { path: '/stage2', component: Stage_2 },
    { path: '/stage2b', component: Stage_2b },
    { path: '/stage3', component: Stage_3 },
    { path: '/final', component: Final },

]