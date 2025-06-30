import { getUserRole } from "@/lib/cache-fns";

export default function LinkLearnerAdiPage() {
    // Determine if the user is a learner or instructor
    // If learner, show the linked ADI component
    // If instructor, show the linked students component
    const userType = getUserRole();

    if (userType === "learner") {
        return <LinkedADI />;
    }

    return <LinkedStudents />;
}