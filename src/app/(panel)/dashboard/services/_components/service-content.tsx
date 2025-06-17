import { getAllServices } from "../_data-access/get-all-services";
import { ServiceList } from "./services-list";

interface ServiceContentProps {
  userId: string;
}
export async function ServicesContent({ userId }: ServiceContentProps) {
  const services = await getAllServices({ userId: userId });
  return (
    <>
      <ServiceList />
    </>
  );
}
