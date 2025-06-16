// formatPhone.ts
export function formatPhone(value: string) {
  // Filtra tudo que não é dígito
  const cleaned = value.replace(/\D/g, "");

  if (cleaned.length > 11) {
    return value.slice(0, 15);
  }

  const formattedValue = cleaned
    .replace(/^(\d{2})(\d)/g, "($1) $2")
    .replace(/(\d{4,5})(\d{4})$/, "$1-$2");

  return formattedValue;
}

export function extractPhoneNumber(phone: string) {
  const phoneValue = phone.replace(/[\(\)\s-]/g, "");
  return phoneValue;
}
