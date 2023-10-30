import { Skeleton } from 'moti/skeleton';
import { MotiSkeletonProps } from 'moti/build/skeleton/types';

interface LoaderProps extends Omit<MotiSkeletonProps, 'Gradient'> {
  isLoading?: boolean
}

export default function Loader({ isLoading = false, children, ...props }: LoaderProps) {
  return (
    <Skeleton show={isLoading} {...props} >
      {children}
    </Skeleton>
  )
}