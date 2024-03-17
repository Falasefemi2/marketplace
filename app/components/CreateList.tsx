"use client";

import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import ImageUpload from "./ImageUpload";


const CreateList = () => {
    const { register, handleSubmit, setValue, watch, formState: { errors }, reset } = useForm<FieldValues>({
        defaultValues: {
            title: "",
            description: "",
            imageSrc: "",
            category: "",
            condition: "",
            price: 1
        }
    });

    const imageSrc = watch('imageSrc');

    const setCustomValue = (id: string, value: any) => {
        setValue(id, value, {
            shouldDirty: true,
            shouldTouch: true,
            shouldValidate: true
        })
    }
    return (
        <div>
            <ImageUpload
                value={imageSrc}
                onChange={(value) => setCustomValue('imageSrc', value)}
            />
        </div>
    );
}

export default CreateList;