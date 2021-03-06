# vue-digital-flop

> It's a vue component that will count to a target number at a specified duration.

[![vue2](https://img.shields.io/badge/vue-2.x-brightgreen.svg)](https://vuejs.org/)
[![Gemnasium](https://img.shields.io/gemnasium/mathiasbynens/he.svg)](https://github.com/sitonlotus/vue-digital-flop)
[![license](https://img.shields.io/github/license/mashape/apistatus.svg)](https://github.com/sitonlotus/vue-digital-flop)
[![npm](https://img.shields.io/npm/v/vue-count-to.svg)](https://www.npmjs.com/package/vue-digital-flop)

 <!-- [![npm](https://img.shields.io/npm/dm/vue-count-to.svg)](https://npmcharts.com/compare/vue-count-to) -->
 <!-- [![minified](https://badgen.net/bundlephobia/min/vue-count-to)](https://bundlephobia.com/result?p=vue-count-to) -->
 <!-- [![gzip](https://badgen.net/bundlephobia/minzip/vue-count-to)](https://bundlephobia.com/result?p=vue-count-to) -->

vue-digital-flop is a dependency-free, lightweight vue component that can be overwrited easingFn by yourself.
You can set startVal and endVal ,it will automatic judge count up or count down.If you set isFrequent and frequentTime, it will automatic judge count up or count down frequently.
It is support vue-ssr.
It is learn from countUp.js;

## [Try the demo](http://sitonlotus.github.io/digitalFlop/index.html)

### How to use?

```bash
npm install vue-digital-flop
```

### Example

```vue
<template>
	<vue-digital-flop :startVal="startVal" :endVal="endVal" :duration="3000" />
</template>

<script>
import vueDigitalFlop from "vue-digital-flop";
export default {
	components: { vueDigitalFlop },
	data() {
		return {
			startVal: 0,
			endVal: 2021,
		};
	},
};
</script>
```

demo:

![demo](https://github.com/sitonlotus/vue-countTo/blob/master/countDemo.gif)

Use CDN Script: [demo](https://github.com/sitonlotus/vue-digital-flop/blob/master/demo/index.html)

### Options

| Property     | Description                                 |   type   | default |
| ------------ | ------------------------------------------- | :------: | :-----: |
| startVal     | the value you want to begin at              |  Number  |    0    |
| endVal       | the value you want to arrive at             |  Number  |  2021   |
| isFrequent   | the value you want to play frequenly        | Boolean  |  false  |
| frequentTime | the value is automatic frequent change time |  Number  |  5000   |
| duration     | duration in millisecond                     |  Number  |  3000   |
| autoplay     | when mounted autoplay                       | Boolean  |  true   |
| decimals     | the number of decimal places to show        |  Number  |    0    |
| decimal      | the split decimal                           |  String  |    .    |
| separator    | the separator                               |  String  |    ,    |
| prefix       | the prefix                                  |  String  |   ''    |
| suffix       | the suffix                                  |  String  |   ''    |
| useEasing    | is use easing function                      | Boolean  |  true   |
| easingFn     | the easing function                         | Function |    ???    |

** notes: when autoplay:true , it will auto start when startVal or endVal change **

** notes: when isFrequent:true, but you don't set frequentTime, it will auto frequently play every 5000 milliseconds. **

### Functions

|  Function Name  | Description                            |
| :-------------: | -------------------------------------- |
| mountedCallback | when mounted will emit mountedCallback |
|      start      | start the countTo                      |
|      pause      | pause the countTo                      |
|      reset      | reset the countTo                      |
