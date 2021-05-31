({
    myAction : function(component, event) {
        var action  = component.get("c.getAccountList");
        action.setCallback(this, function(response){
            var state = response.getState();
            if(state === "SUSCCESS"){
                var acclist = response.getReturnValue();
                component.set("v.accList",acclist);

            }
        });
        $A.enqueueAction(action);

    }
})
