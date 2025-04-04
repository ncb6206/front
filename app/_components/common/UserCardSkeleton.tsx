import { Skeleton } from '@/components/ui/skeleton';

const UserCardSkeleton = () => {
  return (
    <div className="flex h-fit w-fit flex-row items-start justify-center gap-6 rounded-lg border border-bolder px-6 py-8 md:max-w-48 md:flex-col">
      <div className="flex items-center justify-between gap-6">
        <Skeleton className="h-10 w-10 rounded-full" />
        <div className="flex flex-col gap-2">
          <Skeleton className="h-4 w-12" />
          <Skeleton className="h-4 w-14" />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <Skeleton className="h-4 w-16" />
        <Skeleton className="h-4 w-10" />
      </div>
    </div>
  );
};

export default UserCardSkeleton;
