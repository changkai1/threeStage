// Vue.directive("red",function(el){
//     el.style.color="red";
//     el.innerHTML="《"+el.innerHTML+"》"
// });
// Vue.directive("color",function(el,binding){
//     el.style.color=binding.value;
// })

export default {
    red(el){
        el.style.color="red";
        el.innerHTML="《"+el.innerHTML+"》";
    },
    color(el,binding){
        el.style.color=binding.value
    }
}