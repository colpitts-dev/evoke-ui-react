import React, { FC, HTMLAttributes, ReactChild } from 'react';
import './Heading.styles.css';

type HeadingLevels = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  children?: ReactChild;
  level?: HeadingLevels;
}

/**
 * Heading component
 */
export const Heading: FC<HeadingProps> = ({
  level = 'h2',
  className,
  children,
  ...props
}) => {
  const Component = level as HeadingLevels;
  return (
    <Component className={`${level} ${className}`} {...props}>
      {children}
    </Component>
  );
};
