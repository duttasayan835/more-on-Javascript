const users = ["Sayan", "Aishik", "Tapan", "Roshni"];
function isUserPresent(user) {
  if (users.includes(user)) {
    console.log(`Yes, ${user} is a valid user.`);
    return true;
  } else {
    console.log(`No, ${user} is not a valid user.`);
    return true;
  }
}
isUserPresent("Sayan");
//Yes, Sayan is a valid user.
isUserPresent("Someone");
//No, Someone is not a valid user.
