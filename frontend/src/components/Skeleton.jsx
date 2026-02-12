import { useState, useEffect } from "react";

const Skeleton = ({ className = "", ...props }) => {
  return (
    <div
      className={`animate-pulse bg-zinc-800/50 rounded ${className}`}
      {...props}
    />
  );
};

const PageSkeleton = () => {
  return (
    <div className="min-h-screen pt-24 animate-fade-in">
      {/* Hero Skeleton */}
      <div className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
              <Skeleton className="h-4 w-32" />
              <Skeleton className="h-14 w-3/4" />
              <Skeleton className="h-14 w-1/2" />
              <Skeleton className="h-4 w-full mt-4" />
              <Skeleton className="h-4 w-5/6" />
              <Skeleton className="h-4 w-4/6" />
              <div className="flex gap-4 mt-8">
                <Skeleton className="h-12 w-40 rounded-full" />
                <Skeleton className="h-12 w-32 rounded-full" />
              </div>
            </div>
            <Skeleton className="aspect-[4/3] rounded-xl" />
          </div>
        </div>
      </div>
      
      {/* Cards Skeleton */}
      <div className="py-16 bg-zinc-900/30">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-zinc-900/50 border border-zinc-800/50 rounded-xl p-6">
                <Skeleton className="w-12 h-12 rounded-lg mb-4" />
                <Skeleton className="h-6 w-3/4 mb-3" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-5/6 mt-2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const usePageLoading = (delay = 300) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return isLoading;
};

export { Skeleton, PageSkeleton, usePageLoading };
