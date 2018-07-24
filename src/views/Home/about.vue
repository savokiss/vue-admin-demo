<template>
  <div class="about">
    <section class="todoapp">
      <header class="header">
        <h1>{{title}}</h1>
        <input class="new-todo" placeholder="What needs to be done" v-model.trim="newTodo" @keyup.enter="addTodo">
      </header>
      <section class="section">
        <input id="toggle-all" class="toggle-all" type="checkbox" v-model="isall">
        <label for="toggle-all">Mark all as complete</label>
        <ul class="todo-list">
          <li v-bind:class="{completed:todo.completed}" v-for="(todo, index) in filteredList(filterType)" :key="index">
            <div class="view">
              <input class="toggle" type="checkbox" v-model="todo.completed">
              <label>{{todo.content}}</label>
              <button class="destroy" @click="removeTodo(index)"></button>
            </div>
            <input class="edit" value="Create a TodoMVC template">
          </li>
        </ul>
      </section>
      <footer class="footer" v-show="todos.length">
        <span class="todo-count">
          <strong>{{remain}}</strong> item left</span>
        <ul class="filters">
          <li>
            <a :class="{ selected: filterType === 'all'}" @click="onFilterAll">All</a>
          </li>
          <li>
            <a :class="{ selected: filterType === 'active'}" @click="onFilterActive">Active</a>
          </li>
          <li>
            <a :class="{ selected: filterType === 'completed'}" @click="onFilterCompleted">Completed</a>
          </li>
        </ul>
        <button class="clear-completed" @click="clear">Clear completed</button>
      </footer>
    </section>
  </div>
