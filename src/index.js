import DigitalFlop from "./vue-digital-flop.vue";
export default DigitalFlop;
if (typeof window !== "undefined" && window.Vue) {
	window.Vue.component("vue-digital-flop", DigitalFlop);
}
