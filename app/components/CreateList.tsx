"use client";

import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import ImageUpload from "./ImageUpload";
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { categories } from "./Categories";
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { useState } from "react";
import axios from "axios";
import { useToast } from "@/components/ui/use-toast"
import { useRouter } from "next/navigation";
import { ToastAction } from "@/components/ui/toast"
import FormInput from "./FormInput";


const CreateList = () => {
    const router = useRouter();
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
    const watchedCategory = watch("category");
    const watchedDescription = watch("description");


    const setCustomValue = (id: string, value: any) => {
        setValue(id, value, {
            shouldDirty: true,
            shouldTouch: true,
            shouldValidate: true
        })
    }

    const handleCategoryChange = (value: string) => {
        setCustomValue("category", value); // Update the category field value
    };

    const [isLoading, setIsloading] = useState(false);
    const { toast } = useToast()


    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setIsloading(true);

        axios.post('/api/listings', data)
            .then(() => {
                toast({
                    description: "Listing Created",
                })
                router.refresh();
                reset();
            })
            .catch(() => {
                toast({
                    variant: "destructive",
                    description: "There was a problem with your request.",
                    action: <ToastAction altText="Try again">Try again</ToastAction>,
                });
                setIsloading(false);
            })
    }


    return (
        <div className=" grid grid-cols-1 gap-y-4">
            <ImageUpload
                value={imageSrc}
                onChange={(value) => setCustomValue('imageSrc', value)}
            />
            <FormInput
                id="title"
                label="Title"
                disabled={isLoading}
                register={register}
                errors={errors}
                required
            />
            <FormInput
                id="price"
                label="Price"
                formatPrice
                type="number"
                disabled={isLoading}
                register={register}
                errors={errors}
                required
            />
            <FormInput
                id="condition"
                label="Condition"
                disabled={isLoading}
                register={register}
                errors={errors}
                required
            />
            <Label htmlFor="optional">Optional</Label>
            <Select onValueChange={handleCategoryChange} value={watchedCategory}>
                <SelectTrigger className="">
                    <SelectValue placeholder="Categories" />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        <SelectLabel>Categories</SelectLabel>
                        {categories.map((item) => (
                            <SelectItem key={item.label} value={item.label}>
                                {item.label}
                            </SelectItem>
                        ))}
                    </SelectGroup>
                </SelectContent>
            </Select>
            <Textarea placeholder="Description."
                {...register("description")}
                value={watchedDescription}
            />
            <Button onClick={handleSubmit(onSubmit)}
            >Publish</Button>
        </div>
    );
}

export default CreateList;