import React, { useState } from "react";
import { Search } from "lucide-react";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Input } from "@/components/ui/input";

interface AddressInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
}

const AddressInput = ({ value, onChange, placeholder }: AddressInputProps) => {
  const [open, setOpen] = useState(false);

  // Mock data for demonstration - replace with real data later
  const suggestions = [
    "38 hoàng trọng mậu, Phường Tân hưng, Quận 7, Hồ chí minh",
    "Hoàng trọng mậu, Quận bà chiểu Thành phố huế",
    "Hoàng trọng mậu, Thị xã bla bla, Thị Trấn gì đó, ở đâu đó xa xa",
    "Hoàng trọng mậu, Thị xã khác, Thị Trấn khác, ở đâu đó xa xa",
  ];

  return (
    <div className="relative">
      <div className="relative">
        <Input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="pl-4 pr-12 py-3 w-full text-lg rounded-full border-2 border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
          onClick={() => setOpen(true)}
        />
        <div className="absolute right-4 top-1/2 -translate-y-1/2">
          <Search className="h-6 w-6 text-gray-400" />
        </div>
      </div>

      {open && (
        <div className="absolute w-full mt-1 z-50">
          <Command className="rounded-lg border shadow-md">
            <CommandInput placeholder="Tìm kiếm địa chỉ..." />
            <CommandList>
              <CommandEmpty>Không tìm thấy địa chỉ</CommandEmpty>
              <CommandGroup>
                {suggestions
                  .filter((suggestion) =>
                    suggestion.toLowerCase().includes(value.toLowerCase())
                  )
                  .map((suggestion, index) => (
                    <CommandItem
                      key={index}
                      onSelect={() => {
                        onChange(suggestion);
                        setOpen(false);
                      }}
                      className="cursor-pointer"
                    >
                      <Search className="mr-2 h-4 w-4" />
                      <span>{suggestion}</span>
                    </CommandItem>
                  ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </div>
      )}
    </div>
  );
};

export default AddressInput;