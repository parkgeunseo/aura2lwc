public with sharing class ContactList {
    @AuraEnabled
    public static List<Contact> methodName(){
        try {
            return [SELECT Id, Name FROM Contact];
        } catch (Exception e) {
            return null;
        }
    }

}
