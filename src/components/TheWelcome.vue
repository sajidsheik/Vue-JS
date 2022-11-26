<template>
  <h1>Bank Account Balance</h1>
  <p>{{ $filters.currencyUSD(accountBalance) }}</p>

  {{ itemname }}
  <ul>
    <li :key="item" v-for="item in items">
      {{ item.message }}
    </li>
  </ul>

  {{ fullname }}

  <button @click="isDanger = !isDanger">Toggle danger</button>
  <div :class="{ danger: isDanger, safe: !isDanger }" style="margin-top: 15px">
    {{ isDanger ? "Danger" : "Safe" }}
  </div>

  <HelloWorld msg="Message from parent" @say-hi="handleSayHi" />

  Loading the task
  <div v-if="showTask">
    TaskId: {{ userdetails.id }} userId: {{ userdetails.userId }} completed:
    {{ userdetails.completed }}
  </div>
  <WelcomeItem v-if="showFirstItem">
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>Documentation</template>

    Vue’s
    <a href="https://vuejs.org/" target="_blank" rel="noopener"
      >official documentation</a
    >
    provides you with all information you need to get started.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <ToolingIcon />
    </template>
    <template #heading>Tooling</template>

    This project is served and bundled with
    <a
      href="https://vitejs.dev/guide/features.html"
      target="_blank"
      rel="noopener"
      >Vite</a
    >. The recommended IDE setup is
    <a href="https://code.visualstudio.com/" target="_blank" rel="noopener"
      >VSCode</a
    >
    +
    <a
      href="https://github.com/johnsoncodehk/volar"
      target="_blank"
      rel="noopener"
      >Volar</a
    >. If you need to test your components and web pages, check out
    <a href="https://www.cypress.io/" target="_blank" rel="noopener">Cypress</a>
    and
    <a href="https://on.cypress.io/component" target="_blank"
      >Cypress Component Testing</a
    >.

    <br />

    More instructions are available in <code>README.md</code>.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <EcosystemIcon />
    </template>
    <template #heading>Ecosystem</template>

    Get official tools and libraries for your project:
    <a href="https://pinia.vuejs.org/" target="_blank" rel="noopener">Pinia</a>,
    <a href="https://router.vuejs.org/" target="_blank" rel="noopener"
      >Vue Router</a
    >,
    <a href="https://test-utils.vuejs.org/" target="_blank" rel="noopener"
      >Vue Test Utils</a
    >, and
    <a href="https://github.com/vuejs/devtools" target="_blank" rel="noopener"
      >Vue Dev Tools</a
    >. If you need more resources, we suggest paying
    <a
      href="https://github.com/vuejs/awesome-vue"
      target="_blank"
      rel="noopener"
      >Awesome Vue</a
    >
    a visit.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <CommunityIcon />
    </template>
    <template #heading>Community</template>

    Got stuck? Ask your question on
    <a href="https://chat.vuejs.org" target="_blank" rel="noopener">Vue Land</a
    >, our official Discord server, or
    <a
      href="https://stackoverflow.com/questions/tagged/vue.js"
      target="_blank"
      rel="noopener"
      >StackOverflow</a
    >. You should also subscribe to
    <a href="https://news.vuejs.org" target="_blank" rel="noopener"
      >our mailing list</a
    >
    and follow the official
    <a href="https://twitter.com/vuejs" target="_blank" rel="noopener"
      >@vuejs</a
    >
    twitter account for latest news in the Vue world.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <SupportIcon />
    </template>
    <template #heading>Support Vue</template>

    As an independent project, Vue relies on community backing for its
    sustainability. You can help us by
    <a href="https://vuejs.org/sponsor/" target="_blank" rel="noopener"
      >becoming a sponsor</a
    >.
  </WelcomeItem>
</template>

<script setup lang="ts">
import WelcomeItem from "./WelcomeItem.vue";
import DocumentationIcon from "./icons/IconDocumentation.vue";
import ToolingIcon from "./icons/IconTooling.vue";
import EcosystemIcon from "./icons/IconEcosystem.vue";
import CommunityIcon from "./icons/IconCommunity.vue";
import SupportIcon from "./icons/IconSupport.vue";
import { ref, computed, onMounted, watch, onUnmounted, onBeforeMount } from "vue";
import HelloWorld from "./HelloWorld.vue";
import axios from "axios";

const item = "strind";
const items = ref([
  { message: "Foo" },
  { message: "Bar" },
  { message: "example" },
]);


let username = "sakjid";
username = "sam";
let itemname = ref<string>("sajid");

itemname.value = "sak"

itemname.value = "Ram";
let showTask = ref<boolean>(false);
let userdetails = ref({});

function handleSayHi(msg) {
  alert(""+ msg);
}

const showFirstItem = computed(() => {
  if (items.value.length == 3) {
    return true;
  }
  return false;
});





const username1 = computed(() => {
return "sajid" + "sheik";
});

const isDanger = ref<boolean>(false);

watch(isDanger, () => {
console.log("showFirstItem value got changed");
});

const firstName = "Ravi";
const lastName = "Kumar";
const fullName = computed(() => {
  return firstName + lastName;
});

// class toggling

// global filters
const accountBalance = 100;

async function fetchData() {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/todos/1"
  );
  const data = response.data;
  userdetails.value = data;
  showTask.value = true;
  
}

onBeforeMount(() => {

})


onMounted(() => {
  fetchData();
});

onUnmounted(() => {
  console.log("hi")
})

// watch(showTask, () => {
//   alert("task is loaded");
// })
</script>
<style scoped>
.danger {
  color: red;
}
</style>
