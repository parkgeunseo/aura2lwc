({
    myAction : function(component, event, helper) {
        // component - 선언해야 component.get.set 가능
        // event - 액션 핸들러를 호출 한 이벤트입니다. 등록한 event를 사용할수 있음. event.getresource()...
        // helper-구성 요소의 도우미, 재사용 가능한 함수의 또 다른 JavaScript 리소스입니다. helper.js에 있는 함수 로드 가능.
        var action  = component.get("c.getAccountList"); // 여기서에서 c 는 서버사이드컨트롤러(APEX 클래스)를 지칭함.
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
