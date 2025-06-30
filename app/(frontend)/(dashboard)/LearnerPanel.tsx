import LinkedADI from "@/components/learner/dashboard/linked-adi";
import TestDetails from "@/components/learner/dashboard/test-details";

export default async function LearnerPanel() {
    return (
        <>
            <TestDetails />
            <LinkedADI />
        </>
    );
}