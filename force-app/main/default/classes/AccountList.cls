public with sharing class AccountList {
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccountList() {
        
        return [SELECT Id, Name FROM Account];

    }
}
