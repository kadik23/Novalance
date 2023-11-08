import { FreeLancerHomeVue } from "@/components/freelancer/home";
import UserSessionRepository from "@/libs/UserSessionRepository";
import { defineComponent, onMounted, ref } from "vue";

export default defineComponent({
    name: 'HomeVue',
    components: { FreeLancerHomeVue },
    props: {},
    setup() {
        let account_type = ref(null);

        const userSessionRepository = new UserSessionRepository(localStorage);

        onMounted(async () => {
            account_type.value = await userSessionRepository.getAccountType();
        });

        return { account_type };
    },
});