type Props = React.ComponentProps<"input"> & {
  label: string;
  name: string;
};

export function Input({ label, name, ...rest }: Props) {
  return (
    <div className="mb-4">
      <label htmlFor={name} className="block text-base/1 pb-2">
        {label}
      </label>
      <input
        type="text"
        id={name}
        name={name}
        {...rest}
        className="border border-[#eee] block w-full text-base p-[.8rem] bg-[#eee] transition outline-none hover:bg-white hover:shadow hover:border-[#fb1]"
      />
      <p className="text-[#f31] text-[0.85rem] mt-[0.25rem]">Error</p>
    </div>
  );
}
