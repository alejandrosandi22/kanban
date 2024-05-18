export function getUsername(email: string) {
  return email.split('@')[0];
}
