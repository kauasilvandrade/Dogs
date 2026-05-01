type Props = Omit<React.ComponentProps<"input">, "value" | "onChange"> & {
  label: string;
  name: string;
  value: string;
  error?: string | null;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: () => void;
};

export function Input({
  label,
  name,
  value,
  onChange,
  error,
  onBlur,
  ...rest
}: Props) {
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
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        className="border border-[#eee] block w-full text-base p-[.8rem] bg-[#eee] transition outline-none hover:bg-white hover:shadow hover:border-[#fb1]"
      />
      {error && (
        <p className="text-[#f31] text-[0.85rem] mt-[0.25rem]">{error}</p>
      )}
    </div>
  );
}
