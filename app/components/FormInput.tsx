"use client";

import { DollarSign } from "lucide-react";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface InputProps {
    id: string;
    label: string;
    type?: string;
    disabled?: boolean;
    formatPrice?: boolean;
    required?: boolean;
    register: UseFormRegister<FieldValues>;
    errors: FieldErrors;
}

const nairaFormatter = new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
});

const FormInput: React.FC<InputProps> = ({ id, label, type = "text", disabled, formatPrice, register, required, errors }) => {
    return (
        <div className="w-full relative">
            {formatPrice && (
                <DollarSign className="text-neutral-700 absolute top-5 left-2" />
            )}
            <Input
                id={id}
                disabled={disabled}
                {...register(id, { required })}
                placeholder=" "
                type={type}
                className={`
       peer
    
       p-4
       pt-6 
       font-light 
       transition
       disabled:opacity-70
       disabled:cursor-not-allowed
       ${formatPrice ? 'pl-9' : 'pl-4'}
       ${errors[id] ? 'border-rose-500' : ''}
       ${errors[id] ? 'focus:border-rose-500' : ''}

   `}
            />
            <Label

                className={`
          absolute 
          text-md
          duration-150 
          transform 
          -translate-y-3 
          top-5 
          z-10 
          origin-[0] 
          ${formatPrice ? 'left-9' : 'left-4'}
          peer-placeholder-shown:scale-100 
          peer-placeholder-shown:translate-y-0 
          peer-focus:scale-75
          peer-focus:-translate-y-4
          ${errors[id] ? '' : ''}
        `}>{label}</Label>
        </div>
    );
}

export default FormInput;