import { cn } from "@/lib/utils";
import { BackgroundGradientAnimation } from "./GradientBG";
import { div } from "motion/react-client";
import { GlobeDemo } from "./GridGlobe";

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
      //  background: '#01052e',
      // backgroundColor: 'linear-gradient(90deg,rgba(1, 5, 46, 1) 0%, rgba(42, 60, 84, 1) 50%, rgba(108, 158, 204, 1) 100%)',
      background: 'rgb(4,7,29)',
      backgroundColor: 'linear-gradient(90deg, rgba(42, 99, 140, 1) 0%, rgba(28, 32, 77, 1) 51%, rgba(20, 4, 69, 1) 100%)'
      }}
    >

      <div className={`${id === 6} && 'flex justify-center h-full'`}>
        <div className="w-full h-full absolute">
        {img && (
          <img
          src={img}
          alt={img}
          className={cn(imgClassName, 'object-cover', 'object-center')} />
        )}
        </div>

        <div className={`absolute right-0 -bottom-5 ${id===5 && 'w-full opacity-80'}`}>
          {spareImg && (
            <img
            src={spareImg}
            alt={spareImg}
            className={'object-center, object-cover w-full h-full'}
            />
          )}
  
        </div>

       {id === 6 && (
          <div className="absolute inset-0 rounded-3xl overflow-hidden">
          <BackgroundGradientAnimation
          >
            <div className="absolute z-50 flex items-center justify-center text-white font-bold"/>
          </BackgroundGradientAnimation>
          </div>
            )}
        <div className={cn(
            titleClassName, 'group-hover/bento:translate-x-2 transition duration-200 relative md:h-full lg:p-10 min-h-40 flex flex-col px-5 p-5'
          )}>
            <div className="font-sans text-sm font-extralight text-[#c1c2d3] md:text-xs lg:text-base z-10 dark:text-neutral-300">
            {description}
            </div>
          <div className="mb-2 font-sans font-bold text-md lg:text-2xl max-w-96 z-10">
          {title}
          </div>
        </div>

        {id === 2 && <GlobeDemo/>}


      </div>


    
      {/* <div className="transition duration-200 group-hover/bento:translate-x-2">
        <div className="mt-2 mb-2 font-sans font-bold text-neutral-600 dark:text-neutral-200">
          {title}
        </div>
       
      </div> */}

       
    </div>
  );
};
