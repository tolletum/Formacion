<template>
  <div id="app">
    <button @click="addQuote(text)">Insert quote</button>
    <input v-model= "text" type="text" name="text">
    <app-quote>
      <p 
        style="cursor: pointer" 
        @click="removeQuote(index)" 
        v-for="(texto, index) in quotes" 
        :key="texto">
        {{ texto }}
      </p>
    </app-quote>
    <p>Número de textos: {{ quotesNumber }}</p>
  </div>

</template>

<script>
import Quote from './components/Quote.vue'

export default {
  name: 'app',
  data: function() {
    return {
      quotesNumber: 0,
      quotes: [],
      text: '',
    }  
  },
  methods: {
    addQuote: function(text) {
      this.quotes.push(text);
      this.quotesNumber++;
    },
    removeQuote: function(index) {
      this.quotes.splice(index, 1);
      this.quotesNumber--;

    }
  },
  components: {
    appQuote: Quote,
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
