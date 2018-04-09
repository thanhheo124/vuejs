new Vue ({
  el : '#tasks',
  data: {
      tasks : [{body:"Thiết Kế Web",completed:false},
              {body:"Học trực tuyến",completed:false}
      ],
      newTask: ''
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
    removeTask : function(task){
      this.tasks.$delete(task);
    }
  }
});
