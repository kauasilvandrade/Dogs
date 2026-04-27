type Props = React.ComponentProps<"button"> & {
  children: string;
};

export function Button({ children, ...rest }: Props) {
  return (
    <button
      className="text-base cursor-pointer border-none rounded-[0.4rem] bg-[#fb1] text-[#764701] py-3 px-0.5 outline-none hover:shadow-[0_0_0_3px_#fea,0_0_0_4px_#fb1] focus-within:hover:shadow-[0_0_0_3px_#fea,0_0_0_4px_#fb1] transition min-w-32 disabled:opacity-[0.5] disabled:cursor-wait"
      style={{ fontFamily: "var(--font-sans)" }}
      {...rest}
    >
      {children}
    </button>
  );
}
