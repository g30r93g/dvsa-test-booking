"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage, FormDescription } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { z } from "zod";
import { instructorCreateFormSchema } from "./form-schema/instructor-create";
import { learnerCreateFormSchema } from "./form-schema/learner-create";
import { createInstructor } from "./actions/create-instructor";
import { useAuth } from "@clerk/nextjs";
import { createLearner } from "./actions/create-learner";
import { LoadingButton } from "@/components/ui/loading-button";

export function OnboardingForm() {
    const [role, setRole] = useState<string | null>(null);
    const { userId } = useAuth();

    // Instructor form
    const instructorForm = useForm<z.infer<typeof instructorCreateFormSchema>>({
        defaultValues: {
            adiNumber: "",
            name: "",
            email: "",
            phone: "",
        },
    });

    // Learner form
    const learnerForm = useForm<z.infer<typeof learnerCreateFormSchema>>({
        defaultValues: {
            drivingLicenceNumber: "",
            theoryTestNumber: "",
            name: "",
            email: "",
            phone: "",
        },
    });

    // Handlers (replace with actual submit logic)
    const onInstructorSubmit = (data: z.infer<typeof instructorCreateFormSchema>) => {
        if (!userId) {
            console.error("User ID is required to create an instructor");
            return;
        }

        // perform server action to save to db
        createInstructor({
            ...data,
            userId
        })
    };
    const onLearnerSubmit = (data: z.infer<typeof learnerCreateFormSchema>) => {
        if (!userId) {
            console.error("User ID is required to create a learner");
            return;
        }

        // perform server action to save to db
        createLearner({
            ...data,
            userId
        })
    };

    return (
        <div className="my-8 max-w-md mx-auto">
            <h1 className="text-3xl font-bold mb-6">Finish Setting Up Your Account</h1>
            {role && (
                <>
                    <div className="flex flex-row gap-4 items-center justify-between">
                        <h3>{role === "instructor" ? "Approved Driving Instructor" : "Learner"}</h3>
                        <Button variant="secondary" type="button" className="btn my-2" onClick={() => setRole(null)}>
                            Change Role
                        </Button>
                    </div>
                    <hr className="mb-4" />
                </>
            )}
            {!role && (
                <>
                <p>Select your role:</p>
                <div className="mt-2 grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                    <Button onClick={() => setRole("instructor")}>
                        Approved Driving Instructor
                    </Button>
                    <Button onClick={() => setRole("learner")}>
                        Learner
                    </Button>
                </div>
                </>
            )}
            {role === "instructor" && (
                <Form {...instructorForm}>
                    <form onSubmit={instructorForm.handleSubmit(onInstructorSubmit)} className="space-y-4">
                        <FormField name="adiNumber" control={instructorForm.control} render={({ field }) => (
                            <FormItem>
                                <FormLabel>ADI Number</FormLabel>
                                <FormControl><Input {...field} /></FormControl>
                                <FormMessage />
                            </FormItem>
                        )} />
                        <FormField name="name" control={instructorForm.control} render={({ field }) => (
                            <FormItem>
                                <FormLabel>Name</FormLabel>
                                <FormControl><Input {...field} /></FormControl>
                                <FormMessage />
                            </FormItem>
                        )} />
                        <FormField name="email" control={instructorForm.control} render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl><Input type="email" {...field} /></FormControl>
                                <FormMessage />
                            </FormItem>
                        )} />
                        <FormField name="phone" control={instructorForm.control} render={({ field }) => (
                            <FormItem>
                                <FormLabel>Phone</FormLabel>
                                <FormControl><Input {...field} /></FormControl>
                                <FormMessage />
                            </FormItem>
                        )} />
                        <LoadingButton 
                            loading={instructorForm.formState.isSubmitting} 
                            disabled={!instructorForm.formState.isValid || instructorForm.formState.isLoading} 
                            type="submit" 
                            className="btn w-full"
                        >
                            Submit
                        </LoadingButton>
                    </form>
                </Form>
            )}
            {role === "learner" && (
                <Form {...learnerForm}>
                    <form onSubmit={learnerForm.handleSubmit(onLearnerSubmit)} className="space-y-4">
                        <FormField name="drivingLicenceNumber" control={learnerForm.control} render={({ field }) => (
                            <FormItem>
                                <FormLabel>Driving Licence Number</FormLabel>
                                <FormControl><Input {...field} /></FormControl>
                                <FormDescription>This can be found on your driving licence.</FormDescription>
                                <FormMessage />
                            </FormItem>
                        )} />
                        <FormField name="theoryTestNumber" control={learnerForm.control} render={({ field }) => (
                            <FormItem>
                                <FormLabel>Theory Test Number</FormLabel>
                                <FormControl><Input {...field} /></FormControl>
                                <FormDescription>This is found on your theory test pass certificate.</FormDescription>
                                <FormMessage />
                            </FormItem>
                        )} />
                        <FormField name="name" control={learnerForm.control} render={({ field }) => (
                            <FormItem>
                                <FormLabel>Name</FormLabel>
                                <FormControl><Input {...field} /></FormControl>
                                <FormDescription>Enter your name as it appears on your driver's licence.</FormDescription>
                                <FormMessage />
                            </FormItem>
                        )} />
                        <FormField name="email" control={learnerForm.control} render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl><Input type="email" {...field} /></FormControl>
                                <FormMessage />
                            </FormItem>
                        )} />
                        <FormField name="phone" control={learnerForm.control} render={({ field }) => (
                            <FormItem>
                                <FormLabel>Phone</FormLabel>
                                <FormControl><Input {...field} /></FormControl>
                                <FormMessage />
                            </FormItem>
                        )} />
                        <LoadingButton
                            loading={learnerForm.formState.isSubmitting}
                            disabled={!learnerForm.formState.isValid || learnerForm.formState.isLoading}
                            type="submit"
                            className="btn w-full"
                        >
                            Submit
                        </LoadingButton>
                    </form>
                </Form>
            )}
        </div>
    );
}
