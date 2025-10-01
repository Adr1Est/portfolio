export const getAge = () => {
  const today = new Date();
  const bornDate = new Date("Jul 22, 1998");

  let age = today.getFullYear() - bornDate.getFullYear();
  const month = today.getMonth() - bornDate.getMonth();

  if (month < 0 || (month === 0 && today.getDate() < bornDate.getDate())) {
    age--;
  }

  return age;
}