({
    init : function(component, event, helper) {
        var action  = component.get("c.getContactList");
        action.setCallback(this, function(response){
            var state = response.getState();
            if(state === "SUCCESS"){
                var conlist = response.getReturnValue();
                component.set("v.contactList",conlist);

            }
            console.log("contactList : "  +conlist);
        });
        $A.enqueueAction(action);

    }
})
