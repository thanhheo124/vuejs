new Vue ({
  el : '#tasks',
  data: {
      tasks : [{body:"Thiết Kế Web",completed:false},
              {body:"Học trực tuyến",completed:false}
      ],
      newTask: ''
  },

  filters: {
    inProcess : function(tasks,index) {
      return tasks.filter(function(task){
        return  !task.completed;
      })
    }
  },

  methods: {
    addTask : function(event){
      event.preventDefault();
      this.tasks.push({
        body : this.newTask,
        completed : false
      });
      this.newTask = '';
    },
    removeTask : function(index){
      this.tasks.splice(index,1);
    },
    editTask : function (index,task) {
      // removeTask
      this.removeTask(index);
      // update Input tag
      this.newTask = task.body;
    },
    completeTask : function(task) {
      task.completed = true;
    }
  }

});
