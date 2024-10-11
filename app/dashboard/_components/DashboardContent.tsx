import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Plus, Upload, } from "lucide-react"

export default function DashboardContent() {
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
                                <form className="space-y-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="name">Product Name</Label>
                                        <Input
                                            id="name"
                                            name="name"

                                            required
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="price">Price</Label>
                                        <Input
                                            id="price"
                                            name="price"
                                            type="number"

                                            required
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="description">Description</Label>
                                        <Textarea
                                            id="description"
                                            name="description"

                                            required
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="image">Product Image</Label>
                                        <div className="flex items-center space-x-2">
                                            <Input
                                                id="image"
                                                name="image"
                                                type="file"
                                                accept="image/*"
                                                className="hidden"

                                            />
                                            <Button
                                                type="button"
                                                variant="outline"

                                            >
                                                <Upload className="mr-2 h-4 w-4" />
                                                Upload Image
                                            </Button>
                                            <span className="text-sm text-muted-foreground">

                                            </span>
                                        </div>
                                    </div>

                                    <div className="sm:flex sm:space-x-4 sm:justify-end sm:items-center space-y-4 sm:space-y-0">
                                        <Button type="button" className="w-full sm:w-auto">
                                            Generate
                                        </Button>
                                        {/* {aiSuggestion.title && (
        <Card className="mt-4">
            <CardHeader>
                <CardTitle>AI Suggestions</CardTitle>
            </CardHeader>
            <CardContent>
                <p><strong>Title:</strong> {aiSuggestion.title}</p>
                <p><strong>Description:</strong> {aiSuggestion.description}</p>
            </CardContent>
        </Card>
    )} */}
                                        <Button type="submit" className="w-full sm:w-auto flex items-center justify-center">
                                            <Plus className="mr-2 h-4 w-4" /> Add Product
                                        </Button>
                                    </div>

                                </form>
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