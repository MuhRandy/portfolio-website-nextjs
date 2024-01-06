import { cn } from '@/lib/utils';
import { ClassValue } from 'clsx';
import { ReactNode } from 'react';

type SectionProps = {
  children: ReactNode;
  bgColor?: 'white' | 'slate';
  className?: ClassValue;
};

type H1Props = Omit<SectionProps, 'bgColor'>;

type TextProps = H1Props;

function Section({ children, bgColor = 'white', className }: SectionProps) {
  return (
    <section
      className={cn('flex min-h-[80dvh] items-center justify-center py-10', {
        'bg-primary-foreground': bgColor === 'slate',
      })}
    >
      <div
        className={cn(
          'flex flex-col justify-center items-center max-w-[90vw] lg:max-w-[80vw]',
          className
        )}
      >
        {children}
      </div>
    </section>
  );
}

function H1({ children, className }: H1Props) {
  return (
    <h1 className={cn('text-4xl font-bold self-start', className)}>
      {children}
    </h1>
  );
}

function Text({ children, className }: TextProps) {
  return <p className={cn('text-justify', className)}>{children}</p>;
}

Section.H1 = H1;
Section.Text = Text;

export default Section;
