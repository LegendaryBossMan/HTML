var myApp = angular.module("myApp", []);

myApp.service("ContactService", function()
{
  var uid = 1;
  var contacts = [{id : 0, 'name' : '', 'email':'', 'phone':''}];
  //saving new contacts and saving edited existing contact
  this.save = function(contact)
  {
    if(contact.id == null)
    {
      contact.id = uid++;
      contacts.push(contact);
    }
    else
    {
          for( i in contacts)
          {
            if(contacts[i].id == contact.id)
            {
              contacts[i] = contact;
            }
            //the above will save a new contacts
            //and save edits to existing contacts.
          }
    }
    }
    this.get = function(id)
    {
      for(i in contacts)
      {
        if(contacts[i].id == id)
        {
          return contacts[i];
        }
      }
    }
    //Above will search for a contacts

  this.delete = function(id)
  {
    for(i in contacts)
    {
      if(contacts[i].id == id)
      {
        contacts.splice(i, 1);
        //splice deletes
      }
    }
  }
  //Above will delete contacts
this.list = function()
{
  return contacts;
}
  });
//Above shows all Contact Service
//Now the controller area
myApp.controller("ContactController", function($scope, ContactService)
{
$scope.contacts = ContactService.list();

$scope.saveContact = function()
{
  ContactService.save($scope.newcontact);
  $scope.newcontact = {};
}
$scope.delete = function(id)
{
  ContactService.delete(id);
  if($scope.newcontact.id == id)
  {
    $scope.newcontact = {};
  }
}
$scope.edit = function(id)
{
  $scope.newcontact = angular.copy(ContactService.get(id));
}
});
