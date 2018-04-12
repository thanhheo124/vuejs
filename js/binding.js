new Vue({
  el : '#binding-class',
  data: {
    isActive: true,
    hasError: true,

    classObject: {
      active: true,
      'text-danger': false
    }
  }
})
