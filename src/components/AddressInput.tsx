import React from "react";
import { Search, MapPin } from "lucide-react";
import { Input } from "@/components/ui/input";

interface AddressInputProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  icon?: "start" | "end";
}

const AddressInput = ({ label, value, onChange, placeholder, icon }: AddressInputProps) => {
  return (
    <div className="space-y-2">
      <label className="text-sm font-medium text-gray-700">{label}</label>
      <div className="relative">
        <div className="absolute left-3 top-1/2 -translate-y-1/2">
          {icon === "start" ? (
            <MapPin className="h-5 w-5 text-primary" />
          ) : (
            <Search className="h-5 w-5 text-gray-400" />
          )}
        </div>
        <Input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="pl-10 pr-4 py-2 w-full rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
        />
      </div>
    </div>
  );
};

export default AddressInput;