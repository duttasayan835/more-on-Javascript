function otpgenrator() {
  const max = 999999;
  const min = 100000;
  const otp = Math.floor(Math.random() * (max - min + 1) + min);
  return otp.toString();
}
console.log(`Here is your otp ${otpgenrator()}`);