</template>
<script>
var filters = {
  all (todos) {
    return todos
  },
  active (todos) {
    return todos.filter((todo) => {
      return !todo.completed
    })
  },
  completed (todos) {
    return todos.filter((todo) => {
      return todo.completed
    })
  }
}
export default {
  data () {
    return {
      title: 'todos',
      newTodo: '',
      todos: [],
      filterType: 'all'
    }
  },
  computed: {
    remain () {
      return filters.active(this.todos).length
    },
    isall: {
      get () {
        return this.remain === 0
      },
      set (value) {
        this.todos.forEach((todos) => {
          todos.completed = value
        })
      }
    }
  },
  methods: {
    addTodo () {
      if (!this.newTodo) {
        return
      }
      this.todos.push({
        content: this.newTodo,
        completed: false
      })
      this.newTodo = ''
    },
    removeTodo (index) {
      this.todos.splice(index, 1)
    },
    clear () {
      this.todos = filters.active(this.todos)
    },
    // 过滤后的数据
    filteredList (type = 'all') {
      return filters[type](this.todos)
    },
    onFilterAll () {
      this.filterType = 'all'
    },
    onFilterActive () {
      this.filterType = 'active'
    },
    onFilterCompleted () {
      this.filterType = 'completed'
    }
  }
}
</script>
<style lang="scss">
.about {
  width: 800px;
  margin: 0 auto;
  padding-top: 120px;
  padding-bottom: 100px;
}
button {
  margin: 0;
  padding: 0;
  border: 0;
  background: none;
  font-size: 100%;
  vertical-align: baseline;
  font-family: inherit;
  font-weight: inherit;
  color: inherit;
  -webkit-appearance: none;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
:focus {
  outline: 0;
}
.hidden {
  display: none;
}
.todoapp {
  background: #fff;
  position: relative;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1);
  input {
    &::-webkit-input-placeholder,
    &::-moz-placeholder,
    &::input-placeholder {
      font-style: italic;
      font-weight: 300;
      color: #fff;
    }
  }
  h1 {
    position: absolute;
    top: -120px;
    width: 100%;
    font-size: 80px;
    font-weight: 100;
    text-align: center;
    color: rgba(175, 47, 47, 0.15);
    -webkit-text-rendering: optimizeLegibility;
    -moz-text-rendering: optimizeLegibility;
    text-rendering: optimizeLegibility;
  }
}
.new-todo,
.edit {
  position: relative;
  margin: 0;
  width: 100%;
  font-size: 24px;
  font-family: inherit;
  font-weight: inherit;
  line-height: 1.4em;
  border: 0;
  color: inherit;
  padding: 6px;
  border: 1px solid #999;
  box-shadow: inset 0 -1px 5px 0 rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.new-todo {
  padding: 16px 16px 16px 60px;
  border: none;
  background: rgba(0, 0, 0, 0.003);
  box-shadow: inset 0 -2px 1px rgba(0, 0, 0, 0.03);
}
.section {
  position: relative;
  z-index: 2;
  border-top: 1px solid #e6e6e6;
}
.toggle-all {
  width: 1px;
  height: 1px;
  border: none;
  opacity: 0;
  position: absolute;
  right: 100%;
  bottom: 100%;
  + label {
    width: 60px;
    height: 34px;
    font-size: 0;
    position: absolute;
    top: -52px;
    left: -13px;
    -webkit-transform: rotate(90deg);
    transform: rotate(90deg);
    &:before {
      content: '❯';
      font-size: 22px;
      color: #e6e6e6;
      padding: 10px 27px 10px 27px;
    }
  }
  &:checked + label:before {
    color: #737373;
  }
}
.todo-list {
  margin: 0;
  padding: 0;
  list-style: none;
  li {
    position: relative;
    font-size: 24px;
    border-bottom: 1px solid #ededed;
    &:last-child {
      border-bottom: none;
    }
    &.editing {
      border-bottom: none;
      padding: 0;
      .edit {
        display: block;
        width: 506px;
        padding: 12px 16px;
        margin: 0 0 0 43px;
      }
      .view {
        display: none;
      }
    }
    .toggle {
      text-align: center;
      width: 40px;
      height: auto;
      position: absolute;
      top: 0;
      bottom: 0;
      margin: auto 0;
      border: none;
      -webkit-appearance: none;
      opacity: 0;
      + label {
        background-image: url('data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%22-10%20-18%20100%20135%22%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%2250%22%20fill%3D%22none%22%20stroke%3D%22%23ededed%22%20stroke-width%3D%223%22/%3E%3C/svg%3E');
        background-repeat: no-repeat;
        background-position: center left;
      }
      &:checked + label {
        background-image: url('data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%22-10%20-18%20100%20135%22%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%2250%22%20fill%3D%22none%22%20stroke%3D%22%23bddad5%22%20stroke-width%3D%223%22/%3E%3Cpath%20fill%3D%22%235dc2af%22%20d%3D%22M72%2025L42%2071%2027%2056l-4%204%2020%2020%2034-52z%22/%3E%3C/svg%3E');
      }
    }
    label {
      word-break: break-all;
      padding: 15px 15px 15px 60px;
      display: block;
      line-height: 1.2;
      transition: color 0.4s;
    }
    &.completed label {
      color: #d9d9d9;
      text-decoration: line-through;
    }
    .destroy {
      display: none;
      position: absolute;
      top: 0;
      right: 10px;
      bottom: 0;
      width: 40px;
      height: 40px;
      margin: auto 0;
      font-size: 30px;
      color: #cc9a9a;
      margin-bottom: 11px;
      transition: color 0.2s ease-out;
      &:hover {
        color: #af5b5e;
      }
      &:after {
        content: '×';
      }
    }
    &:hover .destroy {
      display: block;
    }
    .edit {
      display: none;
    }
    &.editing:last-child {
      margin-bottom: -1px;
    }
  }
}
.footer {
  color: #777;
  padding: 10px 15px;
  height: 34px;
  text-align: center;
  border-top: 1px solid #e6e6e6;
  &:before {
    content: '';
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    height: 50px;
    overflow: hidden;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2), 0 8px 0 -3px #f6f6f6,
      0 9px 1px -3px rgba(0, 0, 0, 0.2), 0 16px 0 -6px #f6f6f6,
      0 17px 2px -6px rgba(0, 0, 0, 0.2);
  }
}
.todo-count {
  float: left;
  text-align: left;
  strong {
    font-weight: 300;
  }
}
.filters {
  margin: 0;
  padding: 0;
  list-style: none;
  position: absolute;
  right: 0;
  left: 0;
  li {
    display: inline;
    a {
      color: inherit;
      margin: 3px;
      padding: 3px 7px;
      text-decoration: none;
      border: 1px solid transparent;
      border-radius: 3px;
      &:hover {
        border-color: rgba(175, 47, 47, 0.1);
      }
      &.selected {
        border-color: rgba(175, 47, 47, 0.2);
      }
    }
  }
}
.clear-completed,
html .clear-completed:active {
  float: right;
  position: relative;
  line-height: 20px;
  text-decoration: none;
  cursor: pointer;
}
.clear-completed:hover {
  text-decoration: underline;
}
.info {
  margin: 65px auto 0;
  color: #bfbfbf;
  font-size: 10px;
  text-shadow: 0 1px 0 rgba(255, 255, 255, 0.5);
  text-align: center;
  p {
    line-height: 1;
  }
  a {
    color: inherit;
    text-decoration: none;
    font-weight: 400;
    &:hover {
      text-decoration: underline;
    }
  }
}
</style>
