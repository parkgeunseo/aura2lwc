public with sharing class AccountList {
    @AuraEnabled
    public static List<Account> getAccountList() {
        
        return [SELECT Id, Name FROM Account];

    }
}
