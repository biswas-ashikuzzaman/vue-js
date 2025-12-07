<template>
  <div>
    <h1>{{text}}</h1>
    <h1>"This is number": {{numbers}}</h1>
    <h1>"This is Cars Numbers": {{cars[0]}}</h1>
    <h1>"This is Cars obj": {{object}}</h1>
    <button @click="increment">Count is: {{ count }}</button>
  </div>
</template>

<script>
export default {
  // Properties returned from data() become reactive state
  // and will be exposed on `this`.
  data() {
    return {
      count: 0,
      text:"This is home page",
      numbers:34,
      cars:[2,4,5,7],
      object:{ 
        name:"BMW",
        model:"3064"
      }
    }
  },

  // Methods are functions that mutate state and trigger updates.
  // They can be bound as event handlers in templates.
  methods: {
    increment() {
      this.count++
    }
  },
  mounted() {
    console.log(`The initial count is ${this.count}.`)
  }
  
}
</script>

