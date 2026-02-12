import { useState, useEffect } from "react";

const Skeleton = ({ className = "", ...props }) => {
  return (
    <div
      className={`animate-pulse bg-gradient-to-r from-zinc-800/50 via-zinc-700/30 to-zinc-800/50 bg-[length:200%_100%] animate-shimmer rounded ${className}`}
      {...props}
    />
  );
};

const PageSkeleton = () => {
  return (
    <div className="min-h-screen pt-24">
      {/* Hero Skeleton */}
      <div className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
              <Skeleton className="h-4 w-28 rounded-full" />
              <Skeleton className="h-12 w-3/4" />
              <Skeleton className="h-12 w-1/2" />
              <div className="space-y-2 mt-6">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-5/6" />
                <Skeleton className="h-4 w-4/6" />
              </div>
              <div className="flex gap-4 mt-8">
                <Skeleton className="h-12 w-36 rounded-full" />
                <Skeleton className="h-12 w-28 rounded-full" />
              </div>
            </div>
            <Skeleton className="aspect-[4/3] rounded-xl hidden lg:block" />
          </div>
        </div>
      </div>
      
      {/* Stats Skeleton */}
      <div className="py-12 border-y border-zinc-800/30">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="text-center">
                <Skeleton className="h-10 w-20 mx-auto mb-2" />
                <Skeleton className="h-4 w-24 mx-auto" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Cards Skeleton */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-12">
            <Skeleton className="h-4 w-24 mx-auto mb-4 rounded-full" />
            <Skeleton className="h-10 w-64 mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="bg-zinc-900/30 border border-zinc-800/30 rounded-xl p-6">
                <Skeleton className="w-12 h-12 rounded-lg mb-4" />
                <Skeleton className="h-5 w-3/4 mb-3" />
                <Skeleton className="h-3 w-full" />
                <Skeleton className="h-3 w-5/6 mt-2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export { Skeleton, PageSkeleton };
