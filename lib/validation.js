export function validatePhoneNumber(phone) {
  return /^[0-9]{10}$/.test(phone); // Adjust regex for your needs
}