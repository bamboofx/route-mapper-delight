import React from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

interface AddressInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
}

const AddressInput = ({ value, onChange, placeholder }: AddressInputProps) => {
  return (
    <div className="relative">
      <Input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="pl-4 pr-12 py-3 w-full text-lg rounded-full border-2 border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
      />
      <div className="absolute right-4 top-1/2 -translate-y-1/2">
        <Search className="h-6 w-6 text-gray-400" />
      </div>
    </div>
  );
};

export default AddressInput;