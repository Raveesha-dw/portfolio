import { cn } from "@/lib/utils";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "mx-auto grid max-w-[1400px] grid-cols-1 gap-5 md:auto-rows-[14em] md:grid-cols-6",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  id,
  img,  
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  id: number;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  return (
    <div
      className={cn(
        "group/bento shadow-input row-span-1 flex flex-col relative justify-between space-y-4 rounded-3xl border bg-white p-4 transition duration-200 hover:shadow-xl dark:border-white/[0.2] dark:bg-black dark:shadow-none",
        className,
      )}
      style={{
       background: '#01052e',
      backgroundColor: 'linear-gradient(90deg,rgba(1, 5, 46, 1) 0%, rgba(42, 60, 84, 1) 50%, rgba(108, 158, 204, 1) 100%)',
      }}
    >

      <div className={`${id === 6} && 'flex justify-center h-full'`}>
        <div className="w-full h-full absolute">
        {img && (
          <img
          src={img}
          alt={img}
          className={cn(imgClassName)} />
        )}
        </div>

      </div>
      {/* {header} */}
      <div className="transition duration-200 group-hover/bento:translate-x-2">
        {/* {icon} */}
        <div className="mt-2 mb-2 font-sans font-bold text-neutral-600 dark:text-neutral-200">
          {title}
        </div>
        <div className="font-sans text-xs font-normal text-neutral-600 dark:text-neutral-300">
          {description}
        </div>
      </div>
    </div>
  );
};
