({
    init : function(component, event, helper) {
        var action  = component.get("c.getContactList");
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
