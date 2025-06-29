
import { Button } from "@/components/ui/button";
import { LucideIcon } from "lucide-react";

interface Service {
  id: string;
  title: string;
  icon: LucideIcon;
}

interface ServiceQuickNavProps {
  services: Service[];
  onScrollToService: (serviceId: string) => void;
}

export const ServiceQuickNav = ({ services, onScrollToService }: ServiceQuickNavProps) => {
  return (
    <div className="sticky top-20 bg-white/95 backdrop-blur-sm border-b border-gray-200 py-4 mb-16 z-40">
      <div className="overflow-x-auto">
        <div className="flex gap-2 md:gap-4 min-w-max px-4 md:px-0 md:justify-center">
          {services.map((service) => (
            <Button
              key={service.id}
              variant="outline"
              onClick={() => onScrollToService(service.id)}
              className="border-purple-200 text-purple-700 hover:bg-purple-50 whitespace-nowrap text-xs md:text-sm px-2 md:px-4 py-1 md:py-2 flex-shrink-0"
            >
              {service.title}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};
