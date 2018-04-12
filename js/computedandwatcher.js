var vm = new Vue({
  el: '#example',
  data: {
    message: 'Anh em Guru team'
  },
  computed: {
    // một computed getter
    reversedMessage: function () {
      // `this` trỏ tới đối tượng vm
      return this.message.split(' ').reverse().join(' ')
    }
  }
})


// Dùng watch
var vm = new Vue({
  el: '#demo1',
  data: {
    firstName: 'Trần',
    lastName: 'Lập',

  },
  watch: {
    firstName: function () {
      this.fullName =  + ' ' + this.lastName
    },
    lastName: function (val) {
      this.fullName = this.firstName + ' '
    }
  }
})
// Dùng computed

var vm = new Vue({
  el: '#demo2',
  data: {
    firstName: 'Evan',
    lastName: 'You'
  },
  computed: {
    fullName: function () {
      return this.firstName + ' ' + this.lastName
    }
  }
})
