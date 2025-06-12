export function TimeZonesFilter() {
  const timeZones = Intl.supportedValuesOf("timeZone").filter(
    (zone) =>
      zone.startsWith("America/Sao_Paulo") ||
      zone.startsWith("America/Fortaleza") ||
      zone.startsWith("America/Recife") ||
      zone.startsWith("America/Bahia") ||
      zone.startsWith("America/Belem") ||
      zone.startsWith("America/Manaus") ||
      zone.startsWith("America/Noronha") ||
      zone.startsWith("America/Porto_Velho") ||
      zone.startsWith("America/Boa_Vista") ||
      zone.startsWith("America/Cuiaba") ||
      zone.startsWith("America/Rio_Branco") ||
      zone.startsWith("America/Campo_Grande")
  );

  return timeZones;
}
