import { View, Text } from 'react-native';
import { Skeleton } from 'moti/skeleton';
import { ReactChild, ReactNode } from 'react';
import { MotiSkeletonProps } from 'moti/build/skeleton/types';

interface LoaderProps extends Omit<MotiSkeletonProps, 'Gradient'> {
  isLoading: boolean
}

export default function Loader({ isLoading, children, ...props }: LoaderProps) {
  return (
    <Skeleton show={isLoading} {...props}>
      {children}
    </Skeleton>
  )
}