type Props = {
    name: string;
    type?: string;
    placeholder?: string;
    value: string;
    onChange: any;
    onBlur: any;
    error?: string;
    icon?: React.ReactNode;
};

const BaseFormField = ({
                           name,
                           type = "text",
                           placeholder,
                           value,
                           onChange,
                           onBlur,
                           error,
                           icon,
                       }: Props) => {
    return (
        <div className="w-full">

            <div className="relative">
                <input
                    name={name}
                    type={type}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    onBlur={onBlur}
                    className="w-full pl-3 pr-10 py-2 border border-gray-300 focus:ring-2 focus:ring-black focus:outline-none"
                />

                <div className="absolute inset-y-0 right-3 flex items-center text-gray-400">
                    {icon}
                </div>
            </div>

            {error && (
                <p className="text-red-500 text-sm mt-1">{error}</p>
            )}
        </div>
    );
};

export default BaseFormField;