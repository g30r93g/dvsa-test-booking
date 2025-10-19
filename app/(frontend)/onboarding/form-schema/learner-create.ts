import { z } from "zod";

const learnerCreateFormSchema = z.object({
    drivingLicenceNumber: z.string().min(1, "Driving Licence Number is required"),
    theoryTestNumber: z.string().optional(),
    name: z.string().min(1, "Name is required"),
    email: z.string().email("Invalid email address").min(1, "Email is required"),
    phone: z.string().min(1, "Phone number is required"),
});

export {
    learnerCreateFormSchema
}
