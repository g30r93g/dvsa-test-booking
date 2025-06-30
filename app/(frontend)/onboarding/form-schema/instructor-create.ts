import { z } from "zod";

const instructorCreateFormSchema = z.object({
    adiNumber: z.string().min(1, "ADI Number is required"),
    name: z.string().min(1, "Name is required"),
    email: z.string().email("Invalid email address").min(1, "Email is required"),
    phone: z.string().min(1, "Phone number is required"),
});

export {
    instructorCreateFormSchema,
}
