import React from 'react';

export const LoadingSpinner: React.FC = () => {
  return (
    <div className="flex items-center justify-center py-12">
      <div className="h-10 w-10 animate-spin rounded-full border-4 border-primary-200 border-t-primary-600"></div>
    </div>
  );
};

export const SkeletonCard: React.FC = () => {
  return (
    <div className="overflow-hidden rounded-2xl border border-warm-200 bg-white p-6 shadow-sm">
      <div className="shimmer h-48 w-full rounded-xl bg-warm-100 mb-4"></div>
      <div className="shimmer h-6 w-2/3 rounded bg-warm-100 mb-2"></div>
      <div className="shimmer h-4 w-full rounded bg-warm-100 mb-1.5"></div>
      <div className="shimmer h-4 w-5/6 rounded bg-warm-100"></div>
    </div>
  );
};

export const SkeletonList: React.FC<{ count?: number }> = ({ count = 3 }) => {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: count }).map((_, i) => (
        <SkeletonCard key={i} />
      ))}
    </div>
  );
};
