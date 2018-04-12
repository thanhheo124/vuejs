new Vue({
  el : "#demo",

  data : {
    columns : ["name", "age"],

    sortKey : '',

    typeSort : 0,

    reverse : false,

    search: '',

    people : [
      {name : "Figo", age : '25'},
      {name : "Thành", age : '23'},
      {name : "Đức", age : '24'},
      {name : "Lâm", age : '17'},
      {name : "Tâm", age : '55'},
      {name : "Six", age : '32'}
    ]
  },

  methods : {
    sortBy : function(sortKey) {
      this.reverse = this.reverse == (this.sortKey == sortKey) ? false : true;
      this.reverse ? this.typeSort = 0 : this.typeSort = -1 ;
      this.sortKey = sortKey;
    }
  }
})
