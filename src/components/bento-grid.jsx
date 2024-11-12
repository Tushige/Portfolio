import { cn } from "@/utils";

export const BentoGrid = ({
  className,
  children,
}) => {
  return (
    <div
      className={cn(
        "flex justify-center",
        className
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
  header,
  icon,
  list,
  footer
}) => {
  return (
    <div
      className={cn(
        "row-span-1 rounded-xl overflow-hidden group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none dark:bg-black dark:border-white/[0.2] bg-fuchsia-100/20 border border-transparent justify-start flex flex-col",
        "grid grid-rows-[250px_1fr] max-w-[300px]",
        className
      )}
    >
      {header}
      <div className="flex flex-col justify-between p-4 transition duration-200 group-hover/bento:translate-x-2">
        {icon}
        <div>
          <div className="font-sans font-bold text-neutral-600 dark:text-neutral-200">
            {title}
          </div>
          <div className="font-sans text-xs font-normal text-neutral-600 dark:text-neutral-300">
            {description}
          </div>
        </div>
        <div className={cn(
          "flex flex-col justify-between  row-span-1 rounded-xl overflow-hidden border border-transparent",
        )}>
          <ul className="flex flex-row flex-wrap gap-2">
            {
              list.map(item => (
                <span key={item} className="rounded-lg border-transparent bg-fuchsia-100 p-1 text-[10px] text-neutral-900 hover:bg-fuchsia-200/80">{item}</span>
              ))
            }
          </ul>
          {footer}
        </div>
      </div>
    </div>
  );
};