import VueDigitalFlop from "./vue-digital-flop.vue";
export default VueDigitalFlop;
if (typeof window !== "undefined" && window.Vue) {
	window.Vue.component("vue-digital-flop", VueDigitalFlop);
}
