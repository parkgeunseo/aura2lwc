public with sharing class ContactList {
    @AuraEnabled(cacheable=true)
    public static List<Contact> getContactList(){
        try {
            return [SELECT Id, Name FROM Contact];
        } catch (Exception e) {
            return null;
        }
    }

}
