<template>
  <div class="home">
    <h1 class="title">My Todo List</h1>

    <div class="add-sec">
      <input class="inputbox" v-model="item" />
      <button class="addbtn" @click="addItem">ADD NEW</button>
    </div>

    <div class="theList">
      <div v-for="(item, index) in todos" :key="index + item" class="list-item">
        <div v-if="!item.done" class="undone-sec">
          <p class="item">{{ item.name }}</p>
          <button class="btnRemove" @click="dltTodo(item)">❌</button>
          <button class="btnDone" @click="doneTodo(item)">✅</button>
        </div>

        <div v-else class="done-sec">
          <s class="item">{{ item.name }} </s>
          <button class="btnRemove" @click="dltTodo(item)">❌</button>
          <button class="btnDone" @click="doneTodo(item)">Undo</button>
        </div>
      </div>
    </div>
    <button class="clearbtn" @click="dltAll">CLEAR ALL</button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Home",
  components: {},
  data() {
    return {
      item: "", 
    }; 
  },
  computed: {
    ...mapGetters(["todos"]),
  },
  methods: {
    ...mapActions([
      //this is an array of the actions
      "addTodo",
      "dltAll",
      "dltTodo",
      "doneTodo",
    ]),

    addItem() {
      this.addTodo(this.item); 
      this.item = "";
    },
    showthem() {
      console.log(this.todos);
    },
  },
}; 
</script>


<style scoped lang="scss">
html,
body {
  height: 100%;
  background-color: grayscale($color: #a7a4a4);
}

.title {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  background-color: #181f4a;
  color: white;
  font-size: 24px;
  font-weight: 500;
  padding: 12px;
  text-align: center;
}

.add-sec {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: black;
  font-size: 16px;
  text-align: center;

  margin: 16px auto;
  width: 624px;
}

.inputbox {
  font-size: 20px;
  padding: 4px;
  height: 36px;
  border: solid rgb(179, 175, 175) 0.5px;
  border-radius: 4px;
}

.addbtn {
  font-size: 20px;
  padding: 12px;
  margin: 12px;
  background-color: yellow;
  border:grey solid 0.2px;
  border-radius: 8px;
}

.clearbtn {
  font-size: 20px;
  padding: 12px;
  margin: 12px;
  background-color:white;
  border:grey solid 0.2px;
  border-radius: 8px;
}

.theList {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: black;
  font-size: 16px;
  text-align: center;
  width: 624px;
  overflow-y: scroll;
  height: 400px;
  margin: auto;
  border: solid rgb(179, 175, 175) 0.5px;
  border-radius: 4px;
}

.item {
  width: 100px;
}

.btnRemove {
  font-size: 12px;
  padding: 4px;
  height: 36px;
  width: 40px;
}

.btnDone {
  font-size: 12px;
  padding: 4px;
  height: 36px;
  width: 40px;
}

.undone-sec {
  background-color: yellow;
  height: 40px;
  width: 600px;
  text-align: center;
  display: flex;
  justify-content: space-between;
  margin: auto;
  padding: 12px;
  font-size: 20px;
}

.done-sec {
  background-color: grayscale($color: #cec9c9);
  height: 40px;
  width: 600px;
  text-align: center;
  display: flex;
  justify-content: space-between;
  margin: auto;
  padding: 12px;
  font-size: 20px;
}
</style>
