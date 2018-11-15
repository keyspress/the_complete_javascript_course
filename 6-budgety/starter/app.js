// ***********************************************************************
// ***********************************************************************
//                          BUDGET CONTROLLER MODULE
// ***********************************************************************
// ***********************************************************************

var budgetController = (function() {
  // code
})();

// ***********************************************************************
// ***********************************************************************
//                           UI CONTROLLER MODULE
// ***********************************************************************
// ***********************************************************************

var UIController = (function() {
  // Code
})();

// ***********************************************************************
// ***********************************************************************
//                         GLOBAL APP CONTROLLER MODULE
// ***********************************************************************
// ***********************************************************************

var controller = (function(budgetCtrl, UICtrl) {
  var ctrlAddItem = function() {
    // 1. get field input data
    // 2. add item to budget controller
    // 3. add item to ui
    // 4. calculate budget
    // 5. display budget on ui
    console.log('ctrl add');
  };

  document.querySelector('.add__btn').addEventListener('click', ctrlAddItem);

  document.addEventListener('keypress', function(event) {
    if (event.keyCode === 13 || event.which === 13) {
      ctrlAddItem();
    }
  });
})(budgetController, UIController);
