import { getUserRole } from '@/lib/cache-fns';
import LearnerPanel from "./LearnerPanel";
import InstructorPanel from "./InstructorPanel";

export default async function DashboardPage() {
    const userType = await getUserRole();

    switch (userType) {
        case "learner":
            return <LearnerPanel />
        case "instructor":
            return <InstructorPanel />
        default:
            return <div>User role not found.</div>;
    }
}