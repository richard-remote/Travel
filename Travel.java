/*
Client's address e.g. "432 Main Long Road St. Louisville OH 43071" as a list.
The basic zipcode format usually consists of two capital letters followed by a white space and five digits. 
The list of clients to visit was given as a string of all addresses, each separated from the others by a comma, e.g. :

"123 Main Street St. Louisville OH 43071,432 Main Long Road St. Louisville OH 43071,786 High Street Pollocksville NY 56432".

Group by State and Zipcode

The function travel will take two parameters r 
(addresses' list of all clients' as a string) 
and zipcode and returns a string in the following format:

zipcode:street and town,street and town,.../house number,house number,...

The street numbers must be in the same order as the streets where they belong.
If a given zipcode doesn't exist in the list of clients' addresses return "zipcode:/"

Examples
r = "123 Main Street St. Louisville OH 43071,432 Main Long Road St. Louisville OH 43071,786 High Street Pollocksville NY 56432"

travel(r, "OH 43071") --> "OH 43071:Main Street St. Louisville,Main Long Road St. Louisville/123,432"

travel(r, "NY 56432") --> "NY 56432:High Street Pollocksville/786"

travel(r, "NY 5643") --> "NY 5643:/"
-----
Confirm r contains State/Zipcode
 If not, return SS ZZZZZ:/
 If so,
  Determine whether address is at the start, middle, or end of the list r
   Start
    The index of the first comma should be eight more than that of the first instance of the zipcode
   End
    The index of the zipcode should be eight less than that of the length of the list r
    Also, character at the end of the list r should not be a comma
   Middle
    The zipcode is neither at the start or end of the list
   ***
  Get address
  Get Street Number
  Get Street Name


  Remove address from r
  Output String = "SS ZZZZZ:Street Name1,Street Number1"
Confirm r contains State/Zipcode
 If so,
  Get address
  Get Street Number
  Get Street Name
  Remove address from r
  Output String = "SS ZZZZZ:Street Name1,(add Street Name2)/StreetNumber1,(add Street Name2)"
*/

public class Travel { 
 public static void main (String[] args) { 
  String addresses = "123 Main Street St. Louisville OH 43072,432 Main Long Road St. Louisville OH 43071,786 High Street Pollocksville NY 56432";
  String zipcode = "NY 56432";
  System.out.println(travel(addresses, zipcode));
  //JUST GOOFIN AROUND
 } 

 public static String travel(String r, String zipcode) {
  //Confirm zipcode is of proper length 
   if (zipcode.length() != 8)
    return zipcode + ":/";
  //Confirm zipcode is in the list r
   else if (r.contains(zipcode)) {
  //See if the address is at the beginning of the list
    if (r.indexOf(zipcode) == r.indexOf(",") - 8){
     System.out.println("ADDRESS IS AT THE START");
    }
  //See if the address is at the end of the list
    else if ((r.indexOf(zipcode) == r.length() - 8) && (r.charAt(r.length() - 1) != ',')){
      System.out.println("ADDRESS IS AT THE END");
    }
  //The address must be in the middle of the list
    else{
      System.out.println("ADDRESS IS IN THE MIDDLE");
    }
   return zipcode + ":::::";      
   }
   else {
    System.out.println("Address is not here...");
    return zipcode + ":/";
   }
 }
}
