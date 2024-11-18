import React, { useState } from "react";
import AddressInput from "@/components/AddressInput";
import RouteInfo from "@/components/RouteInfo";
import { ArrowRight } from "lucide-react";

const Index = () => {
  const [startAddress, setStartAddress] = useState("");
  const [endAddress, setEndAddress] = useState("");

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container max-w-2xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <div className="space-y-6">
              <AddressInput
                label="Starting Point"
                value={startAddress}
                onChange={setStartAddress}
                placeholder="Enter starting address"
                icon="start"
              />
              <div className="relative">
                <div className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="bg-white p-2 rounded-full border border-gray-200">
                    <ArrowRight className="h-5 w-5 text-primary" />
                  </div>
                </div>
                <hr className="border-gray-200" />
              </div>
              <AddressInput
                label="Destination"
                value={endAddress}
                onChange={setEndAddress}
                placeholder="Enter destination address"
              />
            </div>
          </div>

          {(startAddress || endAddress) && (
            <RouteInfo
              distance="15 km"
              duration="56 minutes"
              details="This route includes main roads and highways for optimal travel time."
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Index;