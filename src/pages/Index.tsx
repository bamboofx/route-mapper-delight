import React, { useState } from "react";
import AddressInput from "@/components/AddressInput";
import RouteInfo from "@/components/RouteInfo";
import { MoreVertical } from "lucide-react";

const Index = () => {
  const [startAddress, setStartAddress] = useState("");
  const [endAddress, setEndAddress] = useState("");

  return (
    <div className="min-h-screen bg-white">
      <div className="container max-w-2xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold mb-2">Điểm bắt đầu:</h2>
              <AddressInput
                value={startAddress}
                onChange={setStartAddress}
                placeholder="38 Hoàng trọng mậu, Tân hưng, Quận.."
              />
            </div>

            <div className="flex justify-center">
              <MoreVertical className="text-gray-400" />
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-2">Điểm đến:</h2>
              <AddressInput
                value={endAddress}
                onChange={setEndAddress}
                placeholder="124 Nguyễn Văn Trỗi, Quận 3"
              />
            </div>
          </div>

          {(startAddress || endAddress) && (
            <div>
              <h2 className="text-2xl font-bold mb-4">Thông tin đoạn đường:</h2>
              <RouteInfo
                distance="15 km"
                duration="0 giờ 56 phút 25 giây"
                details="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Index;