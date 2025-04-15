"use client";

import InterviewScheduleUI from "@/components/InterviewScheduleUI";
import LoaderUI from "@/components/LoaderUI";
import { useUserRole } from "@/hooks/useUserRole";
import { useRouter } from "next/navigation";

function SchedulePage() {
  const router = useRouter();

  const { isInterviewer, isLoading } = useUserRole();

  if (isLoading) return <LoaderUI />;
  if (!isInterviewer) return router.push("/dashboard");

  return <InterviewScheduleUI />;
}
export default SchedulePage;