"use client";

import {ChangeEvent, type FC, useState} from 'react';
import {IUserProfile} from "@/types/user";
import {Form, FormControl, FormField, FormItem, FormLabel} from "@/components/ui/form";
import {useForm} from "react-hook-form";
import * as z from "zod"
import {zodResolver} from "@hookform/resolvers/zod";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import Image from "next/image";
import {Textarea} from "@/components/ui/textarea";
import {isBase64Image} from "@/lib/utils";
import {useUploadThing} from "@/lib/uploadthing";

interface AccountProfileProps {
    btnTitle: string;
    user: IUserProfile;
}

const formSchema = z.object({
    profile_photo: z.string().url().nonempty(),
    name: z.string().min(3).max(30),
    username: z.string().min(3).max(30),
    bio: z.string().min(3).max(100),
});

const AccountProfile: FC<AccountProfileProps> = ({user, btnTitle}) => {
    const [files, setFiles] = useState<File[]>([]);
    const {startUpload} = useUploadThing("media");

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            profile_photo: user.imageUrl || "",
            name: user.name || "",
            username: user.username || "",
            bio: user.bio || "",
        },
    });

    const handleImage = (e: ChangeEvent<HTMLInputElement>, fieldChange: (value: string) => void): void => {
        e.preventDefault();

        const fileReader: FileReader = new FileReader();

        if (e.target.files && e.target.files.length > 0) {
            const file: File = e.target.files[0];

            setFiles(Array.from(e.target.files));

            if (!file.type.includes('image')) return;

            fileReader.onload = async (event: ProgressEvent<FileReader>): Promise<void> => {
                const imageDataUrl: string = event.target?.result?.toString() || '';

                fieldChange(imageDataUrl);
            }
            fileReader.readAsDataURL(file);
        }
    };

    const onSubmit = async (values: z.infer<typeof formSchema>): Promise<void> => {
        const blob: string = values.profile_photo;
        const hasImageChanged: boolean = isBase64Image(blob);

        if (hasImageChanged) {
            const imgRes = await startUpload(files);

            if (imgRes && imgRes[0].fileUrl) {
                values.profile_photo = imgRes[0].fileUrl;
            }
        }

        //todo
    };

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="flex flex-col justify-start gap-10"
            >
                <FormField
                    control={form.control}
                    name="profile_photo"
                    render={({ field }: any) => (
                        <FormItem className="flex items-center gap-4">
                            <FormLabel className="flex h-24 w-24 items-center justify-center rounded-full bg-neutral-900">
                                {field.value ? (
                                    <Image src={field.value} alt="profile photo" width={96} height={96} priority
                                        className="rounded-full object-contain"
                                    />
                                ) : (
                                    <Image src="/profile.svg" alt="profile photo" width={24} height={24}
                                           className="object-contain"
                                    />
                                )}
                            </FormLabel>
                            <FormControl className="flex-1 font-semibold text-gray-200">
                                <Input type="file" accept="image/*" placeholder="Upload a photo"
                                       className="cursor-pointer border-none bg-transparent outline-none file:text-blue-500"
                                       onChange={(e) => handleImage(e, field.onChange)}
                                />
                            </FormControl>
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }: any) => (
                        <FormItem className="flex flex-col items-start gap-3 w-full">
                            <FormLabel className="font-semibold text-white">
                                Name
                            </FormLabel>
                            <FormControl className="flex-1 font-semibold text-gray-200">
                                <Input type="text"
                                       className="bg-neutral-600 border-none outline-none text-white
                                        focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0"
                                       {...field}
                                />
                            </FormControl>
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="username"
                    render={({ field }: any) => (
                        <FormItem className="flex flex-col items-start gap-3 w-full">
                            <FormLabel className="font-semibold text-white">
                                Username
                            </FormLabel>
                            <FormControl className="flex-1 font-semibold text-gray-200">
                                <Input type="text"
                                       className="bg-neutral-600 border-none outline-none text-white
                                        focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0"
                                       {...field}
                                />
                            </FormControl>
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="bio"
                    render={({ field }: any) => (
                        <FormItem className="flex flex-col items-start gap-3 w-full">
                            <FormLabel className="font-semibold text-white">
                                Bio
                            </FormLabel>
                            <FormControl className="flex-1 font-semibold text-gray-200">
                                <Textarea
                                    rows={10}
                                    className="bg-neutral-600 border-none outline-none text-white
                                        focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0"
                                    {...field}
                                />
                            </FormControl>
                        </FormItem>
                    )}
                />
                <Button type="submit" className="bg-purple-500">Submit</Button>
            </form>
        </Form>
    );
};

export default AccountProfile;
