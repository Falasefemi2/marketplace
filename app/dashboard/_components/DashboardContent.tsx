'use client'

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    //   FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Plus, Upload } from "lucide-react"
import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
// import { Label } from "@/components/ui/label"


const formSchema = z.object({
    name: z.string().min(2, {
        message: "Product name must be at least 2 characters.",
    }),
    price: z.number().min(0, {
        message: "Price must be a positive number.",
    }),
    description: z.string().min(10, {
        message: "Description must be at least 10 characters.",
    }),
    image: z.instanceof(File).optional(),
})



export default function DashboardContent() {
    const [fileName, setFileName] = useState<string | null>(null)
    const [aiSuggestion, setAiSuggestion] = useState({ title: '', description: '' })


    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            price: 0,
            description: "",
        },
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values)
    }

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]
        if (file) {
            setFileName(file.name)
            form.setValue("image", file)
        }
    }

    const handleGenerate = () => {
        // Simulating AI suggestion generation
        setAiSuggestion({
            title: "AI Generated Product Name",
            description: "This is an AI-generated description for your product."
        })
    }


    return (
        <>
            <main className="flex-1 overflow-auto p-4 lg:p-6">
                <Tabs defaultValue="upload" className="space-y-4">
                    <TabsList className="w-full justify-start overflow-x-auto">
                        <TabsTrigger value="upload">Upload Product</TabsTrigger>
                        <TabsTrigger value="manage">Manage Products</TabsTrigger>
                    </TabsList>
                    <TabsContent value="upload">
                        <Card>
                            <CardHeader>
                                <CardTitle>Upload New Product</CardTitle>
                                <CardDescription>Add a new digital product to your marketplace</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <Form {...form}>
                                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                                        <FormField
                                            control={form.control}
                                            name="name"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>Product Name</FormLabel>
                                                    <FormControl>
                                                        <Input placeholder="Enter product name" {...field} />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={form.control}
                                            name="price"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>Price</FormLabel>
                                                    <FormControl>
                                                        <Input type="number" placeholder="Enter price" {...field} onChange={(e) => field.onChange(parseFloat(e.target.value))} />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={form.control}
                                            name="description"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>Description</FormLabel>
                                                    <FormControl>
                                                        <Textarea placeholder="Enter product description" {...field} />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={form.control}
                                            name="image"
                                            render={({ field: { ...field } }) => (
                                                <FormItem>
                                                    <FormLabel>Product Image</FormLabel>
                                                    <FormControl>
                                                        <div className="flex items-center space-x-2">
                                                            <Input
                                                                id="image"
                                                                type="file"
                                                                accept="image/*"
                                                                className="hidden"
                                                                onChange={(e) => {
                                                                    handleFileChange(e)
                                                                    field.onChange(e.target.files?.[0])
                                                                }}
                                                            />
                                                            <Button type="button" variant="outline" onClick={() => document.getElementById('image')?.click()}>
                                                                <Upload className="mr-2 h-4 w-4" />
                                                                Upload Image
                                                            </Button>
                                                            <span className="text-sm text-muted-foreground">
                                                                {fileName || "No file chosen"}
                                                            </span>
                                                        </div>
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                        <div className="sm:flex sm:space-x-4 sm:justify-end sm:items-center space-y-4 sm:space-y-0">
                                            <Button type="button" onClick={handleGenerate} className="w-full sm:w-auto">
                                                Generate
                                            </Button>
                                            <Button type="submit" className="w-full sm:w-auto flex items-center justify-center">
                                                <Plus className="mr-2 h-4 w-4" /> Add Product
                                            </Button>
                                        </div>
                                    </form>
                                    {aiSuggestion.title && (
                                        <Card className="mt-4">
                                            <CardHeader>
                                                <CardTitle>AI Suggestions</CardTitle>
                                            </CardHeader>
                                            <CardContent>
                                                <p><strong>Title:</strong> {aiSuggestion.title}</p>
                                                <p><strong>Description:</strong> {aiSuggestion.description}</p>
                                            </CardContent>
                                        </Card>
                                    )}
                                </Form>
                            </CardContent>
                        </Card>
                    </TabsContent>
                    <TabsContent value="manage">
                        <Card>
                            <CardHeader>
                                <CardTitle>Manage Products</CardTitle>
                                <CardDescription>View and manage your existing products</CardDescription>
                            </CardHeader>
                            <CardContent>
                                {/* <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                                        {products.map((product) => (
                                            <Card key={product.id}>
                                                <CardHeader>
                                                    <CardTitle>{product.name}</CardTitle>
                                                    <CardDescription>${product.price.toFixed(2)}</CardDescription>
                                                </CardHeader>
                                                <CardContent>
                                                    <p>Sales: {product.sales}</p>
                                                </CardContent>
                                                <CardFooter>
                                                    <Button variant="outline" className="w-full">Edit</Button>
                                                </CardFooter>
                                            </Card>
                                        ))}
                                    </div> */}
                            </CardContent>
                        </Card>
                    </TabsContent>
                </Tabs>
            </main>
        </>
    )
}