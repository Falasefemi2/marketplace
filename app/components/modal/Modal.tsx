"use client";


import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

import React from "react";
import MyButton from "../MyButton";

interface ModalProps {
    title?: string;
    body?: string;
}


const Modal: React.FC<ModalProps> = ({ title, body }) => {
    return (
        <Dialog>
            <DialogTrigger>Open</DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle className="text-center">{title}</DialogTitle>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label>Name</Label>
                        <Input className="col-span-3" />
                    </div>
                </div>
                <DialogDescription>
                    {body}
                </DialogDescription>
                <DialogFooter>
                    <MyButton />
                </DialogFooter>
            </DialogContent>
        </Dialog>

    );
}

export default Modal;
