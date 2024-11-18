import React from "react";

interface RouteInfoProps {
  distance: string;
  duration: string;
  details?: string;
}

const RouteInfo = ({ distance, duration, details }: RouteInfoProps) => {
  return (
    <div className="space-y-4">
      <div className="text-xl">
        <span className="font-medium">{distance}</span>
        <span className="mx-2">-</span>
        <span className="text-gray-700">{duration}</span>
      </div>
      {details && (
        <p className="text-gray-600 leading-relaxed">{details}</p>
      )}
    </div>
  );
};

export default RouteInfo;