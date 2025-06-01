import React from "react";

function Input({
    Icon,
    error,
    register,
    type,
    name,
    placeholder,
    validationObject,
    style,
    label,
    ...rest
}) {
    return (
        <div
            className={`w-full bg-neutral-200 rounded-md p-3 flex *:self-center mb-2 ${
                error ? "outline outline-1 outline-red-600 bg-transparent" : ""
            } ${style}`}
        >
            {Icon && (
                <Icon style={error ? "text-red-600" : "text-neutral-600"} />
            )}
            {label && <label className="text-nowrap">{label}</label>}
            <input
                type={type}
                autoComplete="off"
                className="h-8 w-full bg-transparent pl-2 outline-none "
                placeholder={placeholder}
                {...register(name, validationObject)}
                {...rest}
            />
        </div>
    );
}

export default Input;
