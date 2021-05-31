({
    myAction : function(component, event) {
        var action  = component.get("c.getAccountList");
        action.setCallback(this, function(response){
            var state = response.getState();
            if(state === "SUCCESS"){
                var acclist = response.getReturnValue();
                component.set("v.accList",acclist);

            }
            console.log("acclist : "  +acclist);
        });
        $A.enqueueAction(action);

    }
})
