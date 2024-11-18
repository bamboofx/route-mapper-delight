import React from "react";

interface RouteInfoProps {
  distance: string;
  duration: string;
  details?: string;
}

const RouteInfo = ({ distance, duration, details }: RouteInfoProps) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <div className="space-y-1">
            <h3 className="text-lg font-semibold text-gray-900">Route Information</h3>
            <div className="flex items-center space-x-4">
              <span className="text-primary font-medium">{distance}</span>
              <span className="text-gray-400">•</span>
              <span className="text-gray-600">{duration}</span>
            </div>
          </div>
        </div>
        {details && (
          <p className="text-gray-600 text-sm leading-relaxed">{details}</p>
        )}
      </div>
    </div>
  );
};

export default RouteInfo;