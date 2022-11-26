import { describe, it, expect } from "vitest";
import { createPinia } from 'pinia';
import { mount } from "@vue/test-utils";
import About from "../../components/About.vue";


var buildComponent = {
    global: {
        plugins: [createPinia()]
    }
    }

describe("HelloWorld", () => {
  it("renders properly", () => {
    const wrapper = mount(About, buildComponent);
    expect(wrapper.text()).toContain("sajid");
  });
});
