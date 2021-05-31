({
    clickCreate: function(component, event, helper) {
        // 데이터 유효성 검사 로직.
        let validExpense = component.find('expenseform').reduce(function (validSoFar, inputCmp) {
            inputCmp.showHelpMessageIfInvalid(); //유효하지 않은 값이 있는 경우 에러를 표시.
            return validSoFar && inputCmp.get('v.validity').valid;
        }, true);
        // 유효한 값으로 처리하는 로직.
        if(validExpense){
            // Create the new expense
            let newExpense = component.get("v.newExpense");
            console.log("Create expense: " + JSON.stringify(newExpense));
            helper.createExpense(component, newExpense);
        }
    }
})